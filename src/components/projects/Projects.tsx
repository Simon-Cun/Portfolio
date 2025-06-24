import Title from "@/components/VerticalTitle";
import Image from "next/image";
import { ProjectData } from "@/data/projects";
const Projects = () => {
  return (
    <section
      id="projects"
      className="left-0 flex w-full justify-center border-b-1 py-20 pb-52 md:pb-96 md:pl-10"
    >
      <div className="sticky">
        <div className="sticky top-0 hidden md:top-[50px] md:block">
          <Title title="PROJECTS" />
        </div>
      </div>
      <div className="sticky top-0 md:top-[50px]">
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
                className={`sticky top-0 m-3 rounded-4xl border border-white/20 p-10 shadow-lg backdrop-blur-md backdrop-filter md:top-[50px] md:m-10 ${color} flex flex-col gap-20 text-xs md:flex-row`}
                style={{
                  transform: `translateY(${index * 24}px)`,
                  zIndex: ProjectData.length + index,
                }}
              >
                <div className="flex flex-col gap-4">
                  <div className="text-4xl">{title}</div>
                  <div className="flex gap-5">
                    <div>{role}</div>
                    <div>{date}</div>
                    <div>{status}</div>
                  </div>
                  <div>{description}</div>
                  <div className="flex gap-4">
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
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={200}
                  className="object-contain"
                />
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
