import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-black border-t-3 border-gray-300 text-base-content p-10">
      <aside>
        <Image
          src={"/logo.png"}
          alt="logo"
          width={100}
          height={100}
          className="rounded-xl"
        />
        <p className="text-white">
          <span className="text-yellow-300 font-bold">WOS Publications</span>
          <br />
          Professional editing and research publication services.
        </p>
      </aside>

      <nav className="text-white">
        <h6 className="footer-title opacity-100 text-yellow-200">Legal</h6>
        <a className="link link-hover" href="/terms-conditions/">
          Terms & Conditions
        </a>
        <a className="link link-hover" href="/privacy-policy/">
          Privacy Policy
        </a>
      </nav>

      <nav className="text-white">
        <h6 className="footer-title opacity-100 text-yellow-200">Services</h6>
        <a className="link link-hover" href="/thesis-editing/">
          Thesis Editing
        </a>
        <a className="link link-hover" href="/dissertation-editing/">
          Dissertation Editing
        </a>
        <a className="link link-hover" href="/research-paper-editing/">
          Research Paper Editing Services
        </a>
        <a className="link link-hover" href="/artwork-services/">
          Artwork Services
        </a>
        {/* <a className="link link-hover" href="/artwork-services/">
          Statistical Analysis
        </a> */}
        <em className="text-gray-500 text-xs">...and many more</em>
      </nav>

      <nav className="text-white">
        <h6 className="footer-title opacity-100 text-yellow-200">Company</h6>
        <Link href="/" className="link link-hover">
          Home
        </Link>
        <Link href="/about" className="link link-hover">
          About us
        </Link>
        <Link href="/contact-us" className="link link-hover">
          Contact
        </Link>
      </nav>

      <nav className="text-white">
        <h6 className="footer-title opacity-100 text-yellow-200">Lets Talk</h6>
        <a href="tel:+447466288605" className="link link-hover">
          +44 7466 288605
        </a>
        <a href="mailto:contact@wospublication.com" className="link link-hover">
          contact@wospublications.co.uk
        </a>
        <a href="mailto:info@wospublication.com" className="link link-hover">
          info@wospublication.co.uk
        </a>
        <a href="mailto:help@wospublication.com" className="link link-hover">
          help@wospublication.co.uk
        </a>
      </nav>

      <nav className="text-white">
        <h6 className="footer-title opacity-100 text-yellow-200">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://wa.me/447466288605?text=Hi%20there%2C%20I%20have%20a%20question!"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              viewBox="0 0 16 16"
              className="bi bi-whatsapp fill-current pb-1"
              color="yellow"
            >
              <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/share/16cHw6wbrP/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
              color="yellow"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
