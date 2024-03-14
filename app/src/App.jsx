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
          <Route path="prospectus" element={<Prospectus />} />
        </Routes>
      </Context.Provider>
    </>
  );
}

export default App;
