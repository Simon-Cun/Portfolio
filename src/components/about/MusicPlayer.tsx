"use client";
import Image from "next/image";
import { useEffect, useMemo, useRef, useState, useCallback } from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import {
  IoShuffleOutline,
  IoPlaySkipBackOutline,
  IoPlayCircleSharp,
  IoPauseCircleSharp,
  IoPlaySkipForwardOutline,
  IoRepeatOutline,
  IoVolumeHighOutline,
} from "react-icons/io5";
import { playlist, type Track } from "@/data/music";

const fmt = (sec: number) => {
  const m = Math.floor(sec / 60).toString();
  const s = Math.floor(sec % 60)
    .toString()
    .padStart(2, "0");
  return `${m}:${s}`;
};

const FAVS_KEY = "mp_favs_v1";

const MusicPlayer = () => {
  const shouldAutoPlayRef = useRef(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isShuffle, setIsShuffle] = useState(false);
  const [isRepeat, setIsRepeat] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const originalVolumeRef = useRef(0.7);
  const [volume, setVolume] = useState(originalVolumeRef.current);
  const [favorites, setFavorites] = useState<Set<string>>(new Set());
  const [durations, setDurations] = useState<Map<string, number>>(new Map());
  const toggleMute = () => {
    if (volume > 0) {
      originalVolumeRef.current = volume;
      setVolume(0);
    } else {
      setVolume(originalVolumeRef.current);
    }
  };
  const current = playlist[currentIndex];
  const isRepeatRef = useRef(isRepeat);
  useEffect(() => {
    isRepeatRef.current = isRepeat;
  }, [isRepeat]);
  useEffect(() => {
    if (!audioRef.current) audioRef.current = new Audio();
    const a = audioRef.current;

    const onTime = () => setCurrentTime(a.currentTime || 0);
    const onMeta = () =>
      setDuration(Number.isFinite(a.duration) ? a.duration : 0);
    const onEnd = () => {
      if (isRepeatRef.current) {
        a.currentTime = 0;
        a.play().catch(console.error);
        return;
      }
      handleNext();
    };

    a.addEventListener("timeupdate", onTime);
    a.addEventListener("loadedmetadata", onMeta);
    a.addEventListener("ended", onEnd);
    a.volume = volume;

    return () => {
      a.removeEventListener("timeupdate", onTime);
      a.removeEventListener("loadedmetadata", onMeta);
      a.removeEventListener("ended", onEnd);
    };
  });

  useEffect(() => {
    const a = audioRef.current!;
    a.src = current.src;

    const onLoaded = () => {
      setDuration(Number.isFinite(a.duration) ? a.duration : 0);
      setDurations((prev) => new Map(prev).set(current.id, a.duration || 0));
      setCurrentTime(0);

      if (shouldAutoPlayRef.current) {
        a.play().catch((err) => console.error("Play failed:", err));
        shouldAutoPlayRef.current = false;
      }
    };

    a.addEventListener("loadedmetadata", onLoaded, { once: true });
    a.load();
    return () => a.removeEventListener("loadedmetadata", onLoaded);
  }, [current.id, current.src]);

  useEffect(() => {
    const refs: HTMLAudioElement[] = [];

    playlist.forEach((t) => {
      if (durations.has(t.id)) return;

      const el = new Audio();
      el.addEventListener(
        "loadedmetadata",
        () => {
          if (Number.isFinite(el.duration)) {
            setDurations((prev) => {
              const next = new Map(prev);
              next.set(t.id, el.duration);
              return next;
            });
          }
        },
        { once: true },
      );
      el.src = t.src;
      el.load();
      refs.push(el);
    });

    return () => refs.forEach((el) => el.pause());
  }, [durations]);
  const togglePlay = useCallback(() => {
    const a = audioRef.current;
    if (!a) {
      console.error("Audio element not ready");
      return;
    }

    if (!isPlaying) {
      a.play()
        .then(() => setIsPlaying(true))
        .catch((err) => {
          console.error("Play failed:", err);
          setIsPlaying(false);
        });
    } else {
      a.pause();
      setIsPlaying(false);
    }
  }, [isPlaying]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = volume;
  }, [volume]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(FAVS_KEY);
      if (raw) setFavorites(new Set(JSON.parse(raw)));
    } catch (err) {
      console.error("Failed to load favorites from localStorage:", err);
    }
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem(FAVS_KEY, JSON.stringify([...favorites]));
    } catch (err) {
      console.error("Failed to save favorites to localStorage:", err);
    }
  }, [favorites]);
  const onSeek = useCallback(
    (v: number) => {
      const a = audioRef.current;
      if (!a) return;

      const max = duration || 0;
      const next = Math.max(0, Math.min(v, max));
      a.currentTime = next;
      setCurrentTime(next);
    },
    [duration],
  );

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.isContentEditable
      ) {
        return;
      }

      switch (e.code) {
        case "Space":
          e.preventDefault();
          togglePlay();
          break;
        case "ArrowRight":
          onSeek(currentTime + 5);
          break;
        case "ArrowLeft":
          onSeek(currentTime - 5);
          break;
        case "ArrowUp":
          setVolume((prev) => Math.min(prev + 0.05, 1));
          break;
        case "ArrowDown":
          setVolume((prev) => Math.min(prev - 0.05, 1));
          break;
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [currentTime, togglePlay, onSeek]);

  const handlePrev = () => {
    const a = audioRef.current!;
    if (a.currentTime > 3) {
      a.currentTime = 0;
      return;
    }
    shouldAutoPlayRef.current = true;
    setCurrentIndex((i) => (i - 1 + playlist.length) % playlist.length);
  };

  const pickShuffleIndex = () => {
    if (playlist.length <= 1) return currentIndex;
    let r = Math.floor(Math.random() * playlist.length);
    if (r === currentIndex) r = (r + 1) % playlist.length;
    return r;
  };

  const handleNext = () => {
    shouldAutoPlayRef.current = true;
    setCurrentIndex((i) =>
      isShuffle ? pickShuffleIndex() : (i + 1) % playlist.length,
    );
  };

  const toggleFavorite = (id: string) => {
    setFavorites((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const queue = useMemo<Track[]>(() => playlist, []);

  return (
    <div className="h-full w-full">
      <div className="flex h-full flex-col items-center justify-center space-y-7 text-white">
        <div className="flex h-auto w-full max-w-4xl flex-col space-y-4 rounded-xl border border-white/40 bg-white/20 p-4 md:flex-row md:space-y-0 md:space-x-4">
          <div className="relative aspect-square shrink-0 overflow-hidden rounded-xl bg-white md:h-42 md:w-42">
            {current.cover ? (
              <Image
                src={current.cover}
                alt={current.title}
                fill
                className="object-cover"
                priority
              />
            ) : null}
          </div>

          <div className="flex-1">
            <div className="space-y-2">
              <div className="text-lg font-bold md:text-xl">
                {current.title}
              </div>
              <div>
                <div className="font-medium">{current.artist}</div>
                {current.album && (
                  <div className="text-xs font-light md:text-sm">
                    {current.album}
                  </div>
                )}
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => toggleFavorite(current.id)}
                  className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-white/80 md:h-9 md:w-9"
                >
                  {favorites.has(current.id) ? (
                    <FaHeart size={14} className="text-white" />
                  ) : (
                    <FaRegHeart size={14} className="text-white/80" />
                  )}
                </button>

                <button
                  className="rounded-full bg-white/20 px-3 py-1.5 text-xs font-semibold"
                  onClick={() =>
                    alert(`Added "${current.title}" to your playlist`)
                  }
                >
                  Add To Playlist
                </button>
              </div>
              <div>
                <input
                  type="range"
                  min={0}
                  max={duration - 1 || 1}
                  step="0.01"
                  value={currentTime}
                  onChange={(e) => onSeek(parseFloat(e.target.value))}
                  className="w-full accent-blue-200"
                />
                <div className="flex items-center justify-between text-xs font-extralight">
                  <div>{fmt(currentTime)}</div>
                  <div>{fmt(duration)}</div>
                </div>
              </div>
              <div className="flex items-center justify-center space-x-2 md:-translate-x-8 md:space-x-4">
                <button onClick={() => setIsShuffle((s) => !s)}>
                  <IoShuffleOutline
                    size={18}
                    className={isShuffle ? "opacity-100" : "opacity-60"}
                  />
                </button>
                <button onClick={handlePrev}>
                  <IoPlaySkipBackOutline size={18} />
                </button>
                <button onClick={togglePlay}>
                  {isPlaying ? (
                    <IoPauseCircleSharp size={44} />
                  ) : (
                    <IoPlayCircleSharp size={44} />
                  )}
                </button>
                <button onClick={handleNext}>
                  <IoPlaySkipForwardOutline size={18} />
                </button>
                <button onClick={() => setIsRepeat((r) => !r)}>
                  <IoRepeatOutline
                    size={18}
                    className={isRepeat ? "opacity-100" : "opacity-60"}
                  />
                </button>
                <IoVolumeHighOutline
                  size={18}
                  onClick={toggleMute}
                  className="shrink-0"
                />
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={(e) => setVolume(parseFloat(e.target.value))}
                  className="h-2 w-1/3 shrink-0 accent-blue-200"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-64 w-full max-w-4xl rounded-xl border border-white/40 bg-white/20 p-4 md:h-96">
          <div className="text-lg font-bold md:text-xl">Up Next</div>
          <div className="h-11/12 space-y-4 overflow-y-auto rounded-2xl px-2 py-2">
            {queue.map((t, i) => (
              <button
                key={t.id}
                onClick={() => {
                  if (i !== currentIndex) {
                    setCurrentIndex(i);
                    shouldAutoPlayRef.current = true;
                    setIsPlaying(true);
                  } else {
                    togglePlay();
                  }
                }}
                className={`flex w-full space-x-4 rounded-2xl bg-white/20 p-4 text-left transition ${
                  i === currentIndex
                    ? "ring-2 ring-white/60"
                    : "hover:bg-white/25"
                }`}
              >
                <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full bg-white">
                  {t.cover && (
                    <Image
                      src={t.cover}
                      alt={t.title}
                      fill
                      className="object-cover"
                      priority
                    />
                  )}
                </div>
                <div className="flex w-full items-center justify-between">
                  <div>
                    <div className="font-medium">{t.title}</div>
                    <div className="text-sm opacity-80">{t.artist}</div>
                  </div>
                  <div className="text-sm">
                    {durations.has(t.id) ? fmt(durations.get(t.id)!) : "--:--"}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
