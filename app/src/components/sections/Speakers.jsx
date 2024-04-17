import { BackgroundGradient } from "../ui/background-gradient";
import linkedInPng from "../../assets/linkedin.png";
import raviPng from "../../assets/ravi.jpg";
import nikunjPng from "../../assets/nikunj.jpeg";

const Speakers = () => {
  return (
    <div className="flex flex-col items-center py-20 px-5  bg-gradient-to-t from-gray-900 to-gray-900">
      <div className="pb-20">
        <h1 className="text-6xl md:text-7xl font-bold ">Keynote Speakers</h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center pb-20 px-5 gap-10">
        <BackgroundGradient className="rounded-[22px] w-80 p-4 sm:p-10 bg-zinc-900">
          <img
            src={raviPng}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-full"
          />
          <p className="text-base text-center sm:text-xl mt-4 mb-2 text-transparent bg-clip-text bg-gradient-to-tr from-teal-200 to-violet-400">
            Ravi Annavajjhala
          </p>

          <p className="text-sm text-center text-white">
            CEO of Kinara, Inc.
          </p>
          <p className="text-sm text-center text-gray-500">
            MBA in Finance and Marketing at the Wharton School of the University of Pennsylvania
          </p>
        </BackgroundGradient>

        <BackgroundGradient className="rounded-[22px] w-80 h-max p-4 sm:p-10 bg-zinc-900">
          <img
            src={nikunjPng}
            alt="jordans"
            height="400"
            width="400"
            className="object-contain rounded-full"
          />
          <p className="text-base text-center sm:text-xl mt-4 mb-2 text-transparent bg-clip-text bg-gradient-to-tr from-teal-200 to-violet-400">
            Nikunj Mehta
          </p>

          <p className="text-sm text-center text-white">
            Founder and CEO of Falkonry
          </p>
          <p className="text-sm text-center text-gray-500">
            Co-Founder of Industry 4.0 Club<br />PhD in Computer Science at the University of Southern California
          </p>
        </BackgroundGradient>
      </div>
    </div>
  );
};

export default Speakers;