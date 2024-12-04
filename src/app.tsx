import { CallToActionSection } from "./components/call-to-action-section";
import { DemoSection } from "./components/demo-section/demo-section";
import { FaqSection } from "./components/faq-section";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { HowToUseSection } from "./components/how-to-use-section";
import { NotificationBanner } from "./components/notification-banner";
import { PricingSection } from "./components/pricing-section";
import { TestimonialSection } from "./components/testimonial-section";
import { ThemeProvider } from "@/components/theme-provider";

export function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="sentry-x-lp-theme">
      <div>
        <NotificationBanner />
        <Header />

        <main className="relative">
          <HeroSection />
          <DemoSection />
          <HowToUseSection />
          <TestimonialSection />
          <PricingSection />
          <FaqSection />
          <CallToActionSection />
          <Footer />
        </main>
      </div>
    </ThemeProvider>
  );
}
