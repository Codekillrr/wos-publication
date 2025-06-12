import React from "react";

import DotCard from "@/components/DotCard";

const DotCardSection = () => {
  const items = [
    {
      id: 1,
      title: "Medical Science",
      para: "200+ Subjects, 800+ Experts, 470K+ Papers",
    },
    {
      id: 2,
      title: "Life Sciences",
      para: "100+ Subjects, 800+ Experts, 280,000+ Papers",
    },
    {
      id: 3,
      title: "Physical Engineering",
      para: "800+ Subjects, 1000+ Experts, 300,000 Papers",
    },
    {
      id: 4,
      title: "Social Sciences",
      para: "800+ Subjects, 1000+ Experts, 300,000 Papers",
    },
    {
      id: 5,
      title: "Business & Economics",
      para: "100+ Subjects, 1000+ Experts, 75,000 Papers",
    },
  ];
  return (
    <div className="my-15 mx-2">
      <h1 className="text-4xl lg:text-6xl lg:px-40 text-center font-bold mb-5">
        We offer <span className="text-yellow-500">journal publication </span>
        and expert editing for{" "}
        <span className="text-yellow-500">major subjects.</span>
      </h1>
      <div className="lg:grid lg:grid-flow-col lg:grid-rows-1 lg:px-25">
        {items.map((item) => (
          <DotCard key={item.id} Title={item.title} Para={item.para} />
        ))}
      </div>
    </div>
  );
};

export default DotCardSection;
