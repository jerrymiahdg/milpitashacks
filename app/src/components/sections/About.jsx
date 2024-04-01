import { GraduationCap, Utensils, Trophy } from "lucide-react";

const About = () => {
  return (
    <div className="flex flex-col items-center bg-gradient-to-b from-gray-950 to-gray-900 pt-20 pb-20 pl-5 pr-5">
      <div className="pb-20">
        <h1 className="text-7xl font-bold transition-transform">About</h1>
      </div>
      <div className="flex gap-5 max-w-7xl w-full flex-col md:flex-row">
        <div className="flex flex-col p-10 bg-gray-950/50 rounded-md w-full transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500">
          <h2 className="font-bold text-3xl inline-flex gap-5 py-3"><GraduationCap size={35}/>Beginner Friendly</h2>
          <h3 className="text-lg">
            All high schoolers regardless of coding experience can have fun!
          </h3>
        </div>
        <div className="flex flex-col p-10 bg-gray-950/50 rounded-md w-full transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500">
          <h2 className="font-bold text-3xl inline-flex gap-5 py-3"><Utensils size={35}/>Fully catered</h2>
          <h3 className="text-lg">
            No need to bring lunch or dinner! Our sponsors have generously
            covered food for everyone!
          </h3>
        </div>
        <div className="flex flex-col p-10 bg-gray-950/50 rounded-md w-full transition-all shadow-[0_0px_50px_-15px_rgba(0,0,0,0.3)] hover:shadow-[0_0px_100px_-15px_rgba(0,0,0,0.3)] shadow-indigo-800 hover:shadow-indigo-500">
          <h2 className="font-bold text-3xl inline-flex gap-5 py-3"><Trophy size={35} />Prizes</h2>
          <h3 className="text-lg">Over $TBD in prizes!</h3>
        </div>
      </div>
    </div>
  );
};

export default About;
