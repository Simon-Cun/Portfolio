import Home from "@/components/home/Home";
import About from "@/components/about/About";
import Projects from "@/components/projects/Projects";
import Experience from "@/components/experience/Experience";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Home />
      <About />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default Page;
