import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <motion.div
      name="contact"
      className="w-full h-screen bg-slate-800 text-slate-100 flex justify-center items-center p-4"
      initial={{ x: 300, opacity: 0.5 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: -300, opacity: 0.5 }}
    >
      <form
        method="POST"
        action="https://getform.io/f/cb4f251b-97ce-40ce-ae90-00e87830a599"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-blue-500 border-b-4">
            Contact
          </p>
          <p className="py-4">
            // Submit the form below or send me an email
            <a href="mailto:cmdebrosse@outlook.com"> cmdebrosse@outlook.com</a>
          </p>
        </div>
        <input
          className="bg-slate-500 p-2"
          type="text"
          placeholder="Name"
          name="name"
        />
        <input
          className="my-4 p-2 bg-slate-500"
          type="text"
          placeholder="Email"
          name="email"
        />
        <textarea
          className="bg-slate-500 p-2"
          name="message"
          rows="6"
          placeholder="Enter message here..."
        ></textarea>
        <button className="text-white border-2 hover:bg-blue-500 hover:border-blue-500 duration-300 rounded px-4 py-3 my-8 mx-auto flex items-center">
          Let's talk!
        </button>
      </form>
    </motion.div>
  );
};

export default Contact;
