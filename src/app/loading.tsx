const Loading = () => {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="mb-4 animate-pulse text-3xl font-semibold">
        Loading...
      </div>
      <div className="h-16 w-16 animate-spin rounded-full border-4 border-white border-t-transparent"></div>
    </div>
  );
};

export default Loading;
