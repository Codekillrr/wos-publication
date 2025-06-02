import React from "react";
import Image from "next/image";
import NavBar from "@/components/NavBar";
import Subjects from "@/components/Subjects";
import Testimonials from "@/components/Testimonials";

export default function Service() {
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
                Professional Thesis Writing and{" "}
                <span className="text-yellow-500">Editing Services</span>
              </h1>
              <p className="mb-5">
                Theses play a crucial role in your academic journey, and we are
                here to simplify the process for you. With our advanced thesis
                checker, you can confidently ensure the quality of your work.
                Recognizing the importance of excellence, we offer top-tier
                thesis writing services. Our team of expert PhD thesis editors
                meticulously reviews your work, ensuring clarity, coherence, and
                compliance with academic standards.
              </p>
              <button className="btn btn-outline btn-lg btn-info">
                Live Chat
              </button>
              <button className="btn ml-4 btn-outline btn-lg btn-info">
                Get Started
              </button>
            </div>
          </div>
        </div>

        <div className="my-20 px-50">
          <h1 className="mb-5 text-5xl font-bold">
            Choose Any <span className="text-yellow-500">Subject </span>
            For Help With <span className="text-yellow-500">Writing </span>{" "}
            services{" "}
          </h1>
          <p className="max-w-170 p-1">
            We provide thesis editing for dozens of subjects. Choose your topic
            of interest and elevate and enhance your thesis for academic
            excellence.
          </p>
          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <div className="w-full max-w-2xl shrink-0 p-4">
                <div className="card-body">
                  <Subjects />
                </div>
              </div>
              <div className="">
                <img src="/service1.png " className="max-w-2xl rounded-lg" />
              </div>
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 h-auto">
          <div className="hero-content flex-col lg:flex-row pb-0">
            <img src="/service2.png" className="max-w-2xl" />
            <div className="w-150">
              <h1 className="text-5xl font-bold w-150">
                Leave a Lasting Impression with Our Expert{" "}
                <span className="text-yellow-500">Thesis Writing Services</span>
              </h1>
              <p className="py-6 w-160">
                Our team of highly skilled professionals brings unmatched
                academic expertise to make your thesis flawless and exceptional.
                Our expert editors meticulously review your thesis for grammar,
                formatting, and structural errors, ensuring every aspect meets
                the highest academic standards. We go beyond basic editing by
                carefully analyzing syntax, style, and structure to preserve the
                uniqueness and quality of your work. At Clarivate Publication,
                we are committed to delivering excellence, making us one of the
                leading providers of thesis editing services. Choose us for
                affordable yet premium-quality thesis editing that ensures your
                academic success!
              </p>
            </div>
          </div>
        </div>
        <div className="w-full px-[10%]">
          <div className="w-full min-h-100 border-white border-1 rounded-2xl bg-black">
            <h1 className="text-5xl font-bold text-white p-10 px-15 text-center">
              Leave a Lasting Impression with Our Expert Thesis Writing Services
            </h1>
            <div className=" flex flex-col lg:flex-row justify-evenly">
              <div className="card bg-zinc-800 text-primary-content w-96 pb-40">
                <div className="card-body">
                  <h2 className="card-title text-yellow-500">
                    Review and Evaluation
                  </h2>
                  <p>
                    To begin the thesis editing process, submit your thesis and
                    place your order. We accept formats like Word, DOC, and
                    DOCX. Once received, our expert editors review the document
                    thoroughly, considering its scope, subject, and any specific
                    requirements you provide.
                  </p>
                </div>
              </div>
              <div className="card bg-zinc-800 text-primary-content w-96 pb-40">
                <div className="card-body">
                  <h2 className="card-title text-yellow-500">
                    Thorough Editing{" "}
                  </h2>
                  <p>
                    After reviewing your thesis, our editor refines its
                    language, improving grammar, syntax, vocabulary, and
                    addressing any specific requirements. They also check the
                    structure, verify citations and references, and ensure
                    compliance with the required style guide.
                  </p>
                </div>
              </div>
              <div className="card bg-zinc-800 text-primary-content w-96 pb-40">
                <div className="card-body">
                  <h2 className="card-title text-yellow-500">
                    Final Editing and Completion
                  </h2>
                  <p>
                    Once our thesis editing and proofreading experts have
                    addressed all formatting, grammar, and other issues, the
                    document undergoes a quick recheck for accuracy. It is then
                    handed back to you for a final review. You can provide any
                    additional revisions or suggestions, and our team will
                    ensure all your requests are met.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="p-2 mb-10 ">
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

      <footer className="footer sm:footer-horizontal bg-white border-t-3 border-gray-300 text-base-content p-10">
        <aside>
          <Image src={"/logo.png"} alt="logo" width={100} height={100} />
          <p>
            WOS Publications
            <br />
            Professional editing and research publication services.
          </p>
        </aside>

        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <h6 className="footer-title">Lets Talk</h6>
          <a className="link link-hover">info@wospublication.com</a>
          <a className="link link-hover">+44 7724 695183</a>
        </nav>
        <nav>
          <h6 className="footer-title">Social</h6>
          <div className="grid grid-flow-col gap-4">
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </a>
            <a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
          </div>
        </nav>
      </footer>
    </div>
  );
}
