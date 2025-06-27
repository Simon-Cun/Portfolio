import VerticalTitle from "@/components/VerticalTitle";
import HorizontalTitle from "@/components/HorizontalTitle";
import Image from "next/image";
import { ProjectData } from "@/data/projects";
const Projects = () => {
  return (
    <section
      id="projects"
      className="left-0 w-full justify-center border-b-1 py-20 pb-52 md:flex md:pb-96 md:pl-10"
    >
      <div className="sticky">
        <div className="sticky top-0 hidden md:top-[50px] md:block">
          <VerticalTitle title="PROJECTS" />
        </div>
      </div>
      <div className="sticky top-[20px] md:hidden">
        <div className="sticky top-[20px] flex w-full justify-center">
          <HorizontalTitle title="PROJECTS" />
        </div>
      </div>
      <div className="sticky top-[50px]">
        <div className="sticky flex w-full flex-col justify-center gap-20">
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
            ) => (
              <div
                key={index}
                className={`sticky top-[120px] m-3 rounded-4xl border border-white/20 p-5 text-center shadow-lg backdrop-blur-md backdrop-filter md:top-[50px] md:m-10 md:p-10 md:text-left ${color} flex flex-col gap-6 text-xs md:flex-row md:text-sm`}
                style={{
                  transform: `translateY(${index * 24}px)`,
                  zIndex: ProjectData.length + index,
                }}
              >
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="text-4xl">{title}</div>
                  <div className="flex w-full justify-center gap-5 md:justify-normal">
                    <div>{role}</div>
                    <div>{date}</div>
                    <div>{status}</div>
                  </div>
                  s<div>{description}</div>
                  <div className="flex w-full justify-center gap-4 md:justify-normal">
                    {TechStack.map((tech, i) => (
                      <span
                        key={i}
                        className="rounded-lg bg-white/10 px-3 py-1 text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div>{features}</div>
                  <div>
                    <div>{Links.demo}</div>
                    <div>{Links.github}</div>
                  </div>
                </div>
                <div className="flex w-full justify-center md:w-auto md:justify-normal">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    className="flex w-[400px] object-contain md:w-[500px]"
                  />
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
