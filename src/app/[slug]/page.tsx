import Link from "next/link";
import { notFound, redirect } from "next/navigation";

type StaticPageConfig = {
  eyebrow: string;
  title: string;
  description: string;
  primary: { href: string; label: string };
  secondary: { href: string; label: string };
  bullets: string[];
};

const redirects: Record<string, string> = {
  marketplace: "/agents",
  sandbox: "/agents",
  chaining: "/chains",
  sdk: "/publish",
};

const pages: Record<string, StaticPageConfig> = {
  docs: {
    eyebrow: "Developer Docs",
    title: "Documentation is being organized around live product flows.",
    description:
      "This build already supports marketplace browsing, publishing, scanning repositories, and chain creation. Use the live app while the full docs hub is being expanded.",
    primary: { href: "/publish", label: "Open Publish Flow" },
    secondary: { href: "/scan", label: "Open Repo Scanner" },
    bullets: ["Schema-first publishing", "Marketplace search", "Repository analysis", "Chain workflows"],
  },
  pricing: {
    eyebrow: "Pricing",
    title: "AgentHub pricing is usage-based and designed for rapid experimentation.",
    description:
      "You can browse agents, inspect cost-per-call metrics, and review publishing options from the live product today while the dedicated pricing page evolves.",
    primary: { href: "/agents", label: "Browse Marketplace" },
    secondary: { href: "/publish", label: "Review Publisher Flow" },
    bullets: ["Per-call billing", "Trust and latency signals", "Publisher monetization", "Live usage dashboards"],
  },
  blog: {
    eyebrow: "Updates",
    title: "Product updates are shipping directly into the app right now.",
    description:
      "The blog shell is in place, but the fastest way to explore the latest work is through the live marketplace, scan flow, and chain studio already in this repository.",
    primary: { href: "/agents", label: "Explore Marketplace" },
    secondary: { href: "/chains", label: "Open Chains" },
    bullets: ["Landing page refresh", "Interactive previews", "Search improvements", "Deployment-ready build fixes"],
  },
  about: {
    eyebrow: "About AgentHub",
    title: "AgentHub is focused on discovery, testing, and integration for AI agents.",
    description:
      "The platform brings together publishing, validation, marketplace search, and chaining so teams can evaluate agents without leaving the product.",
    primary: { href: "/agents", label: "See the Marketplace" },
    secondary: { href: "/scan", label: "Try Repo Scan" },
    bullets: ["Agent discovery", "Live sandbox evaluation", "Schema-aware integration", "Developer monetization"],
  },
  status: {
    eyebrow: "Platform Status",
    title: "Core product routes are available from this build.",
    description:
      "Use the links below to verify the main app flows. This placeholder keeps the status route working while a richer monitoring page is prepared.",
    primary: { href: "/agents", label: "Open Marketplace" },
    secondary: { href: "/dashboard", label: "Open Dashboard" },
    bullets: ["Homepage restored", "Production build fixed", "Interactive CTAs wired", "Protected routes still enforced"],
  },
  terms: {
    eyebrow: "Terms",
    title: "Terms content is pending, but the legal route is now live.",
    description:
      "This placeholder ensures navigation no longer dead-ends while the full legal copy is added. The app itself remains available through the routes below.",
    primary: { href: "/", label: "Return Home" },
    secondary: { href: "/agents", label: "Browse Agents" },
    bullets: ["Route restored", "Navigation fixed", "Footer links active", "Ready for full copy later"],
  },
  privacy: {
    eyebrow: "Privacy",
    title: "Privacy content is pending, but the route is now connected.",
    description:
      "This page keeps the footer navigation functional and gives users a safe landing page instead of a 404 while full policy content is prepared.",
    primary: { href: "/", label: "Return Home" },
    secondary: { href: "/login", label: "Go to Login" },
    bullets: ["No broken footer links", "Consistent site navigation", "Safe fallback content", "Ready for policy copy"],
  },
};

export default async function MarketingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  if (redirects[slug]) {
    redirect(redirects[slug]);
  }

  const page = pages[slug];

  if (!page) {
    notFound();
  }

  return (
    <section className="relative overflow-hidden bg-[#080808] py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(231,76,60,0.16)_0%,_rgba(8,8,8,0)_35%)]"></div>
      <div className="relative mx-auto flex max-w-5xl flex-col gap-10 px-6 md:px-12">
        <div className="max-w-3xl">
          <span className="mb-6 inline-flex rounded-full border border-[#e74c3c]/25 bg-[#e74c3c]/8 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-[#ff8c7e]">
            {page.eyebrow}
          </span>
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-[#e8eaf0] md:text-6xl">
            {page.title}
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-[#8a8fa8]">{page.description}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div className="glass-panel rounded-[28px] border border-white/8 p-8">
            <div className="mb-6 flex flex-wrap gap-4">
              <Link href={page.primary.href} className="red-glow-hover rounded-[8px] bg-[#e74c3c] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#ff5645]">
                {page.primary.label}
              </Link>
              <Link href={page.secondary.href} className="rounded-[8px] border border-white/15 px-6 py-3 font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/[0.04]">
                {page.secondary.label}
              </Link>
            </div>
            <div className="space-y-3">
              {page.bullets.map((bullet) => (
                <div key={bullet} className="flex items-center gap-3 text-sm text-[#d4d7e2]">
                  <div className="h-2 w-2 rounded-full bg-[#e74c3c]"></div>
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-white/8 bg-[#111115] p-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)]">
            <div className="mb-4 font-mono text-[11px] uppercase tracking-[0.18em] text-[#8a8fa8]">
              Available now
            </div>
            <div className="space-y-4 text-sm leading-7 text-[#cfd3df]">
              <p>Marketplace browsing at <span className="text-white">/agents</span></p>
              <p>Repository scan flow at <span className="text-white">/scan</span></p>
              <p>Chaining workspace at <span className="text-white">/chains</span></p>
              <p>Publisher flow at <span className="text-white">/publish</span></p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
