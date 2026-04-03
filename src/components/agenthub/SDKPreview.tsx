"use client";

import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";

const tabs = ["Node.js", "Python", "cURL"] as const;

const snippets: Record<(typeof tabs)[number], string> = {
  "Node.js": `import { AgentHub } from "@agenthub/client";

const client = new AgentHub({
  apiKey: process.env.AGENTHUB_KEY,
});

const response = await client.agents.run("docextract-pro", {
  file_url: "https://example.com/invoice.pdf",
  schema: {
    invoice_id: "string",
    amount: "float",
  },
});

console.log(response.data.amount);`,
  Python: `from agenthub import AgentHub

client = AgentHub(api_key=os.environ["AGENTHUB_KEY"])

response = client.agents.run(
    "docextract-pro",
    {
        "file_url": "https://example.com/invoice.pdf",
        "schema": {
            "invoice_id": "string",
            "amount": "float",
        },
    },
)

print(response["data"]["amount"])`,
  cURL: `curl https://api.agenthub.dev/v1/agents/docextract-pro/run \\
  -H "Authorization: Bearer $AGENTHUB_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "file_url": "https://example.com/invoice.pdf",
    "schema": {
      "invoice_id": "string",
      "amount": "float"
    }
  }'`,
};

export function SDKPreview() {
  const [activeTab, setActiveTab] = useState<(typeof tabs)[number]>("Node.js");

  const handleCopy = async () => {
    await navigator.clipboard.writeText(snippets[activeTab]);
    toast.success(`${activeTab} snippet copied`);
  };

  return (
    <section className="w-full border-y border-white/[0.02] bg-[#141418]/30 py-24 md:py-32">
      <div className="mx-auto max-w-[1280px] px-6 md:px-12 lg:px-20">
        <div className="flex flex-col items-center gap-16 lg:flex-row-reverse">
          <div className="max-w-xl flex-1">
            <h2 className="mb-6 text-3xl font-bold tracking-tight text-[#e8eaf0] md:text-4xl">Native SDK Generation</h2>
            <p className="mb-8 text-lg leading-relaxed text-[#8a8fa8]">
              Stop manually parsing REST endpoints. AgentHub automatically generates type-safe, validated SDK snippets matching the exact schema of the agent you choose.
            </p>
            <Link href="/docs" className="flex w-fit items-center gap-2 rounded-md border border-white/10 bg-[#141418] px-6 py-3 text-sm font-medium text-[#e8eaf0] transition-colors hover:border-white/30">
              View Documentation
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Link>
          </div>

          <div className="w-full flex-1">
            <div className="overflow-hidden rounded-xl border border-white/10 bg-[#080808] shadow-[0_12px_40px_rgba(0,0,0,0.3)]">
              <div className="flex items-center border-b border-white/[0.04] bg-[#1a1a1f] px-4">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    type="button"
                    onClick={() => setActiveTab(tab)}
                    className={`border-b-2 px-4 py-3 text-xs font-mono font-medium transition-colors ${activeTab === tab ? "border-[#c0392b] text-[#e8eaf0]" : "border-transparent text-[#8a8fa8] hover:text-[#e8eaf0]"}`}
                  >
                    {tab}
                  </button>
                ))}
                <button type="button" onClick={handleCopy} className="ml-auto flex items-center gap-2 text-[#8a8fa8] transition-colors hover:text-[#e8eaf0]">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path></svg>
                  <span className="text-[10px] font-mono uppercase tracking-wider">Copy</span>
                </button>
              </div>

              <div className="overflow-x-auto bg-[#0c0c0e] p-6">
                <pre className="font-mono text-sm leading-[1.6] text-[#d4d7e2]">{snippets[activeTab]}</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
