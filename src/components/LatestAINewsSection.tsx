"use client";

import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { ArrowUpRight, Newspaper } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { AINewsResponse } from "@/lib/homepageFeed";

const fetchNews = async (): Promise<AINewsResponse> => {
  const response = await fetch("/api/ai-news");
  if (!response.ok) {
    throw new Error("Failed to load AI news");
  }
  return response.json();
};

const formatPublishedDate = (value: string) =>
  new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  }).format(new Date(value));

export const LatestAINewsSection = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["homepage", "ai-news"],
    queryFn: fetchNews,
    staleTime: 1000 * 60 * 15,
  });

  const items = data?.items || [];

  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,22,0.98),rgba(9,9,11,0.98))] p-6 shadow-[0_24px_60px_rgba(0,0,0,0.3)] md:p-8">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(231,76,60,0.14),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_38%)]" />

      <div className="relative z-10">
        <div className="mb-6">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#e74c3c]/25 bg-[#e74c3c]/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.22em] text-[#ff8c7e]">
            <Newspaper className="h-3.5 w-3.5" />
            Latest AI News
          </div>
          <h2 className="text-2xl font-bold tracking-tight text-[#e8eaf0] md:text-3xl">
            AI and agent news that moves the market
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-[#8a8fa8]">
            A curated stream of recent AI developments, agent ecosystem movement, and platform shifts that matter to builders.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {isLoading
            ? Array.from({ length: 4 }, (_, index) => (
              <div
                key={`skeleton-${index}`}
                className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-[#e74c3c]/25 hover:bg-white/[0.05]"
              >
                <div className="space-y-4">
                  <Skeleton className="h-4 w-28 bg-white/8" />
                  <Skeleton className="h-14 w-full bg-white/8" />
                  <Skeleton className="h-4 w-36 bg-white/8" />
                </div>
              </div>
            ))
            : items.slice(0, 4).map((item) => (
              <div
                key={item.id}
                className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-5 transition-colors hover:border-[#e74c3c]/25 hover:bg-white/[0.05]"
              >
                <div className="flex h-full flex-col">
                  <div className="mb-3 flex items-center justify-between gap-3">
                    <Badge variant="outline" className="border-white/10 bg-white/[0.04] font-medium text-[#e8eaf0]">
                      {item.source}
                    </Badge>
                    <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#8a8fa8]">
                      {formatPublishedDate(item.publishedAt)}
                    </span>
                  </div>

                  <p className="flex-1 text-base font-bold leading-7 text-[#f1f2f6]">
                    {item.title}
                  </p>

                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#ff8c7e] transition-colors hover:text-white"
                  >
                    Open story
                    <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
