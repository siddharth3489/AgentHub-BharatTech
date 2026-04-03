"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export function AgentHubNavbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 z-50 w-full transition-all duration-300 ${scrolled ? "border-b border-white/[0.08] bg-[linear-gradient(180deg,rgba(8,8,8,0.95),rgba(8,8,8,0.82))] shadow-[0_14px_40px_rgba(0,0,0,0.28)] backdrop-blur-[16px]" : "border-b border-transparent bg-transparent"}`}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-20 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 bg-[#080808] border border-white/20 rounded-sm flex items-center justify-center relative shadow-[0_4px_12px_rgba(0,0,0,0.5)]">
            <div className="absolute -top-px -right-px w-2 h-2 bg-[#e74c3c]"></div>
            <span className="text-white font-mono font-bold text-lg leading-none group-hover:text-[#e74c3c] transition-colors pb-[2px]">A</span>
          </div>
          <span className="font-bold text-lg tracking-[-0.02em] text-[#e8eaf0]">AgentHub</span>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-[14px] font-medium text-[#8a8fa8]">
          <Link href="/marketplace" className="hover:text-white transition-colors">Marketplace</Link>
          <Link href="/docs" className="hover:text-white transition-colors">Docs</Link>
          <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
          <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/login" className="hidden text-[14px] font-medium text-[#8a8fa8] transition-colors hover:text-white sm:block">Sign in with GitHub</Link>
          <Link href="/publish" className="text-[14px] font-medium bg-[#0f0f0f] border border-white/10 text-white px-4 py-2 rounded-[6px] hover:border-[#e74c3c]/50 hover:text-[#e74c3c] transition-all shadow-[0_0_15px_rgba(192,57,43,0)] hover:shadow-[0_0_15px_rgba(192,57,43,0.15)] flex items-center gap-2">
            Publish Agent
          </Link>
        </div>
      </div>
    </nav>
  );
}
