import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Peer Review Services";
  const titleW = "Top-Quality Pre-Submission";
  const titleY = "Peer Review Services";
  const para1 =
    "Enhance, perfect, and elevate your manuscript with our peer review services before submitting it to the journal. Our expert reviewers help maximize your chances of acceptance.";
  const title2W =
    "Our Peer Review Services Ensure Your Work Meets the Standards of";
  const title2Y = "Peer-Reviewed Journals";
  const para2 =
    "At Journal Publisher, we are your partners in propelling your manuscripts to the forefront of academic recognition. With our pre-submission peer review services, you can transform your work to stand out in the competitive landscape of scholarly Publication. We take pride in being more than a service – we are your partners in progress. Through our peer review checker, we infuse brilliance into your work, leading to its full potential, and help you shape the academic landscape. Our journal peer review provides valuable support to help your research gain recognition. We give your work an added boost before you submit it to journals.";
  const title3W = "Our Procedure for ";
  const title3Y = "Peer Reviewing";
  const cardTitle1 = "Manuscript Evaluation";
  const cardpara1 =
    "We begin by thoroughly reviewing your manuscript. Our experts, with extensive knowledge across various fields, carefully examine every section of your work. They highlight what’s strong and identify areas for improvement, giving you a clear understanding of which parts are essential and which could benefit from further refinement.";
  const cardTitle2 = "Constructive Feedback and Improvement";
  const cardpara2 =
    "Armed with our assessment, our topic experts step in to review your work. Our peer reviewers carefully examine your manuscript, providing detailed and constructive feedback. They offer valuable insights and suggestions that help you refine and enhance your work.";
  const cardTitle3 = "Polishing Your Work";
  const cardpara3 =
    "In the final step, we ensure your manuscript shines. Our expert editors refine every aspect, perfecting grammar, style, and coherence. We transform your work into a polished masterpiece that captures the attention of journal editors and leaves a lasting impression.";
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
