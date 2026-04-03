import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100vh] flex-col justify-center overflow-hidden">
      <video
        className="absolute inset-0 z-0 h-full w-full object-cover opacity-45"
        src="/hero/agenthub-bg.mp4"
        poster="/hero/ezgif-frame-007.png"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(8,8,8,0.4)_0%,_rgba(8,8,8,1)_100%)]"></div>
      <div className="absolute inset-0 z-0 bg-[#050505]/64"></div>
      <div className="absolute inset-0 z-0 scanline opacity-[0.03]"></div>
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_35%,_rgba(231,76,60,0.18)_0%,_rgba(231,76,60,0)_42%)]"></div>
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="animate-aurora-drift absolute left-[8%] top-[12%] h-40 w-40 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.2)_0%,_rgba(231,76,60,0)_74%)] blur-3xl" />
        <div className="animate-aurora-drift-reverse absolute right-[6%] top-[18%] h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.08)_0%,_rgba(255,255,255,0)_72%)] blur-3xl" />
        <div className="animate-sheen-slow absolute inset-0 bg-[linear-gradient(118deg,_transparent_16%,_rgba(255,255,255,0.05)_34%,_rgba(231,76,60,0.08)_52%,_transparent_72%)] opacity-40" />
        <div className="absolute inset-x-0 bottom-[-15%] h-[42%] bg-[radial-gradient(circle_at_center,_rgba(231,76,60,0.22)_0%,_rgba(231,76,60,0)_68%)] blur-3xl" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
        <div className="animate-ambient-glow absolute left-1/2 top-1/2 h-[58vw] w-[58vw] max-h-[760px] max-w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.18)_0%,_rgba(231,76,60,0)_72%)] blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(8,8,8,0.92)_0%,_rgba(8,8,8,0.56)_22%,_rgba(8,8,8,0.16)_50%,_rgba(8,8,8,0.56)_78%,_rgba(8,8,8,0.92)_100%)]"></div>
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,8,8,0.78)_0%,_rgba(8,8,8,0.14)_34%,_rgba(8,8,8,0.84)_100%)]"></div>
        <div className="relative h-full w-full">
          <Image
            src="/hero/ezgif-frame-007.png"
            alt=""
            fill
            priority
            aria-hidden="true"
            className="animate-hero-drift object-contain object-center opacity-24 saturate-[1.08] contrast-[1.05] blur-[0.25px]"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-[18%] bottom-0 top-[22%] z-[1] md:hidden">
        <div className="animate-ambient-glow absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.18)_0%,_rgba(231,76,60,0)_70%)] blur-3xl"></div>
        <Image
          src="/hero/ezgif-frame-007.png"
          alt=""
          fill
          aria-hidden="true"
          className="animate-hero-drift object-contain object-center opacity-14"
          sizes="70vw"
        />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100vh] w-full max-w-[1280px] items-center px-6 pb-16 pt-28 md:px-12 lg:px-20">
        <div className="flex w-full max-w-4xl flex-col items-center text-center mx-auto">
          <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <span className="mb-6 block border border-[#c0392b]/30 bg-[#c0392b]/5 px-3 py-1 font-mono text-[13px] uppercase tracking-[0.15em] text-[#c0392b]">
              [ AGENTHUB PLATFORM ]
            </span>
          </div>
          
          <h1 className="animate-fade-in-up mb-8 text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[#e8eaf0] sm:text-6xl md:text-[80px]" style={{ animationDelay: "100ms" }}>
            The Marketplace <br />
            for AI Agents
          </h1>
          
          <p className="animate-fade-in-up mb-12 max-w-3xl text-lg font-medium leading-[1.6] text-[#8a8fa8] md:text-xl" style={{ animationDelay: "200ms" }}>
            Discover, test, and integrate elite autonomous agents. Publish your own agents and get paid per API call. The infrastructure layer for the agentic economy.
          </p>
          
          <div className="animate-fade-in-up mb-16 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "300ms" }}>
            <Link href="/agents" className="red-glow-hover flex items-center gap-2 rounded-[6px] bg-[#e74c3c] px-8 py-4 font-semibold text-white transition-colors hover:bg-[#ff5645]">
              Explore Agents
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
            <Link href="/publish" className="flex items-center gap-2 rounded-[6px] border border-white/20 bg-transparent px-8 py-4 font-semibold text-white transition-colors hover:border-white/50 hover:bg-white/[0.04]">
              Publish Your Agent
            </Link>
          </div>

          <div className="animate-fade-in-up flex flex-wrap items-center justify-center gap-4 font-mono text-xs uppercase tracking-[0.1em] text-[#8a8fa8]" style={{ animationDelay: "500ms" }}>
            <span>GitHub OAuth Protected</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span>Live Sandbox Testing</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span>Instant SDK Generation</span>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex">
        <span className="font-mono text-[10px] uppercase tracking-[0.4em] text-white/45">Scroll</span>
        <div className="relative flex h-14 w-8 items-start justify-center rounded-full border border-white/15 bg-white/[0.03]">
          <div className="animate-scroll-cue mt-2 h-3 w-1 rounded-full bg-[#ff8c7e]" />
        </div>
      </div>
    </section>
  );
}
