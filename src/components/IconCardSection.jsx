import React from "react";
import IconCard from "@/components/IconCard";

const IconCardSection = () => {
  const items = [
    {
      id: 1,
      icon: "/icon1.webp",
      title: "Find the Right Expert",
      para: "After understanding your requirements, we introduce you to our top experts, allowing you to choose the one best suited for your research paper and journal selection. You can select the expert you believe will be the most suitable for your needs.",
    },
    {
      id: 4,
      icon: "/icon4.png",
      title: "Submission and Consultation",
      para: "We begin by receiving your documents and working closely with you to understand every detail of your project. We take the time to gather your specific requirements and expectations so we can deliver the best possible services, such as dissertation editing, tailored to your needs.",
    },
    {
      id: 2,
      icon: "/icon2.png",
      title: "Review and Revision",
      para: "Once we've addressed all aspects, from formatting and grammar to spelling errors and citation concerns, we return the document to you for a quick review and any revisions. After your review, we'll incorporate your feedback and finalize the document.",
    },
    {
      id: 5,
      icon: "/icon5.png",
      title: "Editing and anlysis",
      para: "Once you've selected your expert, we proceed with the next phase. Our professionals begin by creating a plan to address all issues. They then work on improving the format, correcting grammar and spelling errors, conducting a plagiarism check, and resolving any other mistakes to ensure the document is polished and error-free.",
    },
    {
      id: 3,
      icon: "/icon3.png",
      title: "Finalizing and Delivering",
      para: "In this final step, our proofreading team carefully reviews the entire document to ensure it's flawless. We then refine the document to perfection before handing it back to you.",
    },

    {
      id: 6,
      icon: "/icon6.png",
      title: "Review and Confirmation",
      para: "After the reviews, revisions, and resubmission, we return the document to you for a final thorough check. We address any additional suggestions you may have and incorporate them to ensure the document is in its best possible form.",
    },
  ];

  return (
    <div className="py-10 px-2">
      <h4 className="text-center text-xl lg:text-2xl text-yellow-500 px-4 font-bold">
        How We Achieve Excellence in What We Do
      </h4>
      <h1 className=" text-center text-4xl lg:text-6xl lg:mt-5  font-bold">
        Our Professional English Editing <br />
        <span className="text-yellow-500">Service Process</span>
      </h1>
      <div className="lg:grid lg:grid-flow-col lg:grid-rows-2 lg:px-60">
        {items.map((item) => (
          // <div> //if need to place key
          // </div>
          <IconCard Icon={item.icon} Title={item.title} Para={item.para} />
        ))}
      </div>
    </div>
  );
};

export default IconCardSection;
