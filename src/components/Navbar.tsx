"use client";
import { tags } from "@/data/navbar";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="sticky top-0 flex justify-center gap-10 bg-[rgba(0,0,0,0.1)] py-5 text-xl drop-shadow-[0_0_8px_white]">
      {tags.map(({ name, link }, index) => (
        <Link href={link} key={index} className="">
          {name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
