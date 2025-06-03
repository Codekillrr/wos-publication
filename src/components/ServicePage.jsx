import React from "react";
import NavBar from "@/components/NavBar";
import Subjects from "@/components/Subjects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const ServicePage = ({ Service }) => {
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
                Professional {Service} and{" "}
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

        <div className="lg:my-20 my-8">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="lg:pr-40 px-10">
              <h1 className="mb-5 text-5xl font-bold">
                Choose Any <span className="text-yellow-500">Subject </span>
                For Help With <span className="text-yellow-500">
                  Writing{" "}
                </span>{" "}
                services{" "}
              </h1>
              <p className="max-w-170 p-1">
                We provide thesis editing for dozens of subjects. Choose your
                topic of interest and elevate and enhance your thesis for
                academic excellence.
              </p>
            </div>
          </div>

          <div className="hero">
            <div className="hero-content flex-col lg:flex-row">
              <div className="w-full max-w-2xl shrink-0 p-4">
                <div className="card-body">
                  <Subjects />
                </div>
              </div>
              <div className="">
                <img
                  src="/service1.png "
                  className="lg:max-w-2xl md:max-w-md rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="hero bg-base-200 h-auto">
          <div className="hero-content flex-col lg:flex-row pb-0">
            <img src="/service2.png" className="max-w-2xl max-md:max-w-md" />
            <div className="lg:w-150">
              <h1 className="text-5xl font-bold lg:w-150">
                Leave a Lasting Impression with Our Expert{" "}
                <span className="text-yellow-500">Thesis Writing Services</span>
              </h1>
              <p className="py-6 lg:w-160">
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
              Our Approach to Delivering Exceptional{" "}
              <span className="text-yellow-500">Thesis Editing Services</span>
            </h1>
            <div className=" flex flex-col lg:space-y-0 max-lg:items-center space-y-10 lg:flex-row justify-evenly">
              <div className="card bg-zinc-800 text-primary-content max-w-96 max-md:mx-2 pb-40">
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
              <div className="card bg-zinc-800 text-primary-content max-w-96 max-md:mx-2 pb-40">
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
              <div className="card bg-zinc-800 text-primary-content max-w-96 max-md:mx-2 pb-40">
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

      <Footer />
    </div>
  );
};

export default ServicePage;
