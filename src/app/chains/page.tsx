"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Plus, Workflow } from "lucide-react";

export default function ChainsPage() {
  const [chains, setChains] = useState<any[]>([]);

  useEffect(() => {
    fetch("/api/chains").then(res => res.json()).then(data => {
      if (Array.isArray(data)) setChains(data);
    });
  }, []);

  return (
    <div className="mx-auto min-h-screen max-w-[1280px] px-6 py-20 text-[#e8eaf0] md:px-10">
      <div className="mb-12 flex flex-col gap-6 rounded-[2rem] border border-white/10 bg-[radial-gradient(circle_at_top_right,rgba(231,76,60,0.2),transparent_45%),#0b0b0f] p-8 shadow-[0_24px_90px_rgba(0,0,0,0.42)] lg:flex-row lg:items-end lg:justify-between">
        <div>
          <span className="mb-4 inline-flex rounded-full border border-[#e74c3c]/30 bg-[#e74c3c]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.22em] text-[#ff8c7e]">
            [ Orchestration ]
          </span>
          <h1 className="text-4xl font-extrabold tracking-tight md:text-5xl">Your Workflows</h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-[#8a8fa8]">
            Chain multiple marketplace agents into autonomous pipelines, then deploy the flow as one endpoint.
          </p>
        </div>
        <Link href={`/chains/new`}>
          <Button className="flex items-center gap-2 rounded-xl bg-[#e74c3c] px-5 py-6 text-white hover:bg-[#f05a48]">
            <Plus className="w-4 h-4" />
            Create Chain
          </Button>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {chains.length === 0 ? (
          <div className="col-span-full flex flex-col items-center rounded-[1.75rem] border border-dashed border-[#e74c3c]/25 bg-[linear-gradient(180deg,rgba(231,76,60,0.08),rgba(255,255,255,0.02))] py-12 text-center text-[#8a8fa8]">
            <Workflow className="mb-4 h-12 w-12 text-[#ff8c7e]/70" />
            <h3 className="text-xl font-semibold mb-2">No chains yet</h3>
            <p>Connect multiple intelligent agents into autonomous pipelines.</p>
          </div>
        ) : (
          chains.map(c => (
            <Link key={c.id} href={`/chains/${c.id}`} className="group relative block overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#101014] p-6 shadow-[0_18px_50px_rgba(0,0,0,0.32)] transition-all hover:-translate-y-1 hover:border-[#e74c3c]/35 hover:bg-[#14151b]">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#e74c3c]/45 to-transparent opacity-0 transition group-hover:opacity-100" />
              <h3 className="text-xl font-bold mb-2">{c.name}</h3>
              <div className="mb-6 flex gap-2 text-sm text-[#8a8fa8]">
                <span>{c.nodes?.length || 0} Agents</span>
                <span>•</span>
                <span>{c.edges?.length || 0} Connections</span>
              </div>
              <div className="flex -space-x-3">
                {c.nodes?.slice(0, 4).map((n: any, i: number) => (
                  <div key={i} className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#0b0b0f] bg-[#25110f] text-xs font-bold text-white shadow-xl">
                    {n.data.agent.name.substring(0, 2).toUpperCase()}
                  </div>
                ))}
                {c.nodes?.length > 4 && (
                  <div className="w-10 h-10 rounded-full border-2 border-black bg-white/10 flex items-center justify-center text-xs font-bold text-white shadow-xl">
                    +{c.nodes.length - 4}
                  </div>
                )}
              </div>
            </Link>
          ))
        )}
      </div>
    </div>
  );
}
