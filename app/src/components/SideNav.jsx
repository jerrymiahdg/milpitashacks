import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";

const SideNav = () => {
  const ctx = useContext(Context);

  return (
    <div
      className={`${
        ctx.sideNavActive ? "translate-y-[67px]" : "translate-y-[-352px]"
      } flex flex-col fixed bg-gray-950 right-0 p-8 gap-5 rounded-bl-2xl translate-y-[67px] transition-all border-l border-b border-gray-700 z-10`}
    >
      <Link to="about" onClick={ctx.scrollToSection}>
        About
      </Link>
      <Link to="schedule" onClick={ctx.scrollToSection}>
        Schedule
      </Link>
      <Link to="tracks" onClick={ctx.scrollToSection}>
        Tracks
      </Link>
      <Link to="faq" onClick={ctx.scrollToSection}>
        FAQ
      </Link>
      <Link to="sponsors" onClick={ctx.scrollToSection}>
        Sponsors
      </Link>
      <Link to="donate" onClick={ctx.scrollToSection}>
        Donate
      </Link>
      <Link to="team" onClick={ctx.scrollToSection}>
        Team
      </Link>
    </div>
  );
};

export default SideNav;
