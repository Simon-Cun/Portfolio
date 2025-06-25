"use client";
import Title from "@/components/VerticalTitle";
import { useAboutContent } from "@/data/about";
import NoteCard from "@/components/about/NoteCard";
const About = () => {
  const { selectedNote, setSelectedNote, NoteData } = useAboutContent();

  return (
    <section
      id="about"
      className="flex h-screen w-full flex-col justify-center border-b-1 md:flex-row"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-[450px] w-[500px] rounded-2xl border-4 border-black/50 bg-blue-100">
          <div className="flex w-full items-center justify-between gap-2 border-b-3 border-black/50 px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="h-[20px] w-[20px] rounded-2xl bg-pink-400"></div>
              <div className="h-[20px] w-[20px] rounded-2xl bg-amber-400"></div>
              <div className="h-[20px] w-[20px] rounded-2xl bg-green-400"></div>
              <div className="text-xl text-black">{selectedNote.title}</div>
            </div>
            <div className="flex space-x-2">
              <div className="flex h-[20px] w-[20px] items-center justify-center border-3 border-black/50">
                <div className="h-[10px] w-[10px] border-3 border-black/50"></div>
              </div>
              <div className="flex h-[20px] w-[20px] items-center justify-center border-3 border-black/50">
                <div className="relative h-[12px] w-[12px] translate-y-[5px]">
                  <div className="absolute h-[2px] w-full rotate-45 bg-black/50"></div>
                  <div className="absolute h-[2px] w-full -rotate-45 bg-black/50"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-4 whitespace-pre-wrap text-black">
            {selectedNote.content}
          </div>
        </div>
      </div>
      <Title title="ABOUT ME" />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="mb-2 text-3xl">Notes About Me!</div>
        <div className="w-[500px] divide-y-3 divide-black/50 rounded-2xl border-4 border-black/50 bg-blue-100 text-xl text-gray-700">
          {NoteData.map((note, idx) => (
            <NoteCard
              key={idx}
              title={note.title}
              description={note.description}
              isActive={selectedNote.title === note.title}
              onClick={() => setSelectedNote(note)}
              isFirst={idx === 0}
              isLast={idx === NoteData.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
