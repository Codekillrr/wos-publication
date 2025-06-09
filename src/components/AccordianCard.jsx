import * as React from "react";
import { Accordion } from "radix-ui";
import { cn } from "@/lib/utils";

const AccordionCard = () => {
  const items = [
    {
      id: 1,
      question: "What services does WOS offer?",
      answer:
        "At WOS Publications, our priority is your satisfaction. We are committed to addressing your concerns and queries promptly. We provide an extensive range of post-production and editing services tailored to your needs.Clarivate Publications offers three tiers of editing services: Scientific, Premium, and Advanced. Each level varies in pricing and the range of services provided, ensuring flexible options to match your requirements.If your manuscript has been rejected by a journal, we specialize in guiding you through the resubmission process. Our experts revise your work based on journal peer reviewers' feedback and provide seamless support from editing to submission, working diligently to help your manuscript get published in a prestigious journal.",
    },
    {
      id: 2,
      question: "Is it possible to add extra services to my order?",
      answer:
        "If you'd like to add a service to your order after placing it, please contact our customer service team to confirm if it’s possible. As long as your editor has not yet completed the revisions, a second check can usually be accommodated. Additional charges will apply for the new service. In cases of lengthy submissions or limited editing time, extra hours may be required. Please note that all additional services are subject to approval by the assigned editor.",
    },
    {
      id: 3,
      question: "How to choose the right plan for your needs?",
      answer:
        "If you're unsure which plan to choose, we're here to help. Here's what to do next: Start by browsing our website to explore the different plans available, including various editing levels and delivery times. If you're still uncertain about which package fits your needs and document requirements, don't hesitate to reach out. Our customer support team will assess your needs and budget before providing a personalized recommendation.",
    },
    {
      id: 4,
      question: "Do your editors specialize in specific fields?",
      answer:
        "We prioritize subject matter expertise in our editorial team. Our team includes medical professionals, from physicians and PhDs to engineers and postgraduates, with over 60% of our editors having an academic background. Along with their technical proficiency, each editor possesses a deep understanding of the subject matter, writing standards, and language conventions.",
    },
    {
      id: 5,
      question:
        "What qualifications and areas of expertise do your editors have?",
      answer:
        "We prioritize subject-matter expertise in our editorial team. Our staff includes physicians, PhDs, MDs, postgraduates, engineers, and even journal peer reviewers. More than 60% of our editors have a research background. Each editor brings specialized technical knowledge in their field, along with a deep understanding of your topic, writing conventions, and terminology.",
    },
    {
      id: 6,
      question:
        "Are your services cost-effective, and how is your pricing structured?",
      answer: `Our pricing plans are designed to be budget-friendly, catering to the needs of our target audience. We often offer discounts, making our services accessible even to part-time students. At Clarivate Publications, our pricing is influenced by three factors: 
        The word count of your document, 
        The turnaround time or delivery deadline, 
        The level of editing selected (Advanced or Premium Editing). 
        For an accurate price quote, please reach out using the contact details provided on our website.`,
    },
  ];
  return (
    <Accordion.Root
      className="AccordionRoot rounded-lg border w-auto mx-4 overflow-hidden border-gray-300 shadow-2xl"
      type="single"
      defaultValue={1}
      collapsible
    >
      {items.map((item) => (
        <Accordion.Item
          key={item.id}
          className="AccordionItem w-full "
          value={item.id}
        >
          <AccordionTrigger className="">{item.question}</AccordionTrigger>
          <AccordionContent className="">{item.answer}</AccordionContent>
        </Accordion.Item>
      ))}
    </Accordion.Root>
  );
};

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Header className="AccordionHeader w-full">
      <Accordion.Trigger
        className="w-full font-bold bg-gradient-to-b from-yellow-50 to-white flex justify-between p-4 border-b border-gray-300"
        {...props}
        ref={forwardedRef}
      >
        {children}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m19.5 8.25-7.5 7.5-7.5-7.5"
          />
        </svg>
      </Accordion.Trigger>
    </Accordion.Header>
  )
);

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => (
    <Accordion.Content
      className={cn("AccordionContent", "border-b  border-gray-300 p-4 my-2")}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionCard;
