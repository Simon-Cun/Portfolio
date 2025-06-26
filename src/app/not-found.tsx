import VerticalTitle from "@/components/VerticalTitle";
import cat from "@/public/cat.png";
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex h-screen w-screen items-center justify-center gap-x-40">
      <Link href="/">
        <Image
          src={cat}
          alt="cat"
          width={400}
          className="rounded-2xl border-8 border-blue-900/80 bg-orange-300 p-10"
        />
      </Link>
      <VerticalTitle title="404 Page Not Found" />
    </div>
  );
};

export default NotFound;
