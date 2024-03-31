const Tracks = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-950 bg-primary pt-20 pb-20 pl-5 pr-5">
      <div className="pb-20">
        <h1 className="text-4xl font-bold">Tracks</h1>
      </div>
      <div className="flex max-w-7xl w-full flex-col lg:flex-row gap-5">
        <div className="flex flex-col gap-10 p-10 bg-gray-950/50 rounded-lg">
          <h2 className="font-bold text-3xl sm:text-4xl text-yellow-200">
            To be announced
          </h2>
          <h3 className="text-lg">
            To be announced...
          </h3>
        </div>
        <div className="flex flex-col gap-10 p-10 bg-gray-950/50 rounded-lg">
          <h2 className="font-bold text-3xl sm:text-4xl text-yellow-200">
          To be announced
          </h2>
          <h3 className="text-lg">
          To be announced...
          </h3>
        </div>
        <div className="flex flex-col gap-10 p-10 bg-gray-950/50 rounded-lg">
          <h2 className="font-bold text-3xl sm:text-4xl text-yellow-200">
          To be announced
          </h2>
          <h3 className="text-lg">
          To be announced...
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
