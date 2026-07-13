import type { Metadata } from "next";
import { AboutSection } from "@/components/home/about-section";
import { HeroSection } from "@/components/home/hero-section";
import { InsightsSection } from "@/components/home/insights-section";
import { LogoSection } from "@/components/home/logo-section";
import { ProcessSection } from "@/components/home/process-section";
import { ProvenSection } from "@/components/home/proven-section";
import { SolutionSection } from "@/components/home/solution-section";
import { SuccessSection } from "@/components/home/success-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  path: "/",
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <LogoSection />
      <AboutSection />
      <SolutionSection />
      <ProvenSection />
      <SuccessSection />
      <ProcessSection />
      <InsightsSection />
    </>
  );
}
