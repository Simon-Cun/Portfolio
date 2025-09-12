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
import Link from "next/link";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col items-center justify-center pb-20 md:h-screen md:flex-row md:pb-0"
    >
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />
      <div className="flex w-full max-w-5xl flex-col items-center justify-center gap-10 px-4 md:flex-row">
        <div className="rounded-2xl bg-gradient-to-r from-white via-transparent to-black p-[2px]">
          <Image
            src={Me}
            alt="Photo of Me"
            className="max-w-xs rounded-2xl object-contain md:max-w-sm"
            priority
          />
        </div>

        <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
          <div className="text-4xl font-extrabold">Software Engineer</div>
          <div className="font-bold">
            Hello, my name is Simon and I am a current student at the University
            of California, Riverside studying Computer Science.
          </div>
          <div className="flex flex-wrap justify-center gap-2 md:justify-start">
            <Link
              href="https://github.com/Simon-Cun"
              target="_blank"
              className="rounded-xl p-2 transition hover:bg-white/20"
            >
              <FaGithub size={28} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/Simon-Cun"
              target="_blank"
              className="rounded-xl p-2 transition hover:bg-white/20"
            >
              <FaLinkedin size={28} />
            </Link>
            <Link
              href="https://www.instagram.com/simonc2992/"
              target="_blank"
              className="rounded-xl p-2 transition hover:bg-white/20"
            >
              <FaInstagram size={28} />
            </Link>
            <Link
              href="mailto:simoncun2586@gmail.com"
              className="rounded-xl p-2 transition hover:bg-white/20"
            >
              <FaEnvelope size={28} />
            </Link>
            <Link
              href="/Simon_Cun_Resume.pdf"
              target="_blank"
              className="rounded-xl p-2 transition hover:bg-white/20"
            >
              <FaFile size={28} />
            </Link>
          </div>
        </div>
      </div>

      <div className="order-first my-10 flex w-1/4 justify-center md:order-none md:my-0">
        <Title title="SIMON SAU CUN" />
      </div>
    </section>
  );
};

export default Home;
