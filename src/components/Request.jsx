import React from "react";
import { cn } from "@/lib/utils";

const Request = ({ Para, b1, b2, paraClass }) => {
  return (
    <div className="flex flex-col justify-center items-center font-bold">
      <p className={cn(" lg:text-xl max-w-120 text-black px-2 ", paraClass)}>
        {Para}
      </p>
      <div className="my-6 mt-5 lg:mt-10 max-w-200 p-4 w-full flex text-yellow-600 justify-evenly">
        <button className="px-4 py-2 min-w-30 btn max-w-50 border-2 border-white lg:w-40 lg:py-5 lg:text-xl rounded-lg">
          {b1}
        </button>
        <button className="px-4 py-2 w-30 btn border-2 border-white lg:w-40 lg:py-5 lg:text-xl rounded-lg">
          {b2}
        </button>
      </div>
    </div>
  );
};

export default Request;
