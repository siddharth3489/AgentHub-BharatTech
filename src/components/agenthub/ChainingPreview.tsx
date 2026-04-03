export function ChainingPreview() {
  return (
    <section className="section-shell lux-border w-full overflow-hidden py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute left-1/2 top-16 h-56 w-[34rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.16)_0%,_rgba(231,76,60,0)_72%)] blur-3xl" />
      <div className="mx-auto flex max-w-[1280px] flex-col items-center px-6 text-center md:px-12 lg:px-20">
        
        <span className="font-mono text-[#8a8fa8] text-xs uppercase tracking-[0.15em] mb-6 block border border-white/10 px-3 py-1 bg-white/[0.02]">
          [ PHASE 2 — IN DEVELOPMENT ]
        </span>
        
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-[#e8eaf0] mb-6 max-w-3xl">Agent Chaining Studio</h2>
        <p className="text-[#8a8fa8] text-lg max-w-2xl mb-16">
          Visually pipe the output of one agent into the input schema of another. Compose complex, autonomous workflows natively in the browser.
        </p>

        <div className="glass-panel relative flex min-h-[400px] w-full max-w-5xl items-center justify-center rounded-[2rem] border border-white/10 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.6)] md:p-16">
          {/* Grid Background */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:32px_32px]"></div>

          <div className="relative z-10 w-full flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
             
             {/* Node 1 */}
             <div className="w-[200px] bg-[#141418] border border-[#e74c3c]/30 rounded-lg p-4 shadow-[0_0_30px_rgba(231,76,60,0.15)] relative">
               <div className="text-[10px] font-mono text-[#e74c3c] uppercase tracking-wider mb-2">Web Scraper</div>
               <div className="text-sm font-bold text-[#e8eaf0] mb-3">Extract URL Data</div>
               <div className="p-2 bg-[#080808] rounded border border-white/5 text-[10px] font-mono text-[#8a8fa8]">
                 OUT: {"{ raw_html: string }"}
               </div>
               {/* Right Hook */}
               <div className="hidden md:block absolute top-[50%] right-[-10px] w-3 h-3 bg-[#080808] border border-white/20 rounded-full translate-y-[-50%] z-20"></div>
             </div>

             {/* Connection Line 1 */}
             <div className="relative hidden h-[2px] flex-1 bg-gradient-to-r from-[#e74c3c]/50 to-white/10 md:block">
               <div className="animate-data-flow absolute inset-y-0 h-full w-24 bg-gradient-to-r from-transparent via-[#ff8c7e] to-transparent opacity-90" />
               <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 bg-[#080808] border border-white/10 text-[9px] font-mono text-[#8a8fa8] px-2 py-0.5 rounded">
                 MAP
               </div>
             </div>

             {/* Node 2 */}
             <div className="w-[200px] bg-[#141418] border border-white/10 rounded-lg p-4 relative hover:border-white/30 transition-colors">
               <div className="mb-2 text-[10px] font-mono uppercase tracking-wider text-[#ff8c7e]">NLP AI</div>
               <div className="text-sm font-bold text-[#e8eaf0] mb-3">Summarize Text</div>
               <div className="p-2 bg-[#080808] rounded border border-white/5 text-[10px] font-mono text-[#8a8fa8]">
                 IN: {"{ raw_text: string }"}
               </div>
               {/* Left/Right Hooks */}
               <div className="hidden md:block absolute top-[50%] left-[-10px] w-3 h-3 bg-[#e74c3c] rounded-full translate-y-[-50%] shadow-[0_0_10px_rgba(231,76,60,0.5)] z-20"></div>
               <div className="hidden md:block absolute top-[50%] right-[-10px] w-3 h-3 bg-[#080808] border border-white/20 rounded-full translate-y-[-50%] z-20"></div>
             </div>

             {/* Connection Line 2 */}
             <div className="relative hidden h-[2px] flex-1 bg-white/10 md:block">
               <div className="animate-data-flow absolute inset-y-0 h-full w-24 bg-gradient-to-r from-transparent via-white/55 to-transparent opacity-80" />
             </div>

             {/* Node 3 */}
             <div className="w-[200px] bg-[#141418] border border-white/10 rounded-lg p-4 relative hover:border-white/30 transition-colors">
               <div className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider mb-2">Integration</div>
               <div className="text-sm font-bold text-[#e8eaf0] mb-3">Post to Slack</div>
               <div className="p-2 bg-[#080808] rounded border border-white/5 text-[10px] font-mono text-[#8a8fa8]">
                 IN: {"{ message: string }"}
               </div>
               {/* Left Hook */}
               <div className="hidden md:block absolute top-[50%] left-[-10px] w-3 h-3 bg-[#080808] border border-white/20 rounded-full translate-y-[-50%] z-20"></div>
             </div>

          </div>
        </div>

      </div>
    </section>
  );
}
