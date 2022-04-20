import React from "react";

const Resume = () => {
  return (
    <div
      name="resume"
      className="w-full h-full md:h-screen bg-slate-800 text-slate-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="p-3 mb-4 grid justify-items-start content-center">
          <header className="m-4">
            <h1 className="text-4xl sm:text-7xl font-bold">Charles DeBrosse</h1>
          </header>

          {/* Work Experience */}
          <div className="m-4">
            <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
              Work Experience
            </h2>
          </div>

          {/* Education */}
          <div className="m-4">
            <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
              Education
            </h2>
          </div>

          {/* Skills */}
          <div className="m-4">
            <h2 className="text-4xl font-bold inline border-b-4 border-blue-500">
              Skills
            </h2>
          </div>
        </div>
        <footer className="grid justify-items-center">
          <p>Charles DeBrosse</p>
          <p>cmdebrosse@outlook.com</p>
          <p>(937) 570-9305</p>
        </footer>
      </div>
    </div>
  );
};

export default Resume;
