import { FeaturePageShell } from "@/components/agenthub/FeaturePageShell";
import { SupplySide } from "@/components/agenthub/SupplySide";
import { Phase2Preview } from "@/components/agenthub/Phase2Preview";
import { ChainingPreview } from "@/components/agenthub/ChainingPreview";
import { ScrollGlassReveal } from "@/components/ScrollGlassReveal";

export default function LaunchpadPage() {
  return (
    <FeaturePageShell
      eyebrow="Launchpad"
      title="Publishing economics, workflow previews, and what is coming next"
      description="This route is the expansion lane for builders. It keeps monetization, orchestration previews, and roadmap-facing surfaces off the homepage while preserving the same motion-heavy premium presentation."
      metrics={[
        { label: "Roadmap", value: "Active" },
        { label: "Workflow", value: "Visual" },
        { label: "Monetize", value: "Ready" },
      ]}
      quickLinks={[
        { href: "/publish", label: "Publish Agent" },
        { href: "/chains", label: "Workflows" },
        { href: "/dashboard", label: "Creator Console" },
      ]}
    >
      <ScrollGlassReveal delayMs={40}>
        <SupplySide />
      </ScrollGlassReveal>
      <ScrollGlassReveal delayMs={80}>
        <Phase2Preview />
      </ScrollGlassReveal>
      <ScrollGlassReveal delayMs={110}>
        <ChainingPreview />
      </ScrollGlassReveal>
    </FeaturePageShell>
  );
}
