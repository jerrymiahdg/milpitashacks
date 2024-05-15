// @ts-nocheck

import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import linkedinPng from "../../assets/linkedin.png";
import lakshPng from "../../assets/laksh.jpeg";
import pavanPng from "../../assets/pavan.jpeg";
import kevinPng from "../../assets/kevin.jpeg";
import muraliPng from "../../assets/murali.png";
import pradeepPng from "../../assets/pradeep.jpeg";
import sandeepPng from "../../assets/sandeep.png";
import sumitPng from "../../assets/sumit.png";
import gaureshPng from "../../assets/gauresh.jpg";
import blankPng from "../../assets/blank.jpeg";

export const projects = [
  {
    title: "Pavan Kumar",
    description: "Senior Manager at Apple",
    link: "https://www.linkedin.com/in/pavanrvs/",
    png: pavanPng,
  },

  {
    title: "Kevin Macwan",
    description: "Software Engineering Manager at Amazon",
    link: "https://www.linkedin.com/in/kevin-macwan-85a55165/",
    png: kevinPng,
  },

  {
    title: "Murali Ganji",
    description: "Software Engineer at Meta",
    link: "https://www.linkedin.com/in/murali-ganji-81b85424/",
    png: muraliPng,
  },

  {
    title: "Pradeep Kumar",
    description: "Software Development Engineer at Amazon",
    link: "https://www.linkedin.com/in/pkumar28/",
    png: pradeepPng,
  },

  {
    title: "Sumit Bhatnagar",
    description: "VP of Software Engineering at JP Morgan Chase & Co.",
    link: "https://www.linkedin.com/in/sumitbhatnagar1411/",
    png: sumitPng,
  },

  {
    title: "Gauresh Rane",
    description: "Engineer Manager at WhatsApp",
    link: "https://www.linkedin.com/in/gauresh-rane-55772913/",
    png: gaureshPng,
  },
  { title: "Sandeep Shah",
    description: "Sr. Director, Corporate Quality at Netapp",
    link: "https://linkedin.com/in/sandeep-shah-10082a1/",
    png: sandeepPng,
  },
  // ...rest of the projects
];

export const HoverEffect = () => {
  let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="max-w-5xl mx-auto px-5 z-20">
      <div className="flex flex-wrap justify-center">
        {projects.map((project, idx) => (
          <div
            key={project?.link}
            className="relative group  block p-2 h-full w-full sm:w-1/2 md:w-1/3"
            onMouseEnter={() => setHoveredIndex(idx)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <AnimatePresence>
              {hoveredIndex === idx && (
                <motion.span
                  className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
                  layoutId="hoverBackground" // required for the background to follow
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: { duration: 0.15 },
                  }}
                  exit={{
                    opacity: 0,
                    transition: { duration: 0.15, delay: 0.2 },
                  }}
                />
              )}
            </AnimatePresence>
            <div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-800/[0.2] border border-transparent group-hover:border-slate-700 relative z-50">
              <div className="relative z-50">
                <div className="p-4">
                  <h4 className="text-lg text-zinc-100 font-bold tracking-wide mt-4 text-center flex items-center justify-center h-12">
                    {project.title}
                  </h4>
                  <p className="mt-2 text-zinc-400 tracking-wide leading-relaxed text-sm text-center flex items-center justify-center h-11">
                    {project.description}
                  </p>
                  <div className="py-5 rounded-xl text-xs font-normal dark:text-white flex items-center justify-center">
                    <img
                      className="rounded-full aspect-square object-cover"
                      src={project.png}
                      width="125"
                      height="125"
                      alt={project.title}
                    />
                  </div>
                  <div className="pt-2 rounded-xl text-xs font-normal dark:text-white flex w-full justify-center">
                    <a href={project.link} target="_blank">
                      <img
                        src={linkedinPng}
                        className="rounded-sm"
                        width="25"
                        height="25"
                        alt="LinkedIn Logo"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
