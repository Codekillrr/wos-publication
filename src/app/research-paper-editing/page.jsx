import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Research Paper Editing Services";
  const titleW = "Enhance Your Manuscript with Our Expert";
  const titleY = "Research Paper Editing Services";
  const para1 =
    "Our team of expert research paper editors specializes in perfecting research articles to the highest standards. They thoroughly understand your ideas to deliver exceptional service tailored to your needs. At Clarivate Publication, we pride ourselves on having a dedicated and passionate group of editors who transform your research papers into outstanding works of excellence.";
  const title2W = "Partner with the Leading";
  const title2Y = "Research Paper Editing Experts";
  const para2 =
    "At WOS Publication, our expert editing team is committed to assisting students, professionals, and seasoned researchers with research paper editing, thesis editing, and dissertation editing. We meticulously edit research papers while adhering to established guidelines, all at affordable rates. Don’t miss this opportunity to elevate your work. We provide comprehensive editing for your papers and manuscripts, ensuring you stand out from the crowd.";
  const title3W = "The Process of Our Term Paper";
  const title3Y = "Editing Service";
  const cardTitle1 = "Identifying Errors";
  const cardpara1 =
    "In the initial step, our team collaborates with you to gain a clear understanding of your research article and its objectives. This enables them to identify errors in formatting, grammar, punctuation, writing style, and other areas. Our expert research article editors ensure seamless communication to eliminate any potential misunderstandings or misinterpretations.";
  const cardTitle2 = "Addressing the Errors";
  const cardpara2 =
    "Once all errors and issues have been identified, our experts begin refining your article. This process includes enhancing the structure, correcting grammar, punctuation, writing style, and resolving any language-related concerns. Additionally, our paper editing service involves thoroughly cross-checking citations and references to ensure their accuracy and consistency.";
  const cardTitle3 = "Final Touches";
  const cardpara3 =
    "At this stage, the process reaches its conclusion. Our professionals incorporate your suggestions and pass the document to the proofreading team for a final review. After a meticulous assessment, we refine the manuscript and present it in its best form, utilizing expert research article editing techniques. The finalized document is then delivered to you, ready for submission.";
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
