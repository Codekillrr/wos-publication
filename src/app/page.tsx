import Image from "next/image";
import Link from "next/link";

import NavBar from "@/components/NavBar";
import SpinningCard from "@/components/SpinningCard";
import IconCardSection from "@/components/IconCardSection";
import DotCard from "@/components/DotCard";
import Request from "@/components/Request";
import AccordianCard from "@/components/AccordianCard";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";

export default function Home() {
  const patners = [
    { img: "/client_logos/asme.webp", alt: "asme" },
    { img: "/client_logos/blood.webp", alt: "blood" },
    { img: "/client_logos/elsevier.webp", alt: "elsevier" },
    { img: "/client_logos/esc.webp", alt: "esc" },
    { img: "/client_logos/fsg.png", alt: "fsg" },
    { img: "/client_logos/ieee.png", alt: "ieee" },
    { img: "/client_logos/plos.webp", alt: "plos" },
    { img: "/client_logos/qs.png", alt: "qs" },
    { img: "/client_logos/rsc.png", alt: "rsc" },
    { img: "/client_logos/thieme.webp", alt: "thieme" },
  ];

  return (
    <div>
      <header className="z-10 relative">
        <NavBar />
      </header>
      <main className="">
        <div className="relative h-auto w-full lg:h-180">
          <div className="flex flex-col justify-center items-center h-full">
            <div className="my-10 mt-35 text-center text-white text-[2rem] lg:text-6xl lg:px-30 font-bold px-2">
              Provide Support for
              <span className="text-yellow-300"> Research Publications </span>
              and{" "}
              <span className="text-yellow-300">English Editing Service</span>
            </div>
            <p className="text-center text-white px-2 lg:px-30 lg:text-xl">
              At WOS Publications, we offer professional editing and research
              publication services. Our high-quality editing ensures your
              research meets academic standards, helping you achieve excellence
              and giving your career a valuable boost.
            </p>
            <div className="my-8 mt-5 p-4 lg:px-80 w-full flex justify-evenly text-white">
              <button className="px-4 py-2 btn bg-transparent text-white hover:bg-yellow-300/20  w-30 lg:w-40 lg:py-5 lg:text-xl border-2 border-white hover:border-yellow-400 rounded-lg">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://wa.me/447724695183?text=Hi%20there%2C%20I%20have%20a%20question!"
                >
                  Live Chat
                </a>
              </button>
              <button className="px-4 py-2 btn bg-transparent text-white hover:bg-yellow-300/20 hover:text-yellow-400 w-30 lg:w-40 lg:py-5 lg:text-xl border-2 border-white hover:border-yellow-400 rounded-lg">
                <Link href="/contact-us">Get Started</Link>
              </button>
            </div>
          </div>
          <div className="absolute h-full w-full bg-gradient-to-tr from-yellow-200/50 via-black/40 to-yellow-200/50 -z-8 left-0 top-0"></div>
          <Image
            src={"/bannerhome.webp"}
            alt=""
            layout="fill"
            className="absolute object-cover -z-10 opacity-90"
          />
        </div>

        <div className="">
          <InfiniteMovingCards
            items={patners}
            direction="left"
            speed="normal"
            pauseOnHover={false}
          />
        </div>

        <div className="bg-gray-100 px-2 pb-10 ">
          <h2 className="text-center text-[2rem] lg:text-6xl py-12 font-bold">
            Our Premier Research{" "}
            <span className="text-yellow-300">Publication</span> and <br />{" "}
            <span className="text-yellow-300">Paper Editing</span> Services
          </h2>
          <div className="lg:grid lg:grid-flow-col lg:grid-rows-2">
            <SpinningCard
              titleW={"Peer"}
              titleB={"Review"}
              para={
                "Our highly skilled and experienced team specializes in peer review support, significantly enhancing your chances of success."
              }
            />
            <SpinningCard
              titleW={"Artwork"}
              titleB={"Services"}
              para={
                "Our artwork services assist in refining your images and graphs, ensuring that all technical elements of your manuscript comply with journal guidelines."
              }
            />
            <SpinningCard
              titleW={"Thesis"}
              titleB={"Editing"}
              para={
                "To support your academic success, we offer thesis editing services designed to make your thesis flawless, eliminating all errors and ensuring perfection."
              }
            />
            <SpinningCard
              titleW={"Literature"}
              titleB={"Search"}
              para={
                "We offer the highest quality literature search services, backed by a team of experts across various fields, dedicated to assisting you in finding the most relevant research and sources for your work."
              }
            />

            <SpinningCard
              titleW={"Research Paper"}
              titleB={"Editing"}
              para={
                "Our exceptional research paper editing services are designed to help clients achieve academic excellence. We go the extra mile to support their success and elevate their work."
              }
            />
            <SpinningCard
              titleW={"Statistical"}
              titleB={"Analysis"}
              para={
                "To support your academic success, we offer thesis editing services designed to make your thesis flawless, eliminating all errors and ensuring perfection."
              }
            />
          </div>
        </div>
        <IconCardSection />

        <div className="my-15 mx-2">
          <h1 className="text-4xl lg:text-6xl lg:px-40 text-center font-bold mb-5">
            We offer{" "}
            <span className="text-yellow-500">journal publication </span>and
            expert editing for{" "}
            <span className="text-yellow-500">major subjects.</span>
          </h1>
          <div className="lg:grid lg:grid-flow-col lg:grid-rows-1 lg:px-25">
            <DotCard
              Title={"Medical Science"}
              Para={"200+ Subjects, 800+ Experts, 470K+ Papers"}
            />
            <DotCard
              Title={"Medical Science"}
              Para={"200+ Subjects, 800+ Experts, 470K+ Papers"}
            />
            <DotCard
              Title={"Medical Science"}
              Para={"200+ Subjects, 800+ Experts, 470K+ Papers"}
            />
            <DotCard
              Title={"Medical Science"}
              Para={"200+ Subjects, 800+ Experts, 470K+ Papers"}
            />
            <DotCard
              Title={"Medical Science"}
              Para={"200+ Subjects, 800+ Experts, 470K+ Papers"}
            />
          </div>
        </div>
        <div className="bg-amber-200/90 py-1 lg:h-110">
          <div className="my-10 mb-5 text-center text-black lg:text-5xl text-[2rem] font-bold px-2">
            WOS Publication: Your Partner in Turning
            <br />
            <span className="text-yellow-700 text-4xl lg:text-6xl">
              {" "}
              Research into Recognition!
            </span>
          </div>

          <Request
            Para={
              "Partner with WOS Publication for expert support in refining and publishing your work. Contact us today!"
            }
            b1={"Get A Quote"}
            b2={"Call now"}
            paraClass={"text-center"}
          />
        </div>
        <div className="relative lg:flex lg:min-h-150 lg:mb-10">
          <div className="py-1 lg:w-[60%] lg:flex lg:flex-col lg:justify-center lg:items-center">
            <div className="my-10 mb-5 text-center lg:text-left lg:flex lg:justify-center text-black lg:text-4xl lg:w-full lg:mb-10 text-[2rem] font-bold px-2">
              <h2 className="max-w-120">
                <span className="text-yellow-500 ">High-quality</span> yet
                affordable <span className="text-yellow-500">manuscript</span>{" "}
                editing services.
              </h2>
            </div>

            <Request
              Para={
                "Our team of experts delivers the highest level of professional editing services, ensuring top-tier academic editing for all our clients. As a leading editing company, we specialize in providing both editing and proofreading services while upholding the highest quality standards to guarantee exceptional results."
              }
              b1={"Live Chat"}
              b2={"Contact"}
              paraClass={"lg:text-left text-center"}
            />
          </div>
          <div className="absolute max-lg:hidden w-[40%] h-auto -top-8 right-8">
            <Image
              src={"/girl2.webp"}
              alt=""
              width={420}
              height={420}
              className="object-contain"
            />
          </div>
        </div>

        <div className="lg:grid lg:grid-flow-col lg:grid-row-2 lg:gap-15">
          <div className="py-10 lg:py-0 lg:flex lg:justify-end">
            <div className="lg:w-170 ">
              <div className="my-10 lg:my-5 mb-5 text-center text-black text-[2rem] lg:text-5xl font-bold px-2">
                <h2>
                  Frequently Asked{" "}
                  <span className="text-yellow-500">Question</span>
                </h2>
              </div>
              <AccordianCard />
            </div>
          </div>
          <div className="p-2 mb-30 lg:mt-10 lg:px-7 lg:min-w-60 lg:flex lg:justify-start">
            <ContactForm />
          </div>
        </div>

        <div className="p-2 mb-10 bg-gradient-to-b from-yellow-50 to-white">
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
          <div className="w-full ">
            <Testimonials />
          </div>
        </div>
      </main>
      <Footer />

      <>
        {/* <footer className="text-white lg:flex lg:flex-row text-center bg-black p-4 py-12 pb-2">
        <div>
          <div className="text-2xl text-yellow-400 font-bold ">
            Follow us on
          </div>
          <div className="flex flex-row justify-center space-x-8 pt-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-instagram"
              viewBox="0 0 16 16"
            >
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-facebook"
              viewBox="0 0 16 16"
            >
              <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              fill="currentColor"
              className="bi bi-whatsapp"
              viewBox="0 0 16 16"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </div>
        </div>

        <div className="text-2xl text-yellow-400 font-bold pt-6">Legal</div>
        <div className="pt-1 text-lg">Terms & conditions</div>
        <div className="text-lg">pivacy policy</div>
        <div className="text-2xl text-yellow-400 font-bold pt-6">
          Lets get in touch
        </div>
        <div className="pt-1 text-lg">info@wospublication.com</div>
        <div className="text-lg">+44 7724 695183</div>
        <div className="border-t-[1px] border-gray-700 mt-5 p-4">
          © 2025 Copyrights <span className="text-yellow-500">IMN ARTS</span>
          <br className="lg:hidden" /> All Rights Reserved.
        </div>

      </footer> */}
      </>
    </div>
  );
}
