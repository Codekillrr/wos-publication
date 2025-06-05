import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Resubmission Support Services";
  const titleW = "Top-Quality Manuscript Review and";
  const titleY = "Resubmission Support Services";
  const para1 =
    "We offer unlimited revisions until you are fully satisfied. Our journal resubmission support ensures your manuscript is successfully resubmitted for research papers. Let us help you revise and resubmit your manuscripts with confidence.";
  const title2W = "Revise and Resubmit with Confidence Using Our";
  const title2Y = "Resubmission Assistance";
  const para2 =
    "We understand that the path to academic and scientific recognition can be tough. That’s why our expert team is here to assist you with manuscript revisions and the resubmission of your research paper to the journal. We provide a full range of services to help you effectively revise and resubmit your paper, increasing its chances of acceptance. At WOS Publication, we turn your research into influential Publication. We’re dedicated to seeing your hard work in print, which is why we’ll guide you through the resubmission process and assist you in resubmitting your research paper.";
  const title3W = "Our Approach to Paper";
  const title3Y = "Revisions and Resubmission";
  const cardTitle1 = "Comprehensive Evaluation";
  const cardpara1 =
    "We begin by carefully reviewing your research paper. Our experienced reviewers assess every aspect, identifying areas for improvement. From clarity and structure to formatting and compliance with journal guidelines, we pinpoint ways to enhance your paper. We then provide you with detailed feedback on what needs to be fixed and why.";
  const cardTitle2 = "Tailored Enhancement";
  const cardpara2 =
    "Based on the insights from our evaluation, we proceed to enhance your manuscript for the research paper. Our expert editors and subject matter specialists work together to refine your writing, ensuring everything is polished and precise. Our goal is to align your manuscript perfectly with the journal's scope and requirements, making it stand out and impress the journal.";
  const cardTitle3 = "Strategic Resubmission Support";
  const cardpara3 =
    "Once your manuscript is refined to perfection, we assist you throughout the resubmission process. We offer clear instructions, valuable tips, and insights, empowering you to submit with confidence and significantly boost your chances of acceptance. We provide step-by-step guidance, so you can proceed without any stress.";
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
