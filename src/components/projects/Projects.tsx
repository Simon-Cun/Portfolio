import VerticalTitle from "@/components/VerticalTitle";
import HorizontalTitle from "@/components/HorizontalTitle";
import Image from "next/image";
import { ProjectData } from "@/data/projects";
const Projects = () => {
  return (
    <section
      id="projects"
      className="left-0 md:flex w-full justify-center border-b-1 py-20 pb-52 md:pb-96 md:pl-10"
    >
      <div className="sticky">
        <div className="sticky top-0 hidden md:top-[50px] md:block">
          <VerticalTitle title="PROJECTS" />
        </div>
      </div>
      <div className="sticky md:hidden top-[50px]">
        <div className="flex sticky top-[50px] w-full justify-center pb-5">
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
                className={`sticky m-3 rounded-4xl border border-white/20 p-5 text-center shadow-lg backdrop-blur-md backdrop-filter top-[150px] md:top-[50px] md:m-10 md:p-10 md:text-left ${color} flex flex-col gap-6 text-xs md:flex-row`}
                style={{
                  transform: `translateY(${index * 24}px)`,
                  zIndex: ProjectData.length + index,
                }}
              >
                <div className="flex flex-col gap-2 md:gap-4">
                  <div className="text-4xl">{title}</div>
                  <div className="flex gap-5 w-full justify-center md:justify-normal">
                    <div>{role}</div>
                    <div>{date}</div>
                    <div>{status}</div>
                  </div>
                  <div>{description}</div>
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
                <div className="w-full md:w-auto flex justify-center md:justify-normal">
                  <Image
                  src={image.src}
                  alt={image.alt}
                  className="object-contain flex w-[400px]"
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
