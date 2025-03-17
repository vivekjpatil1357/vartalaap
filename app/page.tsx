import { FeaturesSection } from "@/components/landing/features-section";
import { Footer } from "@/components/landing/footer";
import { Header } from "@/components/landing/header";
import { HeroSection } from "@/components/landing/hero-section";
import { HowToUse } from "@/components/landing/how-to-use";
import { ContactUs } from "@/components/landing/contact-us";

export default function Home() {
  return (
    <div className="bg-zinc-950">
      <Header />
      <main className="pt-16">
        <HeroSection />
        <div id="features">
          <FeaturesSection />
        </div>
        <div id="how-to-use">
          <HowToUse />
        </div>
        <div
          id="contact-us">
          <ContactUs />
        </div>
      </main>
      <Footer />
    </div>
  );
}
