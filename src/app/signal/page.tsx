import { FeaturePageShell } from "@/components/agenthub/FeaturePageShell";
import { TrendingAgentsSection } from "@/components/TrendingAgentsSection";
import { LatestAINewsSection } from "@/components/LatestAINewsSection";
import { LiveFeed } from "@/components/LiveFeed";
import { ScrollGlassReveal } from "@/components/ScrollGlassReveal";

export default function SignalPage() {
  return (
    <FeaturePageShell
      eyebrow="Signal Stream"
      title="Watch the market, not just the marketing page"
      description="All of the live-looking and data-heavy discovery surfaces move here. That keeps the homepage leaner while giving signal its own animated lane for trending agents, AI ecosystem news, and real-time marketplace activity."
      metrics={[
        { label: "Feeds", value: "3" },
        { label: "Trending", value: "Live" },
        { label: "Refresh", value: "Fast" },
      ]}
      quickLinks={[
        { href: "/agents", label: "Explore Agents" },
        { href: "/scan", label: "Scan Repo" },
        { href: "/platform", label: "Platform" },
      ]}
    >
      <ScrollGlassReveal delayMs={40}>
        <TrendingAgentsSection />
      </ScrollGlassReveal>
      <ScrollGlassReveal delayMs={80}>
        <section className="section-shell w-full py-8 md:py-10">
          <div className="mx-auto grid max-w-[1280px] gap-6 px-6 md:px-12 lg:grid-cols-[1.15fr_0.85fr] lg:px-20">
            <LatestAINewsSection />
            <LiveFeed />
          </div>
        </section>
      </ScrollGlassReveal>
    </FeaturePageShell>
  );
}
