import { useContext, useEffect, useRef } from "react";
import About from "../sections/About";
import FAQ from "../sections/FAQ";
import { MeteorsDemo } from "../sections/MeteorsDemo";
import Schedule from "../sections/Schedule";
import Sponsors from "../sections/Sponsors";
import Team from "../sections/Team";
import Tracks from "../sections/Tracks";
import { Button } from "../ui/moving-border";
import { Context } from "../../App";

const Landing = ({
  tracksRef,
  homeRef,
  sponsorsRef,
  aboutRef,
  scheduleRef,
  teamRef,
  faqRef,
}) => {
  //   const tracksRef = useRef();
  //   const homeRef = useRef();
  //   const aboutRef = useRef();
  //   const scheduleRef = useRef();
  //   const sponsorsRef = useRef();
  //   const teamRef = useRef();
  //   const faqRef = useRef();

  //   getScrollToSection(
  //   const scrollToSection = (scrollTo) => {
  //     if (scrollTo === "/home") {
  //       homeRef.current.scrollIntoView({ behavior: "smooth" });
  //     } else if (scrollTo === "/about") {
  //       aboutRef.current.scrollIntoView({ behavior: "smooth" });
  //     } else if (scrollTo === "/schedule") {
  //       scheduleRef.current.scrollIntoView({ behavior: "smooth" });
  //     } else if (scrollTo === "/tracks") {
  //       tracksRef.current.scrollIntoView({ behavior: "smooth" });
  //     } else if (scrollTo === "/faq") {
  //       faqRef.current.scrollIntoView({ behavior: "smooth" });
  //     } else if (scrollTo === "/sponsors") {
  //       sponsorsRef.current.scrollIntoView({ behavior: "smooth" });
  //     } else if (scrollTo === "/team") {
  //       teamRef.current.scrollIntoView({ behavior: "smooth" });
  //     }
  //   };
  //   );
  //   useEffect(() => {
  //     console.log(props.message);
  //     props.setScrollToSection(scrollToSection);
  //   }, []);

  const ctx = useContext(Context);

  return (
    <>
      <div ref={homeRef}>
        <MeteorsDemo />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={scheduleRef}>
        <Schedule />
      </div>
      <div ref={tracksRef}>
        <Tracks />
      </div>
      <div ref={faqRef}>
        <FAQ />
      </div>
      <div ref={sponsorsRef}>
        <Sponsors />
      </div>
      <div ref={teamRef}>
        <Team />
      </div>
      <div className="flex justify-center bg-gray-900">
        <div className="flex  flex-col items-center justify-center p-20 md:flex-row md:justify-between gap-10 w-full max-w-7xl">
          <h1 className="text-4xl font-bold text-yellow-200">Register now.</h1>
          <a
            target="_blank"
            href="https://p53ay3pczao.typeform.com/to/QaESmyAR"
          >
            <Button>Register</Button>
          </a>
        </div>
      </div>
    </>
  );
};

export default Landing;
