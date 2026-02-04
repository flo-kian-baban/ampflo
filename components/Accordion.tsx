"use client";

import { cn } from "@/lib/cn";
import { ChevronDown } from "lucide-react";
import { ReactNode, useState } from "react";

interface AccordionItemProps {
    title: string;
    subtitle?: string;
    children: ReactNode;
    defaultOpen?: boolean;
}

export default function AccordionItem({ title, subtitle, children, defaultOpen = false }: AccordionItemProps) {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className="border border-slate-200 rounded-xl overflow-hidden mb-4 bg-white shadow-sm transition-all duration-200 hover:shadow-md hover:border-slate-300">
            <button
                type="button"
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-6 text-left bg-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-slate-200"
                aria-expanded={isOpen}
            >
                <div>
                    <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                    {subtitle && <p className="text-sm text-slate-500 mt-1">{subtitle}</p>}
                </div>
                <ChevronDown
                    className={cn("w-5 h-5 text-slate-400 transition-transform duration-200", isOpen && "transform rotate-180")}
                />
            </button>

            <div
                className={cn(
                    "bg-slate-50/50 border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
                )}
            >
                <div className="p-6 pt-4 text-slate-600">
                    {children}
                </div>
            </div>
        </div>
    );
}
