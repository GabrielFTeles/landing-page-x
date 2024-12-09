import { CallToActionSection } from "@/components/call-to-action-section";
import { DemoSection } from "@/components/demo-section/demo-section";
import { FaqSection } from "@/components/faq-section";
import { HeroSection } from "@/components/hero-section";
import { HowToUseSection } from "@/components/how-to-use-section";
import { PricingSection } from "@/components/pricing-section";
import { TestimonialSection } from "@/components/testimonial-section";

export const Home = () => {
  return (
    <>
      <HeroSection />
      <DemoSection />
      <HowToUseSection />
      <TestimonialSection />
      <PricingSection />
      <FaqSection />
      <CallToActionSection />
    </>
  );
};
