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
    <div
      className={`${
        ctx.sideNavActive ? "translate-nav-down" : "translate-nav-up"
      } flex flex-col fixed bg-gray-950 right-0 p-8 gap-5 rounded-bl-2xl transition-all border-l border-b border-gray-700 z-10`}
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
