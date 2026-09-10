import Image from "next/image";
import { StaticImageData } from "next/image";

type ExperienceCardProps = {
  logo: StaticImageData;
  title: string;
  role: string;
  location: string;
  date: string;
  information: string;
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
    <div className="w-full border-r border-b border-white/20 bg-white/5 p-6 shadow-md backdrop-blur-md">
      <div className="flex flex-col items-start gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-4">
          <Image
            src={logo}
            alt={title}
            width={100}
            height={100}
            className="p-4"
          />
          <div className="flex flex-col">
            <div className="text-2xl font-semibold">{title}</div>
            <div>{role}</div>
          </div>
        </div>
        <div className="mt-2 text-left md:mt-0 md:text-right">
          <div>{location}</div>
          <div>{date}</div>
        </div>
      </div>
      <div>{information}</div>
    </div>
  );
};

export default ExperienceCard;
