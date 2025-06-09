"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

import { useState } from "react";

const NavBar = () => {
  const [menu, setMenu] = useState(false);
  const [service, setService] = useState(false);

  console.log(menu);
  return (
    <nav className="py-2 fixed bg-white w-full z-10 shadow-lg">
      <div className="flex max-lg:justify-between lg:justify-between items-center lg:pl-10 pr-3 ">
        <Link href={"/"} className="flex flex-row items-center cursor-pointer">
          <Image src={"/logo.png"} alt="logo" width={80} height={80} />
          <span className="flex flex-col space-x-0">
            <div className="font-bold text-yellow-600 text-[1.2rem]"> WOS</div>
            <div className="text-yellow-600">Publications</div>
          </span>
        </Link>
        <div className="flex flex-row space-x-15 items-center pl-15 pr-5 max-lg:hidden">
          <Link className="text-md btn bg-white border-0" href="/">
            HOME
          </Link>
          <Link className="text-md btn bg-white border-0" href="/about">
            ABOUT
          </Link>
          <div className="dropdown dropdown-center">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-white border-0 m-1"
            >
              <span className="text-md flex items-center">
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
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-lg"
            >
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <div className="custom-inner ">
                  <li>
                    <a className="dropdown-item" href="/thesis-editing/">
                      {" "}
                      Thesis Editing
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="dropdown-item" href="/dissertation-editing/">
                      Dissertation Editing
                    </a>
                  </li>

                  <div className="custom-inner ">
                    <li>
                      <a
                        className="dropdown-item"
                        href="/research-paper-editing/"
                      >
                        Research Paper Editing Services
                      </a>
                    </li>
                  </div>
                  <div className="custom-inner ">
                    <li>
                      <a className="dropdown-item" href="/artwork-services/">
                        {" "}
                        Artwork Services
                      </a>
                    </li>
                  </div>
                  <div className="custom-inner ">
                    <li>
                      <a className="dropdown-item" href="/proof-reading/">
                        {" "}
                        Proofreading Service
                      </a>
                    </li>
                  </div>
                  <div className="custom-inner ">
                    <li>
                      <a className="dropdown-item" href="/reseach-proposal/">
                        {" "}
                        Research Proposal
                      </a>
                    </li>
                  </div>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="dropdown-item" href="/statistical-analysis/">
                      Statistical Analysis
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="dropdown-item" href="/journal-selection/">
                      Journal Selection
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a
                      className="dropdown-item"
                      href="/resubmission-support-service/"
                    >
                      Resubmission Support Service
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="dropdown-item" href="/peer-review-services/">
                      {" "}
                      Peer Review Services
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="dropdown-item" href="/plagiarism-checker/">
                      {" "}
                      Plagiarism Checker
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="dropdown-item" href="/literature-search/">
                      {" "}
                      Literature Search
                    </a>
                  </li>
                </div>
              </ul>
            </ul>
          </div>

          <Link className="text-md btn bg-white border-0" href="/contact-us">
            CONTACT US
          </Link>
        </div>
        <div className="w-120 flex flex-row justify-evenly">
          <div className="w-[35%] max-xl:hidden px-autotext-center text-md text-center">
            <span className="text-yellow-700">Call Us Now</span>
            <br />
            <span className="text-zinc-600 w-full">+44 7724 695183</span>
          </div>
          <button className="w-30 max-lg:hidden btn ring-3 hover:bg-gradient-to-t from-yellow-300/60 to-transparent text-yellow-800 font-bold ring-yellow-300 p-2 rounded-lg">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://wa.me/447724695183?text=Hi!%20I'm%20interested%20in%20getting%20a%20quote.%20Could%20you%20let%20me%20know%20how%20to%20proceed?"
            >
              Get Quote
            </a>
          </button>
        </div>

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
          <div className="p-2">
            <Link href={"/"}>HOME</Link>
          </div>
          <div className="p-2">
            <Link href={"/about"}>ABOUT</Link>
          </div>
          <div
            onClick={() => setService((prev) => !prev)}
            className="p-2 flex flex-row items-center"
          >
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
          {service && (
            <div className="w-full h-50 shadow-lg bg-gradient-to-b from-yellow-50/50 to white overflow-scroll border-2 border-gray-300 p-2 rounded-lg ">
              <ul>
                <div className="custom-inner">
                  <li>
                    <a className="text-lg p-4" href="/thesis-editing/">
                      {" "}
                      Thesis Editing
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="text-lg p-4" href="/dissertation-editing/">
                      Dissertation Editing
                    </a>
                  </li>

                  <div className="custom-inner ">
                    <li>
                      <a
                        className="text-lg p-4"
                        href="/research-paper-editing/"
                      >
                        Research Paper Editing Services
                      </a>
                    </li>
                  </div>
                  <div className="custom-inner ">
                    <li>
                      <a className="text-lg p-4" href="/artwork-services/">
                        {" "}
                        Artwork Services
                      </a>
                    </li>
                  </div>
                  <div className="custom-inner ">
                    <li>
                      <a className="text-lg p-4" href="/proof-reading/">
                        {" "}
                        Proofreading Service
                      </a>
                    </li>
                  </div>
                  <div className="custom-inner ">
                    <li>
                      <a className="text-lg p-4" href="/reseach-proposal/">
                        {" "}
                        Research Proposal
                      </a>
                    </li>
                  </div>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="text-lg p-4" href="/statistical-analysis/">
                      Statistical Analysis
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="text-lg p-4" href="/journal-selection/">
                      Journal Selection
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a
                      className="text-lg p-4"
                      href="/resubmission-support-service/"
                    >
                      Resubmission Support Service
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="text-lg p-4" href="/peer-review-services/">
                      {" "}
                      Peer Review Services
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="text-lg p-4" href="/plagiarism-checker/">
                      {" "}
                      Plagiarism Checker
                    </a>
                  </li>
                </div>
                <div className="custom-inner ">
                  <li>
                    <a className="text-lg p-4" href="/literature-search/">
                      {" "}
                      Literature Search
                    </a>
                  </li>
                </div>
              </ul>
            </div>
          )}
          <div className="p-2">
            <Link href={"/contact-us"}>CONTACT US</Link>
          </div>
          <div className="flex flex-row justify-between p-3 mt-1">
            <span>
              <div className="text-yellow-600 font-bold text-center">
                Call Us Now
              </div>
              <div className="text-yellow-500">+44 (161) 791-3367</div>
            </span>
            <button className="text-[0.9rem] font-bold text-yellow-500 p-2 border-2 border-yellow-300 rounded-lg">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://wa.me/447724695183?text=Hi!%20I'm%20interested%20in%20getting%20a%20quote.%20Could%20you%20let%20me%20know%20how%20to%20proceed?"
              >
                GET QUOTE
              </a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
