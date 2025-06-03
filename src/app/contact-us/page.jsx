import Image from "next/image";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function ContactUs() {
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
        <div className="relative h-auto w-full lg:h-180 flex lg:pl-25">
          <div className="hero min-h-full bg-transparent max-lg:mt-25">
            <div className="hero-content flex-col lg:flex-row">
              <div>
                <h1 className="text-5xl font-bold text-white">Contact Us</h1>
                <p className="py-6 text-white">
                  "Reach Out to Us to Get Professional Editing Services and
                  Publication Support"
                </p>
                <button className="btn btn-outline lg:btn-lg btn-info">
                  Schedule Call
                </button>
              </div>
              <img src="/contact.png " className="w-xl rounded-lg" />
            </div>
          </div>
          <div className="absolute h-full w-full bg-gradient-to-tr from-black via-black/60 to-black/40 -z-8 left-0 top-0"></div>
          <Image
            src={"/bannerhome.webp"}
            alt=""
            layout="fill"
            className="absolute object-cover -z-10 opacity-90"
          />
        </div>

        <div className="hero bg-base-200 min-h-full py-20">
          <div className="hero-content flex-col-reverse lg:flex-row-reverse">
            <ContactForm />
            <div>
              <h1 className="text-5xl font-bold">
                How Can We Assist You Today?
              </h1>
              <p className="py-6">
                Feel free to reach out to us with any inquiries or feedback.
                Please use the form below to message us. We will get back to you
                as soon as possible.
              </p>
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
}
