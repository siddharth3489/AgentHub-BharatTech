import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function HeroSection() {
  return (
    <section className="relative isolate flex min-h-[100vh] flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_rgba(8,8,8,0.42)_0%,_rgba(8,8,8,0.96)_72%,_rgba(8,8,8,1)_100%)]" />
      <div className="absolute inset-0 z-0 bg-[#050505]/70" />
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_75%_35%,_rgba(231,76,60,0.14)_0%,_rgba(231,76,60,0)_40%)]" />
      <div className="absolute inset-0 z-0 scanline opacity-[0.02]" />
      <div className="pointer-events-none absolute inset-0 z-[1]">
        <div className="animate-aurora-drift absolute left-[8%] top-[12%] h-36 w-36 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.18)_0%,_rgba(231,76,60,0)_74%)] blur-[88px]" />
        <div className="animate-aurora-drift-reverse absolute right-[8%] top-[18%] hidden h-64 w-64 rounded-full bg-[radial-gradient(circle,_rgba(255,255,255,0.06)_0%,_rgba(255,255,255,0)_72%)] blur-[100px] md:block" />
        <div className="absolute inset-x-0 bottom-[-8%] h-[30%] bg-[radial-gradient(circle_at_center,_rgba(231,76,60,0.16)_0%,_rgba(231,76,60,0)_72%)] blur-[90px]" />
      </div>
      <div className="pointer-events-none absolute inset-0 z-[1] hidden md:block">
        <div className="animate-ambient-glow absolute left-1/2 top-1/2 h-[50vw] w-[50vw] max-h-[640px] max-w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.14)_0%,_rgba(231,76,60,0)_72%)] blur-[90px]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,_rgba(8,8,8,0.94)_0%,_rgba(8,8,8,0.68)_22%,_rgba(8,8,8,0.18)_50%,_rgba(8,8,8,0.68)_78%,_rgba(8,8,8,0.94)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(8,8,8,0.8)_0%,_rgba(8,8,8,0.2)_34%,_rgba(8,8,8,0.88)_100%)]" />
        <div className="relative h-full w-full opacity-90">
          <Image
            src="/hero/ezgif-frame-007.png"
            alt=""
            fill
            priority
            aria-hidden="true"
            quality={72}
            className="animate-hero-drift object-contain object-center opacity-20 saturate-[1.04] contrast-[1.02]"
            sizes="100vw"
          />
        </div>
      </div>
      <div className="pointer-events-none absolute inset-x-[18%] bottom-0 top-[22%] z-[1] md:hidden">
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.14)_0%,_rgba(231,76,60,0)_70%)] blur-[72px]" />
        <Image
          src="/hero/ezgif-frame-007.png"
          alt=""
          fill
          aria-hidden="true"
          quality={65}
          className="object-contain object-center opacity-12"
          sizes="70vw"
        />
      </div>

      <div className="page-container relative z-10 flex min-h-[100vh] w-full items-center pb-16 pt-28">
        <div className="mx-auto flex w-full max-w-4xl flex-col items-center text-center">
          <div className="animate-fade-in-up" style={{ animationDelay: "0ms" }}>
            <span className="eyebrow-badge mb-6">
              Marketplace
            </span>
          </div>
          
          <h1 className="animate-fade-in-up mb-8 text-5xl font-bold leading-[1.05] tracking-[-0.03em] text-[#e8eaf0] sm:text-6xl md:text-[80px]" style={{ animationDelay: "100ms" }}>
            Find, test, and ship <br />
            AI agents from one platform
          </h1>
          
          <p className="animate-fade-in-up mb-12 max-w-3xl text-lg font-medium leading-[1.6] text-[#8a8fa8] md:text-xl" style={{ animationDelay: "200ms" }}>
            Browse production-ready agents, validate them in a live sandbox, and generate integration-ready SDKs. Publish your own agents with usage-based pricing and creator analytics.
          </p>
          
          <div className="animate-fade-in-up mb-16 flex flex-wrap items-center justify-center gap-4" style={{ animationDelay: "300ms" }}>
            <Link href="/agents" className={cn(buttonVariants({ variant: "default", size: "lg" }), "rounded-full px-8")}>
              Explore Agents
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
            <Link href="/publish" className={cn(buttonVariants({ variant: "outline", size: "lg" }), "rounded-full px-8")}>
              Publish an Agent
            </Link>
          </div>

          <div className="animate-fade-in-up flex flex-wrap items-center justify-center gap-4 font-mono text-xs uppercase tracking-[0.1em] text-[#8a8fa8]" style={{ animationDelay: "500ms" }}>
            <span>GitHub access</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span>Live sandbox</span>
            <span className="text-white/20 hidden sm:inline">•</span>
            <span>Generated SDKs</span>
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
