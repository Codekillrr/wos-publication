import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const Request = ({ Para, b1, b2, paraClass }) => {
  return (
    <div className="flex flex-col justify-center items-center font-bold">
      <p className={cn(" lg:text-xl max-w-120 text-black px-2 ", paraClass)}>
        {Para}
      </p>
      <div className="my-6 mt-5 lg:mt-10 max-w-200 p-4 w-full flex text-yellow-600 justify-evenly">
        <a
          className="px-4 py-2 min-w-30 btn max-w-50 border-2 border-white lg:w-40 lg:py-5 lg:text-xl rounded-lg"
          target="_blank"
          rel="noopener noreferrer"
          href="https://wa.me/447466288605?text=Hi!%20I'm%20interested%20in%20getting%20a%20quote.%20Could%20you%20let%20me%20know%20how%20to%20proceed?"
        >
          {b1}
        </a>
        <Link
          href="/contact-us"
          className="px-4 py-2 w-30 btn border-2 border-white lg:w-40 lg:py-5 lg:text-xl rounded-lg"
        >
          {b2}
        </Link>
      </div>
    </div>
  );
};

export default Request;
