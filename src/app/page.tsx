import { HeroSection } from "@/components/agenthub/HeroSection";
import { SearchSection } from "@/components/agenthub/SearchSection";
import { TrustStrip } from "@/components/agenthub/TrustStrip";
import { FeaturedAgents } from "@/components/agenthub/FeaturedAgents";
import { HowItWorks } from "@/components/agenthub/HowItWorks";
import { CoreCapabilities } from "@/components/agenthub/CoreCapabilities";
import { Phase2Preview } from "@/components/agenthub/Phase2Preview";
import { SandboxPreview } from "@/components/agenthub/SandboxPreview";
import { SDKPreview } from "@/components/agenthub/SDKPreview";
import { SupplySide } from "@/components/agenthub/SupplySide";
import { ChainingPreview } from "@/components/agenthub/ChainingPreview";
import { StrongCTA, Footer } from "@/components/agenthub/StrongCTA";
import { IntentSearchBar } from "@/components/IntentSearchBar";
import { TrendingAgentsSection } from "@/components/TrendingAgentsSection";
import { LatestAINewsSection } from "@/components/LatestAINewsSection";
import { LiveFeed } from "@/components/LiveFeed";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#080808]">
      <HeroSection />
      <SearchSection />
      <TrustStrip />
      <section className="w-full py-24 md:py-28 border-b border-white/[0.03]">
        <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
          <div className="mb-10 text-center">
            <span className="mb-4 inline-flex rounded-full border border-[#e74c3c]/25 bg-[#e74c3c]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#ff8c7e]">
              [ Semantic Discovery ]
            </span>
            <h2 className="mx-auto mb-4 max-w-4xl text-3xl font-bold tracking-tight text-[#e8eaf0] md:text-5xl">
              Describe the job to be done. Find the right agent instantly.
            </h2>
            <p className="mx-auto max-w-3xl text-lg leading-8 text-[#8a8fa8]">
              The repo already included an intent-based search flow, so it is now surfaced on the homepage as a first-class discovery experience.
            </p>
          </div>
          <IntentSearchBar />
        </div>
      </section>
      <TrendingAgentsSection />
      <section className="w-full py-8 md:py-10">
        <div className="max-w-[1280px] mx-auto grid gap-6 px-6 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-20">
          <LatestAINewsSection />
          <LiveFeed />
        </div>
      </section>
      <FeaturedAgents />
      <HowItWorks />
      <CoreCapabilities />
      <SandboxPreview />
      <SDKPreview />
      <SupplySide />
      <Phase2Preview />
      <ChainingPreview />
      <StrongCTA />
      <Footer />
    </div>
  );
}
