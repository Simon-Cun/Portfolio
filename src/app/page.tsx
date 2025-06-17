import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Experience from "@/components/experience/Experience";
import Projects from "@/components/projects/Projects";

const Page = () => {
  return (
    <div className="flex flex-col h-screen w-screen items-center justify-center">
      <Home/>
      <About/>
      <Experience/>
      <Projects/>
    </div>
  );
};

export default Page;
