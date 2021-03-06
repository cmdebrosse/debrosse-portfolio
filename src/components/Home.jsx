import React from "react";
import ProfilePic from "../assets/profilePic.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
// import { Link } from "react-scroll";

const Home = () => {
  return (
    <motion.div
      name="home"
      className="w-full h-screen bg-slate-800"
      initial={{ x: 300, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0.5 }}
    >
      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-4 px-4">
          <div className="mt-[10px]">
            <img
              className="max-w-[350px] p-2 mx-auto mt-11 md:mt-0"
              src={ProfilePic}
              alt="Profile picture"
            />
          </div>
          <div>
            <p className="text-2xl text-blue-500">Welcome! My name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-slate-300">
              Charles DeBrosse
            </h1>
            <h2 className="text-2xl sm:text-4xl font-bold text-blue-400">
              I'm a full stack developer
            </h2>
            <p className="text-slate-100 py-4 max-w-[700px]">
              After years in the CNC Machining industry I'm making my way into
              the world of web development. Having successfully completed a
              full-stack bootcamp through the Ohio State University, I'm ready
              to face the excitement and challenges this burgeoning domain has
              to offer!
            </p>
            <div>
              <a href="/projects">
                <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400">
                  View My Work
                  <span className="group-hover:rotate-90 duration-300">
                    <HiArrowNarrowRight className="ml-4" />
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;
