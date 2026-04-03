"use client";

import { useState } from "react";
import { ScanSearch, Github, FileJson, Briefcase, FileText } from "lucide-react";
import { Button } from "./ui/button";

export function ScanInput({ onAnalyze }: { onAnalyze: (input: string, type: string) => void }) {
  const [input, setInput] = useState("");
  const [type, setType] = useState<"github" | "notion" | "errorlog" | "jobdescription" | "plaintext">("plaintext");

  const detectType = (text: string) => {
    if (text.match(/github\.com\/[\w-]+\/[\w-]+/)) return "github";
    if (text.match(/notion\.so\//)) return "notion";
    if (text.match(/Error:|Exception|Traceback|at line/i)) return "errorlog";
    if (text.match(/hiring|position|requirements|responsibilities|qualifications/i)) return "jobdescription";
    return "plaintext";
  };

  const handleInput = (val: string) => {
    setInput(val);
    setType(detectType(val));
  };

  const typeConfig = {
    github: { icon: <Github className="h-4 w-4" />, label: "GitHub Repo detected", color: "text-[#e8eaf0]", bg: "bg-white/[0.06]", placeholder: "Paste a GitHub repo URL e.g. github.com/vercel/next.js" },
    notion: { icon: <FileText className="h-4 w-4" />, label: "Notion Doc detected", color: "text-[#e8eaf0]", bg: "bg-white/[0.06]", placeholder: "Paste a Notion link..." },
    errorlog: { icon: <FileJson className="h-4 w-4" />, label: "Error Log detected", color: "text-[#ff8c7e]", bg: "bg-[#e74c3c]/10", placeholder: "Paste your error log or stack trace..." },
    jobdescription: { icon: <Briefcase className="h-4 w-4" />, label: "Job Description detected", color: "text-[#ff8c7e]", bg: "bg-[#e74c3c]/10", placeholder: "Paste a job description..." },
    plaintext: { icon: <ScanSearch className="h-4 w-4" />, label: "Plain Text", color: "text-[#8a8fa8]", bg: "bg-white/[0.05]", placeholder: "Describe your project in plain English or paste URLs..." },
  };

  const config = typeConfig[type];

  return (
    <div className="mx-auto w-full max-w-4xl space-y-4">
      <div className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[linear-gradient(180deg,rgba(18,18,22,0.98),rgba(9,9,11,0.98))] p-3 shadow-[0_20px_55px_rgba(0,0,0,0.28)]">
        <textarea
          className="min-h-[200px] w-full resize-none rounded-[1.5rem] border border-white/8 bg-black/20 p-6 font-mono text-lg text-[#e8eaf0] outline-none transition-colors placeholder:text-[#8a8fa8]/65 focus:border-[#e74c3c]/55"
          placeholder={config.placeholder}
          value={input}
          onChange={(e) => handleInput(e.target.value)}
        />

        {input && (
          <div className={`absolute right-6 top-6 flex items-center gap-2 rounded-full border border-current/20 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider ${config.color} ${config.bg}`}>
            {config.icon}
            {config.label}
          </div>
        )}
      </div>

      <div className="flex justify-end">
        <Button
          size="lg"
          disabled={!input}
          onClick={() => onAnalyze(input, type)}
          className="flex h-12 items-center gap-2 rounded-xl bg-[#e74c3c] px-8 text-base font-semibold text-white hover:bg-[#ff5645]"
        >
          <ScanSearch className="h-5 w-5" />
          Analyze & Match Agents
        </Button>
      </div>
    </div>
  );
}
