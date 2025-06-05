import React from "react";
import NavBar from "@/components/NavBar";
import Subjects from "@/components/Subjects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const ServicePage = ({
  Service,
  titleW,
  titleY,
  para1,
  title2W,
  title2Y,
  para2,
  title3W,
  title3Y,
  cardTitle1,
  cardpara1,
  cardTitle2,
  cardpara2,
  cardTitle3,
  cardpara3,
}) => {
  return (
    <div>
      <header className="z-10 relative">
        <NavBar />
      </header>

      <main>
        <div
          className="hero min-h-120 bg-gradient-to-tr from-yellow-600 via-black to-yellow-600"
          // style={{
          //   backgroundImage:
          //     "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
          // }}
        >
          <div className="hero-overlay"></div>
          <div className="hero-content text-neutral-content text-center">
            <div className="max-w-6xl pt-20">
              <h1 className="mb-5 text-5xl font-bold">
                {titleW}
                <span className="text-yellow-300">{titleY} </span>
              </h1>
              <p className="mb-5">{para1}</p>
              <button className="btn btn-outline lg:btn-lg btn-info">
                Live Chat
              </button>
              <button className="btn ml-4 btn-outline lg:btn-lg btn-info">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="lg:my-20 my-8">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="lg:pr-40 lg:px-10">
              <h1 className="mb-5 text-5xl font-bold">
                Choose Any <span className="text-yellow-300">Subject </span>
                For Help With <span className="text-yellow-300">Writing </span>
                services
              </h1>
              <p className="lg:w-170 p-1">
                We provide thesis editing for dozens of subjects. Choose your
                topic of interest and elevate and enhance your thesis for
                academic excellence.
              </p>
            </div>
          </div>

          <div className="hero">
            <div className="lg:w-[80rem] flex flex-col lg:flex-row">
              <div className="lg:w-2xl shrink-0 p-4">
                <Subjects />
              </div>
              <div className="">
                <img
                  src="/service1.png "
                  className="lg:w-2xl md:w-md rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 h-auto">
          <div className="hero-content flex-col lg:flex-row pb-0">
            <img src="/service2.png" className="lg:w-2xl max-md:w-md" />
            <div className="lg:w-150">
              <h1 className="text-5xl font-bold lg:w-150">
                {title2W}
                <span className="text-yellow-500">{title2Y}</span>
              </h1>
              <p className="py-6 lg:w-160">{para2}</p>
            </div>
          </div>
        </div>
        <div className="w-full px-[10%]">
          <div className="w-full min-h-100 border-white border-1 rounded-2xl bg-black shadow-2xl">
            <h1 className="text-5xl font-bold text-white p-3 lg:p-10 lg:px-15 text-center">
              {title3W}
              <span className="text-yellow-500">{title3Y}</span>
            </h1>
            <div className=" flex flex-col lg:space-y-0 max-lg:items-center space-y-10 lg:flex-row justify-evenly">
              <div className="card bg-zinc-800 text-primary-content max-w-96 max-md:mx-2 pb-40">
                <div className="card-body">
                  <h2 className="card-title text-yellow-500">{cardTitle1}</h2>
                  <p>{cardpara1}</p>
                </div>
              </div>
              <div className="card bg-zinc-800 text-primary-content max-w-96 max-md:mx-2 pb-40">
                <div className="card-body">
                  <h2 className="card-title text-yellow-500">{cardTitle2}</h2>
                  <p>{cardpara2}</p>
                </div>
              </div>
              <div className="card bg-zinc-800 text-primary-content max-w-96 max-md:mx-2 pb-40">
                <div className="card-body">
                  <h2 className="card-title text-yellow-500">{cardTitle3}</h2>
                  <p>{cardpara3}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 mt-25 mb-10 bg-gradient-to-b from-yellow-50 to-white">
          <div className="my-10 mb-5 text-center text-black lg:text-6xl text-[2rem] font-bold px-2">
            <h2>
              Reviewed by Satisfied{" "}
              <span className="text-yellow-500 font-bold">
                WOS Publications
              </span>{" "}
              Clients
            </h2>
          </div>
          <div className="flex flex-col lg:text-xl lg:px-60 justify-center items-center font-bold">
            <p className="text-center text-black px-2">
              Learn how WOS Publications expert manuscript editing and journal
              publication services have supported students in their academic
              journeys, helping them refine their research for successful
              publication.
            </p>
          </div>
          <div className="w-full">
            <Testimonials />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicePage;
