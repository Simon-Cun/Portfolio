const HorizontalTitle = ({ title }: { title: string }) => {
  return (
    <div className="relative inline-block py-6 text-center">
      <div className="absolute top-0 left-1/2 h-[2px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
      <div className="absolute bottom-0 left-1/2 h-[2px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />
      <div className="bg-gradient-to-r from-white to-sky-300 bg-clip-text px-4 text-5xl text-transparent drop-shadow-[0_0_2px_white] md:text-7xl">
        {title.split("").map((char, index) => (
          <span key={index} className="inline-block">
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};

export default HorizontalTitle;
