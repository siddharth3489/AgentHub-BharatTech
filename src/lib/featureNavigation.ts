import type { LucideIcon } from "lucide-react";
import {
  Activity,
  Github,
  House,
  Key,
  LayoutGrid,
  Merge,
  Rocket,
  Search,
  Shield,
  Sparkles,
  TerminalSquare,
} from "lucide-react";

export type FeatureNavStatus = "live" | "new" | "soon";

export type FeatureNavItem = {
  title: string;
  href: string;
  description: string;
  icon: LucideIcon;
  status: FeatureNavStatus;
  topNav?: boolean;
};

export const featureNavItems: FeatureNavItem[] = [
  {
    title: "Home",
    href: "/",
    description: "Fast entry into the full AgentHub stack.",
    icon: House,
    status: "live",
  },
  {
    title: "Marketplace",
    href: "/agents",
    description: "Browse verified agents with filters and trust signals.",
    icon: LayoutGrid,
    status: "live",
    topNav: true,
  },
  {
    title: "Platform",
    href: "/platform",
    description: "Explore sandbox, SDKs, and core infra flows.",
    icon: Shield,
    status: "new",
    topNav: true,
  },
  {
    title: "Signal",
    href: "/signal",
    description: "Track trending repos, AI news, and live activity.",
    icon: Activity,
    status: "new",
    topNav: true,
  },
  {
    title: "Repo Scan",
    href: "/scan",
    description: "Map repositories to missing agents and workflows.",
    icon: Github,
    status: "live",
    topNav: true,
  },
  {
    title: "Workflows",
    href: "/chains",
    description: "Compose multi-agent pipelines and orchestration paths.",
    icon: Merge,
    status: "live",
    topNav: true,
  },
  {
    title: "Publish",
    href: "/publish",
    description: "Launch your own agent with pricing and schemas.",
    icon: Rocket,
    status: "live",
  },
  {
    title: "Creator",
    href: "/dashboard",
    description: "Manage keys, revenue, and creator performance.",
    icon: Key,
    status: "live",
  },
  {
    title: "Launchpad",
    href: "/launchpad",
    description: "See roadmap previews and upcoming premium tools.",
    icon: Sparkles,
    status: "soon",
  },
];

export const topFeatureNavItems = featureNavItems.filter((item) => item.topNav);

export type PortalCard = {
  title: string;
  href: string;
  eyebrow: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
  accentClass: string;
};

export const homePortalCards: PortalCard[] = [
  {
    title: "Platform",
    href: "/platform",
    eyebrow: "Build + Validate",
    description:
      "A tighter route for the product surface: sandbox execution, SDK generation, delivery flow, and infrastructure signals.",
    icon: TerminalSquare,
    bullets: ["Live sandbox", "SDK delivery", "Core infrastructure"],
    accentClass:
      "from-[#e74c3c]/16 via-[#141418]/82 to-[#080808]",
  },
  {
    title: "Signal",
    href: "/signal",
    eyebrow: "Watch + React",
    description:
      "Trending agents, AI market movement, and marketplace activity now live in a dedicated stream instead of stretching the homepage.",
    icon: Activity,
    bullets: ["Trending repos", "AI news", "Live marketplace feed"],
    accentClass:
      "from-white/[0.08] via-[#141418]/82 to-[#080808]",
  },
  {
    title: "Launchpad",
    href: "/launchpad",
    eyebrow: "Ship + Expand",
    description:
      "Publishing economics, roadmap surfaces, and chained workflow previews are grouped into one premium expansion lane.",
    icon: Sparkles,
    bullets: ["Publishing flow", "Revenue surfaces", "Coming soon previews"],
    accentClass:
      "from-[#ff8c7e]/14 via-[#141418]/82 to-[#080808]",
  },
];

export const homeQuickActions = [
  {
    title: "Marketplace",
    href: "/agents",
    description: "Find an agent instantly.",
    icon: LayoutGrid,
  },
  {
    title: "Repo Scan",
    href: "/scan",
    description: "Analyze your stack and gaps.",
    icon: Search,
  },
  {
    title: "Workflows",
    href: "/chains",
    description: "Compose autonomous pipelines.",
    icon: Merge,
  },
  {
    title: "Publish",
    href: "/publish",
    description: "Launch and monetize your agent.",
    icon: Rocket,
  },
];
