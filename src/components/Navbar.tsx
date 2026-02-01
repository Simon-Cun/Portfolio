"use client";
import { motion } from "motion/react";
import { tags } from "@/data/navbar";
import ScrollLink from "@/components/ScrollLink";
const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 hidden w-full py-3 text-lg md:block">
      <div className="relative flex items-center justify-center">
        <ScrollLink
          to="#home"
          className="absolute left-4 cursor-pointer font-semibold text-zinc-100 hover:text-zinc-100"
        >
          SIMON CUN
        </ScrollLink>
        <div className="flex gap-10">
          {tags.map(({ name, link }, index) => (
            <motion.div
              key={index}
              className="relative"
              initial="rest"
              whileHover="hover"
            >
              <ScrollLink
                to={link.replace("#", "")}
                className="cursor-pointer hover:text-zinc-100"
              >
                {name}
              </ScrollLink>
              <motion.span
                className="absolute right-0 bottom-0 left-0 h-0.5 bg-zinc-100"
                style={{ originX: 0.5 }}
                variants={{
                  rest: { scaleX: 0 },
                  hover: { scaleX: 1 },
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
