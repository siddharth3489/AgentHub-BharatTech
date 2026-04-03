"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { featureNavItems, type FeatureNavItem } from "@/lib/featureNavigation";

type RailVariant = "sticky" | "attached";

const statusLabel: Record<FeatureNavItem["status"], string> = {
  live: "LIVE",
  new: "NEW",
  soon: "SOON",
};

const statusClassName: Record<FeatureNavItem["status"], string> = {
  live: "border-[#4ade80]/18 bg-[#4ade80]/10 text-[#86efac]",
  new: "border-[#ff8c7e]/18 bg-[#e74c3c]/10 text-[#ff8c7e]",
  soon: "border-white/10 bg-white/[0.04] text-[#9ca3bb]",
};

const coreItems = ["Home", "Marketplace", "Platform", "Signal", "Repo Scan", "Workflows"];
const builderItems = ["Publish", "Creator", "Launchpad"];

const pickItems = (titles: string[]) =>
  titles
    .map((title) => featureNavItems.find((item) => item.title === title))
    .filter((item): item is FeatureNavItem => Boolean(item));

const railGroups = [
  { title: "Core Navigation", items: pickItems(coreItems) },
  { title: "Builder Tools", items: pickItems(builderItems) },
];

const isItemActive = (pathname: string, href: string) => {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
};

export function FeatureRail({
  className,
  variant = "sticky",
}: {
  className?: string;
  variant?: RailVariant;
}) {
  const pathname = usePathname();
  const attached = variant === "attached";

  return (
    <aside className={cn(attached ? "h-full" : "sticky top-24", className)}>
      <div
        className={cn(
          "flex h-full flex-col overflow-hidden border border-white/10 bg-[linear-gradient(180deg,rgba(10,10,12,0.96),rgba(6,6,8,0.98))] backdrop-blur-xl",
          attached
            ? "border-b-0 border-l-0 border-t-0 border-r-white/8 rounded-none"
            : "glass-panel rounded-[1.9rem]"
        )}
      >
        <div className={cn("border-b border-white/8", attached ? "px-5 pb-4 pt-6" : "px-5 pb-4 pt-5")}>
          <div className="flex items-center gap-3">
            <div className="relative flex h-11 w-11 items-center justify-center rounded-[0.95rem] border border-white/12 bg-[#0d0d10] text-lg font-black text-[#f4f5f7] shadow-[0_10px_30px_rgba(0,0,0,0.26)]">
              A
              <span className="absolute right-1.5 top-1.5 h-2.5 w-2.5 rounded-[3px] bg-[#ff6a57]" />
            </div>
            <div>
              <div className="text-sm font-semibold tracking-tight text-[#e8eaf0]">
                AgentHub
              </div>
              <div className="font-mono text-[10px] uppercase tracking-[0.28em] text-[#8a8fa8]">
                Product Map
              </div>
            </div>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto px-3 py-3">
          {railGroups.map((group, groupIndex) => (
            <div key={group.title} className={cn(groupIndex > 0 && "mt-3 border-t border-white/8 pt-3")}>
              <div className="px-3 pb-2 font-mono text-[10px] uppercase tracking-[0.24em] text-[#72788e]">
                {group.title}
              </div>

              <nav className="space-y-1">
                {group.items.map((item) => {
                  const active = isItemActive(pathname, item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-3 rounded-[0.95rem] px-3 py-3 transition-all duration-300",
                        active
                          ? "bg-[linear-gradient(180deg,rgba(231,76,60,0.18),rgba(255,255,255,0.03))] text-[#f7f7f8] shadow-[0_12px_30px_rgba(231,76,60,0.08)]"
                          : "text-[#c1c6d4] hover:bg-white/[0.04] hover:text-[#f7f7f8]"
                      )}
                    >
                      <div
                        className={cn(
                          "flex h-9 w-9 shrink-0 items-center justify-center rounded-[0.95rem] border transition-colors",
                          active
                            ? "border-[#ff8c7e]/18 bg-[#e74c3c]/12 text-[#ff8c7e]"
                            : "border-white/10 bg-[#101014] text-[#9aa1b8] group-hover:border-white/14 group-hover:text-[#f7f7f8]"
                        )}
                      >
                        <item.icon className="h-4 w-4" />
                      </div>

                      <div className="min-w-0 flex-1">
                        <div className="flex items-center justify-between gap-2">
                          <span className="truncate text-[15px] font-medium tracking-tight">
                            {item.title}
                          </span>
                          <span
                            className={cn(
                              "rounded-full border px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.2em]",
                              statusClassName[item.status]
                            )}
                          >
                            {statusLabel[item.status]}
                          </span>
                        </div>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
}

export function FeatureQuickMenu({ className }: { className?: string }) {
  const pathname = usePathname();

  return (
    <div className={cn("mb-6 flex gap-2 overflow-x-auto pb-2 xl:hidden", className)}>
      {featureNavItems.map((item) => {
        const active = isItemActive(pathname, item.href);

        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-colors",
              active
                ? "border-[#e74c3c]/28 bg-[#e74c3c]/10 text-[#ff8c7e]"
                : "border-white/10 bg-white/[0.03] text-[#8a8fa8] hover:border-white/18 hover:text-[#e8eaf0]"
            )}
          >
            <item.icon className="h-3.5 w-3.5" />
            {item.title}
          </Link>
        );
      })}
    </div>
  );
}
