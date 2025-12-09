import React from "react";
interface HeroSectionProps {
  headline: string;
  sub: string;
  cta_text: string;
  image_url: string;
  theme: {
    gradient_from: string;
    gradient_to: string;
    hero_bg_class: string;
    button_bg_class: string;
    button_hover_class: string;
    radius: string;
    shadow: string;
    text_color_light: string;
    section_y: string;
  };
}
function HeroSection({ headline, sub, cta_text, image_url, theme }: HeroSectionProps) {
  return (
    <section className={`relative text-center ${theme.text_color_light} ${theme.section_y} overflow-hidden
                         bg-gradient-to-r from-${theme.gradient_from} to-${theme.gradient_to}`}>
      <div className="container mx-auto px-4 relative z-10 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 tracking-tight">{headline}</h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90 max-w-2xl mx-auto">{sub}</p>
        <button
          className={`py-3 px-8 text-lg font-semibold ${theme.button_bg_class} ${theme.button_hover_class} transition-colors duration-200 ${theme.radius} ${theme.shadow}`}
          aria-label={cta_text}
        >
          {cta_text}
        </button>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src={image_url}
          alt="Abstract background image showcasing digital tools and collaboration"
          className="w-full h-full object-cover opacity-20"
          width="1920"
          height="1080"
          loading="eager"
          decoding="sync"
        />
      </div>
    </section>
  );
}
export default HeroSection;
