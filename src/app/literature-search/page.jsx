import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Literature Search Service";
  const titleW = "Outcome-Focused Scientific";
  const titleY = "Literature Search Service";
  const para1 =
    "We set the standard for exceptional literature search services. Stop looking for scientific paper literature assistance and let us help. Our expert literature search team will guide you in finding the latest research and preparing evidence. We also support you with systematic reviews, compiling a list of relevant papers, and summarizing findings tailored to your specific field.";
  const title2W = "Top-Quality";
  const title2Y = "Literature Search and Review Services";
  const para2 =
    "At Clarivate Publication, our experts not only perform comprehensive scientific literature searches but also guide you on your journey to knowledge. We are dedicated to offering you the best expertise, enhancing your research, and supporting its publication in prestigious journals. We offer exceptional services, ensuring quality and making your literature search experience smooth and stress-free.";
  const title3W = "Our Approach to";
  const title3Y = "Literature Search";
  const cardTitle1 = "Explore and Analyze";
  const cardpara1 =
    "We begin by gaining a clear understanding of your research topic and its objectives, delving into its nuances. Our experienced researchers then conduct an extensive search across libraries, databases, and digital repositories to gather a thorough collection of relevant literature.";
  const cardTitle2 = "Select the Experts";
  const cardpara2 =
    "Next, we recommend our skilled professionals and experts. You can choose the one that best fits your needs based on their expertise, fees, and other criteria. They meticulously analyze each piece of gathered literature, assessing its credibility and relevance to your study.";
  const cardTitle3 = "Collaborate";
  const cardpara3 =
    "At this stage, you work closely with your selected expert to search through libraries, databases, articles, reports, and other relevant sources. Together, we compile the most significant and pertinent literature to support your research and help achieve your desired outcomes.";
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
