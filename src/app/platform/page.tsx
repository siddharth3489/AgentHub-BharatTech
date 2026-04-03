import { FeaturePageShell } from "@/components/agenthub/FeaturePageShell";
import { HowItWorks } from "@/components/agenthub/HowItWorks";
import { CoreCapabilities } from "@/components/agenthub/CoreCapabilities";
import { SandboxPreview } from "@/components/agenthub/SandboxPreview";
import { SDKPreview } from "@/components/agenthub/SDKPreview";
import { ScrollGlassReveal } from "@/components/ScrollGlassReveal";

export default function PlatformPage() {
  return (
    <FeaturePageShell
      eyebrow="Platform"
      title="Test agents, generate SDKs, and move integrations into production"
      description="Explore the product infrastructure behind validation, integration, and delivery. Run sandbox tests, inspect structured inputs and outputs, and generate copy-ready SDK snippets from one workspace."
      metrics={[
        { label: "Sandbox", value: "Live execution" },
        { label: "SDKs", value: "Generated" },
        { label: "Access", value: "GitHub" },
      ]}
      quickLinks={[
        { href: "/agents", label: "Explore Agents" },
        { href: "/scan", label: "Run Repository Scan" },
        { href: "/publish", label: "Publish an Agent" },
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
