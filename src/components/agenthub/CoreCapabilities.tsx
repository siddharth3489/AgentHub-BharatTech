import { Shield, LayoutGrid, TerminalSquare, Rocket, Code2, LineChart } from "lucide-react";

export function CoreCapabilities() {
  const features = [
    {
      title: "GitHub OAuth Auth",
      desc: "Enterprise-grade identity management. Sign in securely using your existing GitHub account and sync repository contexts.",
      icon: Shield
    },
    {
      title: "Agent Grid & Filter",
      desc: "High-performance discovery layer. Filter thousands of agents by precise schemas, latency SLAs, and per-call costs.",
      icon: LayoutGrid
    },
    {
      title: "Publishing Wizard",
      desc: "Frictionless deployment supply-chain. Define your schema, set rate limits, configure pricing, and go live in exactly 4 steps.",
      icon: Rocket
    },
    {
      title: "Live Sandbox",
      desc: "Zero-commitment evaluation. Send payloads and execute agents directly in the browser to validate schema matching instantly.",
      icon: TerminalSquare
    },
    {
      title: "SDK Generation",
      desc: "Type-safe client generation. One click to emit fully typed Python, TypeScript, or Go SDKs for any agent in the marketplace.",
      icon: Code2
    },
    {
      title: "Developer Analytics",
      desc: "Granular telemetry. Track request volume, error rates, latency percentiles, and accumulated earnings in real time.",
      icon: LineChart
    }
  ];

  return (
    <section className="section-shell w-full py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute right-[8%] top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.12)_0%,_rgba(231,76,60,0)_72%)] blur-3xl" />
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="mb-20">
           <span className="section-badge mb-6">Core Systems</span>
           <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e8eaf0] md:text-4xl">Core Infrastructure Requirements</h2>
           <p className="max-w-2xl text-lg text-[#8a8fa8]">Phase 1 capabilities built for immediate production utility. No gimmicks, just robust plumbing for AI agents with a cleaner, more premium operating surface.</p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div key={feature.title} className="glass-panel group flex flex-col items-start rounded-[1.75rem] p-6 md:p-7">
               <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-[1rem] border border-white/8 bg-[#141418]/80 transition-colors group-hover:border-[#e74c3c]/30 group-hover:bg-[#1a1a1f]">
                 <feature.icon className="h-6 w-6 text-[#e74c3c]" strokeWidth={1.5} />
                 <div className="red-glow absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100" />
               </div>
               <div className="mb-3 font-mono text-[10px] uppercase tracking-[0.32em] text-white/35">Module</div>
               <h3 className="mb-3 text-xl font-bold tracking-tight text-[#e8eaf0]">{feature.title}</h3>
               <p className="text-sm leading-relaxed text-[#8a8fa8] md:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
