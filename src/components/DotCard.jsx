import React from "react";

const DotCard = ({ Title, Para }) => {
  return (
    <div className="border-1 border-dotted mx-2 lg:p-2 rounded-2xl text-center font-bold my-10">
      <h2 className="text-4xl p-2">{Title}</h2>
      <p className="p-2">{Para}</p>
    </div>
  );
};

export default DotCard;
