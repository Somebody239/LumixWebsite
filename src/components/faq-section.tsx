"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggleOpen: () => void;
}

const faqs = [
  {
    question: "What web design services does Lumix Design offer?",
    answer: "Lumix Design offers a full range of web design and development services including business websites, e-commerce stores, portfolio sites, landing pages, content platforms, and custom web applications. Each project is tailored to your specific needs and brand."
  },
  {
    question: "How much does a website cost?",
    answer: "Our pricing is transparent and affordable. Base websites start at $219.99, while premium sites with e-commerce and user integrations start at $349.99. Contact us for a free consultation to discuss your specific requirements and get a personalized quote."
  },
  {
    question: "How long does it take to build a website?",
    answer: "Most standard websites take 2–4 weeks from concept to launch. E-commerce sites or more complex projects may take 4–8 weeks. We'll provide a specific timeline during our initial consultation based on your project scope."
  },
  {
    question: "Do you work with small businesses?",
    answer: "Absolutely. We specialize in creating websites for small businesses and startups. We understand budget constraints and are committed to providing high-quality, professional websites at accessible prices."
  },
  {
    question: "Will my website be mobile-friendly?",
    answer: "Yes. Every website we build is fully responsive and tested across all devices. We design with a mobile-first approach to ensure your site looks and works perfectly on smartphones, tablets, and desktops."
  },
  {
    question: "What technologies do you use?",
    answer: "We build with modern frameworks like React and Next.js, ensuring fast load times, excellent SEO, and a smooth user experience. All our sites use semantic HTML, optimized CSS, and follow current web standards."
  },
  {
    question: "Do you provide ongoing maintenance?",
    answer: "Yes. We offer maintenance packages to keep your site secure, updated, and running smoothly. This includes security patches, content updates, performance monitoring, and technical support."
  },
  {
    question: "Can I update the website content myself?",
    answer: "Yes. We build our websites with user-friendly systems that let you easily update content, add pages, and manage your site without technical knowledge. We provide training to get you comfortable."
  }
];

const FaqItem = ({ question, answer, isOpen, toggleOpen }: FaqItemProps) => (
  <div className="border-b border-foreground/10 last:border-b-0">
    <button
      className="w-full text-left px-6 py-6 flex justify-between items-center focus:outline-none"
      onClick={toggleOpen}
      aria-expanded={isOpen}
    >
      <h3 className="text-lg font-medium pr-4">{question}</h3>
      <div className="text-muted-foreground flex-shrink-0">
        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>
    </button>

    <div
      className={`overflow-hidden transition-all duration-300 ${
        isOpen ? "max-h-96 pb-6" : "max-h-0"
      }`}
    >
      <div className="px-6">
        <p className="text-muted-foreground">{answer}</p>
      </div>
    </div>
  </div>
);

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 border-t border-foreground/5">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center bg-foreground/5 border border-foreground/10 px-4 py-1.5 rounded-full text-sm text-muted-foreground mb-4">
            <span className="font-medium">FAQ</span>
          </div>
          <h2 className="section-title">Common questions</h2>
          <p className="text-lg text-muted-foreground">
            Answers to frequently asked questions about our web design services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="border border-foreground/10 rounded-xl overflow-hidden">
            {faqs.map((faq, index) => (
              <FaqItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={openIndex === index}
                toggleOpen={() => toggleFaq(index)}
              />
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-muted-foreground mb-4">
              Have another question? We'd love to help.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center text-foreground hover:underline font-medium"
            >
              Contact our team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
