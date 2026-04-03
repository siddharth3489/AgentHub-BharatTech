import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function StrongCTA() {
  return (
    <section className="section-shell lux-border relative w-full overflow-hidden py-24 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(192,57,43,0.16)_0%,_rgba(20,20,24,0.18)_48%,_rgba(20,20,24,0)_100%)]" />
      <div className="animate-aurora-drift absolute left-[6%] top-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.18)_0%,_rgba(231,76,60,0)_72%)] blur-3xl" />
      <div className="animate-aurora-drift-reverse absolute right-[8%] bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />

      <div className="page-container relative z-10 w-full">
        <div className="glass-panel w-full rounded-[2rem] px-6 py-12 md:px-10 lg:px-14 lg:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <h2 className="mb-6 text-4xl font-black tracking-tight text-[#e8eaf0] md:text-6xl">
              Build with agents that are ready <br className="hidden md:block" />
              for production.
            </h2>
            <p className="mx-auto mb-12 max-w-3xl text-lg text-[#8a8fa8]">
              Evaluate agents in one place, compare their contracts and trust signals, and move from discovery to integration without piecing together separate tools.
            </p>

            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/agents"
                className={cn(buttonVariants({ variant: "default", size: "lg" }), "w-full rounded-full px-8 sm:w-auto")}
              >
                Explore Agents
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
              <Link
                href="/publish"
                className={cn(buttonVariants({ variant: "outline", size: "lg" }), "w-full rounded-full px-8 sm:w-auto")}
              >
                Publish an Agent
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="page-container">
        
        <div className="grid grid-cols-2 md:grid-cols-4 md:gap-x-12 gap-y-12 mb-20 text-sm">
          {/* Logo Col */}
          <div className="col-span-2 md:col-span-1 flex flex-col items-start pr-4">
            <Link href="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-6 h-6 bg-[#080808] border border-white/20 rounded-sm flex items-center justify-center relative">
                <div className="absolute -top-[1px] -right-[1px] w-1.5 h-1.5 bg-[#e74c3c]"></div>
                <span className="text-white font-mono font-bold text-xs group-hover:text-[#e74c3c] transition-colors pb-px">A</span>
              </div>
              <span className="font-bold tracking-tight text-[#e8eaf0]">AgentHub</span>
            </Link>
            <p className="text-[#8a8fa8] leading-relaxed">
              Discover, validate, and publish AI agents from one platform built for technical teams.
            </p>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col">
            <span className="text-[#e8eaf0] font-bold tracking-tight mb-4">Product</span>
            <Link href="/agents" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Marketplace</Link>
            <Link href="/platform" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Platform</Link>
            <Link href="/signal" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Signal</Link>
            <Link href="/chains" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors">Workflows</Link>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col">
            <span className="text-[#e8eaf0] font-bold tracking-tight mb-4">Developers</span>
            <Link href="/scan" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Repository Scan</Link>
            <Link href="/publish" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Publish</Link>
            <Link href="/dashboard" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Creator Dashboard</Link>
            <Link href="/docs" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors">Documentation</Link>
          </div>

          {/* Links 3 */}
          <div className="flex flex-col">
            <span className="text-[#e8eaf0] font-bold tracking-tight mb-4">Company</span>
            <Link href="/about" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">About</Link>
            <Link href="/blog" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Blog</Link>
            <Link href="/terms" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Terms</Link>
            <Link href="/privacy" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors">Privacy</Link>
          </div>
        </div>

        <div className="pt-8 border-t border-white/[0.04] flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-mono text-[#8a8fa8]">
          <span>© {new Date().getFullYear()} AgentHub Inc. All rights reserved.</span>
          <div className="flex items-center gap-4">
            <span className="hidden md:inline">GitHub-authenticated access</span>
            <span className="hidden md:inline border-r border-white/10 h-3"></span>
            <span>Agent discovery, validation, and integration</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
