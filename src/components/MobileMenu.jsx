"use client";
import React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "motion/react";

import { useState } from "react";

const MobileMenu = () => {
  const [menu, setMenu] = useState(false);
  const [service, setService] = useState(false);
  return (
    <div>
      <div
        onClick={() => {
          setService(false);
          setMenu((prev) => !prev);
        }}
        className="flex min-[1200px]:hidden justify-center absolute right-5 lg:right-15 top-4 items-center p-2 h-11 py-1 w-15 border border-yellow-300 rounded-lg"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1"
          stroke="currentColor"
          className={!menu ? "size-8" : "hidden"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className={menu ? "size-8" : "hidden"}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>

      <AnimatePresence>
        {menu && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="mx-1 bg-white w-full min-[1200px]:hidden lg:px-16 px-5 border-b-[1px] border-gray-300 "
          >
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
            <AnimatePresence>
              {service && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 200 }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  style={{
                    overflowY: "auto",
                    overscrollBehavior: "contain",
                  }}
                  onWheel={(e) => {
                    const element = e.currentTarget;
                    const { scrollTop, scrollHeight, clientHeight } = element;

                    // Check if scrolling down and at bottom
                    if (
                      e.deltaY > 0 &&
                      scrollTop + clientHeight >= scrollHeight
                    ) {
                      e.preventDefault();
                      e.stopPropagation();
                    }

                    // Check if scrolling up and at top
                    if (e.deltaY < 0 && scrollTop <= 0) {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }}
                  onTouchMove={(e) => {
                    const element = e.currentTarget;
                    const { scrollTop, scrollHeight, clientHeight } = element;

                    // For touch devices, we need to track the touch direction
                    const touch = e.touches[0];
                    const startY = element.dataset.startY || touch.clientY;
                    const currentY = touch.clientY;
                    const deltaY = parseInt(startY) - currentY;

                    // Check if scrolling down and at bottom
                    if (
                      deltaY > 0 &&
                      scrollTop + clientHeight >= scrollHeight
                    ) {
                      e.preventDefault();
                      e.stopPropagation();
                    }

                    // Check if scrolling up and at top
                    if (deltaY < 0 && scrollTop <= 0) {
                      e.preventDefault();
                      e.stopPropagation();
                    }
                  }}
                  onTouchStart={(e) => {
                    // Store the initial touch position
                    const touch = e.touches[0];
                    e.currentTarget.dataset.startY = touch.clientY;
                  }}
                  className="w-full shadow-lg bg-gradient-to-b from-yellow-50/50 border-2 border-gray-300 p-2 rounded-lg "
                >
                  <ul className="">
                    <div className="custom-inner">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/thesis-editing/"
                        >
                          {" "}
                          Thesis Editing
                        </a>
                      </li>
                    </div>

                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/dissertation-editing/"
                        >
                          Dissertation Editing
                        </a>
                      </li>
                    </div>

                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/research-paper-editing/"
                        >
                          Research Paper Editing Services
                        </a>
                      </li>
                    </div>

                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/artwork-services/"
                        >
                          {" "}
                          Artwork Services
                        </a>
                      </li>
                    </div>

                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/proof-reading/"
                        >
                          {" "}
                          Proofreading Service
                        </a>
                      </li>
                    </div>

                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/reseach-proposal/"
                        >
                          {" "}
                          Research Proposal
                        </a>
                      </li>
                    </div>

                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/statistical-analysis/"
                        >
                          Statistical Analysis
                        </a>
                      </li>
                    </div>
                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/journal-selection/"
                        >
                          Journal Selection
                        </a>
                      </li>
                    </div>
                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/resubmission-support-service/"
                        >
                          Resubmission Support Service
                        </a>
                      </li>
                    </div>
                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/peer-review-services/"
                        >
                          {" "}
                          Peer Review Services
                        </a>
                      </li>
                    </div>
                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/plagiarism-checker/"
                        >
                          {" "}
                          Plagiarism Checker
                        </a>
                      </li>
                    </div>
                    <div className="custom-inner ">
                      <li>
                        <a
                          className="text-lg p-2 btn btn-soft h-auto"
                          href="/literature-search/"
                        >
                          {" "}
                          Literature Search
                        </a>
                      </li>
                    </div>
                  </ul>
                </motion.div>
              )}
            </AnimatePresence>
            <div className="p-2">
              <Link href={"/contact-us"}>CONTACT US</Link>
            </div>
            <div className="flex flex-row justify-between p-3 mt-1">
              <a href="tel:+447724695183" className="cursor-pointer">
                <div className="text-yellow-600 font-bold text-center">
                  Call Us Now
                </div>
                <div className="text-yellow-500">+44 (161) 791-3367</div>
              </a>
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
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MobileMenu;
