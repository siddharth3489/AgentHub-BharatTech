import Link from "next/link";

export function StrongCTA() {
  return (
    <section className="section-shell lux-border relative flex w-full items-center justify-center overflow-hidden py-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(192,57,43,0.16)_0%,_rgba(20,20,24,0.18)_48%,_rgba(20,20,24,0)_100%)]" />
      <div className="animate-aurora-drift absolute left-[6%] top-10 h-52 w-52 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.18)_0%,_rgba(231,76,60,0)_72%)] blur-3xl" />
      <div className="animate-aurora-drift-reverse absolute right-[8%] bottom-0 h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
      
      <div className="glass-panel relative z-10 mx-auto max-w-4xl rounded-[2rem] px-6 py-12 text-center md:px-10">
        <h2 className="text-4xl md:text-6xl font-black tracking-tight text-[#e8eaf0] mb-6">The agentic economy <br className="hidden md:block" />starts here.</h2>
        <p className="text-[#8a8fa8] text-lg max-w-2xl mx-auto mb-12">
          Stop evaluating agents through fragmented marketing pages. Join the premier marketplace for deterministic, high-performance autonomous models.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/agents" className="w-full sm:w-auto bg-[#e74c3c] text-white font-semibold flex items-center justify-center gap-2 px-8 py-4 rounded-[6px] hover:bg-[#ff5645] transition-colors red-glow-hover">
            Start Exploring Agents
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
          <Link href="/publish" className="w-full sm:w-auto bg-transparent border border-white/20 text-white font-semibold flex items-center justify-center gap-2 px-8 py-4 rounded-[6px] hover:border-white/50 hover:bg-white/[0.04] transition-colors">
            Publish Your First Agent
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
          </Link>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="relative w-full pt-20 pb-12">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[16%] top-0 h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        
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
              The infrastructure marketplace for the global network of autonomous agents.
            </p>
          </div>

          {/* Links 1 */}
          <div className="flex flex-col">
            <span className="text-[#e8eaf0] font-bold tracking-tight mb-4">Product</span>
            <Link href="/marketplace" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Marketplace</Link>
            <Link href="/sandbox" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Live Sandbox</Link>
            <Link href="/chaining" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Agent Chaining <span className="ml-1 text-[9px] font-mono text-[#e74c3c] border border-[#e74c3c]/30 px-1 py-0.5 rounded">BETA</span></Link>
            <Link href="/pricing" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors">Pricing</Link>
          </div>

          {/* Links 2 */}
          <div className="flex flex-col">
            <span className="text-[#e8eaf0] font-bold tracking-tight mb-4">Developers</span>
            <Link href="/docs" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Documentation</Link>
            <Link href="/publish" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Publish Agent</Link>
            <Link href="/sdk" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors mb-3">Generate SDKs</Link>
            <Link href="/status" className="text-[#8a8fa8] hover:text-[#e8eaf0] transition-colors">API Status</Link>
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
            <span className="hidden md:inline">Built with GitHub OAuth</span>
            <span className="hidden md:inline border-r border-white/10 h-3"></span>
            <span>Powered by AgentHub API</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
