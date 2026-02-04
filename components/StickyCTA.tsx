"use client";

import { cn } from "@/lib/cn";
import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function StickyCTA() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show after scrolling down 300px
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Desktop Sticky Sidebar (Right Side) - Visible even before scroll mostly, but let's make it fixed contextually or just bottom right fixed */}
            {/* The requirement says "sticky header + sticky CTA (desktop), bottom sticky CTA (mobile)"  */}
            {/* For desktop, interpretation: A card that sticks or is fixed. A fixed floating card is usually clearer. */}

            <div
                className={cn(
                    "fixed bottom-6 right-6 z-40 hidden lg:flex flex-col gap-3 p-5 bg-white/95 backdrop-blur-sm border border-slate-200 shadow-xl rounded-2xl w-80 transition-all duration-500 transform",
                    isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0 pointer-events-none"
                )}
            >
                <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-50 rounded-lg shrink-0">
                        <Calendar className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-900 leading-tight">Ready to verify?</h4>
                        <p className="text-xs text-slate-500 mt-1">Book your strategy call to clarify your content engine.</p>
                    </div>
                </div>
                <Link
                    href="#book"
                    className="mt-2 w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium py-2.5 px-4 rounded-xl transition-all"
                >
                    Book Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
            </div>

            {/* Mobile Sticky Bottom Bar */}
            <div
                className={cn(
                    "fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-slate-200 p-4 lg:hidden shadow-[0_-5px_20px_-5px_rgba(0,0,0,0.1)] transition-transform duration-300",
                    isVisible ? "translate-y-0" : "translate-y-full"
                )}
            >
                <div className="flex items-center gap-4 max-w-md mx-auto">
                    <div className="flex-1">
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wide">Next Step</p>
                        <p className="text-sm font-bold text-slate-900">Let&apos;s build your engine</p>
                    </div>
                    <Link
                        href="#book"
                        className="shrink-0 bg-blue-600 text-white font-semibold py-2 px-6 rounded-full text-sm shadow-lg shadow-blue-500/20 active:scale-95 transition-transform"
                    >
                        Book Call
                    </Link>
                </div>
            </div>
        </>
    );
}
