import TwiceIsNice from "@/public/projects/twiceisnice.png";
import CSA from "@/public/projects/csa.png";
import WUSHU from "@/public/projects/wushu.png";
import Skyflow from "@/public/projects/skyflow.jpg";
import ULA from "@/public/projects/ula.png";
import SpaceCalculator from "@/public/projects/spacecalculator.png";
import CutieMood from "@/public/projects/cutiemood.png";
import { StaticImageData } from "next/image";

export type Project = {
  title: string;
  description: string;
  TechStack: string[];
  Links: {
    github: string;
    demo?: string;
  };
  color: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export const ProjectData: Project[] = [
  {
    title: "Cutie Mood (Mobile App)",
    color: "bg-orange-200/20",
    image: { src: CutieMood, alt: "Cutie Mood app calendar and chat screens" },
    description:
      "A mobile Mood tracking and journaling app to help with mental health.",
    TechStack: [
      "React Native",
      "Expo",
      "TypeScript",
      "NativeWind",
      "Supabase",
      "PostgreSQL",
      "Gemini API",
    ],
    Links: {
      github: "https://github.com/kellyma626/cutieMood",
      demo: "#",
    },
  },

  {
    title: "Undergraduate Learning Assistant Website",
    color: "bg-indigo-200/20",
    image: { src: ULA, alt: "Undergraduate Learning Assistant Landing Page" },
    description:
      "The Undergraduate Learning Assistants site to support students and showcase program resources.",
    TechStack: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "TanStack Query",
    ],
    Links: {
      github: "https://github.com/acm-ucr/cse-ula",
      demo: "https://ula.ucrhighlanders.org/",
    },
  },
  {
    title: "ACM Forge Autonomous Drones Project",
    color: "bg-purple-200/20",
    image: { src: Skyflow, alt: "Drone Project Image" },
    description:
      "A fully autonomous drone designed and built to navigate through traffic cones.",
    TechStack: ["Python", "SolidWorks", "Git", "Raspberry Pi"],
    Links: {
      github: "https://github.com/acm-ucr/drones-skyflow",
      demo: "#",
    },
  },

  {
    title: "WUSHU Website",
    color: "bg-pink-200/20",
    image: { src: WUSHU, alt: "Wushu Landing Page" },
    description: "Club website for the WUSHU club.",
    TechStack: [
      "React",
      "Next.js",
      "TailwindCSS",
      "TypeScript",
      "Framer Motion",
      "Node.js",
    ],
    Links: {
      github: "https://github.com/acm-ucr/wushu-website",
      demo: "https://wushu.ucrhighlanders.org/",
    },
  },

  {
    title: "Upcycle To Overcome - RoseHack 2025",
    color: "bg-rose-200/20",
    image: { src: TwiceIsNice, alt: "RoseHack Website Landing Page" },
    description:
      "Sustainability-themed web app built during RoseHack 2025. Highlighted upcycling education with interactive UI winning the beginner track award.",
    TechStack: ["HTML", "CSS", "JavaScript"],
    Links: {
      github: "https://github.com/Simon-Cun",
      demo: "https://simon-cun.github.io/UpcycleToOvercome/",
    },
  },

  {
    title: "Chinese Student Association Website",
    color: "bg-fuchsia-200/20",
    image: { src: CSA, alt: "CSA Landing Page" },
    description: "Club website for the Chinese Student Association.",
    TechStack: [
      "React",
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Framer Motion",
      "Node.js",
    ],
    Links: {
      github: "https://github.com/acm-ucr/csa-website",
      demo: "https://csa.ucrhighlanders.org/",
    },
  },

  {
    title: "Space Calculator - Cutie Hack 2024",
    description:
      "Space-themed calculator web app for Cutie Hack 2024 with playful design and interactive math operations.",
    TechStack: ["HTML", "CSS", "JavaScript"],
    Links: {
      github: "https://github.com/aschu042/cutieHack",
      demo: "https://evabao007.github.io/",
    },
    color: "bg-gray-700/20",
    image: {
      src: SpaceCalculator,
      alt: "Space-themed calculator interface",
    },
  },
];
