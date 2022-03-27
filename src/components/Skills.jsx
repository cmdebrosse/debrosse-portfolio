import React from "react";

import Github from "../assets/github.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import Mongo from "../assets/mongo.png";
import Node from "../assets/node.png";
import ReactIcon from "../assets/react.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-slate-800 text-slate-300">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">GitHub</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JavaScript icon"
            />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={Mongo} alt="MongoDB icon" />
            <p className="my-4">MongoDB</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={ReactIcon} alt="React icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-black hover:scale-110 duration-300">
            <img className="w-20 mx-auto" src={Node} alt="Node icon" />
            <p className="my-4">Node</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
