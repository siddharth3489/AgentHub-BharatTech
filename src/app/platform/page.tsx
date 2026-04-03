import { FeaturePageShell } from "@/components/agenthub/FeaturePageShell";
import { HowItWorks } from "@/components/agenthub/HowItWorks";
import { CoreCapabilities } from "@/components/agenthub/CoreCapabilities";
import { SandboxPreview } from "@/components/agenthub/SandboxPreview";
import { SDKPreview } from "@/components/agenthub/SDKPreview";
import { ScrollGlassReveal } from "@/components/ScrollGlassReveal";

export default function PlatformPage() {
  return (
    <FeaturePageShell
      eyebrow="Platform Surface"
      title="A tighter platform route for testing, SDKs, and shipping"
      description="This page pulls the operational platform story out of the homepage and into a focused animated workspace. Explore delivery flow, core systems, live sandbox execution, and generated SDK output without dragging the rest of the marketing stack along for the ride."
      metrics={[
        { label: "Primary Flows", value: "4" },
        { label: "Sandbox", value: "Live" },
        { label: "SDK Modes", value: "3" },
      ]}
      quickLinks={[
        { href: "/agents", label: "Marketplace" },
        { href: "/publish", label: "Publish Agent" },
        { href: "/signal", label: "Signal Feed" },
      ]}
    >
      <ScrollGlassReveal delayMs={40}>
        <HowItWorks />
      </ScrollGlassReveal>
      <ScrollGlassReveal delayMs={70}>
        <CoreCapabilities />
      </ScrollGlassReveal>
      <ScrollGlassReveal delayMs={100}>
        <SandboxPreview />
      </ScrollGlassReveal>
      <ScrollGlassReveal delayMs={130}>
        <SDKPreview />
      </ScrollGlassReveal>
    </FeaturePageShell>
  );
}
