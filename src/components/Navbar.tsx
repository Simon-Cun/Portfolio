"use client";
import { tags } from "@/data/navbar";
import ScrollLink from "@/components/ScrollLink";

const Navbar = () => {
  return (
    <div className="text-xl sticky top-0 z-50 hidden w-full py-3 md:block">
      <div className="relative flex items-center justify-center">
        <ScrollLink
          to="#home"
          className="absolute left-4 cursor-pointer font-bold text-sky-200 hover:text-sky-100"
        >
          SIMON CUN
        </ScrollLink>
        <div className="flex gap-10">
          {tags.map(({ name, link }, index) => (
            <ScrollLink
              key={index}
              to={link.replace("#", "")}
              className="cursor-pointer hover:text-sky-100"
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
