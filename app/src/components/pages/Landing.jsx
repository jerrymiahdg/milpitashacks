import { useContext, useEffect, useRef } from "react";
import About from "../sections/About";
import FAQ from "../sections/FAQ";
import { BackgroundGradientAnimationDemo } from "../sections/BackgroundGradientAnimationDemo";
import Schedule from "../sections/Schedule";
import Sponsors from "../sections/Sponsors";
import Team from "../sections/Team";
import Thanks from "../sections/Thanks";
import Tracks from "../sections/Tracks";
import { Button } from "../ui/moving-border";
import { Context } from "../../App";
import { ArrowRight } from "lucide-react";

const Landing = ({
  tracksRef,
  homeRef,
  sponsorsRef,
  aboutRef,
  scheduleRef,
  teamRef,
  faqRef,
  thanksRef,
}) => {
  return (
    <>
      <div ref={homeRef}>
        <BackgroundGradientAnimationDemo />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={scheduleRef}>
        <Schedule />
      </div>
      <div ref={tracksRef}>
        <Tracks />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <div ref={sponsorsRef}>
        <Sponsors />
      </div>
      <div ref={teamRef}>
        <Team />
      </div>
      {/*<div ref={thanksRef}>
        <Thanks />
      </div>*/}

      <div className="flex justify-center bg-gradient-to-b from-gray-950 bg-primary">
        <div className="flex  flex-col items-center justify-center p-20 md:flex-row md:justify-between gap-10 w-full max-w-7xl">
          <h1 className="text-5xl font-bold text-center md:text-left">Register now.</h1>
          <a
            target="_blank"
            href="https://tripetto.app/run/O7E32KMH7T"
            className="z-20"
          >
            <button className="btn btn-lg">
              Register
              <ArrowRight />
            </button>
          </a>
        </div>
      </div>
      <div className="bg-primary">
        <h2 className="text-center leading-7 p-10">
          Milpitas Hacks is fiscally sponsored by The Hack Foundation (d.b.a. Hack
          Club), 501(c)(3), (EIN: 81-2908499).
        </h2>
      </div>
    </>
  );
};

export default Landing;
