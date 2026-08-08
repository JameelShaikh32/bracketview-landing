import {
  buildFaqPageSchema,
  buildHomepageHowToSchema,
  buildProductSchema,
  buildSoftwareApplicationSchema,
  buildSpeakableSchema,
  buildWebSiteSchema,
  createPageMetadata,
  HOME_DESCRIPTION,
  HOME_KEYWORDS,
  HOME_TITLE,
} from "@/lib/seo";
import dynamic from "next/dynamic";
import AboutUs from "../components/AboutUs";
import CtaSection from "../components/CtaSection";
import FeaturedOn from "../components/FeaturedOn";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import FeatureDemoChapter from "../components/marketing/FeatureDemoChapter";
import TestimonialGrid from "../components/marketing/TestimonialGrid";
// import TrustStrip from "../components/marketing/TrustStrip";
import JsonLd from "../components/seo/JsonLd";
import UseCases from "../components/UseCases";

const ComparisonTable = dynamic(() => import("../components/ComparisonTable"));
const Pricing = dynamic(() => import("../components/Pricing"));
const FAQ = dynamic(() => import("../components/FAQ"));
const StickyCtaBar = dynamic(
  () => import("../components/marketing/StickyCtaBar"),
);

export const metadata = createPageMetadata({
  path: "/",
  title: HOME_TITLE,
  description: HOME_DESCRIPTION,
  keywords: HOME_KEYWORDS,
});

export default function Home() {
  const schemas = [
    buildSoftwareApplicationSchema(),
    buildWebSiteSchema(),
    buildFaqPageSchema(),
    buildHomepageHowToSchema(),
    buildSpeakableSchema(),
    buildProductSchema(),
  ];

  return (
    <main>
      <JsonLd data={schemas} />
      <HeroSection />
      {/* <TrustStrip /> */}
      <FeaturedOn />
      <AboutUs />
      <FeatureDemoChapter />
      <Features />
      <HowItWorks />
      <UseCases />
      <TestimonialGrid />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <CtaSection />
      <StickyCtaBar />
    </main>
  );
}
