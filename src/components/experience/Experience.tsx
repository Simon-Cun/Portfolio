import HorizontalTitle from "@/components/HorizontalTitle";
import ExperienceCard from "@/components/experience/ExperienceCard";
import { ExperienceData } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="relative flex w-full flex-col items-center justify-center py-20"
    >
      <div className="absolute bottom-0 left-0 h-px w-full bg-linear-to-r from-transparent via-white to-transparent" />

      <HorizontalTitle title="Experience" />
      <div className="mt-20 flex w-[80%] flex-col gap-y-8">
        {ExperienceData.map((item, idx) => (
          <ExperienceCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
