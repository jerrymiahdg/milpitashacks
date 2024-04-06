import { useState } from "react";
import Accordion from "../ui/Accordion";
// import { Accordion, AccordionItem } from "@nextui-org/react";

const ProspectusFAQ = () => {
  const [faqs, setFaqs] = useState([
    [
      "Why should you sponsor Milpitas Hacks?",
      "Milpitas Hacks is the first high school hackathon of Milpitas High School in its 55 year history. Being one of the first sponsors for Milpitas Hacks will set up your company for upcoming hackathons and provide valuable recruiting and advertising opportunities.",
      false,
    ],
    [
      "How will funds be used?",
      "Any funds received through donations and sponsorships will be used to provide food and snacks for all participants, judges, and organizers, pay for prizes, pay for operational costs, and merchandise.",
      false,
    ],
    [
      "Are sponsorships tax deductible?",
      "Yes. Milpitas Hacks is fiscally sponsored by Hack Club, a 501(c)(3) nonprofit legally registered as The Hack Foundation. Our EIN: 81-2908499.",
      false,
    ],
    [
      "How can you help?",
      "Sponsoring Milpitas Hacks is the best way to help. Other than that, sending mentors, judges, or providing free trials of pro versions of products for hackers to use also helps tremendously!",
      false,
    ],
    [
      "I have another question...",
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
        <h1 className="text-5xl md:text-6xl font-bold">FAQ</h1>
      </div>
      {/* <Accordion variant="" className="backdrop-blur-lg flex flex-col py-5 px-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg max-w-5xl w-full">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} aria-label={faq[0]} title={<span className="text-white">{faq[0]}</span>}>
            {faq[1]}
          </AccordionItem>
        ))}
      </Accordion> */}
      <div className="backdrop-blur-lg flex flex-col py-5 px-10 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg max-w-5xl w-full">
        {faqs.map((faq, i) => <Accordion key={i} title={faq[0]} body={faq[1]}/>)}
      </div>
    </div>
  );
};

export default ProspectusFAQ;
