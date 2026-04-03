import { HeroSection } from "@/components/agenthub/HeroSection";
import { SearchSection } from "@/components/agenthub/SearchSection";
import { TrustStrip } from "@/components/agenthub/TrustStrip";
import { FeaturedAgents } from "@/components/agenthub/FeaturedAgents";
import { StrongCTA, Footer } from "@/components/agenthub/StrongCTA";
import { FeatureQuickMenu, FeatureRail } from "@/components/agenthub/FeatureRail";
import { ScrollGlassReveal } from "@/components/ScrollGlassReveal";

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#050505]">
      <div aria-hidden="true" className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,76,60,0.12),transparent_24%),linear-gradient(180deg,#050505_0%,#09090b_46%,#040404_100%)]" />
        <div className="animate-aurora-drift absolute left-[-12%] top-[-6%] h-[24rem] w-[24rem] rounded-full bg-[radial-gradient(circle,rgba(231,76,60,0.18)_0%,rgba(231,76,60,0)_72%)] blur-[110px]" />
        <div className="animate-aurora-drift-reverse absolute right-[-14%] top-[16%] hidden h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,rgba(255,255,255,0)_70%)] blur-[120px] md:block" />
        <div className="absolute bottom-[-12%] left-[10%] hidden h-[20rem] w-[20rem] rounded-full bg-[radial-gradient(circle,rgba(231,76,60,0.12)_0%,rgba(231,76,60,0)_72%)] blur-[100px] xl:block" />
        <div className="premium-grid absolute inset-0 opacity-[0.22]" />
        <div className="premium-noise absolute inset-0 opacity-[0.24]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,2,3,0.16)_48%,rgba(2,2,3,0.82)_100%)]" />
      </div>

      <div className="relative z-10 xl:pl-[288px]">
        <aside className="fixed bottom-0 left-0 top-20 z-30 hidden w-[288px] xl:block">
          <FeatureRail variant="attached" />
        </aside>

        <div className="xl:hidden">
          <div className="px-6 pt-24 md:px-12 lg:px-20">
            <FeatureQuickMenu className="mb-0" />
          </div>
        </div>

        <div className="flex flex-col">
          <HeroSection />

          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-x-[16%] -top-24 h-36 bg-[radial-gradient(circle,rgba(231,76,60,0.24)_0%,rgba(231,76,60,0)_72%)] blur-3xl"
            />
            <SearchSection />
          </div>

          <div className="section-shell lux-border">
            <TrustStrip />
          </div>

          <ScrollGlassReveal className="relative z-10" delayMs={60}>
            <FeaturedAgents />
          </ScrollGlassReveal>

          <ScrollGlassReveal className="relative z-10" delayMs={110}>
            <StrongCTA />
          </ScrollGlassReveal>

          <Footer />
        </div>
      </div>
    </div>
  );
}
