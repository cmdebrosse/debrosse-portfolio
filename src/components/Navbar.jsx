import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

// import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[60px] flex justify-between items-center px-4 bg-slate-600 text-gray-100">
      <a className="border-b-3 border-blue-500" href="/">
        <h1>Charles DeBrosse</h1>
      </a>

      {/* Menu */}
      <ul className="hidden md:flex">
        <li>
          <a className="hover:bg-blue-500 duration-300 p-2 rounded" href="/">
            Home
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue-500 duration-300 p-2 rounded"
            href="/about"
          >
            About
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue-500 duration-300 p-2 rounded"
            href="/skills"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue-500 duration-300 p-2 rounded"
            href="/projects"
          >
            Projects
          </a>
        </li>
        <li>
          <a
            className="hover:bg-blue-500 duration-300 p-2 rounded"
            href="/contact"
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-slate-600 flex flex-col justify-center items-center"
        }
      >
        <li className="m-2 py-6 text-4xl hover:bg-blue-500 duration-300 rounded">
          <a href="/">Home</a>
        </li>
        <li className="m-2 py-6 text-4xl hover:bg-blue-500 duration-300 rounded">
          <a href="/about">About</a>
        </li>
        <li className="m-2 py-6 text-4xl hover:bg-blue-500 duration-300 rounded">
          <a href="/skills">Skills</a>
        </li>
        <li className="m-2 py-6 text-4xl hover:bg-blue-500 duration-300 rounded">
          <a href="/projects">Projects</a>
        </li>
        <li className="m-2 py-6 text-4xl hover:bg-blue-500 duration-300 rounded">
          <a href="/contact">Contact</a>
        </li>
      </ul>

      {/* Sidebar Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] bg-gray-600 flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 hover:bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="https://github.com/cmdebrosse"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 hover:bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="https://www.linkedin.com/in/charles-debrosse/"
            >
              LinkedIn <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 hover:bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="mailto:cmdebrosse@outlook.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-gray-600 hover:bg-blue-500">
            <a
              className="flex justify-between items-center w-full text-gray-100"
              href="/resume"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
