import { useContext, useState } from "react";
import circlePNG from "../assets/circle-logo.png";
import { Link } from "react-router-dom";
import { Context } from "../App";

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const ctx = useContext(Context);
  console.log(ctx);

  window.addEventListener("resize", () => {
    setWidth(window.innerWidth);
    console.log(width);
  });

  const menuClickHandler = () => {
    if (ctx.sideNavActive) {
      ctx.setSideNavActive(false);
    } else {
      ctx.setSideNavActive(true);
    }
  };

  const sideNavLinkClickHandler = () => {
    ctx.setSideNavActive(false);
    ctx.scrollToSection();
  };

  return (
    <div className="flex justify-center fixed w-full bg-gray-950 z-50 border-b border-gray-700">
      <div className="flex justify-between items-center p-2 max-w-7xl w-full">
        <Link>
          <img src={circlePNG} width={50}></img>
        </Link>
        <div className={`flex gap-5 ${width < 750 ? "hidden" : ""}`}>
          <Link to="about" onClick={sideNavLinkClickHandler}>
            About
          </Link>
          <Link to="schedule" onClick={sideNavLinkClickHandler}>
            Schedule
          </Link>
          <Link to="tracks" onClick={sideNavLinkClickHandler}>
            Tracks
          </Link>
          <Link to="faq" onClick={sideNavLinkClickHandler}>
            FAQ
          </Link>
          <Link to="sponsors" onClick={sideNavLinkClickHandler}>
            Sponsors
          </Link>
          <Link to="donate" onClick={sideNavLinkClickHandler}>
            Donate
          </Link>
          <Link to="team" onClick={sideNavLinkClickHandler}>
            Team
          </Link>
        </div>
        <div className="flex gap-5">
          <button className="bg-blue-600 opacity-90 p-2 rounded-md hover:opacity-100">
            Register
          </button>
          <button
            className={`bg-blue-600 opacity-90 p-2 rounded-md hover:opacity-100 ${
              width > 750 ? "hidden" : ""
            }`}
            onClick={menuClickHandler}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="25"
              viewBox="0 -960 960 960"
              width="25"
              fill="white"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
