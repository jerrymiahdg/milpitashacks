import { createContext, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/sections/About";
import Schedule from "./components/sections/Schedule";
import Tracks from "./components/sections/Tracks";
import FAQ from "./components/sections/FAQ";
import Team from "./components/sections/Team";
import Hero from "./components/sections/Hero";
import SideNav from "./components/SideNav";
import { useLocation } from "react-router-dom";
import { useRef } from "react";
import Sponsors from "./components/sections/Sponsors";

export const Context = createContext();

function App() {
  const tracksRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const scheduleRef = useRef();
  const sponsorsRef = useRef();
  const teamRef = useRef();
  const faqRef = useRef();

  const [sideNavActive, setSideNavActive] = useState(false);

  const location = useLocation();

  const scrollToSection = (scrollTo) => {
    if (scrollTo === "/home") {
      homeRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "/about") {
      aboutRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "/schedule") {
      scheduleRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "/tracks") {
      tracksRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "/faq") {
      faqRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "/sponsors") {
      sponsorsRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (scrollTo === "/team") {
      teamRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  // useEffect(() => scrollToSection(location), []);

  return (
    <>
      <Context.Provider
        value={{ sideNavActive, setSideNavActive, scrollToSection }}
      >
        <Nav />
        <SideNav />
        <div ref={homeRef}>
          <Hero />
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
        <div className="bg-gray-900 flex-col items-center justify-center p-20 w-full">
          <div className="pb-20">
            <h1 className="text-3xl font-bold">Register now.</h1>
          </div>
          <button className="bg-blue-600 opacity-90 p-2 rounded-md hover:opacity-100">
            <a
              target="_blank"
              href="https://p53ay3pczao.typeform.com/to/QaESmyAR"
            >
              Register
            </a>
          </button>
        </div>
      </Context.Provider>
    </>
  );
}

export default App;
