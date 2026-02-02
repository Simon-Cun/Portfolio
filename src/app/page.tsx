import Home from "@/components/Home";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="flex flex-col items-center">
      <Home />
      <Projects />
      <Experience />
      <Footer />
    </div>
  );
};

export default Page;
