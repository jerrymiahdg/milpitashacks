import React, { useEffect, useState } from "react";
import { Meteors } from "../ui/meteors";
import { Button } from "@nextui-org/button";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";
import { ArrowRight } from "lucide-react";

export function Countdown() {
  const DATE_OF_EVENT = new Date(2024, 4, 25, 8, 30);

  const getFormattedTime = () => {
    let time = DATE_OF_EVENT.getTime() - new Date().getTime();

    const result = {};

    result.days = Math.floor(time / (1000 * 60 * 60 * 24));

    time %= 1000 * 60 * 60 * 24;

    result.hrs = Math.floor(time / (1000 * 60 * 60));

    time %= 1000 * 60 * 60;

    result.min = Math.floor(time / (1000 * 60));

    time %= 1000 * 60;

    result.sec = Math.floor(time / 1000);

    return result;
  };

  const [formattedTime, setFormattedTime] = useState(getFormattedTime());

  useEffect(() => {
    setInterval(() => {
      setFormattedTime(getFormattedTime);
    }, 1000);
  }, []);

  return (
    <BackgroundGradientAnimation>
      <div className="bg-gradient-to-t from-gray-950 bg-primary">
        <div className=" h-screen absolute w-screen">
          <div
            className="relative border-none px-4 h-full overflow-hidden rounded-2xl flex flex-col 
          justify-center items-start"
          >
            <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md z-20">
              <div className="flex-col">
                <h1 className="text-5xl md:text-8xl sm:text-6xl lg:text-9xl font-bold text-center relative bg-gradient-to-b from-white to-blue-300 inline-block text-transparent bg-clip-text">
                  Milpitas Hacks
                </h1>
                <div className="md:text-xl text-lg lg:text-2xl text-gray-400 flex justify-center gap-3 pt-5 pb-10">
                  <h2 className="">May 25, 2024</h2>
                  <a
                    href="https://maps.app.goo.gl/iRRKw3qPCmobhjBu7"
                    target="_blank"
                    className="hover:underline "
                  >
                    @Milpitas High School Theater
                  </a>
                </div>
              </div>
              <div className="grid grid-flow-col gap-10 text-center auto-cols-max">
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": formattedTime.days }}></span>
                  </span>
                  days
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": formattedTime.hrs }}></span>
                  </span>
                  hours
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": formattedTime.min }}></span>
                  </span>
                  min
                </div>
                <div className="flex flex-col">
                  <span className="countdown font-mono text-5xl">
                    <span style={{ "--value": formattedTime.sec }}></span>
                  </span>
                  sec
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </BackgroundGradientAnimation>
  );
}

export default Countdown;