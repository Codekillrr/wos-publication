import Image from "next/image";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import MeetTeam from "@/components/MeetTeam";
import PopSide from "@/components/ui/PopSide";

export default function About() {
  return (
    <div>
      <header className="z-10 relative">
        <NavBar />
      </header>
      <main className="">
        <PopSide />
        <div className="relative h-auto w-full lg:h-180">
          <div className="hero min-h-full bg-transparent ">
            <div className="hero-content flex-col lg:flex-row-reverse gap-x-20 max-lg:mt-25 max-lg:mb-10">
              {/* <Image
                width={500}
                height={500}
                src="/logo.png"
                className="w-lg rounded-lg"
              /> */}
              <div className="flex-shrink-0">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-200/20 to-yellow-300/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>
                  <Image
                    src={"/logo.png"}
                    alt={"logo"}
                    width={500}
                    height={500}
                    className="relative w-80 h-80 md:w-110 md:h-110 object-cover rounded-2xl shadow-xl transition-all duration-500 group-hover:shadow-2xl ring-2 ring-yellow-200 group-hover:ring-yellow-400"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-yellow-500/10 via-transparent to-yellow-300/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </div>
              <div>
                <h1 className="text-5xl font-bold text-yellow-200 mt-5 md:text-left text-center">
                  About Us
                </h1>
                <p className="py-6 text-yellow-200 font-bold md:text-left text-center">
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
                <div className="flex justify-center items-center md:justify-start">
                  <button className="btn btn-outline lg:btn-lg btn-warning">
                    Live Chat
                  </button>
                  <button className="btn ml-4 btn-outline hover:bg-gradient-to-b from-yellow-50 to-white text-yellow-100 hover:text-black border-yellow-300 lg:btn-lg btn-info">
                    Get Started
                  </button>
                </div>
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
