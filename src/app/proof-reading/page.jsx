import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Proofreading Services";
  const titleW = "Expert Online";
  const titleY = "Proofreading Services";
  const para1 =
    "We are a leading provider of top-tier manuscript proofreading services for all our clients. With years of experience, Clarivate Publication has earned the trust of numerous satisfied clients. We offer expert proofreading services tailored to meet the needs of every individual client.";
  const title2W = "Top-Quality";
  const title2Y = "Proofreading and Editing Services";
  const para2 =
    "Clarivate Publication is your ultimate proofreading partner, offering the finest proofreading assistance to all our clients. Our premium services include thesis and dissertation proofreading, catering to both students and professionals. With years of experience in delivering exceptional online proofreading, we have built a reputation for excellence. The glowing reviews of our proofreading services speak to the quality and reliability we provide.";
  const title3W = "The Process of Our Book";
  const title3Y = "Proofreading Services";
  const cardTitle1 = "Submission and Clarification";
  const cardpara1 =
    "Initially, you’ll submit your manuscript to our team of experts. They will then inquire about your specific requirements and ask relevant questions to gain a clear understanding. Our team carefully reviews the topic and subject of your work before passing it on to senior professionals for further follow-up.";
  const cardTitle2 = "The Review Process";
  const cardpara2 =
    "Once the manuscript is handed over to our proofreading and grammar-checking team, they begin addressing basic grammar errors. Our experts follow best practices in proofreading and create a detailed plan for reviewing the entire content. They correct formatting, spelling, and any other issues present in the manuscript.";
  const cardTitle3 = "Corrections and Final Review";
  const cardpara3 =
    "After thoroughly proofreading and correcting your manuscript, we will return it to you for review. Using the best proofreading techniques, we ensure your research papers are free from errors and language issues. Finally, we make any necessary revisions based on your feedback, polish the content, and deliver the final version to you.";
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
