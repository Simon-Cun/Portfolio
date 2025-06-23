import Image from "next/image";
import Title from "@/components/VerticalTitle";
import Cat from "@/public/cat.jpg";
const Home = () => {
  return (
    <section
      id="home"
      className="flex w-full flex-col-reverse items-center justify-center border-b-1 md:h-screen md:flex-row"
    >
      <div className="flex w-full flex-col items-center gap-8">
        <Image
          src={Cat}
          className="w-[300px] shrink-0 rounded-2xl object-contain md:w-[400px]"
          alt="Photo of Me"
        />
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
