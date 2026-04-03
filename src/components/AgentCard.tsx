import Link from "next/link";
import { Agent } from "@/lib/types";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrustScoreBadge } from "./TrustScoreBadge";
import { Star, Activity } from "lucide-react";

const getTagColor = (tag: string) => {
  const colors = [
    "bg-[#1b2236] text-[#8fb6ff] border-[#2f4670]",
    "bg-[#231c31] text-[#ca9cff] border-[#4f3b73]",
    "bg-[#2a1b25] text-[#ff9ccd] border-[#6b3953]",
    "bg-[#182636] text-[#85c7ff] border-[#315a80]",
    "bg-[#142726] text-[#6fe3d3] border-[#2f716b]",
  ];
  let hash = 0;
  for (let i = 0; i < tag.length; i++) hash = tag.charCodeAt(i) + ((hash << 5) - hash);
  return colors[Math.abs(hash) % colors.length];
};

const formatCalls = (num: number) => {
  if (num >= 1000000) return (num / 1000000).toFixed(1) + "M";
  if (num >= 1000) return (num / 1000).toFixed(1) + "k";
  return num.toString();
};

export const AgentCard = ({ agent }: { agent: Agent }) => {
  return (
    <Link href={`/agents/${agent.id}`}>
      <Card className="group h-full cursor-pointer flex-col overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,22,0.98),rgba(9,9,11,0.98))] text-[#e8eaf0] shadow-[0_18px_45px_rgba(0,0,0,0.28)] transition-all hover:-translate-y-1 hover:border-[#e74c3c]/40 hover:shadow-[0_24px_55px_rgba(0,0,0,0.42)]">
        <CardHeader className="pb-3 px-5 pt-5 flex flex-row items-start justify-between">
          <div className="flex-1 space-y-1">
            <CardTitle className="flex items-center gap-2 truncate text-base font-bold leading-tight text-[#f3f4f8]">
              {agent.name}
              {agent.version && <span className="rounded border border-white/10 bg-white/[0.04] px-1.5 py-0.5 text-xs font-normal text-[#8a8fa8]">v{agent.version}</span>}
            </CardTitle>
            <div className="flex items-center gap-2 text-xs text-[#8a8fa8]">
              <span className="font-mono flex items-center">
                <img src={`https://github.com/${agent.creatorUsername}.png?size=32`} className="mr-1.5 h-4 w-4 rounded-full ring-1 ring-white/10" alt="" />
                {agent.creatorUsername}
              </span>
            </div>
          </div>
          <div>
            <TrustScoreBadge trustScore={agent.trustScore || 50} />
          </div>
        </CardHeader>
        <CardContent className="px-5 pb-4 flex-1">
          <p className="mb-4 h-12 line-clamp-2 text-sm leading-6 text-[#b4b8c8]">{agent.description}</p>
          <div className="flex flex-wrap gap-1.5">
            {agent.capabilityTags.slice(0, 3).map((tag) => (
              <Badge key={tag} variant="outline" className={`border px-1.5 py-0 font-mono text-[10px] ${getTagColor(tag)}`}>
                {tag}
              </Badge>
            ))}
            {agent.capabilityTags.length > 3 && (
              <Badge variant="outline" className="border border-white/10 bg-white/[0.03] px-1.5 py-0 font-mono text-[10px] text-[#8a8fa8]">
                +{agent.capabilityTags.length - 3}
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between border-t border-white/[0.06] bg-black/20 px-5 py-3 text-xs text-[#8a8fa8]">
          <div className="flex gap-4">
            <span className="flex items-center gap-1 transition-colors group-hover:text-[#ffd07f]">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              {agent.rating?.toFixed(1) || "No ratings"}
            </span>
            <span className="flex items-center gap-1 truncate transition-colors group-hover:text-[#ff8c7e]">
              <Activity className="w-3.5 h-3.5" />
              {formatCalls(agent.totalCalls || 0)} requests
            </span>
          </div>
          <div className="flex items-baseline gap-1 text-right text-[#e8eaf0]">
            <span className="font-mono text-xs">${agent.costPerCall?.toFixed(3) || "0.000"}</span>
            <span className="font-mono text-[10px] text-[#8a8fa8]">/call</span>
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};
