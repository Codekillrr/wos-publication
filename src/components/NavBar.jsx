"use client";
import React from "react";
import Image from "next/image";

import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <nav className="py-2 fixed bg-white w-full z-10 shadow-lg">
      <div className="flex max-lg:justify-between lg:justify-evenly items-center pr-3 lg:px-10">
        <span className="flex flex-row items-center">
          <Image src={"/logo.png"} alt="logo" width={80} height={80} />
          <span className="flex flex-col space-x-0">
            <div className="font-bold text-yellow-600 text-[1.2rem]"> WOS</div>
            <div className="text-yellow-600">Publitations</div>
          </span>
        </span>
        <div className="flex flex-row space-x-15 items-center pl-15 pr-5 max-lg:hidden">
          <span className="text-lg">HOME</span>
          <span className="text-lg">ABOUT</span>
          <span className="text-lg flex items-center">
            SERVICES
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 pl-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </span>
          <span className="text-lg">CONTACT US</span>
        </div>
        <div className="w-[20%] max-lg:hidden px-autotext-center text-md text-center">
          <span className="text-yellow-700">Call Us Now</span>
          <br />
          <span className="text-zinc-600 w-full">+44 7724 695183</span>
        </div>
        <button className="w-30 max-lg:hidden ring-3 text-yellow-800 font-bold ring-amber-500 p-2 rounded-lg">
          Get Quote
        </button>
        <div
          onClick={() => setMenu((prev) => !prev)}
          className="flex lg:hidden justify-center items-center p-2 h-11 py-1 w-15 border border-yellow-300 rounded-lg"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1"
            stroke="currentColor"
            className="size-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </div>
      </div>
      {menu && (
        <div className="mx-1 border-b-[1px] border-gray-300 ">
          <div className="p-2">HOME</div>
          <div className="p-2">ABOUT</div>
          <div className="p-2 flex flex-row items-center">
            SERVICES{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-4 pl-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m19.5 8.25-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
          <div className="p-2">CONTACT US</div>
          <div className="flex flex-row justify-between p-3 mt-1">
            <span>
              <div className="text-yellow-600 font-bold text-center">
                Call Us Now
              </div>
              <div className="text-yellow-500">+44 (161) 791-3367</div>
            </span>
            <button className="text-[0.9rem] font-bold text-yellow-500 p-2 border-2 border-yellow-300 rounded-lg">
              GET QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
