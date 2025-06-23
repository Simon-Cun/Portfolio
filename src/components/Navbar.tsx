"use client";
import { tags } from "@/data/navbar";
import ScrollLink from "@/components/ScrollLink";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 hidden w-full bg-[rgba(0,0,0,0.2)] py-3 text-sm drop-shadow-[0_0_50px_white] md:block">
      <div className="relative flex items-center justify-center">
        <ScrollLink
          to="#home"
          className="absolute left-4 cursor-pointer font-bold text-blue-200 hover:text-white"
        >
          SIMON CUN
        </ScrollLink>
        <div className="flex gap-10">
          {tags.map(({ name, link }, index) => (
            <ScrollLink
              key={index}
              to={link.replace("#", "")}
              className="cursor-pointer hover:text-blue-200"
            >
              {name}
            </ScrollLink>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
