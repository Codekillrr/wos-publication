import React from "react";
import SpinningCard from "@/components/SpinningCard";

const SpinningCardSection = () => {
  return (
    <div className="lg:grid lg:grid-flow-col lg:grid-rows-2">
      <SpinningCard
        titleW={"Peer"}
        titleB={"Review"}
        para={
          "Our highly skilled and experienced team specializes in peer review support, significantly enhancing your chances of success."
        }
      />
      <SpinningCard
        titleW={"Artwork"}
        titleB={"Services"}
        para={
          "Our artwork services assist in refining your images and graphs, ensuring that all technical elements of your manuscript comply with journal guidelines."
        }
      />
      <SpinningCard
        titleW={"Thesis"}
        titleB={"Editing"}
        para={
          "To support your academic success, we offer thesis editing services designed to make your thesis flawless, eliminating all errors and ensuring perfection."
        }
      />
      <SpinningCard
        titleW={"Literature"}
        titleB={"Search"}
        para={
          "We offer the highest quality literature search services, backed by a team of experts across various fields, dedicated to assisting you in finding the most relevant research and sources for your work."
        }
      />

      <SpinningCard
        titleW={"Research Paper"}
        titleB={"Editing"}
        para={
          "Our exceptional research paper editing services are designed to help clients achieve academic excellence. We go the extra mile to support their success and elevate their work."
        }
      />
      <SpinningCard
        titleW={"Statistical"}
        titleB={"Analysis"}
        para={
          "To support your academic success, we offer thesis editing services designed to make your thesis flawless, eliminating all errors and ensuring perfection."
        }
      />
    </div>
  );
};

export default SpinningCardSection;
