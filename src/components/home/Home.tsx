import Image from "next/image";
import Title from "@/components/VerticalTitle";
import Cat from "@/public/cat.jpg";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col-reverse items-center justify-center pb-20 md:h-screen md:flex-row md:pb-0"
    >
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />

      <div className="flex w-full flex-col items-center gap-8">
        <div className="rounded-2xl bg-gradient-to-r from-white via-transparent to-black p-[4px]">
          <Image
            src={Cat}
            alt="Photo of Me"
            className="w-[300px] shrink-0 rounded-2xl object-contain md:w-[400px]"
          />
        </div>

        <div className="mx-20 text-center">
          「Hello, my name is Simon and I am a current student at the University
          of California Riverside studying Computer Science.」
        </div>
      </div>

      <div className="my-10 flex w-full justify-center">
        <Title title="SIMON SAU CUN" />
      </div>
    </section>
  );
};

export default Home;
