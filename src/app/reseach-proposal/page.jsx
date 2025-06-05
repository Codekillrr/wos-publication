import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Research Proposal Services";
  const titleW = "High-Quality";
  const titleY = "Research Proposal Writing Services";
  const para1 =
    "Looking for research proposal assistance? At Clarivate Publication, we offer top-tier research proposal writing services. Our team of highly qualified writers is here to support you with your academic papers and manuscripts.";
  const title2W = "Receive Expert Research Proposal";
  const title2Y = "Writing Assistance";
  const para2 =
    "Our team of expert research proposal writers is committed to delivering top-quality and affordable writing services. We adhere to the highest industry standards and principles to craft outstanding research proposals. With our help, you can make your proposals stand out and present them with confidence. Whether you’re advancing your academic career or seeking sponsorship, we are here to support you every step of the way. Get in touch with our team to create impactful and compelling proposals.";
  const title3W = "Our Thesis Proposal";
  const title3Y = "Writing Process";
  const cardTitle1 = "Grasping the Scope";
  const cardpara1 =
    "Initially, we gather all the details about your research, including its topic, scope, and specific requirements. Our research experts work closely with you to fully understand your vision, objectives, and other key aspects. Once this is complete, the team creates an outline for the manuscript and develops a plan for refining it.";
  const cardTitle2 = "Refinement and Correction";
  const cardpara2 =
    "In this phase, our team of skilled professionals addresses the core aspects of the manuscript. They meticulously correct formatting, grammar, and punctuation errors, performing thorough proofreading. Additionally, they cross-check citations and references to ensure accuracy and make any necessary corrections.";
  const cardTitle3 = "Achieving Perfection";
  const cardpara3 =
    "In the final step, we fine-tune your manuscript, ensuring it is free of errors and performing a thorough plagiarism check. Once completed, we return it to you for a quick review and invite any additional suggestions. Following your feedback, we make the necessary adjustments and deliver the polished document to you.";
  return (
    <ServicePage
      Service={Service}
      titleW={titleW}
      titleY={titleY}
      para1={para1}
      title2W={title2W}
      title2Y={title2Y}
      para2={para2}
      title3W={title3W}
      title3Y={title3Y}
      cardTitle1={cardTitle1}
      cardpara1={cardpara1}
      cardTitle2={cardTitle2}
      cardpara2={cardpara2}
      cardTitle3={cardTitle3}
      cardpara3={cardpara3}
    />
  );
}
