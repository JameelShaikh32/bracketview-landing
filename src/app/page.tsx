import CtaSection from "./components/CtaSection";
import FAQ from "./components/FAQ";
import Features from "./components/Features";
import HeroSection from "./components/HeroSection";
import HowItWorks from "./components/HowItWorks";
import OurMission from "./components/OurMission";
import Pricing from "./components/Pricing";
import SeoContent from "./components/SeoContent";
import UseCases from "./components/UseCases";

export default function Home() {
  return (
    <>
      <SeoContent />
      <HeroSection />
      <Features />
      <HowItWorks />
      <UseCases />
      <Pricing />
      <OurMission />
      <FAQ />
      <CtaSection />
    </>
  );
}
