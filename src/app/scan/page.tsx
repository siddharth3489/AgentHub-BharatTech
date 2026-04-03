"use client";

import { useState } from "react";
import { ScanInput } from "@/components/ScanInput";
import { RepoDNAResult } from "@/components/RepoDNAResult";
import { GapDetectorCard } from "@/components/GapDetectorCard";

export default function ScanPage() {
  const [scanResult, setScanResult] = useState<any>(null);
  const [gapAgents, setGapAgents] = useState<any[]>([]);
  const [isScanning, setIsScanning] = useState(false);
  const [error, setError] = useState("");

  const handleAnalyze = async (input: string, type: string) => {
    if (type !== "github") {
      setError("Currently, only GitHub Repositories are supported in this demo phase.");
      return;
    }

    setError("");
    setIsScanning(true);
    setScanResult(null);
    setGapAgents([]);

    try {
      const resp = await fetch("/api/github-scan", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoUrl: input }),
      });
      const data = await resp.json();

      if (!resp.ok) throw new Error(data.error || "Failed to scan repo");

      setScanResult(data);

      const langs = Object.keys(data.repoMeta?.primaryLanguage ? { [data.repoMeta.primaryLanguage]: 1 } : {});
      const userCats = data.painPoints?.map((p: any) => p.agentCategory) || [];

      const gapResp = await fetch("/api/gap-detect", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ repoLanguages: langs, repoTags: ["web", "frontend"], currentCategories: userCats }),
      });

      if (gapResp.ok) {
        const gapData = await gapResp.json();
        setGapAgents(gapData);
      }
    } catch (e: any) {
      setError(e.message);
    } finally {
      setIsScanning(false);
    }
  };

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,76,60,0.16)_0%,rgba(8,8,8,0)_32%),linear-gradient(180deg,rgba(20,20,24,0.72)_0%,rgba(8,8,8,1)_40%)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.04]" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-24 md:px-12 lg:px-20">
        <div className="mx-auto mb-16 max-w-4xl text-center">
          <div className="mb-10 flex justify-center">
            <img src="/assets/images/scan_hero.png" alt="Repository Scanner Illustration" className="h-56 w-auto opacity-90 drop-shadow-[0_20px_45px_rgba(0,0,0,0.35)] transition-transform duration-700 hover:scale-105" />
          </div>
          <span className="mb-6 inline-flex rounded-full border border-[#e74c3c]/25 bg-[#e74c3c]/10 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#ff8c7e]">
            [ Multi-Context Scan ]
          </span>
          <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-[#e8eaf0] md:text-5xl">Map repository pain points to deployable agents</h1>
          <p className="text-lg text-[#8a8fa8]">
            Drop in a GitHub repo, Jira ticket, or system error log. AgentHub uses Claude 3.5 Sonnet to map your exact pain points straight to ready-to-deploy autonomous agents.
          </p>
        </div>

        {!scanResult && !isScanning && <ScanInput onAnalyze={handleAnalyze} />}

        {error && (
          <div className="mx-auto mt-8 max-w-2xl rounded-xl border border-[#e74c3c]/20 bg-[#e74c3c]/10 p-4 text-center text-[#ff8c7e]">
            {error}
          </div>
        )}

        {(isScanning || scanResult) && <RepoDNAResult result={scanResult} />}

        {scanResult && gapAgents.length > 0 && (
          <div className="mt-24 animate-in slide-in-from-bottom-8 fade-in border-t border-white/10 pt-12 duration-1000 delay-500">
            <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-[#e8eaf0]">Missing Capability Detectors</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-[#8a8fa8]">
              Based on similar repository structures, AgentHub identified automation nodes commonly present in this stack but missing from the current workflow.
            </p>
            <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
              {gapAgents.map((g, idx) => (
                <GapDetectorCard key={idx} gapInfo={g} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
