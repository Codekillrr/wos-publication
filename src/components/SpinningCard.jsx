import React from "react";

const SpinningCard = ({ titleW, titleB, para }) => {
  return (
    <div className="rounded-3xl shadow-lg mx-4 bg-white mb-4">
      <div className="p-4 lg:p-10">
        <h2 className="text-2xl font-bold w-full text-center lg:text-left py-2 pt-8">
          {titleW} <span className="text-yellow-600">{titleB}</span>
        </h2>
        <p className="px-1 lg:px-0 text-center lg:text-left pb-5">{para}</p>
      </div>
    </div>
  );
};

export default SpinningCard;
