export type Track = {
  id: string;
  title: string;
  artist: string;
  album?: string;
  cover?: string;
  src: string;
};

export const playlist: Track[] = [
  {
    id: "1",
    title: "My Color",
    artist: "Luo & Lucky Cyan",
    album: "To Be Hero X",
    cover: "/covers/My_Color.png",
    src: "/songs/My_Color.mp3",
  },
  {
    id: "2",
    title: "Glowing in the Dark",
    artist: "Loving Calibre",
    album: "New Start",
    cover: "/covers/Glowing_in_the_Dark.png",
    src: "/songs/Glowing_in_the_Dark.mp3",
  },
  {
    id: "3",
    title: "Hold On",
    artist: "Chord Overstreet",
    album: "",
    cover: "/covers/Hold_On.png",
    src: "/songs/Hold_On.mp3",
  },
  {
    id: "4",
    title: "Those Eyes",
    artist: "Faith CNS",
    album: "New West",
    cover: "/covers/Those_Eyes.png",
    src: "/songs/Those_Eyes.mp3",
  },
  {
    id: "5",
    title: "I Wanna Be Yours",
    artist: "Arctic Monkeys",
    album: "AM",
    cover: "/covers/I_Wanna_Be_Yours.png",
    src: "/songs/I_Wanna_Be_Yours.mp3",
  },
];
