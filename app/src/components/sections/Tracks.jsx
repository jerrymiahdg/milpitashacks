import { Megaphone, Landmark, MessageCircleHeart, Accessibility } from "lucide-react";

const Tracks = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-950 bg-gray-900 pt-20 pb-40 pl-5 pr-5">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold">Tracks</h1>
      </div>
      <div className="flex max-w-7xl w-full flex-col lg:flex-row gap-5 justify-evenly">
        <div className="flex flex-col gap-10 p-10 bg-gray-950 rounded-lg transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500">
          <h2 className="font-bold text-3xl sm:text-4x inline-flex gap-5">
            <Megaphone size={35} />
            TBA
          </h2>
          <h3 className="font-normal text-lg">
            To be announced...
          </h3>
        </div>
        <div className="flex flex-col gap-10 p-10 bg-gray-950 rounded-lg transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500">
          <h2 className="font-bold text-3xl sm:text-4xl inline-flex gap-5">
            <Megaphone size={35}/>
            TBA
          </h2>
          <h3 className="font-normal text-lg">
            To be announced...
          </h3>
        </div>
        <div className="flex flex-col gap-10 p-10 bg-gray-950 rounded-lg transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500">
          <h2 className="font-bold text-3xl sm:text-4xl inline-flex gap-5">
            <Megaphone size={35}/>
            TBA
          </h2>
          <h3 className="font-normal text-lg">
            To be announced...
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Tracks;
