"use client";
import { motion } from "motion/react";
import VerticalTitle from "@/components/VerticalTitle";
import HorizontalTitle from "@/components/HorizontalTitle";
import Link from "next/link";
import Image from "next/image";
import LineBreak from "@/components/LineBreak";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { ProjectData } from "@/data/projects";

const Projects = () => {
  const overlap = 10; // how much each card stacks


  return (
    <section
      id="projects"
      className="relative w-full py-20 md:flex md:pl-10"
    >
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />

      <div className="hidden md:sticky md:top-[50px] md:block">
        <VerticalTitle title="PROJECTS" />
      </div>

      <div className="mb-6 flex justify-center md:hidden">
        <div className="sticky top-[20px] flex w-full justify-center">
          <HorizontalTitle title="PROJECTS" />
        </div>
      </div>

      <div className="flex w-full flex-col gap-0 px-4 md:pl-10">
        <div className="hidden md:block pb-4">
          <LineBreak />
        </div>

        {ProjectData.map((project, index) => {
          const zIndex = index + 1; // now first in array is bottom card

          return (
            <motion.div
              key={index}
              className={`flex flex-col gap-6 border border-white/20 p-5 shadow-lg backdrop-blur-md backdrop-filter md:flex-row md:p-10 ${project.color} md:sticky`}
              style={{
                top: `${index * overlap}px`, // stack downward
                zIndex,
                marginTop: index === 0 ? 0 : `-${overlap}px`,
              }}
              
            >
              <div className="flex w-full flex-col gap-4 md:w-2/3">
                <h2 className="text-center text-3xl sm:text-4xl md:text-left">
                  {project.title}
                </h2>

                <div className="flex flex-wrap justify-center gap-3 text-sm md:justify-start">
                  <span>{project.role}</span>
                  <span>{project.date}</span>
                  <span>{project.status}</span>
                </div>

                <p className="text-center md:text-left">
                  {project.description}
                </p>

                <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                  {project.TechStack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-lg bg-white/10 px-3 py-1 text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <ul className="list-disc pl-6 text-center md:text-left">
                  {project.features.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>

                <div className="flex justify-center gap-6 md:justify-start">
                  <Link href={project.Links.github} target="_blank">
                    <FaGithub size={40} />
                  </Link>
                  {project.Links.demo && project.Links.demo !== "#" && (
                    <Link
                      href={project.Links.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Demo Site"
                    >
                      <FaExternalLinkAlt size={30} />
                    </Link>
                  )}
                </div>
              </div>

              <div className="flex justify-center md:w-1/3">
                <Image
                  src={project.image.src}
                  alt={project.image.alt}
                  width={500}
                  height={300}
                  className="w-full max-w-xs object-contain sm:max-w-md"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
