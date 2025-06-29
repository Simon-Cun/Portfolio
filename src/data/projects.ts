import date2 from "@/public/placeholder.webp";

export const ProjectData = [
  {
    title: "ACM Forge Autonomous Drones Project",
    description:
      "Designed and built a fully autonomous drone. Programmed flight control in Python, integrated sensors and cameras, and led hardware-software integration using SolidWorks and IMU calibration.",
    TechStack: ["Python", "SolidWorks", "Git", "Rasberry Pi"],
    Links: {
      github: "https://github.com/acm-ucr/drones-skyflow", // Update if specific repo available
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
      src: date2,
      alt: "drone project image",
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
      github: "https://github.com/Simon-Cun/Portfolio", // Replace with WUSHU repo if public
      demo: "https://simoncun.vercel.app", // Or project link
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
      src: date2,
      alt: "wushu website screenshot",
    },
  },
  {
    title: "CSA Website",
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
      github: "https://github.com/acm-ucr/csa-website", // Replace if project repo available
      demo: "https://csa.ucrhighlanders.org/", // Or project link
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
      src: date2,
      alt: "csa website screenshot",
    },
  },
  {
    title: "Upcycle To Overcome",
    description:
      "Built a sustainability-themed web app during RoseHack 2025. Highlighted upcycling education with interactive UI and won the beginner track award.",
    TechStack: ["HTML", "CSS", "JavaScript"],
    Links: {
      github: "https://github.com/Simon-Cun", // Replace with project repo if public
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
      src: date2,
      alt: "rosehack project image",
    },
  },
  {
    title: "Portfolio Website",
    description:
      "Personal website built to showcase projects, resume, and contact info. Designed with a clean UI and hosted on Vercel.",
    TechStack: ["React", "Next.js", "Tailwind CSS"],
    Links: {
      github: "https://github.com/Simon-Cun", // If repo is public
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
    color: "bg-green-200/20",
    image: {
      src: date2,
      alt: "portfolio website screenshot",
    },
  },
];
