import Image from "next/image";
import { StaticImageData } from "next/image";

type ExperienceCardProps = {
  logo: StaticImageData;
  title: string;
  role: string;
  location: string;
  date: string;
  information: string[];
};

const ExperienceCard = ({
  logo,
  title,
  role,
  location,
  date,
  information,
}: ExperienceCardProps) => {
  return (
    <div className="w-full border-b border-white/20 bg-white/5 p-6 shadow-md backdrop-blur-md">
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image src={logo} alt={title} width={100} height={100} />
          <div className="flex flex-col">
            <div className="text-2xl font-semibold text-white">{title}</div>
            <div className="text-lg text-gray-300">{role}</div>
          </div>
        </div>
        <div className="mt-2 text-left text-gray-300 md:mt-0 md:text-right">
          <div className="text-lg">{location}</div>
          <div className="text-lg">{date}</div>
        </div>
      </div>
      <ul className="mt-4 list-disc space-y-2 pl-5 text-xl text-white">
        {information.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
