"use client";
import Image from "next/image";
import Title from "@/components/VerticalTitle";
import Me from "@/public/image.png";
import {
  FaGithub,
  FaLinkedin,
  FaFile,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";
import { motion, Variants } from "motion/react";

// Variants with type
const SlideInFromLeft: Variants = {
  initial: { opacity: 0, x: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

const Pebble: Variants = {
  initial: { opacity: 0, x: -10, y: -10 },
  animate: (custom: number) => ({
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 1, delay: custom, ease: "backInOut" },
  }),
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col items-center justify-center pb-20 md:h-screen md:flex-row md:pb-0"
    >
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />

      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-10 px-4 md:flex-row">
        {/* Profile Image */}
        <div className="rounded-2xl bg-gradient-to-r from-white via-transparent to-black p-[2px]">
          <Image
            src={Me}
            alt="Photo of Me"
            className="max-w-xs rounded-2xl object-contain md:max-w-sm"
            priority
          />
        </div>

        {/* Text & Socials */}
        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <motion.div
            variants={SlideInFromLeft}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView="animate"
            custom={0}
            className="text-4xl font-extrabold"
          >
            Software Engineer
          </motion.div>

          <motion.div
            variants={SlideInFromLeft}
            viewport={{ once: true, amount: 0 }}
            initial="initial"
            whileInView="animate"
            custom={0.25}
            className="font-bold"
          >
            Hello, my name is Simon and I am a current student at the University
            of California, Riverside studying Computer Science.
          </motion.div>

          {/* Social Links with Framer Motion hover color + scale */}
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            {[
              {
                href: "https://github.com/Simon-Cun",
                icon: <FaGithub size={28} />,
                color: "#6600ad", // GitHub purple-ish
              },
              {
                href: "https://www.linkedin.com/in/Simon-Cun",
                icon: <FaLinkedin size={28} />,
                color: "#0A66C2", // LinkedIn blue
              },
              {
                href: "https://www.instagram.com/simonc2992/",
                icon: <FaInstagram size={28} />,
                color: "#E1306C", // Instagram pink
              },
              {
                href: "mailto:simoncun2586@gmail.com",
                icon: <FaEnvelope size={28} />,
                color: "#D44638", // Email red
              },
              {
                href: "/Simon_Cun_Resume.pdf",
                icon: <FaFile size={28} />,
                color: "#A9A9A9", // Resume gray
              },
            ].map(({ href, icon, color }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                variants={Pebble}
                viewport={{ once: true, amount: 0 }}
                initial="initial"
                whileInView="animate"
                custom={(index % 5) * 0.2 + 0.5}
                whileHover={{ scale: 1.15, color }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="rounded-xl p-2"
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Vertical Title (No animation) */}
      <div className="order-first my-10 flex w-1/4 justify-center md:order-none md:my-0">
        <Title title="SIMON SAU CUN" />
      </div>
    </section>
  );
};

export default Home;
