import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Plagiarism Detection";
  const titleW = "Plagiarism Detection:";
  const titleY = "Guaranteeing Originality with Turnitin";
  const para1 =
    "We prioritize academic integrity and use Turnitin, the leading professional plagiarism checker for scientific papers. Simply ask us to: check my plagiarism for your research papers. We ensure comprehensive plagiarism checks to uphold the authenticity and originality of your work. Whether it’s an essay, research paper, or academic draft, you can submit it for analysis using our Turnitin AI detection tool.";
  const title2W = "Access Top-Quality Research Paper";
  const title2Y = "Plagiarism Checker Services";
  const para2 =
    "Identify duplicated content and protect your credibility with our advanced Turnitin AI detection and plagiarism checking tool. At Clarivate Publication, we ensure the originality, authenticity, and uniqueness of your work. Using our top-tier plagiarism detection tool, you can guarantee that your work is both unique and flawless.";
  const title3W = "Plagiarism Checker Report Process:";
  const title3Y = "Ensuring Authenticity";
  const cardTitle1 = "Content Submission";
  const cardpara1 =
    "To check for plagiarism, simply upload your document to our secure platform. We support multiple file formats, including MS Word, DOC, DOCX, and more. Once uploaded, we begin a thorough analysis using our advanced plagiarism detection software, Turnitin.";
  const cardTitle2 = "Turnitin Tool Analysis";
  const cardpara2 =
    "Turnitin’s algorithms compare your content against an extensive database of academic papers, websites, and published works to assess its originality. The tool then generates a detailed report, highlighting any potential issues, making it easier for us to review and address the identified areas.";
  const cardTitle3 = "Comprehensive Report and Next Steps";
  const cardpara3 =
    "Once the analysis is complete, you'll receive a detailed report outlining the results. This report highlights all instances of similarity, ranked by the severity of the plagiarism. We guide you in prioritizing revisions to maintain the originality of your work. Our report provides all the necessary information to help you address and correct any issues.";
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
