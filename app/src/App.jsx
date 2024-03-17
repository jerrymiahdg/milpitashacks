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
import SideNav from "./components/SideNav";
import { Route, useLocation, Routes } from "react-router-dom";
import { useRef } from "react";
import Sponsors from "./components/sections/Sponsors";
import { MeteorsDemo } from "./components/sections/MeteorsDemo";
import { Button } from "./components/ui/moving-border";
import Landing from "./components/pages/Landing";
import Prospectus from "./components/pages/Prospectus";

export const Context = createContext();

function App() {
  const tracksRef = useRef();
  const homeRef = useRef();
  const aboutRef = useRef();
  const scheduleRef = useRef();
  const sponsorsRef = useRef();
  const teamRef = useRef();
  const faqRef = useRef();
  const prospectusRef = useRef();
  const missionRef = useRef();
  const prospectusFaqRef = useRef();

  const [sideNavActive, setSideNavActive] = useState(false);

  const location = useLocation();

  const scrollByRef = (ref) => {
    const navHeight = -67;
    const y =
      ref.current.getBoundingClientRect().top + window.scrollY + navHeight;
    window.scrollTo({ top: y, behavior: "smooth" });
  };

  const scrollToSection = (scrollTo) => {
    if (scrollTo === "/home") {
      scrollByRef(homeRef);
    } else if (scrollTo === "/about") {
      scrollByRef(aboutRef);
    } else if (scrollTo === "/schedule") {
      scrollByRef(scheduleRef);
    } else if (scrollTo === "/tracks") {
      scrollByRef(tracksRef);
    } else if (scrollTo === "/faq") {
      scrollByRef(faqRef);
    } else if (scrollTo === "/sponsors") {
      scrollByRef(sponsorsRef);
    } else if (scrollTo === "/team") {
      scrollByRef(teamRef);
    } else if (scrollTo === "/prospectus/mission") {
      scrollByRef(missionRef);
    } else if (scrollTo === "/prospectus/prospectus") {
      scrollByRef(prospectusRef);
    } else if (scrollTo === "/prospectus/faq") {
      scrollByRef(prospectusFaqRef);
    }
  };

  useEffect(() => {
    scrollToSection(location.pathname);
  }, []);

  return (
    <>
      <Context.Provider
        value={{ sideNavActive, setSideNavActive, scrollToSection }}
      >
        <Nav />
        <SideNav />
        <Routes>
          <Route
            path="/*"
            element={
              <Landing
                tracksRef={tracksRef}
                homeRef={homeRef}
                aboutRef={aboutRef}
                scheduleRef={scheduleRef}
                teamRef={teamRef}
                faqRef={faqRef}
                sponsorsRef={sponsorsRef}
              />
            }
          />
          <Route
            path="prospectus/*"
            element={
              <Prospectus
                missionRef={missionRef}
                prospectusRef={prospectusRef}
                prospectusFaqRef={prospectusFaqRef}
              />
            }
          />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
