const VerticalTitle = ({ title }: { title: string }) => {
  const words = title.split(" ");

  return (
    <div className="flex items-center gap-4 text-center text-5xl md:text-7xl">
      {words.map((word, wordIndex) => (
        <div
          key={wordIndex}
          className={`border-x-1 p-4 drop-shadow-[0_0_2px_white] ${wordIndex === 2 ? "translate-y-10 md:translate-y-20" : ""}`}
        >
          {word.split("").map((char, charIndex) => (
            <span key={charIndex} className="block">
              {char}
            </span>
          ))}
        </div>
      ))}
    </div>
  );
};

export default VerticalTitle;
