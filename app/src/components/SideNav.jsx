import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";

const SideNav = () => {
  const ctx = useContext(Context);
  console.log(ctx.sideNavActive);

  const sideNavLinkClickHandler = (scrollTo) => {
    return () => {
      ctx.setSideNavActive(false);
      ctx.scrollToSection(scrollTo);
    };
  };

  return (
    <>
      <div
        className={`${
          ctx.sideNavActive ? "max-h-96 py-8 border-b border-l" : "max-h-0"
        } translate-y-[67px] ease-in-out overflow-hidden flex flex-col fixed bg-primary/50 backdrop-blur-lg right-0 px-8 gap-5 rounded-bl-2xl transition-all  border-secondary z-40`}
      >
        <Link
          to="about"
          className="hover:text-blue-300 transition-all"
          onClick={sideNavLinkClickHandler("/about")}
        >
          About
        </Link>
        <Link
          to="schedule"
          className="hover:text-blue-300 transition-all"
          onClick={sideNavLinkClickHandler("/schedule")}
        >
          Schedule
        </Link>
        <Link
          to="tracks"
          className="hover:text-blue-300 transition-all"
          onClick={sideNavLinkClickHandler("/tracks")}
        >
          Tracks
        </Link>
        <Link
          to="faq"
          className="hover:text-blue-300 transition-all"
          onClick={sideNavLinkClickHandler("/faq")}
        >
          FAQ
        </Link>
        <Link
          to="sponsors"
          className="hover:text-blue-300 transition-all"
          onClick={sideNavLinkClickHandler("/sponsors")}
        >
          Sponsors
        </Link>
        <a
          href="https://hcb.hackclub.com/donations/start/milpitas-hacks"
          target="_blank"
          className="hover:text-blue-300 transition-all"
        >
          Donate
        </a>
        <Link
          to="team"
          className="hover:text-blue-300 transition-all"
          onClick={sideNavLinkClickHandler("/team")}
        >
          Team
        </Link>
      </div>
      <div
        className={`w-screen bg-transparent h-screen fixed z-30 ${
          ctx.sideNavActive ? "" : "hidden"
        }`}
        onClick={() => ctx.setSideNavActive(false)}
      ></div>
    </>
  );
};

export default SideNav;
