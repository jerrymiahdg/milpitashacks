const Schedule = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-20 pl-5 pr-5 justify-center gap-20 bg-gradient-to-t from-gray-950 bg-primary 20">
      <div className="rounded-lg flex-col max-w-3xl w-full gap-5 flex">
        <h1 className="font-bold text-4xl sm:text-5xl text-center">
          <a className="text-yellow-200">MILPITAS</a>HACKS <br /> SCHEDULE
        </h1>
        <div className="flex justify-between">
          <h2 className="text-lg">08:30 AM</h2>
          <h2 className="text-lg">Check-in</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-lg">09:30 AM</h2>
          <h2 className="text-lg">Opening Ceremony</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-lg">10:00 AM</h2>
          <h2 className="text-lg">Hacking Begins</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-lg">10:30 AM</h2>
          <h2 className="text-lg">Java Workshop</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-lg">11:30 AM</h2>
          <h2 className="text-lg">AI/ML Workshop</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-lg">12:30 PM</h2>
          <h2 className="text-lg">Lunch</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-lg">04:00 PM</h2>
          <h2 className="text-lg">Keynote Speaker</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-lg">06:30 PM</h2>
          <h2 className="text-lg">Dinner</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-lg">08:00 PM</h2>
          <h2 className="text-lg">Coding Ends</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-lg">08:15 PM</h2>
          <h2 className="text-lg">Judging Begins</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="text-lg">09:30 PM</h2>
          <h2 className="text-lg">Awards and Closing Ceremony</h2>
        </div>
      </div>
      <h2 className="max-w-xl text-center text-lg">
        <a className="font-bold">This schedule is subject to change.</a> Please
        check back periodically or right before the day of the hackathon.
      </h2>
    </div>
  );
};

export default Schedule;
