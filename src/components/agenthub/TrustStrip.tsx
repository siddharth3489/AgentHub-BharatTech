export function TrustStrip() {
  return (
    <section className="w-full border-y border-white/[0.04] bg-[#141418]/30 mt-24">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 py-10">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 gap-x-6">
          {[
            { label: "GitHub OAuth", sub: "Verified Developers" },
            { label: "Live Sandbox", sub: "Instant Execution" },
            { label: "Auto-generated", sub: "Native SDKs" },
            { label: "Per-Call", sub: "Monetization" },
            { label: "Enterprise", sub: "Ready API" },
          ].map((item, i, arr) => (
             <div key={item.label} className="flex items-center justify-center relative col-span-1">
               <div className="text-center">
                 <div className="text-[#e8eaf0] font-semibold text-sm tracking-tight mb-[2px]">{item.label}</div>
                 <div className="text-[#8a8fa8] text-[13px]">{item.sub}</div>
               </div>
               {i !== arr.length - 1 && (
                 <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 w-px h-8 bg-white/[0.06]"></div>
               )}
             </div>
          ))}
        </div>
      </div>
    </section>
  );
}
