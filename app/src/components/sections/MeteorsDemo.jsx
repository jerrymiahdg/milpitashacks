import React, { useEffect, useState } from "react";
import { Meteors } from "../ui/meteors";
import { Button } from "../ui/moving-border";
import { BackgroundGradientAnimation } from "../ui/background-gradient-animation";

export function MeteorsDemo() {
  const dateOfEvent = new Date(2024, 4, 25, 10);
  const [timeUntilEvent, setTimeUntilEvent] = useState(new Date(dateOfEvent.getTime() - new Date().getTime()));

  useEffect(() => {
    setInterval(() => {
      setTimeUntilEvent(new Date(dateOfEvent.getTime() - new Date().getTime()));
    }, 1000)
  }, [])

  return (
    <div className="bg-gradient-to-t from-gray-950 bg-primary">
      {/* <BackgroundGradientAnimation className="h-full"> */}
      <div className=" h-screen relative w-screen">
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}
        {/* <div className="relative shadow-xl bg-gray-950 border-none px-4 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
          <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-yellow-200 relative z-20">
              Milpitas Hacks
            </h1>
            <div className="w-[40rem] h-20 relative"> */}
        {/* Gradients */}
        {/* <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
              <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-[5px] w-1/4 blur-sm" />
              <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px w-1/4" /> */}
        {/* Radial Gradient to prevent sharp edges */}
        {/* <div className="absolute inset-0 w-full h-full [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
            </div>
              <a
                target="_blank"
                href="https://p53ay3pczao.typeform.com/to/QaESmyAR"
              >
            <Button>
                Register
            </Button>
              </a>
          </div> */}
        {/* Meaty part - Meteor effect */}
        {/* <Meteors number={20} />
        </div>
      </div> */}

        {/* <div className=" h-screen relative w-screen"> */}
        {/* <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" /> */}
        <div className="relative border-none px-4 h-full overflow-hidden rounded-2xl flex flex-col justify-center items-start">
          <div className="w-full flex flex-col items-center justify-center overflow-hidden rounded-md">
            <div className="flex-col">
              <h1 className="md:text-7xl text-3xl lg:text-9xl font-bold text-center text-yellow-200 relative z-20">
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
              <h1 className="italic">In {((timeUntilEvent.getMonth() * 30) + timeUntilEvent.getDay())} Days, {timeUntilEvent.getHours()} Hours, {timeUntilEvent.getMinutes()} Minutes, and {timeUntilEvent.getSeconds()} Seconds</h1>
            </div>
            <a
              target="_blank"
              href="https://tripetto.app/run/O7E32KMH7T"
              className="z-20"
            >
              <Button>Register</Button>
            </a>
          </div>
          {/* Meaty part - Meteor effect */}
          {/* <Meteors number={200} /> */}
        </div>
      </div>

      {/* </BackgroundGradientAnimation> */}
    </div>
  );
}
