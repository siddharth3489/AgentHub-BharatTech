export function SupplySide() {
  const steps = [
    "Define Agent",
    "Set Schema",
    "Configure Pricing",
    "Set Rate Limits",
    "Publish"
  ];

  const metrics = [
    { label: "Total API Calls", value: "1,240,882", trend: "+12.5%" },
    { label: "Total Earnings", value: "$2,481.76", trend: "+8.2%" },
    { label: "Cost Per Call", value: "$0.002", trend: "0.0%" },
    { label: "Active Integrations", value: "847", trend: "+24.1%" }
  ];

  return (
    <section className="w-full py-24 md:py-32 bg-[#080808]">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20">
        
        {/* Publishing Flow */}
        <div className="mb-32">
          <div className="mb-12">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#e8eaf0] mb-4">The Developer Protocol</h2>
             <p className="text-[#8a8fa8] text-lg max-w-2xl">A deterministic publishing pipeline. Wrap your model or API, define your I/O schema mathematically, and start monetizing instantly.</p>
          </div>
          
          <div className="glass-panel rounded-xl p-8 md:p-12 border border-white/5">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-[#141418] z-0">
                 <div className="h-full bg-gradient-to-r from-[#e74c3c] to-[#141418] w-1/2"></div>
              </div>
              
              {steps.map((step, i) => (
                <div key={step} className="flex flex-col items-center relative z-10 w-full md:w-auto">
                  <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-mono text-lg font-bold shadow-lg mb-4 transition-colors ${i < 2 ? "bg-[#e74c3c] text-white shadow-[0_0_20px_rgba(231,76,60,0.3)]" : "bg-[#141418] border border-white/10 text-[#8a8fa8]"}`}>
                    {i + 1}
                  </div>
                  <span className={`text-sm font-bold ${i < 2 ? "text-[#e8eaf0]" : "text-[#8a8fa8]"}`}>{step}</span>
                  {i < 2 && <div className="hidden md:block absolute -top-1 -right-1 w-3 h-3 rounded-full bg-white border-2 border-[#e74c3c]"></div>}
                  
                  {i !== steps.length - 1 && (
                     <div className="md:hidden w-[2px] h-8 bg-[#141418] my-2"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Dashboard */}
        <div>
          <div className="mb-12">
             <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-[#e8eaf0] mb-4">Earn While You Sleep</h2>
             <p className="text-[#8a8fa8] text-lg max-w-2xl">Per-call monetization creates a passive revenue stream for elite engineers. Track telemetry and payouts with zero abstraction.</p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass-panel rounded-xl p-6 border border-white/5 flex flex-col hover:-translate-y-1 transition-transform">
                <span className="text-xs uppercase tracking-wider font-mono text-[#8a8fa8] mb-4">{metric.label}</span>
                <span className="text-3xl font-bold tracking-tight text-[#e8eaf0] mb-2">{metric.value}</span>
                <div className="flex items-center text-xs font-mono font-medium text-[#4ade80]">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline><polyline points="17 6 23 6 23 12"></polyline></svg>
                  {metric.trend}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
