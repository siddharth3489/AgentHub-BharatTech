import { Search, Github, Activity, Merge, Key, ShieldAlert } from "lucide-react";
import Link from "next/link";

export function Phase2Preview() {
  const features = [
    { title: "Semantic Search", desc: "Natural language discovery.", icon: Search },
    { title: "GitHub Repo Scanner", desc: "Automated codebase context inference.", icon: Github },
    { title: "Agent Gap Detector", desc: "Identify missing integrations.", icon: Activity },
    { title: "Agent Chaining Studio", desc: "Visual multi-agent workflows.", icon: Merge },
    { title: "API Key Management", desc: "Granular access controls.", icon: Key },
    { title: "Rate Limiting", desc: "Per-user token bucket limits.", icon: ShieldAlert }
  ];

  return (
    <section className="w-full py-24 md:py-32 relative bg-[radial-gradient(ellipse_at_top,_rgba(20,20,24,0.5)_0%,_rgba(8,8,8,1)_100%)]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 text-center flex flex-col items-center">
        
        <span className="font-mono text-[#8a8fa8] text-xs uppercase tracking-[0.15em] mb-6 block border border-white/10 px-3 py-1 bg-white/[0.02]">
          [ COMING SOON ]
        </span>
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#e8eaf0] mb-16 max-w-2xl">The Future of Agent Discovery and Automation</h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-5xl mb-16 text-left">
          {features.map((feature) => (
            <div key={feature.title} className="glass-panel p-6 rounded-xl border border-white/5 opacity-60 hover:opacity-100 transition-opacity flex flex-col relative overflow-hidden group">
               <div className="absolute top-4 right-4 bg-[#141418] border border-white/10 text-[10px] uppercase font-mono px-2 py-0.5 rounded text-[#8a8fa8]">COMING SOON</div>
               <feature.icon className="w-5 h-5 text-[#8a8fa8] mb-4 group-hover:text-[#e8eaf0] transition-colors" strokeWidth={1.5} />
               <h3 className="text-[#e8eaf0] font-semibold text-base mb-1">{feature.title}</h3>
               <p className="text-[#8a8fa8] text-sm">{feature.desc}</p>
            </div>
          ))}
        </div>

        <Link href="/login?redirect=/publish" className="rounded border border-white/20 bg-transparent px-8 py-4 text-sm font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/[0.04]">
          Join the early access list
        </Link>

      </div>
    </section>
  );
}
