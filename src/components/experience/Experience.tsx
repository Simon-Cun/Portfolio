import HorizontalTitle from "@/components/HorizontalTitle";
import ExperienceCard from "@/components/experience/ExperienceCard"; // adjust if needed
import { ExperienceData } from "@/data/experience";

const Experience = () => {
  return (
    <section
      id="experience"
      className="flex w-full flex-col items-center justify-center border-b-1 py-20"
    >
      <HorizontalTitle title="Experience" />
      <div className="mt-20 w-[80%]">
        {ExperienceData.map((item, idx) => (
          <ExperienceCard key={idx} {...item} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
