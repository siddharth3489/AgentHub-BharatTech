"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const tabs = ["All", "NLP", "Vision", "Code", "Data", "Automation"] as const;

const agents = [
  { name: "DocExtract Pro", category: "NLP", color: "text-[#ff9b8f] bg-[#e74c3c]/10 border-[#e74c3c]/20", desc: "Extract structured JSON from PDFs and document images with schema-aware field mapping.", input: "PDF or image", output: "Structured JSON", lang: "Python", score: "4.9", price: "$0.005" },
  { name: "CodeMigrator", category: "Code", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", desc: "Modernize legacy repositories with AST-based code transformation and review-ready output.", input: "Repository URL", output: "Patch plan", lang: "Node.js", score: "4.8", price: "$0.012" },
  { name: "VisionClassifier", category: "Vision", color: "text-purple-400 bg-purple-400/10 border-purple-400/20", desc: "Classify visual inputs for inspection, cataloging, and operational monitoring workflows.", input: "Image", output: "Labels and scores", lang: "Python", score: "4.9", price: "$0.002" },
  { name: "SentimentStream", category: "Data", color: "text-amber-400 bg-amber-400/10 border-amber-400/20", desc: "Score high-volume text streams for sentiment and topic changes across market coverage.", input: "Text stream", output: "Scored events", lang: "Go", score: "4.7", price: "$0.001" },
  { name: "WorkflowBot", category: "Automation", color: "text-cyan-400 bg-cyan-400/10 border-cyan-400/20", desc: "Resolve common support requests with structured actions and audit-friendly responses.", input: "Ticket payload", output: "Action plan", lang: "TypeScript", score: "4.6", price: "$0.025" },
  { name: "QueryGenius", category: "Code", color: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", desc: "Turn natural-language requests into executable SQL aligned to your schema and constraints.", input: "Prompt and schema", output: "SQL query", lang: "Python", score: "4.9", price: "$0.003" }
];

export function FeaturedAgents() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("All");

  const visibleAgents = useMemo(() => {
    if (activeTab === "All") return agents;
    return agents.filter((agent) => agent.category === activeTab);
  }, [activeTab]);

  return (
    <section className="page-section relative w-full">
      <div className="page-container">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl">
             <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e8eaf0] md:text-4xl">Featured agents</h2>
             <p className="text-base text-[#8a8fa8] md:text-lg">Representative agents across extraction, code, automation, and analytics. Compare their contract, runtime profile, and pricing before you integrate.</p>
          </div>
          <div className="flex flex-wrap gap-2">
            {tabs.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors ${activeTab === tab ? "border-[#e74c3c]/25 bg-[#e74c3c]/10 text-[#ff8c7e]" : "border-white/10 bg-white/[0.03] text-[#8a8fa8] hover:border-[#e74c3c]/20 hover:text-[#e8eaf0]"}`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleAgents.map((agent) => (
            <div key={agent.name} className="surface-primary group flex h-full flex-col rounded-[1.75rem] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#e74c3c]/28">
              <div className="flex justify-between items-start mb-4">
                <Badge variant="outline" className={agent.color}>
                  {agent.category}
                </Badge>
                <span className="text-[#8a8fa8] text-xs font-mono uppercase tracking-[0.18em]">{agent.lang}</span>
              </div>
              
              <h3 className="text-xl font-bold text-[#e8eaf0] tracking-tight mb-3">{agent.name}</h3>
              <p className="text-[#8a8fa8] text-sm leading-relaxed mb-6 flex-grow">{agent.desc}</p>
              
              <div className="flex items-center gap-2 mb-6">
                 <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#8a8fa8]/40"></div>
                   <span className="text-[11px] font-mono text-[#8a8fa8]">In: {agent.input}</span>
                 </div>
                 <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#8a8fa8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                 <div className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 rounded-full bg-[#e74c3c]"></div>
                   <span className="text-[11px] font-mono text-[#e8eaf0]">Out: {agent.output}</span>
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
                 <Link href={`/agents?q=${encodeURIComponent(agent.name)}`} className={cn(buttonVariants({ variant: "outline", size: "sm" }), "rounded-full")}>
                   View Agent
                 </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
