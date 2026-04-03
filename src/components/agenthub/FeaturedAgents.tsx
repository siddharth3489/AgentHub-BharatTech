"use client";

import Link from "next/link";
import { useMemo, useState } from "react";

const tabs = ["All", "NLP", "Vision", "Code", "Data", "Automation"] as const;

const agents = [
  { name: "DocExtract Pro", category: "NLP", color: "text-[#ff9b8f] bg-[#e74c3c]/10 border-[#e74c3c]/20", desc: "Extracts structured JSON from unstructured PDFs and document images with extreme precision.", input: "PDF/Image", output: "JSON", lang: "Python", score: "4.9", price: "$0.005" },
  { name: "CodeMigrator", category: "Code", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", desc: "Translates legacy codebase syntax into modern frameworks autonomously via AST matching.", input: "Repo URL", output: "Pull Request", lang: "Node.js", score: "4.8", price: "$0.012" },
  { name: "VisionClassifier", category: "Vision", color: "text-purple-400 bg-purple-400/10 border-purple-400/20", desc: "Categorizes objects in real-world environments for retail and security analytics streams.", input: "Image", output: "JSON", lang: "Python", score: "4.9", price: "$0.002" },
  { name: "SentimentStream", category: "Data", color: "text-amber-400 bg-amber-400/10 border-amber-400/20", desc: "Real-time semantic sentiment scoring for high-velocity streaming financial news feeds.", input: "Text Stream", output: "Float Array", lang: "Go", score: "4.7", price: "$0.001" },
  { name: "WorkflowBot", category: "Automation", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20", desc: "Multi-step autonomous agent that resolves Level 1 customer support tickets directly.", input: "Ticket Data", output: "Action", lang: "TypeScript", score: "4.6", price: "$0.025" },
  { name: "QueryGenius", category: "Code", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", desc: "Converts natural language questions into complex, optimized SQL queries against your schema.", input: "Text/Schema", output: "SQL", lang: "Python", score: "4.9", price: "$0.003" }
];

export function FeaturedAgents() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");

  const visibleAgents = useMemo(() => {
    if (activeTab === "All") return agents;
    return agents.filter((agent) => agent.category === activeTab);
  }, [activeTab]);

  return (
    <section className="w-full py-24 md:py-32 relative">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#e8eaf0] mb-4">Featured Agents</h2>
             <p className="text-[#8a8fa8] text-base md:text-lg">Discover production-ready agents vetted for performance, latency, and reliability. Test them live before integrating.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-md px-4 py-2 text-xs font-medium transition-colors ${activeTab === tab ? "border border-white/10 bg-[#1a1a1f] text-[#e8eaf0]" : "text-[#8a8fa8] hover:text-[#e8eaf0]"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleAgents.map((agent) => (
            <div key={agent.name} className="glass-panel group rounded-xl p-6 flex flex-col h-full border border-white/[0.08] hover:border-white/[0.18] hover:-translate-y-1 transition-all duration-300 hover:shadow-[0_12px_40px_rgba(0,0,0,0.4)]">
              <div className="flex justify-between items-start mb-4">
                <span className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider border ${agent.color}`}>
                  {agent.category}
                </span>
                <span className="text-[#8a8fa8] text-xs font-mono">{agent.lang}</span>
              </div>
              
              <h3 className="text-xl font-bold text-[#e8eaf0] tracking-tight mb-3">{agent.name}</h3>
              <p className="text-[#8a8fa8] text-sm leading-relaxed mb-6 flex-grow">{agent.desc}</p>
              
              <div className="flex items-center gap-2 mb-6">
                 <div className="bg-[#141418] border border-white/5 rounded px-2 py-1 flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#8a8fa8]/40"></div>
                   <span className="text-[11px] font-mono text-[#8a8fa8]">IN: {agent.input}</span>
                 </div>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8a8fa8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                 <div className="bg-[#141418] border border-white/5 rounded px-2 py-1 flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#e74c3c]"></div>
                   <span className="text-[11px] font-mono text-[#e8eaf0]">OUT: {agent.output}</span>
                 </div>
              </div>

              <div className="flex items-center justify-between pt-5 border-t border-white/5 mt-auto">
                 <div className="flex flex-col">
                   <div className="flex items-center gap-1 mb-1">
                     <svg width="12" height="12" viewBox="0 0 24 24" fill="#e74c3c" stroke="#e74c3c" strokeWidth="1"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                     <span className="text-xs font-bold text-[#e8eaf0]">{agent.score}</span>
                   </div>
                   <span className="text-xs font-mono text-[#8a8fa8]">{agent.price} / call</span>
                 </div>
                 <Link href={`/agents?q=${encodeURIComponent(agent.name)}`} className="rounded border border-white/10 bg-[#141418] px-4 py-2 text-xs font-semibold transition-colors group-hover:border-[#e74c3c]/50 group-hover:text-[#e74c3c]">
                   Test Live
                 </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
