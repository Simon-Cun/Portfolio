"use client";
import { motion } from "motion/react";

const HorizontalTitle = ({ title }: { title: string }) => {
  return (
    <motion.div
      className="font-playfair relative inline-block py-6 text-center"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
    >
      <motion.div
        className="absolute top-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-transparent via-white to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 w-full origin-left bg-linear-to-r from-transparent via-white to-transparent"
        initial={{ opacity: 0, scaleX: 0 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.6 }}
      />
      <motion.div
        className="bg-linear-to-r from-white to-sky-200 bg-clip-text px-4 text-5xl text-transparent drop-shadow-[0_0_40px_white] md:text-7xl"
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ type: "spring", damping: 20, stiffness: 100 }}
        viewport={{ once: true, amount: 0.6 }}
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

export default HorizontalTitle;
