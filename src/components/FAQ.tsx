"use client";

import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What types of AI and data services do you offer?",
    answer:
      "We offer a comprehensive range of services including data analytics and visualization, process automation, custom AI model development, predictive analytics, natural language processing solutions, and data infrastructure optimization. We can help with everything from basic automation to complex machine learning implementations.",
  },
  {
    question: "How do you ensure data security and privacy?",
    answer:
      "We follow industry best practices and compliance standards for data security. This includes encrypted data storage, secure access protocols, regular security audits, and strict adherence to data protection regulations like GDPR and CCPA. We sign NDAs and data processing agreements to ensure your information remains confidential.",
  },
  {
    question: "What's your typical project process?",
    answer:
      "Our process typically involves: 1) Initial consultation to understand your needs, 2) Data assessment and solution design, 3) Proof of concept development, 4) Full solution implementation, and 5) Ongoing support and optimization. We maintain clear communication throughout and ensure you're involved in key decisions.",
  },
  {
    question: "Do we need to have clean, organized data to work with you?",
    answer:
      "No, we can help regardless of your data's current state. We have experience in data cleaning, structuring, and organization. Part of our service includes assessing your current data infrastructure and helping you establish better data practices.",
  },
  {
    question: "How do you price your services?",
    answer:
      "Pricing varies based on project scope, complexity, and requirements. We offer both project-based and retainer pricing models. After our initial consultation, we provide detailed proposals with transparent pricing and deliverables.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Timeline varies by project, but most clients see initial results within 1-3 months. Simple automation projects can show ROI within weeks, while more complex AI implementations might take 3-6 months to show full benefits. We set clear milestones and KPIs to track progress.",
  },
  {
    question: "Do you provide training and support after implementation?",
    answer:
      "Yes, we provide comprehensive training for your team and ongoing support post-implementation. This includes documentation, hands-on training sessions, and a support period to ensure smooth adoption of new systems.",
  },
  {
    question: "Can you integrate with our existing systems?",
    answer:
      "Yes, we design solutions that integrate with your existing technology stack. We have experience working with various databases, CRMs, ERPs, and other business systems. We can also help modernize legacy systems when needed.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "We work across various industries including finance, healthcare, retail, manufacturing, and professional services. Our solutions are customized to meet industry-specific requirements and compliance standards.",
  },
  {
    question:
      "What makes your AI solutions different from off-the-shelf products?",
    answer:
      "Our solutions are custom-built for your specific needs, data, and processes. Unlike generic solutions, we optimize for your unique business context, integrate with your existing workflows, and provide ongoing optimization based on your feedback and results.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const midPoint = Math.ceil(faqData.length / 2);
  const leftColumnFAQs = faqData.slice(0, midPoint);
  const rightColumnFAQs = faqData.slice(midPoint);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-gray-50 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Find answers to common questions about our AI and automation
            solutions
          </p>
        </div>
        <div className="mx-auto mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-4">
            {leftColumnFAQs.map((item, index) => (
              <div key={index} className="mb-4">
                <button
                  onClick={() => handleClick(index)}
                  className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-5 text-left shadow-sm hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                  <span className="ml-6 flex-shrink-0 transition-transform duration-200">
                    {openIndex === index ? (
                      <span className="text-blue-600 transform rotate-180">
                        −
                      </span>
                    ) : (
                      <span className="text-gray-400">+</span>
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-white rounded-b-lg">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-4">
            {rightColumnFAQs.map((item, index) => (
              <div key={index + midPoint} className="mb-4">
                <button
                  onClick={() => handleClick(index + midPoint)}
                  className="flex w-full items-center justify-between rounded-lg bg-white px-4 py-5 text-left shadow-sm hover:bg-gray-50"
                >
                  <span className="font-medium text-gray-900">
                    {item.question}
                  </span>
                  <span className="ml-6 flex-shrink-0 transition-transform duration-200">
                    {openIndex === index + midPoint ? (
                      <span className="text-blue-600 transform rotate-180">
                        −
                      </span>
                    ) : (
                      <span className="text-gray-400">+</span>
                    )}
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index + midPoint ? "max-h-96" : "max-h-0"
                  }`}
                >
                  <div className="p-4 bg-white rounded-b-lg">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
