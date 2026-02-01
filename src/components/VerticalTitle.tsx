"use client";
import { motion, Variants } from "motion/react";

const VerticalTitle = ({ title }: { title: string }) => {
  const words = title.split(" ");

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: -50 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 200 },
    },
  };

  const borderVariants: Variants = {
    hidden: { opacity: 0, scaleY: 0 },
    show: {
      opacity: 1,
      scaleY: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  return (
    <motion.div
      className="font-playfair flex items-center gap-4 text-center text-5xl md:text-7xl"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {words.map((word, wordIndex) => (
        <motion.div
          key={wordIndex}
          className={`relative p-4 drop-shadow-[0_0_1.5px_white] ${
            wordIndex === 2 ? "translate-y-10 md:translate-y-20" : ""
          }`}
          variants={wordVariants}
        >
          <motion.div
            className="pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-top bg-linear-to-b from-transparent via-white to-transparent"
            variants={borderVariants}
          />
          <motion.div
            className="pointer-events-none absolute inset-y-0 right-0 w-0.5 origin-top bg-linear-to-b from-transparent via-white to-transparent"
            variants={borderVariants}
          />
          <div className="bg-linear-to-b from-white via-zinc-200 to-white bg-clip-text text-transparent">
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} className="block">
                {char}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};

export default VerticalTitle;
