import { useState } from "react";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    [
      "Who can participate?",
      "Milpitas Hacks is open to high school students in all grades 9-12, no prior coding experience required! If you've graduated from high school, you cannot participate, but can help out by volunteering for the day.",
      false,
    ],
    [
      "Does this cost money?",
      "No! The Hackathon is totally free to attend, and all food (lunch, dinner, and snacks) will be provided.",
      false,
    ],
    [
      "What is Milpitas Hacks?",
      "A Hackathon a weekend long event where students (in teams of 1-4) compete for prizes, attend workshops, and most importantly, build meaningful projects.",
      false,
    ],
    [
      "What should I bring?",
      "Bring a laptop, a charger, a water bottle, and anything you might need. Food will be provided but you may bring your own as well, especially if you have food allergies.",
      false,
    ],
    [
      <b>"What if I have dietary restrictions?"</b>,
      "No problem! Fill out your dietary restrictions in the application form, and we will try our best to accomidate food options for you. However, we do not garantee that these accomidations will be made for you, so it is recomended you bring your own food if it is a serious health concern.",
      false,
    ],
    [
      "Where do I check in?",
      "At the Milpitas High School Theater. (The side of the D-building with the theater entrance.",
      false,
    ],
    [
      "Do I have to develop anything specific?",
      "Nope! You can develop whatever you want, but for track specific prizes, make sure to build a project related to the track.",
      false,
    ],
    [
      "I don't know anything about coding. Can I still participate?",
      "Yes! There will be several resources and workshops for those who don't know how to code to attend. Additionally, you can ask volunteers and event organizers for help.",
      false,
    ],
    [
      <b>"Can I arrive late?"</b>,
      "Yes but please make sure to inform organizers and have your team arrive before you so that we can save your spot and you don't get replaced by people on the waitlist.",
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
    <div className="flex flex-col items-center pt-20 pb-20 pl-5 pr-5  bg-gradient-to-t from-gray-950 bg-primary">
      <div className="pb-20">
        <h1 className="text-3xl font-bold">FAQ</h1>
      </div>
      <div className="flex flex-col p-5 bg-gray-950/50 rounded-lg max-w-5xl w-full">
        {faqs.map((faq, i) => (
          <div key={i} className="border-b border-gray-800">
            <div
              className="flex justify-between p-2 cursor-pointer"
              onClick={faqClickHandler(i)}
            >
              <h2 className="w-full font-bold text-lg">{faq[0]}</h2>
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
                } ease-in-out text-lg transition-all overflow-hidden`}
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

export default FAQ;
