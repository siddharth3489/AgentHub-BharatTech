"use client";

import { useQueryState, parseAsArrayOf, parseAsString, parseAsFloat } from "nuqs";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Agent } from "@/lib/types";
import { useMemo } from "react";

export const FilterSidebar = ({ agents }: { agents: Agent[] }) => {
  const [tags, setTags] = useQueryState("tags", parseAsArrayOf(parseAsString).withDefault([]));
  const [langs, setLangs] = useQueryState("langs", parseAsArrayOf(parseAsString).withDefault([]));
  const [maxCost, setMaxCost] = useQueryState("cost", parseAsFloat.withDefault(0.1));
  const [minTrust, setMinTrust] = useQueryState("trust", parseAsFloat.withDefault(0));
  const [sort, setSort] = useQueryState("sort", parseAsString.withDefault("newest"));

  const allTags = useMemo(() => Array.from(new Set(agents.flatMap((a) => a.capabilityTags))).sort(), [agents]);
  const allLangs = useMemo(() => Array.from(new Set(agents.flatMap((a) => a.supportedLanguages))).sort(), [agents]);

  const toggleTag = (tag: string) => {
    if (tags.includes(tag)) setTags(tags.filter((t) => t !== tag));
    else setTags([...tags, tag]);
  };

  const toggleLang = (lang: string) => {
    if (langs.includes(lang)) setLangs(langs.filter((l) => l !== lang));
    else setLangs([...langs, lang]);
  };

  const hasFilters = tags.length > 0 || langs.length > 0 || maxCost < 0.1 || minTrust > 0 || sort !== "newest";

  const resetFilters = () => {
    setTags([]);
    setLangs([]);
    setMaxCost(0.1);
    setMinTrust(0);
    setSort("newest");
  };

  return (
    <div className="sticky top-28 space-y-8 rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,16,20,0.96),rgba(9,9,11,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
      <div className="flex items-center justify-between border-b border-white/8 pb-5">
        <div>
          <h3 className="text-lg font-semibold tracking-tight text-[#e8eaf0]">Filters</h3>
          <p className="mt-1 text-sm text-[#8a8fa8]">Narrow the marketplace to the exact agent profile you need.</p>
        </div>
        <button
          type="button"
          onClick={resetFilters}
          disabled={!hasFilters}
          className="rounded-full border border-white/10 px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] text-[#8a8fa8] transition-colors hover:border-[#e74c3c]/40 hover:text-[#ff8c7e] disabled:cursor-not-allowed disabled:opacity-40"
        >
          Reset
        </button>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#8a8fa8]">Sort By</h4>
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-[#080808] p-3 text-sm text-[#e8eaf0] shadow-sm outline-none transition-colors focus:border-[#e74c3c]/55"
        >
          <option value="newest">Newest</option>
          <option value="used">Most Used</option>
          <option value="rated">Highest Rated</option>
          <option value="cost">Lowest Cost</option>
        </select>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#8a8fa8]">Max Cost / Call</h4>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-[#8a8fa8]">$0</span>
          <span className="text-xs font-mono font-bold text-[#ff8c7e]">${maxCost.toFixed(3)}</span>
        </div>
        <Slider
          value={[maxCost]}
          min={0}
          max={0.1}
          step={0.001}
          onValueChange={(vals) => setMaxCost((vals as number[])[0])}
          className="w-full accent-[#e74c3c]"
        />
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#8a8fa8]">Min Trust Score</h4>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-xs text-[#8a8fa8]">0</span>
          <span className="text-xs font-mono font-bold text-[#ff8c7e]">{minTrust}</span>
        </div>
        <Slider
          value={[minTrust]}
          min={0}
          max={100}
          step={1}
          onValueChange={(vals) => setMinTrust((vals as number[])[0])}
          className="w-full accent-[#e74c3c]"
        />
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#8a8fa8]">Capabilities</h4>
        <div className="max-h-48 space-y-3 overflow-y-auto">
          {allTags.map((tag) => (
            <label key={tag} className="group flex cursor-pointer items-center space-x-3">
              <Checkbox checked={tags.includes(tag)} onCheckedChange={() => toggleTag(tag)} className="border-white/20 bg-white/[0.02] data-[state=checked]:border-[#e74c3c] data-[state=checked]:bg-[#e74c3c]" />
              <span className="text-sm font-medium text-[#cfd3df] transition-colors group-hover:text-white">{tag}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[#8a8fa8]">Languages</h4>
        <div className="space-y-3">
          {allLangs.map((lang) => (
            <label key={lang} className="group flex cursor-pointer items-center space-x-3">
              <Checkbox checked={langs.includes(lang)} onCheckedChange={() => toggleLang(lang)} className="border-white/20 bg-white/[0.02] data-[state=checked]:border-[#e74c3c] data-[state=checked]:bg-[#e74c3c]" />
              <span className="text-sm font-medium text-[#cfd3df] transition-colors group-hover:text-white">{lang}</span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};
