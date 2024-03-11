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
      <Link to="about">About</Link>
      <Link to="schdule">Schedule</Link>
      <Link to="tracks">Tracks</Link>
      <Link to="faq">FAQ</Link>
      <Link to="sponsors">Sponsors</Link>
      <Link to="donate">Donate</Link>
      <Link to="team">Team</Link>
    </div>
  );
};

export default SideNav;
