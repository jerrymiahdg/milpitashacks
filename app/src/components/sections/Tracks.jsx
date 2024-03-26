const Tracks = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-950 bg-primary pt-20 pb-20 pl-5 pr-5">
      <div className="pb-20">
        <h1 className="text-4xl font-bold">Tracks</h1>
      </div>
      <div className="md:flex-row">
      <div className="flex gap-5">
        <div className="flex flex-col gap-10 p-10 bg-gray-950/50 rounded-lg mr-5">
          <h2 className="font-bold text-3xl sm:text-5xl text-yellow-200">
            Education
          </h2>
          <h3 className="text-lg">Build an edukcation website or app that helps users get educated</h3>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-10 p-10 bg-gray-950/50 rounded-lg">
          <h2 className="font-bold text-3xl sm:text-5xl text-yellow-200">
            Entertainment and Social Media
          </h2>
          <h3 className="text-lg">Build an entertaining application/website or a social media website/app</h3>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="flex flex-col gap-10 p-10 bg-gray-950/50 rounded-lg ml-5">
          <h2 className="font-bold text-3xl sm:text-5xl text-yellow-200">
            Assistive Technologies
          </h2>
          <h3 className="text-lg">Build a technology to help people with disabilities such as blindess and hearing loss</h3>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Tracks;
