"use client";

import { useAgents } from "@/hooks/useAgents";
import { AgentGrid } from "@/components/AgentGrid";
import { FilterSidebar } from "@/components/FilterSidebar";
import { useQueryState, parseAsArrayOf, parseAsString, parseAsFloat } from "nuqs";
import { useMemo, Suspense } from "react";
import { SearchBar } from "@/components/SearchBar";
import { Agent } from "@/lib/types";

const SEARCH_SYNONYMS: Record<string, string[]> = {
  study: ["research", "analysis", "summarization", "translation", "data-extraction", "education", "learning"],
  research: ["study", "analysis", "summarization", "data-extraction"],
  learn: ["study", "education", "translation", "summarization"],
  write: ["content-creation", "marketing", "generative", "copy"],
  build: ["code-generation", "frontend", "automation", "productivity"],
  code: ["code-review", "code-generation", "frontend", "testing"],
  data: ["data-extraction", "analytics", "database", "summarization"],
  audio: ["speech-to-text", "transcription", "voice", "nlp"],
  image: ["computer-vision", "analysis", "healthcare"],
  support: ["customer-support", "automation", "nlp"],
};

const tokenize = (value: string) =>
  value
    .toLowerCase()
    .split(/[^a-z0-9+#.-]+/)
    .filter(Boolean);

const getSearchScore = (agent: Agent, query: string) => {
  if (!query.trim()) return 1;

  const normalizedQuery = query.toLowerCase().trim();
  const queryTokens = tokenize(normalizedQuery);
  const expandedTokens = new Set(
    queryTokens.flatMap((token) => [token, ...(SEARCH_SYNONYMS[token] || [])])
  );

  const searchableParts = [
    agent.name,
    agent.description,
    agent.creatorUsername,
    agent.capabilityTags.join(" "),
    agent.supportedLanguages.join(" "),
  ];

  const searchableText = searchableParts.join(" ").toLowerCase();
  let score = 0;

  if (searchableText.includes(normalizedQuery)) {
    score += 12;
  }

  for (const token of expandedTokens) {
    if (searchableText.includes(token)) {
      score += queryTokens.includes(token) ? 4 : 2;
    }
  }

  for (const tag of agent.capabilityTags) {
    const normalizedTag = tag.toLowerCase();
    if (expandedTokens.has(normalizedTag)) {
      score += 5;
    }
    if (queryTokens.some((token) => normalizedTag.includes(token))) {
      score += 3;
    }
  }

  for (const language of agent.supportedLanguages) {
    if (expandedTokens.has(language.toLowerCase())) {
      score += 2;
    }
  }

  return score;
};

const hasStrongQueryMatch = (score: number, query: string) => {
  const tokenCount = tokenize(query).length;
  if (tokenCount <= 1) return score >= 4;
  return score >= 6;
};

function AgentsContent() {
  const { data: agents = [], isLoading } = useAgents();

  const [q] = useQueryState("q", { defaultValue: "" });
  const [tags] = useQueryState("tags", parseAsArrayOf(parseAsString).withDefault([]));
  const [langs] = useQueryState("langs", parseAsArrayOf(parseAsString).withDefault([]));
  const [maxCost] = useQueryState("cost", parseAsFloat.withDefault(1.0));
  const [minTrust] = useQueryState("trust", parseAsFloat.withDefault(0));
  const [sort] = useQueryState("sort", parseAsString.withDefault("newest"));

  const filteredAgents = useMemo(() => {
    const scoredAgents = agents
      .map((agent) => ({
        agent,
        searchScore: getSearchScore(agent, q),
      }))
      .filter(({ agent, searchScore }) => {
        if (agent.costPerCall > maxCost) return false;
        if (agent.trustScore < minTrust) return false;
        if (tags.length > 0 && !tags.some((tag) => agent.capabilityTags.includes(tag))) return false;
        if (langs.length > 0 && !langs.some((lang) => agent.supportedLanguages.includes(lang))) return false;
        if (q && !hasStrongQueryMatch(searchScore, q)) return false;
        return true;
      });

    const result = scoredAgents
      .sort((a, b) => b.searchScore - a.searchScore)
      .map(({ agent }) => agent);

    if (sort === "newest") {
      return result.sort((a, b) => (b.createdAt?.seconds || 0) - (a.createdAt?.seconds || 0));
    }
    if (sort === "used") {
      return result.sort((a, b) => (b.totalCalls || 0) - (a.totalCalls || 0));
    }
    if (sort === "rated") {
      return result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
    }
    if (sort === "cost") {
      return result.sort((a, b) => (a.costPerCall || 0) - (b.costPerCall || 0));
    }

    return result;
  }, [agents, q, tags, langs, maxCost, minTrust, sort]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-[#080808]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(231,76,60,0.16)_0%,_rgba(8,8,8,0)_34%),linear-gradient(180deg,_rgba(20,20,24,0.8)_0%,_rgba(8,8,8,1)_45%)]" />
      <div className="absolute inset-0 hero-grid opacity-[0.04]" />

      <div className="relative mx-auto max-w-[1280px] px-6 pb-16 pt-32 md:px-12 lg:px-20">
        <div className="mb-14 text-center">
          <span className="mb-6 inline-flex rounded-full border border-[#e74c3c]/25 bg-[#e74c3c]/8 px-4 py-2 font-mono text-[11px] uppercase tracking-[0.2em] text-[#ff8c7e]">
            [ Marketplace ]
          </span>
          <h1 className="mx-auto mb-5 max-w-4xl text-4xl font-black tracking-tight text-[#e8eaf0] md:text-6xl">
            Discover production-ready AI agents without leaving the platform
          </h1>
          <p className="mx-auto mb-10 max-w-3xl text-lg leading-8 text-[#8a8fa8]">
            Browse verified agents, compare latency and trust signals, and move from discovery to integration inside a single dark, high-signal workspace.
          </p>
          <SearchBar />
        </div>

        <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-[20px] border border-white/8 bg-white/[0.03] px-5 py-4 backdrop-blur-xl">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a8fa8]">
            {filteredAgents.length} agent{filteredAgents.length === 1 ? "" : "s"} matching your current filters
          </div>
          <div className="text-sm text-[#cfd3df]">
            {q ? <>Showing results for <span className="text-[#e8eaf0]">&quot;{q}&quot;</span></> : "Refine by capability, language, trust, and cost"}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[320px_minmax(0,1fr)]">
          <aside className="lg:col-span-1">
          <FilterSidebar agents={agents} />
        </aside>

          <section className="lg:col-span-1">
            <AgentGrid agents={filteredAgents} isLoading={isLoading} />
          </section>
        </div>
      </div>
    </div>
  );
}

export default function AgentsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#080808]" />}>
      <AgentsContent />
    </Suspense>
  );
}
