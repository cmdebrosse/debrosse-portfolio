import React from "react";

const Resume = () => {
  return (
    <div
      name="resume"
      className="w-full h-full md:h-screen bg-slate-800 text-slate-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-screen">
        <div className="p-3 mb-4 grid justify-items-start content-center">
          <header className="m-4">
            <h1 className="text-4xl sm:text-7xl font-bold">Charles DeBrosse</h1>
          </header>

          {/* Profile */}
          <div className="my-4 max-w-xl ">
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
        <footer className="bg-slate-600 w-full p-2">
          <div className="grid justify-items-center">
            <p>Charles DeBrosse</p>
            <p>cmdebrosse@outlook.com</p>
            <p>(937) 570-9305</p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
