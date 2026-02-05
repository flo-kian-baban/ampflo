import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { Menu } from "lucide-react";
import StickyCTA from "@/components/StickyCTA";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AMPFlo, A Content Engine for Dentists",
  description: "Clarity, Consistency, Credibility. The premier video content engine for dental practices.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>

        {/* Sticky Header */}
        <header className="fixed top-0 left-0 right-0 h-20 bg-white/90 backdrop-blur-md border-b border-slate-100 z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
            {/* Logo */}
            {/* Logo */}
            <div className="flex items-center gap-2">
              <img
                src="/ampflologo.png"
                alt="AMP Flo"
                className="h-12 w-auto object-contain"
              />
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <Link href="#portfolio" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Portfolio</Link>
              <Link href="#packages" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Packages</Link>
              <Link href="#process" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">Process</Link>
              <Link href="#faq" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">FAQ</Link>
            </nav>

            {/* CTA */}
            <div className="hidden md:block">
              <Link
                href="#book"
                className="bg-blue-600 text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-500/20"
              >
                Book Strategy Call
              </Link>
            </div>

            {/* Mobile Menu Icon (Placeholder for functionality) */}
            <button className="md:hidden p-2 text-slate-600">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </header>

        {/* Global Floating CTA */}
        <StickyCTA />

        <main className="pt-20 min-h-screen">
          {children}
        </main>

        <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div>
              <h3 className="text-white font-bold text-lg mb-2">AMPFlo</h3>
              <p className="text-sm">Your Content Engine Extension.</p>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-xs text-slate-600">
              © {new Date().getFullYear()} AMPFlo. All rights reserved.
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
