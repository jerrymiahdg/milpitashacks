const Schedule = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-20 pl-5 pr-5 justify-center gap-20 bg-gradient-to-t from-gray-950 bg-gray-900 20">
      <div className="rounded-lg flex-col max-w-3xl w-full gap-5 flex">
        <h1 className="font-bold text-6xl md:text-7xl text-center pb-10">
          Schedule
        </h1>
        <div className="flex flex-col px-10 py-5 bg-gradient-to-tr from-gray-900 to-[#25255a] rounded-3xl h-300 w-full shadow-2xl">
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">07:30 AM</h2>
            <h2 className="text-lg">Check-in</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">08:30 AM</h2>
            <h2 className="text-lg">Opening Ceremony</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">09:00 AM</h2>
            <h2 className="text-lg">Hacking Begins</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">09:30 AM</h2>
            <h2 className="text-lg">Beginner Frontend Workshop</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">10:15 AM</h2>
            <h2 className="text-lg">Intermediate Frontend Workshop (Frameworks)</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">10:30 AM</h2>
            <h2 className="text-lg">AI/ML Workshop</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">12:30 PM</h2>
            <h2 className="text-lg">Lunch</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">03:00 PM</h2>
            <h2 className="text-lg">Keynote Speaker</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">06:30 PM</h2>
            <h2 className="text-lg">Dinner</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">07:30 PM</h2>
            <h2 className="text-lg">Coding Ends</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">08:00 PM</h2>
            <h2 className="text-lg">Judging Begins</h2>
          </div>
          <div className="flex py-3 justify-between">
            <h2 className="text-lg">09:00 PM</h2>
            <h2 className="text-lg">Awards and Closing Ceremony</h2>
          </div>
        </div>
      </div>
      <h2 className="max-w-xl text-center text-lg">
        <a className="font-normal">This schedule is </a><a className="font-extrabold">subject to change.</a><a className="font-normal"> Please
        check back periodically or right before the day of the hackathon.</a>
      </h2>
    </div>
  );
};

export default Schedule;
