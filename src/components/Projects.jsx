import React from "react";
import { motion } from "framer-motion";

import NoteTaker from "../assets/express-note-taker.png";
import CodingQuiz from "../assets/coding-quiz.png";
// import PasswordGenerator from "../assets/password-generator.png";
import OfflineBudgeter from "../assets/offline-budgeter.png";
import TeamHTMLGenerator from "../assets/team-html-generator.png";
import WorkdayScheduler from "../assets/work-day-scheduler.png";
import CuriousTraveler from "../assets/curious-traveler.png";

const Projects = () => {
  return (
    <motion.div
      name="projects"
      className="w-full md:h-screen bg-slate-800 text-slate-300"
      initial={{ x: 300, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0.5 }}
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        {/* Heading */}
        <div className="mt-[60px] pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Projects
          </p>
          <p className="py-2">// Check out some of my recent projects</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Curious Traveler Card */}
          <div
            style={{ backgroundImage: `url(${CuriousTraveler})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Full-Stack Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://curious-traveler.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg hover:bg-indigo-300 duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/cmdebrosse/curious-traveler">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-900 font-bold text-lg hover:bg-blue-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Offline Budget Card */}
          <div
            style={{ backgroundImage: `url(${OfflineBudgeter})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Full-Stack Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://damp-brushlands-38652.herokuapp.com/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg hover:bg-indigo-300 duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/cmdebrosse/offline-budget-tracker">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-900 font-bold text-lg hover:bg-blue-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Express Note Taker Card */}
          <div
            style={{ backgroundImage: `url(${NoteTaker})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Express JS Application
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg hover:bg-indigo-300 duration-300">
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/cmdebrosse/express-note-taker">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-900 font-bold text-lg hover:bg-blue-300">
                    Code
                  </button>
                </a>
                <p className="text-white">*Install required</p>
              </div>
            </div>
          </div>

          {/* Coding Quiz Card */}
          <div
            style={{ backgroundImage: `url(${CodingQuiz})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                JavaScript Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://cmdebrosse.github.io/quiz-game/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg hover:bg-indigo-300 duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/cmdebrosse/quiz-game">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-900 font-bold text-lg hover:bg-blue-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Password Generator Card
          <div
            style={{ backgroundImage: `url(${PasswordGenerator})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                JavaScript Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://cmdebrosse.github.io/password-generator/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg hover:bg-indigo-300 duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/cmdebrosse/password-generator">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-900 font-bold text-lg hover:bg-blue-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div> */}

          {/* Team Generator Card */}
          <div
            style={{ backgroundImage: `url(${TeamHTMLGenerator})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                Node JS Application
              </span>
              <div className="pt-8 text-center">
                {/* <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg hover:bg-indigo-300 duration-300">
                    Demo
                  </button>
                </a> */}
                <a href="https://github.com/cmdebrosse/team-profile-generator">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-900 font-bold text-lg hover:bg-blue-300">
                    Code
                  </button>
                </a>
                <p className="text-white">*Install required</p>
              </div>
            </div>
          </div>

          {/* Workday Scheduler Card */}
          <div
            style={{ backgroundImage: `url(${WorkdayScheduler})` }}
            className="shadow-lg shadow-black group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-500">
              <span className="text-2xl font-bold text-white tracking-wider">
                HTML & JS Application
              </span>
              <div className="pt-8 text-center">
                <a href="https://cmdebrosse.github.io/workday-scheduler/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-800 font-bold text-lg hover:bg-indigo-300 duration-300">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/cmdebrosse/workday-scheduler">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-slate-900 font-bold text-lg hover:bg-blue-300">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
