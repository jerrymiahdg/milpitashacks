import { useState } from "react";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    [
      "Who can participate?",
      "Milpitas Hacks is open to high school students in all grades 9-12, no prior coding experience required! If you've graduated from high school, you cannot participate, but can help out by volunteering for the day.",
      false,
    ],
    [
      "Who can participate?",
      "Milpitas Hacks is open to high school students in all grades 9-12, no prior coding experience required! If you've graduated from high school, you cannot participate, but can help out by volunteering for the day.",
      false,
    ],
    [
      "Who can participate?",
      "Milpitas Hacks is open to high school students in all grades 9-12, no prior coding experience required! If you've graduated from high school, you cannot participate, but can help out by volunteering for the day.",
      false,
    ],
    [
      "Who can participate?",
      "Milpitas Hacks is open to high school students in all grades 9-12, no prior coding experience required! If you've graduated from high school, you cannot participate, but can help out by volunteering for the day.",
      false,
    ],
    [
      "Who can participate?",
      "Milpitas Hacks is open to high school students in all grades 9-12, no prior coding experience required! If you've graduated from high school, you cannot participate, but can help out by volunteering for the day.",
      false,
    ],
    [
      "Who can participate?",
      "Milpitas Hacks is open to high school students in all grades 9-12, no prior coding experience required! If you've graduated from high school, you cannot participate, but can help out by volunteering for the day.",
      false,
    ],
  ]);

  return (
    <div className="flex flex-col items-center p-20">
      <div className="pb-20">
        <h1 className="text-3xl font-bold">FAQ</h1>
      </div>
      <div className="flex flex-col p-5 bg-neutral-700 rounded-lg max-w-3xl w-full">
        {faqs.map((faq) => (
          <div>
            <div className="flex justify-between p-2">
              <h2>{faq[0]}</h2>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                viewBox="0 -960 960 960"
                width="24"
                fill="white"
              >
                <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z" />
              </svg>
            </div>
            <h1 className={faq[2] ? "" : "hidden"}>{faq[1]}</h1>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
