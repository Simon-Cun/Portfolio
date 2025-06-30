"use client";
import {
  FaReact,
  FaNode,
  FaJs,
  FaJava,
  FaPython,
  FaHtml5,
} from "react-icons/fa";
import { TbBrandFramerMotion } from "react-icons/tb";
import { SiTypescript, SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { useEffect, useState } from "react";

const techIcons = [
  { icon: <FaReact />, name: "React" },
  { icon: <FaNode />, name: "Node.js" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaJava />, name: "Java" },
  { icon: <FaPython />, name: "Python" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <TbBrandFramerMotion />, name: "Framer Motion" },
];

const techIconsArray = Array(2).fill(techIcons).flat();

const getVisibleCount = (width: number) => {
  if (width < 1600) return 15; // tablets
  return techIconsArray.length; // desktop
};

const TechIcons = () => {
  const [visibleCount, setVisibleCount] = useState(() =>
    getVisibleCount(typeof window !== "undefined" ? window.innerWidth : 1024)
  );

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount(window.innerWidth));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4 text-[3.6vw] text-white">
      {techIconsArray.slice(0, visibleCount).map(({ icon, name }, idx) => (
        <div
          key={idx}
          title={name}
          className="hover:scale-115 hover:drop-shadow-[0_0_50px_white] transition-transform"
        >
          {icon}
        </div>
      ))}
    </div>
  );
};

export default TechIcons;
