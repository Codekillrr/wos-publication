import Image from "next/image";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MeetTeam from "@/components/MeetTeam";

export default function About() {
  return (
    <div>
      <header className="z-10 relative">
        <NavBar />
      </header>
      <main className="">
        <div className="relative h-auto w-full lg:h-180">
          <div className="hero min-h-full bg-transparent ">
            <div className="hero-content flex-col lg:flex-row-reverse max-lg:mt-18 max-lg:mb-10">
              <img src="/computer1.png " className="w-lg rounded-lg" />
              <div>
                <h1 className="text-5xl font-bold text-yellow-200">About Us</h1>
                <p className="py-6 text-yellow-200 font-bold">
                  At WOS Publication, we are a leading provider of research
                  publication and manuscript editing services, assisting
                  researchers from around the world. With years of experience
                  working with researchers across nearly every country, our
                  primary goal is to help them refine their research and achieve
                  successful publication. We prioritize our customers' needs,
                  ensuring they receive the highest quality service and a
                  positive experience throughout the process. Our commitment to
                  excellence means we never compromise on quality.
                </p>
                <button className="btn btn-outline lg:btn-lg btn-warning">
                  Live Chat
                </button>
                <button className="btn ml-4 btn-outline hover:bg-gradient-to-b from-yellow-50 to-white text-yellow-100 hover:text-black border-yellow-300 lg:btn-lg btn-info">
                  Get Started
                </button>
              </div>
            </div>
          </div>
          <div className="absolute h-full w-full bg-gradient-to-tr from-yellow-500/20 via-black/40 to-yellow-200/50 -z-8 left-0 top-0"></div>
          <Image
            src={"/bannerhome.webp"}
            alt=""
            layout="fill"
            className="absolute object-cover -z-10 opacity-60"
          />
        </div>

        <MeetTeam />

        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img src="/mission.png " className="w-xl rounded-lg" />
            <div className="ml-5">
              <h1 className="text-5xl font-bold">Our Mission</h1>
              <p className="py-6">
                Our mission is to advance global communication in scientific
                research by deeply understanding the needs of our authors. We
                strive to help scholars overcome geographic and language
                barriers, connect them with peer-reviewed journals, and expedite
                the publication of high-quality research. We are dedicated to
                educating academic authors worldwide on best practices in
                publishing, promoting ethical standards, and maintaining
                integrity in research dissemination. With one of the largest
                in-house editing teams in the industry, we deliver exceptional
                services to academic, publishing, and pharmaceutical
                communities, ensuring top-quality results every time.
              </p>
              <button className="btn btn-outline lg:btn-xl btn-warning">
                Get Started
              </button>
            </div>
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
          <div className="w-full">
            <Testimonials />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
