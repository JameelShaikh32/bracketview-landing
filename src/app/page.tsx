import dynamic from "next/dynamic";
import {
  buildFaqPageSchema,
  buildHomepageHowToSchema,
  buildProductSchema,
  buildSoftwareApplicationSchema,
  buildSpeakableSchema,
  buildWebSiteSchema,
  createPageMetadata,
  HOME_KEYWORDS,
  META_DESCRIPTION,
  META_TITLE,
} from "@/lib/seo";
import AboutUs from "../components/AboutUs";
import CtaSection from "../components/CtaSection";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import JsonLd from "../components/seo/JsonLd";
import UseCases from "../components/UseCases";

const ComparisonTable = dynamic(() => import("../components/ComparisonTable"));
const Pricing = dynamic(() => import("../components/Pricing"));
const FAQ = dynamic(() => import("../components/FAQ"));

export const metadata = createPageMetadata({
  path: "/",
  title: META_TITLE,
  description: META_DESCRIPTION,
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
      <AboutUs />
      <Features />
      <HowItWorks />
      <UseCases />
      <ComparisonTable />
      <Pricing />
      <FAQ />
      <CtaSection />
    </main>
  );
}
