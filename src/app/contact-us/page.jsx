import Image from "next/image";
import NavBar from "@/components/NavBar";
import Testimonials from "@/components/Testimonials";
import ContactForm from "@/components/ContactForm";

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
        <div className="relative h-auto w-full lg:h-180 flex pl-25">
          <div className="hero min-h-full bg-transparent">
            <div className="hero-content flex-col lg:flex-row">
              <div>
                <h1 className="text-5xl font-bold text-white">Contact Us</h1>
                <p className="py-6 text-white">
                  "Reach Out to Us to Get Professional Editing Services and
                  Publication Support"
                </p>
                <button className="btn btn-outline btn-lg btn-info">
                  Schedule Call
                </button>
              </div>
              <img src="/contact.png " className="max-w-xl rounded-lg" />
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
