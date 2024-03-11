import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Nav from "./components/Nav";
import About from "./components/sections/About";
import Schedule from "./components/sections/Schedule";
import Tracks from "./components/sections/Tracks";
import FAQ from "./components/sections/FAQ";
import Team from "./components/sections/Team";
import { Hero } from "./components/sections/Hero";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <Schedule />
      <Tracks />
      <FAQ />
      <Team />
    </>
  );
}

export default App;
