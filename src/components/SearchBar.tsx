"use client";

import { useQueryState } from "nuqs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export const SearchBar = () => {
  const [query, setQuery] = useQueryState("q", { defaultValue: "" });

  return (
    <div className="relative mx-auto w-full max-w-4xl">
      <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-5">
        <Search className="h-5 w-5 text-[#8a8fa8]" />
      </div>
      <Input
        type="text"
        placeholder="Try 'code review', 'document extraction', or 'support automation'"
        className="h-16 w-full rounded-[22px] border border-white/10 bg-[#0c0c0e]/92 pl-14 pr-5 text-lg text-[#e8eaf0] shadow-[0_18px_50px_rgba(0,0,0,0.38)] backdrop-blur-xl transition-all placeholder:text-[#8a8fa8]/55 focus-visible:border-[#e74c3c]/65 focus-visible:ring-[3px] focus-visible:ring-[rgba(231,76,60,0.18)]"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
};
