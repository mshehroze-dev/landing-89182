import React from "react";
import "./App.css"; // Assuming App.css for base styles/tailwind config
import HeroSection from "./components/HeroSection";
import FeaturesSection from "./components/FeaturesSection";
import FaqSection from "./components/FaqSection";
import { NuvraBadge } from './components/NuvraBadge';
// Theme data as defined in the JSON root
const theme = {
  font: "Inter, sans-serif",
  radius: "rounded-xl",
  shadow: "shadow-lg",
  palette: {
    primary_50: "#E0F7FA",
    primary_100: "#B2EBF2",
    primary_200: "#80DEEA",
    primary_300: "#4DD0E1",
    primary_400: "#26C6DA",
    primary_500: "#00BCD4",
    primary_600: "#00ACC1",
    primary_700: "#0097A7",
    primary_800: "#00838F",
    primary_900: "#006064",
    accent_50: "#FFFDE7",
    accent_100: "#FFF9C4",
    accent_200: "#FFF59D",
    accent_300: "#FFF176",
    accent_400: "#FFEE58",
    accent_500: "#FFEB3B",
    accent_600: "#FDD835",
    accent_700: "#FBC02D",
    accent_800: "#F9A825",
    accent_900: "#F57F17",
    neutral_50: "#FAFAFA",
    neutral_100: "#F5F5F5",
    neutral_200: "#EEEEEE",
    neutral_300: "#E0E0E0",
    neutral_400: "#BDBDBD",
    neutral_500: "#9E9E9E",
    neutral_600: "#757575",
    neutral_700: "#616161",
    neutral_800: "#424242",
    neutral_900: "#212121"
  },
  gradient_from: "primary-400",
  gradient_to: "primary-600",
  hero_bg_class: "bg-primary-700",
  button_bg_class: "bg-accent-500",
  button_hover_class: "hover:bg-accent-600",
  text_color_light: "text-white",
  text_color_dark: "text-neutral-800",
  section_bg_light: "bg-neutral-50",
  section_bg_dark: "bg-neutral-100",
  section_y: "py-16 md:py-24"
};
// Section data as defined in the JSON's `sections` array
const sectionsData = [
  {
    type: "hero",
    headline: "Unlock Your Potential with Our Innovative Platform",
    sub: "Experience seamless productivity and powerful tools designed to elevate your work.",
    cta_text: "Get Started Now",
    image_url: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    type: "features",
    items: [
      { title: "Intuitive Dashboard", desc: "Access all your essential tools and insights from a single, easy-to-navigate interface." },
      { title: "Advanced Analytics", desc: "Gain deep insights into your performance with comprehensive data visualization and reporting." },
      { title: "Collaborative Tools", desc: "Work together effortlessly with team members, sharing ideas and making progress in real-time." },
      { title: "Secure & Reliable", desc: "Your data is protected with industry-leading security protocols and consistent uptime." }
    ]
  },
  {
    type: "faq",
    items: [
      { q: "What is your pricing model?", a: "We offer flexible pricing tiers, including a free plan, starter, pro, and enterprise options. Visit our pricing page for details." },
      { q: "Is there a free trial?", a: "Yes, you can sign up for a 14-day free trial with full access to all pro features. No credit card required." },
      { q: "How do I get support?", a: "Our support team is available 24/7 via chat, email, and phone. We also have an extensive knowledge base." }
    ]
  }
];
function App() {
  return (
  <>
    <NuvraBadge />
    <div className={`font-${theme.font.split(',')[0].toLowerCase()}`} dir="ltr">
      {sectionsData.map((section, index) => {
        switch (section.type) {
          case "hero":
            return <HeroSection key={index} {...section} theme={theme} />;
          case "features":
            return <FeaturesSection key={index} {...section} theme={theme} />;
          case "faq":
            return <FaqSection key={index} {...section} theme={theme} />;
          default:
            return null;
        }
      })}
    </div>
  
  </>
);
}
export default App;