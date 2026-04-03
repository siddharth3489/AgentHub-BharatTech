import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "@/components/Providers";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AgentHubNavbar } from "@/components/agenthub/Navbar";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", weight: ["400", "500", "600", "700"] });
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });

export const metadata: Metadata = {
  title: "AgentHub | The Marketplace for AI Agents",
  description: "AgentHub is the marketplace layer for the agentic AI economy. Discover, test, and integrate elite AI agents into your products.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-[#080808] text-[#e8eaf0] min-h-screen flex flex-col font-sans selection:bg-[#c0392b]/40 selection:text-white`}>
        <Providers>
          <TooltipProvider>
            <AgentHubNavbar />
            <main className="flex-1">
              {children}
            </main>
            <Toaster theme="dark" position="bottom-right" />
          </TooltipProvider>
        </Providers>
      </body>
    </html>
  );
}
