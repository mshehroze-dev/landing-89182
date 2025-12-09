import React, { useState } from "react";
interface FaqItem {
  q: string;
  a: string;
}
interface FaqSectionProps {
  items: FaqItem[];
  theme: {
    section_bg_light: string;
    section_bg_dark: string;
    text_color_dark: string;
    radius: string;
    shadow: string;
    section_y: string;
    palette: Record<string, string>;
  };
}
function FaqSection({ items, theme }: FaqSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  // Chevron icon as inline SVG
  const ChevronDownIcon = ({ isOpen }: { isOpen: boolean }) => (
    <svg
      className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
    </svg>
  );
  return (
    <section className={`${theme.section_bg_light} ${theme.text_color_dark} ${theme.section_y}`}>
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {items.map((item, index) => (
            <div
              key={index}
              className={`border border-neutral-300 ${theme.radius} ${theme.shadow} overflow-hidden`}
            >
              <button
                className={`w-full flex justify-between items-center p-5 text-left font-semibold ${theme.section_bg_dark} hover:bg-neutral-200 transition-colors duration-200`}
                onClick={() => toggleFaq(index)}
                aria-expanded={openIndex === index ? "true" : "false"}
                aria-controls={`faq-answer-${index}`}
              >
                {item.q}
                <ChevronDownIcon isOpen={openIndex === index} />
              </button>
              {openIndex === index && (
                <div id={`faq-answer-${index}`} className="p-5 bg-white text-neutral-700 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FaqSection;
