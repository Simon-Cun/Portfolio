"use client";

import {
  SiReact,
  SiNodedotjs,
  SiTypescript,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiHtml5,
  SiGit,
  SiPostgresql,
  SiCplusplus,
  SiGithub,
  SiMysql,
} from "react-icons/si";

const techIcons = [
  { icon: <SiPython />, name: "Python" },
  { icon: <SiCplusplus />, name: "C++" },
  { icon: <SiGit />, name: "Git" },
  { icon: <SiGithub />, name: "Github" },
  { icon: <SiReact />, name: "React" },
  { icon: <SiNodedotjs />, name: "Node.js" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiJavascript />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <SiHtml5 />, name: "HTML5" },
  { icon: <SiPostgresql />, name: "PostgreSQL" },
  { icon: <SiMysql />, name: "MySQL" },
];

const TechIcons = () => {
  return (
    <div className="flex flex-wrap justify-center gap-4 text-[3.3vw] text-white">
      {techIcons.map(({ icon, name }, idx) => (
        <div
          key={idx}
          className="group relative flex flex-col items-center transition-transform hover:scale-110 hover:drop-shadow-[0_0_50px_white]"
        >
          {icon}
          <span className="absolute bottom-full z-10 mb-2 hidden rounded bg-black px-2 py-1 text-sm whitespace-nowrap text-white group-hover:block">
            {name}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
