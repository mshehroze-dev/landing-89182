import React from "react";
interface FeatureItem {
  title: string;
  desc: string;
}
interface FeaturesSectionProps {
  items: FeatureItem[];
  theme: {
    section_bg_light: string;
    text_color_dark: string;
    radius: string;
    shadow: string;
    section_y: string;
    palette: Record<string, string>;
  };
}
function FeaturesSection({ items, theme }: FeaturesSectionProps) {
  // Simple checkmark icon as inline SVG
  const CheckIcon = () => (
    <svg className={`w-6 h-6 mr-3 text-primary-500`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
    </svg>
  );
  return (
    <section className={`${theme.section_bg_light} ${theme.text_color_dark} ${theme.section_y}`}>
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item, index) => (
            <div key={index} className={`p-6 ${theme.section_bg_dark} ${theme.radius} ${theme.shadow} flex flex-col items-start text-left`}>
              <CheckIcon />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-neutral-700">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export default FeaturesSection;
