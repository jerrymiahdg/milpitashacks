import ProspectusFAQ from "../sections/ProspectusFAQ";

const Prospectus = () => {
  return (
    <div className="bg-gradient-to-t from-gray-950 bg-primary">
      <div className="flex justify-center">
        <div className="flex flex-col gap-10 items-center px-10 py-48 max-w-4xl w-full font-bold">
          <h1 className="text-5xl md:text-7xl text-yellow-200 text-center">
            Milpitas Hacks Sponsors Prospectus
          </h1>
          <h2 className="text-center leading-7">
            Milpitas Hacks is the very first hackathon at Milpitas High School.
            Milpitas High School has long been the home of avid programmers,
            from web developers to backend engineers. We want to spread our
            passion to the rest of the Bay Area through Milpitas Hacks. Milpitas
            Hacks is hackathon for Bay Area high schoolers that emphasizes the
            inclusion of women in STEM. Our commitment to this is reflected in
            our partnership with Milpitas High STEM Girls as well as Milpitas
            High Girls Who Code. This year, we are aiming to have around 200
            participants at Milpitas Hacks which we can only do through your
            support! Help us make the first hackathon at Milpitas High School
            since its founding 55 years ago a success and support women in STEM
            by sponsoring us. Sponsoring gets you various benefits including
            your logo on our website, being able to distribute recruiting
            materials, being able to distribute company swag, and showcasing
            your APIs/products among other benefits. We hope to welcome you into
            our Milpitas Hacks family!
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-center p-5 gap-5 pb-20">
        <div className="flex flex-col md:grid grid-cols-3 max-w-7xl w-full border border-gray-800 rounded-md">
          <div className="md:border-r border-gray-800">
            <div className="font-bold text-lg p-5 bg-gray-950/50 border-b border-gray-800">
              Bronze | $750
            </div>
            <div className="p-5 text-lg flex flex-col gap-2">
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>Logo on website under bronze tier</li>
                <li>Distribute recruiting materials</li>
                <li>
                  Notify everyone on the Discord Server (200+ participants)
                </li>
              </ul>
            </div>
          </div>
          <div className="md:border-r border-gray-800">
            <div className="font-bold text-lg p-5 bg-gray-950/50 border-b border-gray-800">
              Silver | $1200
            </div>
            <div className="p-5 text-lg flex flex-col gap-2">
              <h1>Everything in bronze + the following:</h1>
              <ul className="list-disc pl-5 flex flex-col gap-2">
                <li>1 Emails to 150+ participants</li>
                <li>Logo on our website under silver tier</li>
                <li>Send a judge to the panel</li>
                <li>
                  Mentioning company name in both Opening & Closing ceremony.
                </li>
                <li>Logos on shirts</li>
                <li>Access to devpost and participant names</li>
              </ul>
            </div>
          </div>
          <div>
            <div className="font-bold text-lg p-5 bg-gray-950/50 border-b border-gray-800">
              Gold | $2000
            </div>
            <div className="p-5 text-lg flex flex-col gap-2">
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
          </div>
        </div>
        <h1 className="text-lg">*all number of participants are estimates</h1>
      </div>
      <ProspectusFAQ />
      <h1 className="text-lg">Interested in sponsoring us? Contact us at <a href="mailto:milpitashacks@gmail.com">milpitashacks@gmail.com</a></h1>
    </div>
  );
};

export default Prospectus;
