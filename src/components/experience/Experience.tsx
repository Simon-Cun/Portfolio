import HorizontalTitle from "@/components/HorizontalTitle";
import ExperienceCard from "@/components/experience/ExperienceCard"; // adjust if needed
import { ExperienceData } from "@/data/experience";

const Experience = () => {
  return (
    <div className="flex w-full flex-col items-center justify-center py-20">
      <HorizontalTitle title="Experience" />
      <div className="mt-20 w-[80%]">
        {ExperienceData.map((item, idx) => (
          <ExperienceCard key={idx} {...item} />
        ))}
      </div>
    </div>
  );
};

export default Experience;
