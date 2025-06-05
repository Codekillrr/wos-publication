import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Thesis Writing Services";
  const titleW = "Professional";
  const titleY = "Thesis Writing and Editing Services";
  const para1 =
    "Theses play a crucial role in your academic journey, and we are here to simplify the process for you. With our advanced thesis checker, you can confidently ensure the quality of your work. Recognizing the importance of excellence, we offer top-tier thesis writing services. Our team of expert PhD thesis editors meticulously reviews your work, ensuring clarity, coherence, and compliance with academic standards.";
  const title2W = "Leave a Lasting Impression with Our Expert";
  const title2Y = "Thesis Writing Services";
  const para2 =
    "Our team of highly skilled professionals brings unmatched academic expertise to make your thesis flawless and exceptional. Our expert editors meticulously review your thesis for grammar, formatting, and structural errors, ensuring every aspect meets the highest academic standards. We go beyond basic editing by carefully analyzing syntax, style, and structure to preserve the uniqueness and quality of your work. At Clarivate Publication, we are committed to delivering excellence, making us one of the leading providers of thesis editing services. Choose us for affordable yet premium-quality thesis editing that ensures your academic success!";
  const title3W = "Our Approach to Delivering Exceptional";
  const title3Y = "Thesis Editing Services";
  const cardTitle1 = "Review and Evaluation";
  const cardpara1 =
    "To begin the thesis editing process, submit your thesis and place your order. We accept formats like Word, DOC, and DOCX. Once received, our expert editors review the document thoroughly, considering its scope, subject, and any specific requirements you provide.";
  const cardTitle2 = "Thorough Editing";
  const cardpara2 =
    "After reviewing your thesis, our editor refines its language, improving grammar, syntax, vocabulary, and addressing any specific requirements. They also check the structure, verify citations and references, and ensure compliance with the required style guide.";
  const cardTitle3 = "Final Editing and Completion";
  const cardpara3 =
    "Once our thesis editing and proofreading experts have addressed all formatting, grammar, and other issues, the document undergoes a quick recheck for accuracy. It is then handed back to you for a final review. You can provide any additional revisions or suggestions, and our team will ensure all your requests are met.";
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
