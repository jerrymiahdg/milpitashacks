import { useState } from "react";

const ProspectusFAQ = () => {
  const [faqs, setFaqs] = useState([
    [
      <b>"Why should you sponsor Milpitas Hacks?"</b>,
      "Milpitas Hacks is the first high school hackathon of Milpitas High School in its 55 year history. Being one of the first sponsors for Milpitas Hacks will set up your company for upcoming hackathons and provide valuable recruiting and advertising opportunities.",
      false,
    ],
    [
      <b>"How will funds be used?"</b>,
      "Any funds received through donations and sponsorships will be used to provide food and snacks for all participants, judges, and organizers, pay for prizes, pay for operational costs, and merchandise.",
      false,
    ],
    [
      <b>"Are sponsorships tax deductible?"</b>,
      "Yes. Milpitas Hacks is fiscally sponsored by Hack Club, a 501(c)(3) nonprofit legally registered as The Hack Foundation. Our EIN: 81-2908499.",
      false,
    ],
    [
      <b>"How can you help?"</b>,
      "Sponsoring Milpitas Hacks is the best way to help. Other than that, sending mentors, judges, or providing free trials of pro versions of products for hackers to use also helps tremendously!",
      false,
    ],
    [
      <b>"I have another question..."</b>,
      <>
        More questions? Reach out to us via{" "}
        <a
          href="mailto: milpitashacks@gmail.com"
          className="text-blue-200 hover:underline"
        >
          milpitashacks@gmail.com
        </a>
      </>,
      false,
    ],
  ]);
  console.log(faqs);

  const faqClickHandler = (i) => {
    return () => {
      if (faqs[i][2]) {
        setFaqs((prev) => {
          const copy = [...prev];
          copy[i][2] = false;
          return copy;
        });
      } else {
        setFaqs((prev) => {
          const copy = [...prev];
          copy[i][2] = true;
          return copy;
        });
      }
    };
  };

  return (
    <div className="flex flex-col items-center py-20 pl-5 pr-5 border-t border-gray-900">
      <div className="pb-20">
        <h1 className="text-3xl font-bold">Prospectus FAQ</h1>
      </div>
      <div className="flex flex-col px-5 pt-5 rounded-lg max-w-3xl w-full">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-800">
            <div
              className="flex justify-between p-2 cursor-pointer"
              onClick={faqClickHandler(i)}
            >
              <h2 className="w-full">{faq[0]}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="white"
                className={`transition-all ${faq[2] ? "rotate-45" : ""}`}
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
            </div>
            <div className={`pl-2 transition-all ${faq[2] ? "pb-2" : ""}`}>
              <h1
                className={`${
                  faq[2] ? " max-h-56" : "max-h-0"
                } ease-in-out transition-all overflow-hidden`}
              >
                {faq[1]}
              </h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProspectusFAQ;
