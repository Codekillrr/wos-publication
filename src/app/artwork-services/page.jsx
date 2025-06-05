import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Artwork Services";
  const titleW = "Achieve Perfection in Your Research Papers With Our Expert";
  const titleY = "Artwork Services";
  const para1 =
    "Artworks tell a story, and yours deserves to stand out. At Clarivate Publication, we uphold the highest standards to deliver exceptional artwork services. Leveraging our experience and expertise, we ensure top-quality paper artwork, helping you achieve success in your journal submissions or research proposals.";
  const title2W = "Discover Our";
  const title2Y = "Artwork Preparation and Analysis Services";
  const para2 =
    "Stop looking for artwork preparation near me – we’ve got you covered. With our extensive knowledge, expertise, and skills, we bring boldness and detail to your research papers. Our artwork team upholds the highest standards, infusing creativity into every piece. At Clarivate Publication, we’re excited to assist creative individuals in bringing their visions to life!";
  const title3W = "The Process of Our";
  const title3Y = "Artwork Preparation Service";
  const cardTitle1 = "Grasping Your Unique Vision";
  const cardpara1 =
    "We start by gaining a clear understanding of your artwork concept, subject, and topic. Our team may ask additional questions to gain deeper insight into your vision. We take the time to fully comprehend every detail, ensuring we deliver the best possible artwork preparation service.";
  const cardTitle2 = "Creating the Masterpiece";
  const cardpara2 =
    "Once we have a complete understanding of your artwork concept, subject, and topic, our designers take charge. Our team of expert artwork preparators specializes in crafting exceptional artwork for research papers. They focus on every detail, using their creativity to produce something truly unique.";
  const cardTitle3 = "Polishing to Perfection";
  const cardpara3 =
    "Once our designers have created your unique artwork, we will send it to you for feedback. If you have any suggestions or areas for improvement, our team will collaborate with you to refine it further. We then fine-tune the artwork to perfection, ensuring it meets your specific requirements.";
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
