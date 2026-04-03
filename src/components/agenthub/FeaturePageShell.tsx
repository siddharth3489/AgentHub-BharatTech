import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { FeatureQuickMenu, FeatureRail } from "@/components/agenthub/FeatureRail";
import { Footer } from "@/components/agenthub/StrongCTA";

type Metric = {
  label: string;
  value: string;
};

type QuickLink = {
  href: string;
  label: string;
};

export function FeaturePageShell({
  eyebrow,
  title,
  description,
  metrics,
  quickLinks,
  children,
}: {
  eyebrow: string;
  title: string;
  description: string;
  metrics: Metric[];
  quickLinks: QuickLink[];
  children: React.ReactNode;
}) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#050505]">
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(231,76,60,0.12),transparent_24%),linear-gradient(180deg,#060606_0%,#09090b_52%,#050505_100%)]"
      />
      <div aria-hidden="true" className="absolute inset-0 hero-grid opacity-[0.04]" />
      <div
        aria-hidden="true"
        className="animate-aurora-drift absolute left-[6%] top-10 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.16)_0%,_rgba(231,76,60,0)_72%)] blur-[100px]"
      />
      <div
        aria-hidden="true"
        className="animate-aurora-drift-reverse absolute right-[8%] top-[16%] hidden h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.05)_0%,_rgba(255,255,255,0)_72%)] blur-[104px] md:block"
      />

      <div className="relative z-10 xl:pl-[288px]">
        <aside className="fixed bottom-0 left-0 top-20 z-30 hidden w-[288px] xl:block">
          <FeatureRail variant="attached" />
        </aside>

        <div className="mx-auto max-w-[1340px] px-6 pb-20 pt-32 md:px-12 lg:px-20">
          <FeatureQuickMenu />

          <section
            className="glass-panel animate-fade-in-up mb-8 rounded-[2rem] p-8 md:p-10"
            style={{ animationDelay: "80ms" }}
          >
            <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <span className="section-badge mb-6">{eyebrow}</span>
                <h1 className="text-4xl font-black tracking-tight text-[#e8eaf0] md:text-6xl">
                  {title}
                </h1>
                <p className="mt-6 max-w-2xl text-base leading-8 text-[#8a8fa8] md:text-lg">
                  {description}
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {quickLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#e8eaf0] transition-colors hover:border-[#e74c3c]/30 hover:text-[#ff8c7e]"
                    >
                      {link.label}
                      <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid flex-1 gap-4 sm:grid-cols-3 lg:max-w-[420px]">
                {metrics.map((metric) => (
                  <div
                    key={metric.label}
                    className="rounded-[1.4rem] border border-white/10 bg-black/20 px-4 py-5"
                  >
                    <div className="font-mono text-[10px] uppercase tracking-[0.24em] text-[#8a8fa8]">
                      {metric.label}
                    </div>
                    <div className="mt-3 text-2xl font-bold tracking-tight text-[#e8eaf0]">
                      {metric.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <div className="space-y-0">{children}</div>
          <Footer />
        </div>
      </div>
    </div>
  );
}
