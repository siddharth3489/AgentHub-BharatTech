"use client";

import { FormEvent, useState } from "react";
import { useRouter } from "next/navigation";

const QUICK_FILTERS = ["Image Processing", "NLP", "Code Generation", "Data Extraction", "Automation"];

export function SearchSection() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const navigateToSearch = (value: string) => {
    const normalized = value.trim();
    if (!normalized) {
      router.push("/agents");
      return;
    }
    router.push(`/agents?q=${encodeURIComponent(normalized)}`);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    navigateToSearch(query);
  };

  return (
    <section className="relative z-20 -mt-20 sm:-mt-24 w-full flex justify-center px-6">
      <div className="max-w-[840px] w-full mx-auto">
        <div className="glass-panel rounded-xl p-2 md:p-2.5 relative overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-r from-[#e74c3c]/0 via-[#e74c3c]/10 to-[#e74c3c]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 -translate-x-full group-hover:translate-x-full ease-in-out"></div>
          
          <form onSubmit={handleSubmit} className="flex items-center bg-[#080808]/90 border border-white/10 rounded-lg px-5 py-4 focus-within:border-[#e74c3c]/60 focus-within:shadow-[0_0_20px_rgba(231,76,60,0.15)] transition-all">
            <svg className="w-5 h-5 text-[#8a8fa8] mr-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            <input 
              type="text" 
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search agents by capability, language, or use case..."
              className="w-full bg-transparent border-none outline-none text-[#e8eaf0] text-base md:text-lg placeholder:text-[#8a8fa8]/50 font-medium"
            />
            <button type="submit" className="ml-4 hidden rounded bg-[#e74c3c] px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#ff5645] sm:block">
              Search
            </button>
          </form>
        </div>

        <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="flex flex-wrap items-center gap-2">
            {QUICK_FILTERS.map((tag, i) => (
              <button
                key={tag}
                type="button"
                onClick={() => navigateToSearch(tag)}
                className={`rounded-full border px-4 py-1.5 text-xs font-medium transition-colors ${i === 1 ? "border-[#e74c3c]/40 bg-[#e74c3c]/10 text-[#e74c3c]" : "border-white/5 bg-[#141418]/60 text-[#8a8fa8] hover:border-white/20 hover:text-[#e8eaf0]"}`}
              >
                {tag}
              </button>
            ))}
          </div>
          <div className="text-[11px] font-mono text-[#8a8fa8] flex items-center shrink-0">
            <div className="w-2 h-2 rounded-full bg-[#e74c3c] mr-2 live-dot"></div>
            4,200+ AGENTS AVAILABLE
          </div>
        </div>
      </div>
    </section>
  );
}
