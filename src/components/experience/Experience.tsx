"use client";

import HorizontalTitle from "@/components/HorizontalTitle";
import { useExperienceContent } from "@/data/experience";
import Image from "next/image";

const Experience = () => {
  const { selectedExperience, setSelectedExperience, ExperienceData } =
    useExperienceContent();

  const buttons = ["X", "Y", "A", "B"];

  return (
    <section
      id="experience"
      className="flex w-full items-start justify-center gap-16 border-b-1 py-20 pr-20"
    >
      {/* Game Console Layout */}
      <div className="flex h-[350px] w-[800px] items-center justify-between rounded-4xl bg-purple-200 px-6">
        {/* Left Controls */}
        <div className="flex h-full flex-col items-center justify-between py-20">
          <div className="h-[70px] w-[70px] rounded-full border-8 border-white bg-gray-100"></div>
          <div className="relative h-16 w-16">
            <div className="absolute top-0 left-1/2 h-full w-5 -translate-x-1/2 bg-white outline-3 outline-black/60" />
            <div className="absolute top-1/2 left-0 h-5 w-full -translate-y-1/2 bg-white outline-3 outline-black/60" />
            <div className="absolute top-0 left-1/2 h-full w-5 -translate-x-1/2 bg-white" />
          </div>
        </div>

        {/* Screen */}
        <div className="flex h-[330px] w-[550px] flex-col rounded-2xl border-[15px] border-gray-900 bg-white p-4 text-black">
          <div className="text-xl font-bold">{selectedExperience.title}</div>
          <div className="text-sm font-semibold">{selectedExperience.job}</div>
          <p className="mt-2 text-sm">{selectedExperience.information}</p>
        </div>

        {/* Right Controls */}
        <div className="flex h-full flex-col items-center justify-between py-20">
          <div className="grid h-16 w-16 rotate-45 grid-cols-2 gap-2">
            {buttons.map((char, index) => (
              <div
                key={index}
                className="h-[25px] w-[25px] rounded-full bg-white outline-2 outline-black/60"
              >
                <span className="flex -rotate-45 justify-center text-gray-400">
                  {char}
                </span>
              </div>
            ))}
          </div>

          <div className="h-[70px] w-[70px] rounded-full border-8 border-white bg-gray-100"></div>
        </div>
      </div>
      {/* Experience Card List */}
      <div>
        <div className="flex w-full justify-center">
          <HorizontalTitle title="Experience" />
        </div>
        <div className="mt-4 grid grid-cols-3 place-items-center gap-6">
          {ExperienceData.map(({ logo, title, job, information }, key) => (
            <button
              key={key}
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() =>
                setSelectedExperience({ logo, title, job, information })
              }
            >
              <div className="mx-auto h-1 w-6 translate-y-[9.6px] bg-black" />
              <Image
                src={logo}
                alt={title}
                className="h-[150px] w-[130px] rounded-2xl border-[10px] border-b-[20px] border-gray-700/50"
              />
              <div className="mx-auto -mt-4 h-0 w-0 border-[15px] border-x-transparent border-t-black border-b-transparent" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
