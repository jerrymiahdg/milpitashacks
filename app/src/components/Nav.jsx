import { useContext, useState } from "react";
import logoPNG from "../assets/Milpitas Hacks Logo.png";
import { Link, useLocation } from "react-router-dom";
import { Context } from "../App";
import { Menu } from "lucide-react";

const Nav = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const ctx = useContext(Context);
  const location = useLocation();

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

  return (
    <div className="flex justify-center fixed w-full z-50 bg-slate-950/50 backdrop-blur-lg">
      <div className="flex justify-between items-center p-2 max-w-7xl w-full">
        <Link to="home" onClick={() => ctx.scrollToSection("/home")}>
          <img src={logoPNG} width={50} alt="Milpitas Hacks Logo"></img>
        </Link>
        <div
          className={`flex gap-5 ${
            width < 850 || location.pathname.includes("/prospectus")
              ? "hidden"
              : ""
          }`}
        >
          <Link
            to="about"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/about")}
          >
            About
          </Link>
          <Link
            to="schedule"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/schedule")}
          >
            Schedule
          </Link>
          <Link
            to="tracks"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/tracks")}
          >
            Tracks
          </Link>
          <Link
            to="speakers"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/speakers")}
          >
            Speakers
          </Link>
          <Link
            to="faq"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/faq")}
          >
            FAQ
          </Link>
          <Link
            to="judges"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/judges")}
          >
            Judges
          </Link>
          <Link
            to="sponsors"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/sponsors")}
          >
            Sponsors
          </Link>
          <Link
            to="team"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/team")}
          >
            Team
          </Link>
          <a
            href="https://hcb.hackclub.com/donations/start/milpitas-hacks"
            target="_blank"
            className="hover:text-blue-300 transition-all"
          >
            Donate
          </a>
        </div>
        <div
          className={`flex gap-5 ${
            width < 850 || !location.pathname.includes("/prospectus")
              ? "hidden"
              : ""
          }`}
        >
          <Link
            to="prospectus/mission"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/prospectus/mission")}
          >
            Mission
          </Link>
          <Link
            to="prospectus/perks"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/prospectus/perks")}
          >
            Perks
          </Link>
          <Link
            to="prospectus/faq"
            className="hover:text-blue-300 transition-all"
            onClick={() => ctx.scrollToSection("/prospectus/faq")}
          >
            FAQ
          </Link>
          <a
            href="https://hcb.hackclub.com/donations/start/milpitas-hacks"
            target="_blank"
            className="hover:text-blue-300 transition-all"
          >
            Donate
          </a>
        </div>
        <div className="flex gap-5 items-center">
          <a target="_blank" href="https://discord.gg/TkM3MGaTHF">
            <svg
              width="30px"
              height="30px"
              viewBox="0 -28.5 256 256"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              preserveAspectRatio="xMidYMid"
            >
              <g>
                <path
                  d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                  fill="#5865F2"
                  fill-rule="nonzero"
                ></path>
              </g>
            </svg>
          </a>
          <a target="_blank" href="https://www.instagram.com/milpitashacks">
            <svg width="30px" height="30px">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                id="instagram"
              >
                <linearGradient
                  id="a"
                  x1="1.464"
                  x2="14.536"
                  y1="14.536"
                  y2="1.464"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#FFC107"></stop>
                  <stop offset=".507" stop-color="#F44336"></stop>
                  <stop offset=".99" stop-color="#9C27B0"></stop>
                </linearGradient>
                <path
                  fill="url(#a)"
                  d="M11 0H5a5 5 0 0 0-5 5v6a5 5 0 0 0 5 5h6a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zm3.5 11c0 1.93-1.57 3.5-3.5 3.5H5c-1.93 0-3.5-1.57-3.5-3.5V5c0-1.93 1.57-3.5 3.5-3.5h6c1.93 0 3.5 1.57 3.5 3.5v6z"
                ></path>
                <linearGradient
                  id="b"
                  x1="5.172"
                  x2="10.828"
                  y1="10.828"
                  y2="5.172"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#FFC107"></stop>
                  <stop offset=".507" stop-color="#F44336"></stop>
                  <stop offset=".99" stop-color="#9C27B0"></stop>
                </linearGradient>
                <path
                  fill="url(#b)"
                  d="M8 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8zm0 6.5A2.503 2.503 0 0 1 5.5 8c0-1.379 1.122-2.5 2.5-2.5s2.5 1.121 2.5 2.5c0 1.378-1.122 2.5-2.5 2.5z"
                ></path>
                <linearGradient
                  id="c"
                  x1="11.923"
                  x2="12.677"
                  y1="4.077"
                  y2="3.323"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0" stop-color="#FFC107"></stop>
                  <stop offset=".507" stop-color="#F44336"></stop>
                  <stop offset=".99" stop-color="#9C27B0"></stop>
                </linearGradient>
                <circle cx="12.3" cy="3.7" r=".533" fill="url(#c)"></circle>
              </svg>
            </svg>
          </a>
          <button
            className={`bg-gray-500/25 opacity-80 p-2 rounded-md transition-all hover:opacity-100 ${
              width > 850 ? "hidden" : ""
            }`}
            onClick={menuClickHandler}
          >
            <Menu />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
