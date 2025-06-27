import VerticalTitle from "@/components/VerticalTitle";
const About = () => {
  return (
    <div className="flex h-screen w-full items-center justify-center gap-8 border-b-2">
      <div className="h-[700px] w-[600px] rounded-4xl border-1 border-white/20 bg-blue-200/20 shadow-lg backdrop-blur-md backdrop-filter"></div>
      <div>
        <VerticalTitle title="ABOUT ME" />
      </div>
      <div className="h-[700px] w-[600px] rounded-2xl border-1 border-white/20 bg-blue-200/20 shadow-lg backdrop-blur-md backdrop-filter"></div>
    </div>
  );
};

export default About;
