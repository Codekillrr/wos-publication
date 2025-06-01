import React from "react";
import Image from "next/image";

const IconCard = ({ Icon, Title, Para }) => {
  return (
    <div className="relative bg-zinc-950 text-white mx-3 rounded-lg mt-25">
      <div className="absolute -top-10 w-full flex justify-center">
        <Image
          src={Icon}
          alt=""
          width={100}
          height={100}
          className="object-cover rounded-xl border-black p-4 bg-white"
        />
      </div>
      <h2 className="pt-20 pb-1 text-center text-[1.4rem] font-bold">
        {Title}
      </h2>
      <p className="text-center p-4 pt-0 pb-15">{Para}</p>
    </div>
  );
};

export default IconCard;
