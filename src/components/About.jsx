import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-slate-300 text-slate-800">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-blue-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hello!
              <br />
              <br />
              My name is Charles but everyone calls me "Chuck"
              <br />
              <br />
              Please take a look around!
            </p>
          </div>
          <div>
            <p>
              I have an Associates in Computer Networking and a Bachelors in
              Music Ministry. My professional experience is mainly in the world
              of CNC machining. After almost 8 years on the job I've developed
              real world, hands on experience with the relationship between a
              machine and the programming that runs it.
              <br />
              <br />I have recently completed a coding bootcamp with The Ohio
              State University, and have learned so much in a very short time.
              To this point I have covered topics such as HTML, CSS, JavaScript,
              front end and back end APIs, and MERN development. The challenge
              of troubleshooting and problem solving has been both exciting and
              rewarding!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
