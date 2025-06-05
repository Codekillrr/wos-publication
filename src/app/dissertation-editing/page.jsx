import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Dissertation Editing Service";
  const titleW = "Premium";
  const titleY = "Dissertation Editing Service";
  const para1 =
    "We not only help you write your dissertation but also offer expert dissertation editing services. Our team of skilled editors is dedicated to enhancing your dissertation, ensuring it meets academic standards. If you're looking to make your PhD dissertation stand out, reach out to us for affordable editing services and professional assistance.";
  const title2W = "Take Advantage of Our Budget-Friendly";
  const title2Y = "Dissertation Formatting Services";
  const para2 =
    "We are dedicated to helping academics excel in their careers. Our mission is to enhance your dissertations by providing detailed editing to make them flawless. Our team is renowned for their expertise in dissertation editing. Trust us to deliver top-notch editing services from a highly experienced team to ensure your work stands out!";
  const title3W = "Our PhD";
  const title3Y = "Dissertation Editing Process";

  const cardTitle1 = "Dissertation Submission Process";
  const cardpara1 =
    "We begin our dissertation editing service by receiving your dissertation document along with your specific requirements. Our team of experts then thoroughly assesses the manuscript, taking your needs into account. Next, we create a content plan and outline the necessary revisions, establishing a clear roadmap for improving the document. This process ensures a structured approach to enhancing your dissertation efficiently.";
  const cardTitle2 = "Refining and Polishing";
  const cardpara2 =
    "This step is the core of the process, where we make all the necessary revisions to perfect your manuscript. Our dissertation editors carefully analyze the document from start to finish. They first focus on formatting, followed by correcting grammar, punctuation, and writing style errors. Finally, they review citations and references to ensure their accuracy and compliance with the required guidelines.";
  const cardTitle3 = "Review and Final Delivery";
  const cardpara3 =
    "In the final step, our experts return the document to you for any feedback or suggestions. We then make the necessary adjustments based on your input. Afterward, the manuscript undergoes one last round of detailed review and refinement. Our professionals thoroughly check the document from start to finish to ensure it’s free of errors. Finally, we deliver the polished dissertation to you, ready for submission.";

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
