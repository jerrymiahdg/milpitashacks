import { useState } from "react";
import Accordion from "../ui/Accordion";
// import { Accordion, AccordionItem } from "@nextui-org/react";

const FAQ = () => {
  const faqs = [
    [
      "Who can participate?",
      "Milpitas Hacks is open to high school students in all grades 9-12, no prior coding experience is required! If you've graduated from high school, you cannot participate, but you can help out by volunteering for the day.",
    ],
    [
      "Does this cost money?",
      "No! The Hackathon is totally free to attend, and all food (lunch, dinner, and snacks) will be provided.",
    ],
    [
      "Can I participate in a team?",
      "Absolutely! Teams can be up to 4 people; we encourage hackers to team up, but you can also go solo.  If you don't have a team, don't worry! We will have a team formation session at the beginning of the event.",
    ],
    [
      "What is Milpitas Hacks?",
      "A Hackathon a weekend long event where students (in teams of 1-4) compete for prizes, attend workshops, and most importantly, build meaningful projects.",
    ],
    [
      "What should I bring?",
      "Bring a laptop, a charger, a water bottle, and anything you might need. Food will be provided but you may bring your own as well, especially if you have food allergies.",
    ],
    [
      "What if I have dietary restrictions?",
      "No problem! Fill out your dietary restrictions in the application form, and we will try our best to accommodate food options for you. However, we do not guarantee that these accommodations will be made for you, so it is recommended you bring your own food if it is a serious health concern.",
    ],
    [
      "Where do I check in?",
      "At the Milpitas High School Theater. (The side of the D-building with the theater entrance)",
    ],
    [
      "Do I have to develop anything specific?",
      "Nope! You can develop whatever you want, but for track specific prizes, make sure to build a project related to the track.",
    ],
    [
      "I don't know anything about coding. Can I still participate?",
      "Yes! There will be several resources and workshops for those who don't know how to code to attend. Additionally, you can ask volunteers and event organizers for help.",
    ],
    [
      "Can I arrive late?",
      "Yes but please make sure to inform organizers and have your team arrive before you so that we can save your spot and you don't get replaced by people on the waitlist.",
    ],
    [
      "I have another question...",
      <>
        More questions? Reach out to us via{" "}
        <a
          href="mailto: team@milpitashacks.com"
          className="text-blue-200 hover:underline"
        >
          team@milpitashacks.com
        </a>
      </>,
    ],
  ];

  // const faqClickHandler = (i) => {
  //   return () => {
  //     if (faqs[i][2]) {
  //       setFaqs((prev) => {
  //         const copy = [...prev];
  //         copy[i][2] = false;
  //         return copy;
  //       });
  //     } else {
  //       setFaqs((prev) => {
  //         const copy = [...prev];
  //         copy[i][2] = true;
  //         return copy;
  //       });
  //     }
  //   };
  // };

  const [openFaq, setOpenFaq] = useState(-1);

  return (
    <div className="flex flex-col items-center pt-20 pb-40 pl-5 pr-5 bg-cover bg-gradient-to-b from-gray-900 to-gray-950">
      <div className="pb-20">
        <h1 className="text-7xl font-bold">FAQ</h1>
      </div>
      <div className="backdrop-blur-lg flex flex-col py-5 px-10 bg-gradient-to-tr from-gray-900 to-[#2a2a5a] rounded-lg max-w-5xl w-full">
        {faqs.map((faq, i) => (
          <Accordion
            key={i}
            id={i}
            title={faq[0]}
            body={faq[1]}
            openFaq={openFaq}
            setOpenFaq={setOpenFaq}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQ;
