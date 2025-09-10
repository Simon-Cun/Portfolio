import Image from "next/image";
import Title from "@/components/VerticalTitle";
import Me from "@/public/image.png";

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex w-full flex-col-reverse items-center justify-center pb-20 md:h-screen md:flex-row md:pb-0"
    >
      <div className="absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-white to-transparent" />

      <div className="flex w-full flex-col items-center gap-8">
        <div className="bg-gradient-to-r from-white via-transparent to-black p-[2px]">
          <Image
            src={Me}
            alt="Photo of Me"
            className="w-[300px] shrink-0 object-contain md:w-[400px]"
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
