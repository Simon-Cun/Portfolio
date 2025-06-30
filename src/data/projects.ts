import Portfolio from "@/public/projects/portfolio.png";
import TwiceIsNice from "@/public/projects/twiceisnice.png";
import CSA from "@/public/projects/csa.png";
import WUSHU from "@/public/projects/wushu.png";
import Skyflow from "@/public/projects/skyflow.jpg";
import { StaticImageData } from "next/image";
export type Project = {
  title: string;
  description: string;
  TechStack: string[];
  Links: {
    github: string;
    demo?: string;
  };
  features: string[];
  role: string;
  date: string;
  status: string;
  color: string;
  image: {
    src: StaticImageData;
    alt: string;
  };
};

export const ProjectData: Project[] = [
  {
    title: "ACM Forge Autonomous Drones Project",
    description:
      "Designed and built a fully autonomous drone. Programmed flight control in Python, integrated sensors and cameras, and led hardware-software integration using SolidWorks and IMU calibration.",
    TechStack: ["Python", "SolidWorks", "Git", "Raspberry Pi"],
    Links: {
      github: "https://github.com/acm-ucr/drones-skyflow",
      demo: "#",
    },
    features: [
      "3D printed custom drone chassis",
      "Stabilized autonomous flight with IMU calibration",
      "Integrated camera and motor systems",
    ],
    role: "Software & Mechanical Engineer",
    date: "Feb 2025 – Present",
    status: "In Progress",
    color: "bg-purple-200/20",
    image: {
      src: Skyflow,
      alt: "Drone Project Image",
    },
  },
  {
    title: "WUSHU Website",
    description:
      "Developed the official website for the UCR Wushu Club. Built interactive components with React and TypeScript, styled with Tailwind CSS, and used Framer Motion for animation.",
    TechStack: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "TypeScript",
      "Motion",
      "Node.js",
    ],
    Links: {
      github: "https://github.com/acm-ucr/wushu-website",
      demo: "https://wushu.ucrhighlanders.org/",
    },
    features: [
      "Dynamic event and team member showcase",
      "Responsive design with smooth animations",
      "Optimized performance using Next.js",
    ],
    role: "Frontend Developer",
    date: "Jan 2025 – Jun 2025",
    status: "Complete",
    color: "bg-pink-200/20",
    image: {
      src: WUSHU,
      alt: "Wushu Landing Page",
    },
  },
  {
    title: "Chinese Student Association Website",
    description:
      "Built a modern club website for the Chinese Student Association at UCR. Collaborated on weekly sprints, implemented dynamic sections, and contributed to frontend development.",
    TechStack: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
      "Node.js",
    ],
    Links: {
      github: "https://github.com/acm-ucr/csa-website",
      demo: "https://csa.ucrhighlanders.org/",
    },
    features: [
      "Club event listing and contact form",
      "Modern responsive layout",
      "Animated transitions using Motion",
    ],
    role: "Frontend Developer",
    date: "Oct 2024 – Dec 2024",
    status: "Complete",
    color: "bg-fuchsia-200/20",
    image: {
      src: CSA,
      alt: "CSA Landing Page",
    },
  },
  {
    title: "Upcycle To Overcome",
    description:
      "Built a sustainability-themed web app during RoseHack 2025. Highlighted upcycling education with interactive UI and won the beginner track award.",
    TechStack: ["HTML", "CSS", "JavaScript"],
    Links: {
      github: "https://github.com/Simon-Cun",
      demo: "https://simon-cun.github.io/UpcycleToOvercome/", // placeholder if no live site
    },
    features: [
      "Informational sections about sustainability",
      "Interactive educational layout",
      "Built in under 24 hours at a hackathon",
    ],
    role: "Frontend Developer",
    date: "Jan 2025",
    status: "Complete",
    color: "bg-rose-200/20",
    image: {
      src: TwiceIsNice,
      alt: "RoseHack Website Landing Page",
    },
  },
  {
    title: "My Personal Portfolio Website",
    description:
      "Personal website built to showcase projects, resume, and contact info. Designed with a clean UI and hosted on Vercel.",
    TechStack: ["React", "Next.js", "Tailwind CSS"],
    Links: {
      github: "https://github.com/Simon-Cun/Portfolio",
      demo: "https://simoncun.vercel.app",
    },
    features: [
      "Live project previews",
      "Dark/light theme toggle",
      "Mobile responsive layout",
    ],
    role: "Full Stack Developer",
    date: "May 2025",
    status: "Complete",
    color: "bg-blue-200/20",
    image: {
      src: Portfolio,
      alt: "My Portfolio Website Landing Page",
    },
  },
];
