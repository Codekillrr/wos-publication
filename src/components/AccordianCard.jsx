import * as React from "react";
import { Accordion } from "radix-ui";
import classNames from "classnames";

const AccordionCard = () => {
  const items = [
    {
      question: "What services does WOS offer?",
      answer:
        "At Clarivate Publications, our priority is your satisfaction. We are committed to addressing your concerns and queries promptly. We provide an extensive range of post-production and editing services tailored to your needs.Clarivate Publications offers three tiers of editing services: Scientific, Premium, and Advanced. Each level varies in pricing and the range of services provided, ensuring flexible options to match your requirements.If your manuscript has been rejected by a journal, we specialize in guiding you through the resubmission process. Our experts revise your work based on journal peer reviewers' feedback and provide seamless support from editing to submission, working diligently to help your manuscript get published in a prestigious journal.",
    },
    {
      question: "What services does WOS offer?",
      answer:
        "At Clarivate Publications, our priority is your satisfaction. We are committed to addressing your concerns and queries promptly. We provide an extensive range of post-production and editing services tailored to your needs.Clarivate Publications offers three tiers of editing services: Scientific, Premium, and Advanced. Each level varies in pricing and the range of services provided, ensuring flexible options to match your requirements.If your manuscript has been rejected by a journal, we specialize in guiding you through the resubmission process. Our experts revise your work based on journal peer reviewers' feedback and provide seamless support from editing to submission, working diligently to help your manuscript get published in a prestigious journal.",
    },
    {
      question: "What services does WOS offer?",
      answer:
        "At Clarivate Publications, our priority is your satisfaction. We are committed to addressing your concerns and queries promptly. We provide an extensive range of post-production and editing services tailored to your needs.Clarivate Publications offers three tiers of editing services: Scientific, Premium, and Advanced. Each level varies in pricing and the range of services provided, ensuring flexible options to match your requirements.If your manuscript has been rejected by a journal, we specialize in guiding you through the resubmission process. Our experts revise your work based on journal peer reviewers' feedback and provide seamless support from editing to submission, working diligently to help your manuscript get published in a prestigious journal.",
    },
  ];
  return (
    <Accordion.Root
      className="AccordionRoot rounded-2xl border w-auto mx-4 overflow-hidden border-gray-300 shadow-2xl"
      type="single"
      defaultValue=""
      collapsible
    >
      {items.map((item, idx) => (
        <Accordion.Item key={idx} className="AccordionItem w-full " value="idx">
          <AccordionTrigger>{item.question}</AccordionTrigger>
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
        className="w-full flex justify-between p-4 border-b border-gray-300"
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
      className={classNames(
        "AccordionContent",
        "border-b border-gray-300 p-4 my-2"
      )}
      {...props}
      ref={forwardedRef}
    >
      <div className="AccordionContentText">{children}</div>
    </Accordion.Content>
  )
);

export default AccordionCard;
