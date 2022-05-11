import React from "react";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      name="resume"
      className="bg-slate-800 text-slate-300 h-full md:h-screen"
      initial={{ x: 300, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0.5 }}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="p-4 mt-[70px] grid justify-items-start content-center">
          {/* Profile */}
          <div className="max-w-xl ">
            <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
              Profile
            </h2>

            <p className="p-2 text-center">
              I am a determined, motivated, and detail oriented worker with a
              personable, teachable attitude. I have recently completed a full
              stack web development bootcamp and am looking for new and exciting
              career opportunities in the vast world of technology.
            </p>
          </div>

          {/* Work Experience */}
          <div className="my-4">
            <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
              Work Experience
            </h2>

            <ul className="p-2">
              <li>
                CNC Machinist, Advance CNC Machining — August 2018–Present
              </li>
              <li>Rotomold Operator, Master Spas — November 2017-April 2018</li>
            </ul>
          </div>

          {/* Education */}
          <div className="my-4">
            <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
              Education
            </h2>

            <ul className="p-2">
              <li>
                Ohio State University - Fullstack Coding Bootcamp - October
                2021-April 2022
              </li>
              <li>
                Cedarville University - Bachelor of Arts in Worship - August
                2014-May 2017
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="my-4">
            <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
              Skills
            </h2>

            <div className="grid grid-cols-3 mt-2 p-2 text-center">
              <ol>
                <li>HTML5, CSS, JavaScript</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Tailwind</li>
              </ol>

              <ol>
                <li>MongoDB</li>
                <li>Express</li>
                <li>Node</li>
                <li>SQL</li>
              </ol>

              <ol>
                <li>Github</li>
                <li>Java</li>
                <li>C#</li>
                <li>Python</li>
              </ol>
            </div>
          </div>
        </div>
        <footer className="bg-slate-600 mb-2 py-2 px-[90px]">
          <div className="grid justify-items-center">
            <p>Charles DeBrosse</p>
            <p>cmdebrosse@outlook.com</p>
            <p>(937) 570-9305</p>
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default Resume;
