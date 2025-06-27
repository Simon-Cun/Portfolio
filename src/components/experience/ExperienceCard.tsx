import Image from "next/image";
import { StaticImageData } from "next/image";
type ExperienceCardProps = {
  logo: StaticImageData;
  title: string;
  date: string;
  information: string;
};

const ExperienceCard = ({
  logo,
  title,
  date,
  information,
}: ExperienceCardProps) => {
  return (
    <div className="mb-6 flex flex-col items-start gap-4 rounded-2xl border-1 border-b border-white/20 bg-blue-100/20 p-6 shadow-lg backdrop-blur-md backdrop-filter md:flex-row">
      <div className="">
        <Image
          src={logo}
          alt={title}
          width={200}
          height={200}
          className="rounded-md"
        />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="mb-2">{date}</p>
        <p className="">{information}</p>
      </div>
    </div>
  );
};

export default ExperienceCard;
