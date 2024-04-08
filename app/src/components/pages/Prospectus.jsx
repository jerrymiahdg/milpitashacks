import ProspectusFAQ from "../sections/ProspectusFAQ";
import { LampDemo } from "../ui/lamp";
import { Button } from "@nextui-org/button";

const Prospectus = ({ missionRef, prospectusRef, prospectusFaqRef }) => {
  return (
    <div className="bg-slate-950" ref={missionRef}>
      <LampDemo className="" />
      <div className="flex justify-center">
        <div className="flex flex-col gap-20 items-center px-10 pt-0 pb-20 max-w-4xl w-full font-bold">
          <h2 className="bg-gradient-to-br from-slate-300 to-slate-400 bg-clip-text text-transparent text-center leading-7 font-normal">
            Milpitas Hacks is the very first hackathon at Milpitas High School.
            Milpitas High School has long been the home of avid programmers,
            from web developers to backend engineers. We want to spread our
            passion to the rest of the Bay Area through Milpitas Hacks, a
            hackathon for Bay Area high schoolers that emphasizes the inclusion
            of women in STEM. This commitment of ours is reflected in our
            partnership with Milpitas High STEM Girls as well as Milpitas High
            Girls Who Code. This year, we are aiming to have around 200
            participants at Milpitas Hacks, which we can only do through your
            support! Help us make the first hackathon at Milpitas High School
            since its founding 55 years ago a success and support women in STEM
            by sponsoring us.
            <br />
            <br />
            Sponsoring gets you various benefits, including{" "}
            <a className="font-black">displaying your logo</a> on our website
            and other materials, distributing{" "}
            <a className="font-black">recruiting materials to 200+ members</a>,
            displaying <a className="font-black">company swag</a>, and
            showcasing your <a className="font-black">APIs/products</a>, among
            other benefits. We hope to welcome you into our Milpitas Hacks
            family!
          </h2>
        </div>
      </div>
      <div
        className="flex flex-col items-center p-5 gap-5 pb-20"
        ref={prospectusRef}
      >
        <div className="font-normal flex flex-col md:grid grid-cols-3 max-w-7xl w-full border border-gray-800 rounded-md">
          <div className="md:border-r border-gray-800 flex flex-col">
            <div className="font-bold text-lg p-5 bg-gray-950/50 border-b border-gray-800">
              Bronze | $750
            </div>
            <div className="p-5 gap-5 flex flex-col justify-between h-full">
              <div className="text-lg flex flex-col gap-2">
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>Logo on website under bronze tier</li>
                  <li>Distribute recruiting materials</li>
                  <li>Logo on shirts</li>
                  <li>
                    Notify everyone on the Discord Server (200+ participants)
                  </li>
                </ul>
              </div>
              <a href="mailto:milpitashacks@gmail.com">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-br from-white to-blue-300"
                >
                  Contact us!
                </Button>
              </a>
            </div>
          </div>
          <div className="border-t md:border-t-0 md:border-r border-gray-800 flex flex-col">
            <div className="font-bold text-lg p-5 bg-gray-950/50 border-b border-gray-800">
              Silver | $1200
            </div>
            <div className="p-5 gap-5 flex flex-col justify-between h-full">
              <div className="text-lg flex flex-col gap-2">
                <h1>Everything in bronze + the following:</h1>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>1 Emails to 150+ participants</li>
                  <li>Logo on our website under silver tier</li>
                  <li>Send a judge to the panel</li>
                  <li>
                    Mentioning company name in both Opening & Closing ceremony.
                  </li>
                  <li>Access to Devpost and participant emails</li>
                </ul>
              </div>
              <a href="mailto:milpitashacks@gmail.com">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-br from-white to-blue-300"
                >
                  Contact us!
                </Button>
              </a>
            </div>
          </div>
          <div className=" flex flex-col">
            <div className="font-bold text-lg p-5 border-t md:border-t-0  bg-gray-950/50 border-b border-gray-800">
              Gold | $2000
            </div>{" "}
            <div className="p-5 gap-5 flex flex-col justify-between h-full">
              <div className=" text-lg flex flex-col gap-2">
                <h1>Everything in silver and bronze + the following:</h1>
                <ul className="list-disc pl-5 flex flex-col gap-2">
                  <li>5 emails to 150+ participants</li>
                  <li>Distribute company swag</li>
                  <li>Logo on our website under gold tier</li>
                  <li>Custom award category with company name</li>
                  <li>Initial API/Product Demos</li>
                  <li>Sending 2 judges to the judging panel</li>
                </ul>
              </div>
              <a href="mailto:milpitashacks@gmail.com">
                <Button
                  size="lg"
                  className="w-full bg-gradient-to-br from-white to-blue-300"
                >
                  Contact us!
                </Button>
              </a>
            </div>
          </div>
        </div>
        <h1 className="text-lg font-normal">
          *all number of participants are estimates
        </h1>
        <div className="p-2"></div>
      </div>
      <div ref={prospectusFaqRef}>
        <ProspectusFAQ />
      </div>
    </div>
  );
};

export default Prospectus;
