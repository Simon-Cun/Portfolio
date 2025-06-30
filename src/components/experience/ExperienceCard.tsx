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
    <div className="mb-8 w-full rounded-xl border-b border-white/20 bg-white/5 p-6 shadow-md backdrop-blur-md">
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt={title}
            width={100}
            height={100}
            className="rounded-md"
          />
          <div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="text-gray-400">{role}</p>
          </div>
        </div>

        {/* Right: location above date */}
        <div className="mt-2 text-left text-gray-400 md:mt-0 md:text-right">
          <p className="">{location}</p>
          <p className="">{date}</p>
        </div>
      </div>

      <ul className="mt-4 list-disc space-y-1 pl-4 text-white/90">
        {information.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
};

export default ExperienceCard;
