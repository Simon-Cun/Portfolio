const HorizontalTitle = ({ title }: { title: string }) => {
  return (
    <div className="relative inline-block py-6 text-center">
      {/* Top line */}
      <div className="absolute top-0 left-1/2 h-[2px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Bottom line */}
      <div className="absolute bottom-0 left-1/2 h-[2px] w-full -translate-x-1/2 bg-gradient-to-r from-transparent via-white to-transparent" />

      {/* Title */}
      <div className="px-4 text-5xl drop-shadow-[0_0_2px_white] md:text-7xl">
        {title}
      </div>
    </div>
  );
};

export default HorizontalTitle;
