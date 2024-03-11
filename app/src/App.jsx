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

export const Context = createContext();

function App() {
  const tracksRef = useRef();
  console.log(tracksRef);

  const [sideNavActive, setSideNavActive] = useState(false);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    if (location.pathname === "/tracks") {
      tracksRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <>
      <Context.Provider value={{ sideNavActive, setSideNavActive }}>
        <Nav />
        <SideNav />
        <Hero />
        <About />
        <Schedule />
        <div ref={tracksRef}>
          <Tracks />
        </div>
        <FAQ />
        <Team />
      </Context.Provider>
    </>
  );
}

export default App;
