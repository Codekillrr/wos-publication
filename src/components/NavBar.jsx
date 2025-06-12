import React from "react";
import Image from "next/image";
import Link from "next/link";

import MobileMenu from "@/components/MobileMenu";

const NavBar = () => {
  return (
    <nav className="py-1 fixed bg-white w-full z-10 shadow-lg ">
      <div className="flex max-lg:justify-between lg:justify-between items-center lg:px-15 px-5">
        <Link
          href={"/"}
          className="flex flex-row items-center cursor-pointer pr-[4%]"
        >
          <Image src={"/logo.png"} alt="logo" width={70} height={70} />
          <span className="flex flex-col space-x-0">
            <div className="font-bold text-yellow-600 text-[1.2rem]"> WOS</div>
            <div className="text-yellow-600">Publications</div>
          </span>
        </Link>
        <div className="flex flex-row space-x-10 2xl:space-x-20  items-center  max-[1200px]:hidden">
          <Link className="text-md btn  bg-white border-0" href="/">
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
        <div className="w-auto flex flex-row justify-center gap-4 2xl:gap-10 max-[1200px]:hidden">
          <a
            href="tel:+447724695183"
            className=" max-xl:hidden px-autotext-center text-md text-center cursor-pointer"
          >
            <span className="text-yellow-700">Call Us Now</span>
            <br />
            <span className="text-zinc-600 w-full">+44 7724 695183</span>
          </a>
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
      </div>
      <MobileMenu />
    </nav>
  );
};

export default NavBar;
