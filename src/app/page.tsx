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
import { ScrollGlassReveal } from "@/components/ScrollGlassReveal";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#050505]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,76,60,0.12),transparent_24%),linear-gradient(180deg,#050505_0%,#09090b_46%,#040404_100%)]" />
        <div className="animate-aurora-drift absolute left-[-16%] top-[-8%] h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle,rgba(231,76,60,0.22)_0%,rgba(231,76,60,0)_72%)] blur-3xl" />
        <div className="animate-aurora-drift-reverse absolute right-[-18%] top-[18%] h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0)_70%)] blur-3xl" />
        <div className="animate-aurora-drift absolute bottom-[-18%] left-[8%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(231,76,60,0.18)_0%,rgba(231,76,60,0)_70%)] blur-3xl" />
        <div className="premium-grid absolute inset-0 opacity-[0.22]" />
        <div className="premium-noise absolute inset-0 opacity-[0.45]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,3,0.16)_48%,rgba(2,2,3,0.82)_100%)]" />
      </div>

      <div className="relative z-10 flex flex-col">
        <HeroSection />

        <div className="relative">
          <div aria-hidden="true" className="pointer-events-none absolute inset-x-[16%] -top-24 h-36 bg-[radial-gradient(circle,rgba(231,76,60,0.24)_0%,rgba(231,76,60,0)_72%)] blur-3xl" />
          <SearchSection />
        </div>

        <div className="section-shell lux-border">
          <TrustStrip />
        </div>

        <section className="section-shell lux-border w-full border-b border-white/[0.03] py-24 md:py-28">
          <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
            <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-10 h-48 w-[32rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(231,76,60,0.14)_0%,rgba(231,76,60,0)_72%)] blur-3xl" />
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

        <ScrollGlassReveal className="relative z-10" delayMs={60}>
          <TrendingAgentsSection />
        </ScrollGlassReveal>

        <ScrollGlassReveal className="relative z-10" delayMs={90}>
          <section className="section-shell w-full py-8 md:py-10">
            <div className="mx-auto grid max-w-[1280px] gap-6 px-6 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-20">
              <LatestAINewsSection />
              <LiveFeed />
            </div>
          </section>
        </ScrollGlassReveal>

        <ScrollGlassReveal className="relative z-10" delayMs={120}>
          <FeaturedAgents />
        </ScrollGlassReveal>

        <ScrollGlassReveal className="relative z-10" delayMs={120}>
          <HowItWorks />
        </ScrollGlassReveal>

        <ScrollGlassReveal className="relative z-10" delayMs={130}>
          <CoreCapabilities />
        </ScrollGlassReveal>

        <ScrollGlassReveal className="relative z-10" delayMs={140}>
          <SandboxPreview />
        </ScrollGlassReveal>

        <ScrollGlassReveal className="relative z-10" delayMs={140}>
          <SDKPreview />
        </ScrollGlassReveal>

        <ScrollGlassReveal className="relative z-10" delayMs={150}>
          <SupplySide />
        </ScrollGlassReveal>

        <ScrollGlassReveal className="relative z-10" delayMs={150}>
          <Phase2Preview />
        </ScrollGlassReveal>

        <ScrollGlassReveal className="relative z-10" delayMs={160}>
          <ChainingPreview />
        </ScrollGlassReveal>

        <ScrollGlassReveal className="relative z-10" delayMs={180}>
          <StrongCTA />
        </ScrollGlassReveal>

        <Footer />
      </div>
    </div>
  );
}
