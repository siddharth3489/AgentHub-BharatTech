"use client";

import { useState, useEffect, useCallback } from "react";
import { Sparkles } from "lucide-react";
import { AgentCard } from "./AgentCard";
import { Agent } from "@/lib/types";
import { Input } from "./ui/input";

export function IntentSearchBar() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [results, setResults] = useState<{ agent: Agent; matchReason: string }[]>([]);
  const [recent, setRecent] = useState<string[]>([]);

  useEffect(() => {
    const r = localStorage.getItem("recent_searches");
    if (r) setRecent(JSON.parse(r));
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedQuery(query);
    }, 500);
    return () => clearTimeout(handler);
  }, [query]);

  const updateRecent = useCallback((q: string) => {
    const newRecent = [q, ...recent.filter((x) => x !== q)].slice(0, 5);
    setRecent(newRecent);
    localStorage.setItem("recent_searches", JSON.stringify(newRecent));
  }, [recent]);

  useEffect(() => {
    if (!debouncedQuery) {
      setResults([]);
      setIsSearching(false);
      return;
    }

    const controller = new AbortController();

    const search = async () => {
      setIsSearching(true);
      try {
        const res = await fetch("/api/search", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ query: debouncedQuery }),
          signal: controller.signal,
        });

        if (!res.ok) {
          setResults([]);
          return;
        }

        const data = await res.json();
        if (Array.isArray(data)) {
          setResults(data);
          updateRecent(debouncedQuery);
        } else {
          setResults([]);
        }
      } catch (e) {
        if ((e as Error).name !== "AbortError") {
          setResults([]);
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsSearching(false);
        }
      }
    };

    search();

    return () => {
      controller.abort();
    };
  }, [debouncedQuery, updateRecent]);

  return (
    <div className="relative z-20 mx-auto w-full max-w-5xl">
      <div className={`group relative ${isSearching ? "animate-pulse" : ""}`}>
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
          <Sparkles className={`h-5 w-5 ${isSearching ? "text-[#ff8c7e]" : "text-[#8a8fa8]"}`} />
        </div>
        <Input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search by workflow, use case, or capability. Try: summarize release notes"
          className="peer block h-16 w-full rounded-[1.75rem] border border-white/10 bg-[#0c0c0e]/92 pl-14 pr-36 text-lg text-[#e8eaf0] shadow-[0_18px_50px_rgba(0,0,0,0.38)] backdrop-blur-2xl transition-all placeholder:text-[#8a8fa8]/65 focus-visible:border-[#e74c3c]/65 focus-visible:ring-[3px] focus-visible:ring-[rgba(231,76,60,0.18)]"
        />
        <div className="absolute inset-y-0 right-0 flex items-center pr-4">
          <span className={`rounded-full border px-3 py-1.5 text-xs font-mono uppercase tracking-[0.15em] ${isSearching ? "border-[#e74c3c]/30 bg-[#e74c3c]/10 text-[#ff8c7e]" : "border-white/10 bg-white/[0.03] text-[#8a8fa8]"}`}>
            {isSearching ? "Searching..." : "Intent Search"}
          </span>
        </div>
      </div>

      {recent.length > 0 && !query && (
        <div className="mt-4 flex flex-wrap justify-center gap-2">
          {recent.map((r) => (
            <button
              key={r}
              type="button"
              onClick={() => setQuery(r)}
              className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 text-sm font-medium text-[#cfd3df] transition-colors hover:border-[#e74c3c]/35 hover:text-white"
            >
              {r}
            </button>
          ))}
        </div>
      )}

      {results.length > 0 && (
        <div className="mt-5 rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(16,16,20,0.96),rgba(9,9,11,0.98))] p-6 text-left shadow-[0_20px_55px_rgba(0,0,0,0.32)]">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-[#8a8fa8]">Search Results</h3>
          <div className="grid gap-4 lg:grid-cols-2">
            {results.map((r) => (
              <div key={r.agent.id} className="rounded-2xl border border-white/8 bg-black/20 p-4">
                <p className="mb-3 border-l-2 border-[#e74c3c] pl-3 text-sm italic text-[#ff8c7e]">&quot;{r.matchReason}&quot;</p>
                <AgentCard agent={r.agent} />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
