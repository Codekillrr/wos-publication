import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Statistical Analysis";
  const titleW = "Expert Assistance Services For";
  const titleY = "Journal Selection";
  const para1 =
    "Selecting the right journal for your publication is easier with Clarivate Publication. Our expert journal selection support services will guide you through the process, ensuring your research paper is published in the best-suited journal for maximum impact.";
  const title2W = "Find the Perfect Journal with Our Expert";
  const title2Y = "Journal Selection Tools!";
  const para2 =
    "Discover the perfect journal for your research with our expert journal selection tool. Rest assured, we focus on choosing journals with the highest impact factors to ensure your work reaches the right audience. Our streamlined process guarantees that your research gets the visibility it deserves. No need to search for journal selection support elsewhere—we’re here to guide you in selecting the best journal for your work and Publication. Let us help you achieve success!";
  const title3W = "How we assits you in";
  const title3Y = "Journal Selection";
  const cardTitle1 = "Understanding Your Research";
  const cardpara1 =
    "The first step in our process is to fully understand your research. You share your work with us, and we make sure to listen attentively. We aim to grasp the essence of your research, what makes it unique, and your specific goals. Once we have a clear understanding, we move on to the next phase.";
  const cardTitle2 = "Explore Journal Options";
  const cardpara2 =
    "Once we have a solid understanding of your research, we apply our expertise to identify the best journal options for your work. We assess factors such as the topics they focus on, their target audience, and their overall impact to help you select the journals that are most closely aligned with your research.";
  const cardTitle3 = "Personalized Journal Suggestions";
  const cardpara3 =
    "Once we’ve matched journals to your research, we provide a curated list of recommendations. Each journal is carefully selected to reflect the core of your research and aligns with your goals. Our suggestions are not just suitable matches but are intended to complement and enhance the reach of your work.";

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
