import React from "react";
import ProfilePic from "../assets/profilepic.jpg";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-slate-800">
      {/* Container */}
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid md:grid-cols-2 gap-8 px-4">
          <div>
            <img
              className="max-w-[350px] p-4 mx-auto mt-4 rounded"
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
              <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-blue-400 hover:border-blue-400">
                View My Work
                <span className="group-hover:rotate-90 duration-300">
                  <HiArrowNarrowRight className="ml-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
