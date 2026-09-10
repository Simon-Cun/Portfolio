import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Home />
      <Experience />
      <Projects />
    </div>
  );
};

export default Page;
