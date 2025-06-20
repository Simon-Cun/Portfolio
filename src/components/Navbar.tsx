"use client";
import { tags } from "@/data/navbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 z-50 w-full bg-[rgba(0,0,0,0.2)] py-2 text-xl drop-shadow-[0_0_8px_white]">
      <div className="relative flex items-center justify-center">
        {/* Left-aligned clickable name */}
        <Link
          href="#home"
          className="absolute left-4 font-bold text-blue-200 hover:text-white"
        >
          SIMON CUN
        </Link>

        {/* Centered navigation */}
        <div className="flex gap-10">
          {tags.map(({ name, link }, index) => (
            <Link href={link} key={index} className="hover:text-blue-200">
              {name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
