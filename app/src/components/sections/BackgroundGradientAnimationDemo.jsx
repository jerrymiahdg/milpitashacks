
import React, { useEffect, useState } from "react";
import { Meteors } from "../ui/meteors";
import { Button } from "../ui/moving-border";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function BackgroundGradientAnimationDemo() {
  const DATE_OF_EVENT = new Date(2024, 4, 25, 8, 30);

  const getFormattedTime = () => {
    let time = DATE_OF_EVENT.getTime() - new Date().getTime();
      
    const result = {};

    result.days = Math.floor(time / (1000 * 60 * 60 * 24));

    time %= (1000 * 60 * 60 * 24);

    result.hrs = Math.floor(time / (1000 * 60 * 60));

    time %= (1000 * 60 * 60);

    result.min = Math.floor(time / (1000 * 60));

    time %= (1000 * 60);
    
    result.sec = Math.floor(time / 1000);

    return result;
  }

  const [formattedTime, setFormattedTime] = useState(getFormattedTime())

  useEffect(() => {
    setInterval(() => {
      setFormattedTime(getFormattedTime)
    }, 1000)
  }, [])

  return (
    <BackgroundGradientAnimation>
    <div className="bg-gradient-to-t from-gray-950 bg-primary">
      <div className=" h-screen absolute w-screen">
        <div className="relative border-none px-4 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
          <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md z-20">
            <div className="flex-col">
              <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-yellow-200 relative">
                Milpitas Hacks
              </h1>
              <div className="flex justify-between gap-10">
                <h2 className="text-yellow-200">May 25, 2024</h2>
                <a
                  href="https://www.google.com/maps/place/Milpitas+High+School/@37.4509418,-121.901557,18.63z/data=!4m6!3m5!1s0x808fcf3566e07d13:0x8cb806b94146f8!8m2!3d37.4509315!4d-121.9005301!16zL20vMDVjanI0?entry=ttu"
                  target="_blank"
                  className="hover:underline text-yellow-200"
                >
                  @ Milpitas High School
                </a>
              </div>
            </div>
            <div className="w-[40rem] h-5 relative">
              {/* Gradients */}
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" />
              {/* Radial Gradient to prevent sharp edges */}
              <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
            <div className="text-sm md:text-md lg:text-lg text-center pb-14">
              <h1 className="italic">In {formattedTime.days} days, {formattedTime.hrs} hours, {formattedTime.min} minutes, and {formattedTime.sec} seconds</h1>
            </div>
            <a
              target="_blank"
              href="https://tripetto.app/run/O7E32KMH7T"
              className="z-20"
            >
              <Button>Register</Button>
            </a>
          </div>
        </div>
      </div>
    </div>
    </BackgroundGradientAnimation>
  );
}
