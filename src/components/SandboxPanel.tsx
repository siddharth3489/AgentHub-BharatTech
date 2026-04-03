"use client";

import { useState } from "react";
import Editor from "@monaco-editor/react";
import { Agent } from "@/lib/types";
import { Button } from "@/components/ui/button";
import { Play, Loader2, AlertCircle, CheckCircle2 } from "lucide-react";

export const SandboxPanel = ({ agent }: { agent: Agent }) => {
  const defaultInput = agent.exampleInput ? JSON.stringify(agent.exampleInput, null, 2) : "{\n  \n}";
  const [inputCode, setInputCode] = useState(defaultInput);
  const [outputCode, setOutputCode] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [latency, setLatency] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [apiKey, setApiKey] = useState("");

  const handleRun = async () => {
    setIsLoading(true);
    setError(null);
    setLatency(null);
    setOutputCode("Running request...");

    try {
      const parsedInput = JSON.parse(inputCode);

      const res = await fetch(`/api/sandbox/${agent.id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: `Bearer ${apiKey}` },
        body: JSON.stringify(parsedInput),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data.error || "Execution failed");
      }

      setOutputCode(JSON.stringify(data.output, null, 2));
      setLatency(data.latencyMs);
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Execution failed";
      setError(message);
      setOutputCode(`Error: ${message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-[600px] flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,22,0.98),rgba(9,9,11,0.98))] shadow-[0_20px_55px_rgba(0,0,0,0.28)]">
      <div className="flex items-center justify-between border-b border-white/10 bg-black/20 px-4 py-3">
        <div className="flex items-center gap-4">
          <span className="text-sm font-bold text-[#e8eaf0]">Sandbox execution</span>
          {latency !== null && (
            <span className="flex items-center gap-1 rounded-md border border-[#4ade80]/20 bg-[#4ade80]/10 px-2 py-1 text-xs font-bold text-[#86efac]">
              <CheckCircle2 className="h-3 w-3" />
              {latency}ms
            </span>
          )}
          {error && (
            <span className="flex items-center gap-1 rounded-md bg-[#e74c3c]/10 px-2 py-1 text-xs text-[#ff8c7e]">
              <AlertCircle className="h-3 w-3" />
              Failed
            </span>
          )}
        </div>
        <div className="flex items-center gap-2">
          <input
            type="password"
            placeholder="AgentHub API key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="control-shell h-9 w-48 bg-white/[0.04] px-3 text-xs font-mono"
          />
          <Button size="sm" onClick={handleRun} disabled={isLoading || !apiKey} className="h-9 bg-[#e74c3c] px-4 text-xs font-bold text-white hover:bg-[#ff5645]">
            {isLoading ? <Loader2 className="mr-2 h-3.5 w-3.5 animate-spin" /> : <Play className="mr-2 h-3.5 w-3.5" />}
            Run request
          </Button>
        </div>
      </div>

      <div className="grid flex-1 grid-cols-2 divide-x divide-white/10">
        <div className="relative flex h-full flex-col">
          <div className="border-b border-white/10 bg-black/20 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#8a8fa8]">
            Request payload
          </div>
          <div className="relative flex-1 overflow-hidden bg-[#050505]">
            <Editor
              height="100%"
              defaultLanguage="json"
              theme="vs-dark"
              value={inputCode}
              onChange={(v) => setInputCode(v || "")}
              options={{
                minimap: { enabled: false },
                fontSize: 13,
                formatOnPaste: true,
                scrollBeyondLastLine: false,
                padding: { top: 16 },
              }}
            />
          </div>
        </div>

        <div className="relative flex h-full flex-col">
          <div className="border-b border-white/10 bg-black/20 px-4 py-2 text-[10px] font-bold uppercase tracking-widest text-[#8a8fa8]">
            Response payload
          </div>
          <div className="relative flex-1 overflow-hidden bg-[#050505]">
            <Editor
              height="100%"
              defaultLanguage="json"
              theme="vs-dark"
              value={outputCode}
              options={{
                readOnly: true,
                minimap: { enabled: false },
                fontSize: 13,
                scrollBeyondLastLine: false,
                padding: { top: 16 },
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
