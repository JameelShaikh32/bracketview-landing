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
import CoreBenefits from "../components/CoreBenefits";
import CtaSection from "../components/CtaSection";
import FeaturedOn from "../components/FeaturedOn";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import FeatureDemoChapter from "../components/marketing/FeatureDemoChapter";
import HomepageViewTracker from "../components/marketing/HomepageViewTracker";
import PrivacyExplainer from "../components/PrivacyExplainer";
import JsonLd from "../components/seo/JsonLd";
import ToolsDirectory from "../components/ToolsDirectory";
import UseCases from "../components/UseCases";
import WhatIsBracketView from "../components/WhatIsBracketView";

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
      <HomepageViewTracker />
      <JsonLd data={schemas} />
      <HeroSection />
      <FeaturedOn />
      <WhatIsBracketView />
      <FeatureDemoChapter />
      <CoreBenefits />
      <HowItWorks />
      <Features />
      <PrivacyExplainer />
      <UseCases />
      <ToolsDirectory />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <CtaSection />
      <StickyCtaBar />
    </main>
  );
}
