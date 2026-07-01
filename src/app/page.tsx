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
import ComparisonTable from "../components/ComparisonTable";
import CtaSection from "../components/CtaSection";
import FAQ from "../components/FAQ";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import HowItWorks from "../components/HowItWorks";
import Pricing from "../components/Pricing";
import JsonLd from "../components/seo/JsonLd";
import UseCases from "../components/UseCases";

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
