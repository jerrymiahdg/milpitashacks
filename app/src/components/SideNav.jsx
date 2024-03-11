import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";

const SideNav = () => {
  const ctx = useContext(Context);

  const sideNavLinkClickHandler = (scrollTo) => {
    return () => {
      ctx.setSideNavActive(false);
      ctx.scrollToSection(scrollTo);
    };
  };

  return (
    <div
      className={`${
        ctx.sideNavActive ? "translate-y-[67px]" : "translate-y-[-352px]"
      } flex flex-col fixed bg-gray-950 right-0 p-8 gap-5 rounded-bl-2xl translate-y-[67px] transition-all border-l border-b border-gray-700 z-10`}
    >
      <Link to="about" onClick={sideNavLinkClickHandler("/about")}>
        About
      </Link>
      <Link to="schedule" onClick={sideNavLinkClickHandler("/schedule")}>
        Schedule
      </Link>
      <Link to="tracks" onClick={sideNavLinkClickHandler("/tracks")}>
        Tracks
      </Link>
      <Link to="faq" onClick={sideNavLinkClickHandler("/faq")}>
        FAQ
      </Link>
      <Link to="sponsors" onClick={sideNavLinkClickHandler("/sponsors")}>
        Sponsors
      </Link>
      <Link to="donate" onClick={sideNavLinkClickHandler("/donate")}>
        Donate
      </Link>
      <Link to="team" onClick={sideNavLinkClickHandler("/team")}>
        Team
      </Link>
    </div>
  );
};

export default SideNav;
