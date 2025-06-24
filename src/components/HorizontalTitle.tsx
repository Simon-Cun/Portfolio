const HorizontalTitle = ({ title }: { title: string }) => {
  return (
    <div className="flex h-fit border-y-1 px-5 py-4 text-5xl drop-shadow-[0_0_2px_white] md:text-7xl">
      {title}
    </div>
  );
};

export default HorizontalTitle;
