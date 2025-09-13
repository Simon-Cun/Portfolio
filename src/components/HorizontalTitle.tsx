"use client";
import { motion, Variants } from "motion/react";

const HorizontalTitle = ({ title }: { title: string }) => {
  const charVariants: Variants = {
    hidden: { opacity: 0, y: -40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 20, stiffness: 200 },
    },
  };

  const borderVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    show: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1, ease: "easeOut" },
    },
  };

  const containerVariants: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  return (
    <motion.div
      className="font-playfair relative inline-block py-6 text-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.3 }}
    >
      {/* Animated top border (left-to-right) */}
      <motion.div
        className="absolute top-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-white to-transparent"
        variants={borderVariants}
      />

      {/* Animated bottom border (left-to-right) */}
      <motion.div
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-gradient-to-r from-transparent via-white to-transparent"
        variants={borderVariants}
      />

      {/* Animated text */}
      <div className="bg-gradient-to-r from-white to-sky-300 bg-clip-text px-4 text-5xl text-transparent drop-shadow-[0_0_2px_white] md:text-7xl">
        {title.split("").map((char, index) => (
          <motion.span
            key={index}
            className="inline-block"
            variants={charVariants}
          >
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};

export default HorizontalTitle;
