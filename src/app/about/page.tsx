import type { Metadata } from "next";
import { AboutCommitment } from "@/components/about/about-commitment";
import { AboutCta } from "@/components/about/about-cta";
import { AboutFaq } from "@/components/about/about-faq";
import { AboutHero } from "@/components/about/about-hero";
import { AboutJourney } from "@/components/about/about-journey";
import { AboutReady } from "@/components/about/about-ready";
import { AboutStory } from "@/components/about/about-story";
import { AboutTeam } from "@/components/about/about-team";
import { AboutWho } from "@/components/about/about-who";
import { InsightsSection } from "@/components/home/insights-section";
import { createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "About Us | Leading US IT Recruitment Company",
  description:
    "Learn about JSCALE — connecting talent with opportunity since 2021. Job placement, recruitment, and workforce solutions for candidates and companies across the United States.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutWho />
      <AboutCommitment />
      <AboutJourney />
      <AboutTeam />
      <AboutReady />
      <AboutFaq />
      <InsightsSection />
      <AboutCta />
    </>
  );
}
