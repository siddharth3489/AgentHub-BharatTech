export function TrustStrip() {
  return (
    <section className="relative mt-24 w-full py-6">
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-[12%] top-1/2 h-28 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.16)_0%,_rgba(231,76,60,0)_72%)] blur-3xl" />
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="glass-panel rounded-[2rem] border border-white/[0.08] px-6 py-6 md:px-8 md:py-8">
          <div className="grid grid-cols-2 gap-x-4 gap-y-4 md:grid-cols-5">
          {[
            { label: "GitHub OAuth", sub: "Verified Developers" },
            { label: "Live Sandbox", sub: "Instant Execution" },
            { label: "Auto-generated", sub: "Native SDKs" },
            { label: "Per-Call", sub: "Monetization" },
            { label: "Enterprise", sub: "Ready API" },
          ].map((item, i, arr) => (
             <div key={item.label} className="group relative col-span-1 flex items-center justify-center">
               <div className="w-full rounded-[1.4rem] border border-white/[0.05] bg-white/[0.02] px-4 py-5 text-center transition-all duration-300 group-hover:-translate-y-1 group-hover:border-[#e74c3c]/25 group-hover:bg-white/[0.05]">
                 <div className="mb-3 flex items-center justify-center gap-2">
                   <span className="h-2 w-2 rounded-full bg-[#ff8c7e]" />
                   <span className="font-mono text-[10px] uppercase tracking-[0.32em] text-white/35">Live</span>
                 </div>
                 <div className="mb-[2px] text-sm font-semibold tracking-tight text-[#e8eaf0]">{item.label}</div>
                 <div className="text-[13px] text-[#8a8fa8]">{item.sub}</div>
               </div>
               {i !== arr.length - 1 && (
                 <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-px h-8 bg-white/[0.06]"></div>
               )}
             </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  );
}
