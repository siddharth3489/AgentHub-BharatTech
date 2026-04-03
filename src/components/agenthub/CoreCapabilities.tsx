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
    <section className="w-full py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="mb-20">
           <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#e8eaf0] mb-4">Core Infrastructure Requirements</h2>
           <p className="text-[#8a8fa8] text-lg max-w-2xl">Phase 1 capabilities built for immediate production utility. No gimmicks, just robust plumbing for AI agents.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col items-start group">
               <div className="w-12 h-12 rounded-[8px] bg-[#141418] border border-white/5 flex items-center justify-center mb-6 group-hover:border-[#e74c3c]/30 group-hover:bg-[#1a1a1f] transition-colors relative">
                 <feature.icon className="w-6 h-6 text-[#e74c3c]" strokeWidth={1.5} />
                 <div className="absolute inset-0 red-glow opacity-0 group-hover:opacity-100 transition-opacity"></div>
               </div>
               <h3 className="text-xl font-bold text-[#e8eaf0] tracking-tight mb-3">{feature.title}</h3>
               <p className="text-[#8a8fa8] leading-relaxed text-sm md:text-base">{feature.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
