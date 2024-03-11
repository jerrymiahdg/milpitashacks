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

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nav />
      <div className="flex justify-center items-center w-screen h-screen">
        <h1 className="text-7xl font-bold">Milpitas Hacks 2024</h1>
      </div>
      <About />
      <Schedule />
      <Tracks />
      <FAQ />
      <Team />
    </>
  );
}

export default App;
