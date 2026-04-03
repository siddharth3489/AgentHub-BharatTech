export function SupplySide() {
  const steps = [
    "Describe Agent",
    "Define Schemas",
    "Set Pricing",
    "Configure Limits",
    "Publish"
  ];

  const metrics = [
    { label: "Pricing", value: "Usage-based", trend: "Per request" },
    { label: "Schemas", value: "Structured", trend: "JSON contracts" },
    { label: "Access", value: "GitHub", trend: "Creator identity" },
    { label: "Monitoring", value: "Tracked", trend: "Usage and revenue" }
  ];

  return (
    <section className="section-shell w-full py-24 md:py-32">
      <div aria-hidden="true" className="pointer-events-none absolute left-[10%] top-[18%] h-60 w-60 rounded-full bg-[radial-gradient(circle,_rgba(231,76,60,0.13)_0%,_rgba(231,76,60,0)_72%)] blur-3xl" />
      <div className="page-container">
        {/* Publishing Flow */}
        <div className="mb-32">
          <div className="mb-12">
             <span className="section-badge mb-6">Creator Workflow</span>
             <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e8eaf0] md:text-4xl">Publish an agent with a clear technical contract</h2>
             <p className="max-w-2xl text-lg text-[#8a8fa8]">Define how the agent behaves, document the input and output schema, and list it with pricing that fits your API economics.</p>
          </div>
          
          <div className="glass-panel rounded-[2rem] border border-white/5 p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0 relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute left-[10%] right-[10%] top-[28px] z-0 h-[2px] overflow-hidden bg-[#141418]">
                 <div className="animate-data-flow absolute inset-y-0 w-1/2 bg-gradient-to-r from-transparent via-[#ff8c7e] to-transparent opacity-80" />
                 <div className="h-full w-1/2 bg-gradient-to-r from-[#e74c3c] to-[#141418]"></div>
              </div>
              
              {steps.map((step, i) => (
                <div key={step} className="flex flex-col items-center relative z-10 w-full md:w-auto">
                  <div className={`mb-4 flex h-14 w-14 items-center justify-center rounded-xl font-mono text-lg font-bold shadow-lg transition-colors ${i < 2 ? "bg-[#e74c3c] text-white shadow-[0_0_20px_rgba(231,76,60,0.3)]" : "bg-[#141418] border border-white/10 text-[#8a8fa8]"}`}>
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
             <h2 className="mb-4 text-3xl font-bold tracking-tight text-[#e8eaf0] md:text-4xl">Creator operations at a glance</h2>
             <p className="max-w-2xl text-lg text-[#8a8fa8]">Track pricing, usage, and account configuration with the same product language used across the marketplace and dashboard.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="glass-panel flex flex-col rounded-[1.6rem] border border-white/5 p-6 transition-transform hover:-translate-y-1">
                <span className="mb-4 font-mono text-xs uppercase tracking-wider text-[#8a8fa8]">{metric.label}</span>
                <span className="mb-2 text-3xl font-bold tracking-tight text-[#e8eaf0]">{metric.value}</span>
                <div className="flex items-center text-xs font-mono font-medium text-[#ff8c7e]">
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
