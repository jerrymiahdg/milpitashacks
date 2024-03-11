const Tracks = () => {
  return (
    <div className="flex flex-col items-center bg-gray-900 pt-20 pb-20 pl-5 pr-5">
      <div className="pb-20">
        <h1 className="text-3xl font-bold">Tracks</h1>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-10 p-10 bg-gray-800 rounded-lg">
          <h2 className="font-bold text-5xl">Cybersecurity</h2>
          <h3>
            Develop a product that can be used to address and enchance the
            security of digital systems.
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
