export function HowItWorks() {
  const steps = [
    {
      num: "01",
      title: "Discover & Filter",
      desc: "Search the marketplace by capability, programming language, input/output schemas, and cost. Find exactly what fits your architecture."
    },
    {
      num: "02",
      title: "Test Live in Sandbox",
      desc: "Run live inference requests directly in the browser sandbox. Inspect raw JSON outputs and benchmark latency before committing."
    },
    {
      num: "03",
      title: "Integrate Instantly",
      desc: "Copy auto-generated SDK snippets in Python, Node.js, or cURL. Go live in your production codebase in minutes."
    }
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-[#080808] border-y border-white/[0.02]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        
        <div className="mb-20">
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#e8eaf0] mb-6">How it works</h2>
          <p className="text-[#8a8fa8] text-lg max-w-2xl leading-relaxed">A streamlined workflow from discovery to production. No opaque pricing, no complex sales calls. Pure infrastructure.</p>
        </div>

        <div className="flex flex-col gap-12 md:gap-24">
          {steps.map((step, i) => (
            <div key={step.num} className="relative flex items-center md:items-start max-w-4xl group">
               {/* Huge Background Number */}
               <div className="absolute -left-4 -top-8 md:-left-8 md:-top-16 text-[100px] md:text-[160px] font-mono font-bold text-white opacity-[0.02] group-hover:opacity-[0.04] transition-opacity leading-none select-none pointer-events-none z-0">
                 {step.num}
               </div>
               
               <div className="relative z-10 flex gap-6 md:gap-10">
                 <div className="hidden md:flex flex-col items-center mt-2">
                   <div className="w-12 h-12 rounded bg-[#141418] border border-white/10 flex items-center justify-center font-mono text-[#e74c3c] font-bold text-lg">
                     {step.num}
                   </div>
                   {i !== steps.length - 1 && (
                     <div className="w-px h-24 bg-gradient-to-b from-white/10 to-transparent mt-4"></div>
                   )}
                 </div>
                 
                 <div>
                   <h3 className="text-2xl md:text-3xl font-bold text-[#e8eaf0] tracking-tight mb-4 group-hover:text-[#e74c3c] transition-colors">{step.title}</h3>
                   <p className="text-[#8a8fa8] text-base md:text-lg leading-relaxed max-w-xl">{step.desc}</p>
                 </div>
               </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
