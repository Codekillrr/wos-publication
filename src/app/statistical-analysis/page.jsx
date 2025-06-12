import React from "react";
import ServicePage from "@/components/ServicePage";

export default function Service() {
  const Service = "Statistical AnalysisServices";
  const titleW = "Cost-Effective";
  const titleY = "Statistical Analysis and Review Services";
  const para1 =
    "Avoid errors in your statistical analysis research papers and reports with our expert statistical review services. At Clarivate Publication, we assist you in ensuring your journal submission is accepted and successfully published.";
  const title2W = "Achieve academic success with the support of our";
  const title2Y = "expert statistical review services!";
  const para2 =
    "Enhance your research with our statistical analysis and review services. Our team works with both experienced and novice authors to perfect their statistical reporting and ensure accuracy. We optimize algorithms and structure your manuscript with clear headings, minimizing errors. By providing detailed statistical analysis, we transform your research data into accessible, reliable results that enhance the credibility of your work and reduce the risk of rejections. Whether you are dealing with complex data or sample size concerns, we offer customized solutions that improve the clarity and quality of your research. Trust us for expert statistics review and data analysis services.s";
  const title3W = "How We Conduct";
  const title3Y = "Statistical Analysis for You";
  const cardTitle1 = "Understanding Your Manuscript";
  const cardpara1 =
    "Before beginning the statistical analysis, we thoroughly review your research paper to comprehend its objectives and the nature of your data. Once we fully understand your research goals and the data involved, we select the most appropriate statistical methods for analysis.";
  const cardTitle2 = "Plan and Execute the Analysis";
  const cardpara2 =
    "Once we identify the most suitable method for your specific research, we develop a detailed plan for the statistical review. We then perform the analysis, ensuring the results are accurate and robust, thereby enhancing the credibility of your research paper.";
  const cardTitle3 = "Provide You with the Results";
  const cardpara3 =
    "After completing the statistical review and analysis, we will deliver a summary report containing the key findings based on our observations. Additionally, we will provide graphs, charts, and figure files to support the analysis.";
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
