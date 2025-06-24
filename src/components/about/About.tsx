import Title from "@/components/VerticalTitle";

const About = () => {
  return (
    <section
      id="about"
      className="flex h-screen w-full flex-col justify-center border-b-1 md:flex-row"
    >
      <div className="flex h-full w-full items-center justify-center">
        <div className="h-[450px] w-[500px] rounded-2xl border-4 border-gray-700 bg-blue-100">
          <div className="flex w-full items-center justify-between gap-2 border-b-3 border-gray-700 px-3 py-2">
            <div className="flex items-center gap-2">
              <div className="h-[20px] w-[20px] rounded-2xl bg-pink-400"></div>
              <div className="h-[20px] w-[20px] rounded-2xl bg-amber-400"></div>
              <div className="h-[20px] w-[20px] rounded-2xl bg-green-400"></div>
              <div className="text-xl text-black">TITLE.txt</div>
            </div>
            <div className="flex space-x-2">
              {/* Square icon */}
              <div className="flex h-[20px] w-[20px] items-center justify-center border-3 border-gray-700">
                <div className="h-[10px] w-[10px] border-3 border-gray-700"></div>
              </div>
              {/* X icon */}
              <div className="flex h-[20px] w-[20px] items-center justify-center border-3 border-gray-700">
                <div className="relative h-[12px] w-[12px] translate-y-[5px]">
                  <div className="absolute h-[2px] w-full rotate-45 bg-gray-700"></div>
                  <div className="absolute h-[2px] w-full -rotate-45 bg-gray-700"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Title title="ABOUT ME" />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="mb-2 text-3xl">Notes About Me!</div>
        <div className="w-[500px] divide-y-3 divide-gray-700 rounded-xl border-4 border-gray-700 bg-blue-100 text-xl text-gray-700">
          <div className="py-2 pl-4">
            <div className="">Who Am I?</div>
            <div className="text-sm">short description</div>
          </div>
          <div className="py-2 pl-4">
            <div className="">My Music 🎧🎵🎶</div>
            <div className="text-sm">short description</div>
          </div>
          <div className="py-2 pl-4">
            <div className="">Hobbies and Interests </div>
            <div className="text-sm">short description</div>
          </div>
          <div className="py-2 pl-4">
            <div className="">Computer Science Stuff</div>
            <div className="text-sm">short description</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
