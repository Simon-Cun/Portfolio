import Image from "next/image";
import Title from "@/components/Title";
import Cat from "@/public/cat.jpg";
const Home = () => {
  return (
    <section
      id="home"
      className="flex h-screen w-full items-center justify-center border-b-1"
    >
      <div className="flex w-full flex-col items-center gap-8">
        <Image
          src={Cat}
          height={400}
          width={400}
          className="shrink-0 rounded-2xl object-contain"
          alt="Photo of Me"
        />
        <div className="mx-20 text-center">
          「Hello, my name is Simon and I am a current student at the University
          of California Riverside studying Computer Science.」
        </div>
      </div>
      <div className="flex w-full justify-center">
        <Title title="SIMON SAU CUN" />
      </div>
    </section>
  );
};

export default Home;
