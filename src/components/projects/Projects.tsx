import VerticalTitle from "@/components/VerticalTitle";
import HorizontalTitle from "@/components/HorizontalTitle";
import Link from "next/link";
import Image from "next/image";
import LineBreak from "@/components/LineBreak";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectData } from "@/data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="relative w-full justify-center py-20 pb-52 md:flex md:pb-96 md:pl-10"
    >
      {/* Gradient Line */}
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Sticky Vertical Title (Desktop Only) */}
      <div className="md:sticky md:top-[50px]">
        <div className="hidden md:sticky md:top-[50px] md:block">
          <VerticalTitle title="PROJECTS" />
        </div>
      </div>

      {/* Sticky Horizontal Title (Mobile Only) */}
      <div className="mb-6 flex justify-center md:static md:top-0 md:hidden">
        <div className="sticky top-[20px] flex w-full justify-center md:static md:top-0">
          <HorizontalTitle title="PROJECTS" />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex w-full flex-col gap-8 px-4 md:pl-10">
        {/* Line Break (Sticky on Desktop Only) */}
        <div className="hidden w-full justify-center md:sticky md:top-[50px] md:block">
          <LineBreak />
        </div>

        {/* Project Cards */}
        {ProjectData.map(
          (
            {
              title,
              description,
              TechStack,
              Links,
              features,
              role,
              date,
              status,
              color,
              image,
            },
            index,
          ) => {
            const isLast = index === ProjectData.length - 1;
            const topClass = isLast ? "md:top-[80px]" : "md:top-[50px]";

            return (
              <div
                key={index}
                className={`rounded-4xl border border-white/20 p-5 shadow-lg backdrop-blur-md backdrop-filter md:sticky ${topClass} md:p-10 ${color} flex flex-col gap-6 md:flex-row`}
                style={{
                  transform: `translateY(${index * 24}px)`,
                  zIndex: ProjectData.length + index,
                }}
              >
                {/* Text Content */}
                <div className="flex w-full flex-col gap-4 md:w-2/3">
                  <h2 className="text-center text-3xl sm:text-4xl md:text-left">
                    {title}
                  </h2>

                  <div className="flex flex-wrap justify-center gap-3 text-sm md:justify-start">
                    <span>{role}</span>
                    <span>{date}</span>
                    <span>{status}</span>
                  </div>

                  <p className="text-center md:text-left">{description}</p>

                  <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                    {TechStack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-white/10 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <ul className="list-disc pl-6 text-center md:text-left">
                    {features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>

                  <div className="flex justify-center gap-6 md:justify-start">
                    <Link href={Links.github} target="_blank">
                      <FaGithub size={40} />
                    </Link>
                    {Links.demo && Links.demo !== "#" && (
                      <Link
                        href={Links.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Demo Site"
                      >
                        <FaExternalLinkAlt size={30} />
                      </Link>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className="flex justify-center md:w-1/3">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={500}
                    height={300}
                    className="w-full max-w-xs object-contain sm:max-w-md"
                  />
                </div>
              </div>
            );
          },
        )}
      </div>
    </section>
  );
};

export default Projects;
