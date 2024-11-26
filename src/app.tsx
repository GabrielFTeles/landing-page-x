import { CallToActionSection } from "./components/call-to-action-section";
import { FaqSection } from "./components/faq-section";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { NotificationBanner } from "./components/notification-banner";
import { PricingSection } from "./components/pricing-section";
import { TestimonialSection } from "./components/testimonial-section";

export function App() {
  return (
    <div>
      <NotificationBanner />
      <Header />

      <main className="min-h-[10000dvh] relative">
        <HeroSection />
        <TestimonialSection />
        <PricingSection />
        <FaqSection />
        <CallToActionSection />
      </main>
    </div>
  );
}
