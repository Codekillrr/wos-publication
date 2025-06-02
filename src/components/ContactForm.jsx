import React from "react";

const ContactForm = () => {
  return (
    <div className="rounded-2xl bg-gradient-to-t from-yellow-600 via-yellow-500 to-yellow-400 border border-gray-400 p-4 m-2 lg:w-120 shadow-2xl">
      <h2 className="w-full text-center text-zinc-700 text-4xl px-2 mt-6 font-bold">
        Speak to our Experts
      </h2>
      <div className="px-5 my-10 mb-6">
        <input
          type="text"
          placeholder="Full Name"
          className="w-full mb-5 bg-white border-black p-2 rounded-md h-12 focus:outline-none border-1 focus:ring-1"
        ></input>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full mb-5 bg-white border-black p-2 rounded-md h-12 focus:outline-none border-1 focus:ring-1"
        ></input>
        <input
          type="number"
          placeholder="Phone"
          className="w-full mb-5 bg-white border-black p-2 rounded-md h-12 focus:outline-none border-1 focus:ring-1"
        ></input>
        <textarea
          placeholder="Project discribtion"
          className="w-full mb-7 bg-white border-black p-2 rounded-md h-25 focus:outline-none border-1 focus:ring-1"
        ></textarea>

        <div className="w-full flex justify-center">
          <button className="w-auto text-zinc-700 font-bold rounded-md border-2 px-7 border-amber-700 bg-yellow-400  p-2">
            Submit{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
