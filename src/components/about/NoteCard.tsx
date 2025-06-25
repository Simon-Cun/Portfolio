type NoteCardProps = {
  title: string;
  description: string;
  isActive: boolean;
  onClick: () => void;
};

const NoteCard = ({ title, description, isActive, onClick }: NoteCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`w-full cursor-pointer py-2 pl-4 text-left transition-colors ${
        isActive ? "bg-blue-200 font-semibold" : "hover:bg-blue-200"
      }`}
    >
      <div>{title}</div>
      <div className="text-sm">{description}</div>
    </button>
  );
};

export default NoteCard;
