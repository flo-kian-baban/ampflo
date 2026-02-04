"use client";

import { cn } from "@/lib/cn";
import { Check, Info } from "lucide-react";
import { useState } from "react";

export default function Pricing() {
    const [isAmpPricing, setIsAmpPricing] = useState(false);

    const tiers = [
        {
            name: "Launch",
            desc: "Just Content Creation",
            price: 800,
            ampPrice: 700,
            features: [
                "4 Short-Form Videos",
                "Limited Visual Assets",
                "Meta Ads Consultation",
                "1 Monthly Video Shoot",
            ],
            highlight: false,
        },
        {
            name: "Hands-Free",
            desc: "Social Media Management",
            price: 1200,
            ampPrice: 1100,
            features: [
                "Social Media Management",
                "8 Short-Form Videos",
                "4 Visual Assets",
                "1 Marketing Campaign",
                "Monthly Strategy Call",
                "Monthly Stats Report",
                "2 Monthly Video Shoots",
            ],
            highlight: true, // Most popular usually
        },
        {
            name: "Full-House",
            desc: "Online Presence Management",
            price: 1800,
            ampPrice: 1700,
            features: [
                "Full Online Presence Mgmt",
                "12 Short-Form Videos",
                "Unlimited Visual Assets",
                "Full Campaign Ops",
                "LinkedIn Setup & Consult",
                "YouTube Setup & 2 Videos",
                "Monthly Strategy & Stats",
                "3 Monthly Video Shoots",
            ],
            highlight: false,
        },
    ];

    return (
        <div className="w-full">
            {/* Toggle Control */}
            <div className="flex flex-col items-center justify-center mb-12">
                <span className="text-sm font-semibold text-slate-500 mb-3 tracking-wide uppercase">Unlock Partner Rates</span>
                <button
                    onClick={() => setIsAmpPricing(!isAmpPricing)}
                    className={cn(
                        "relative inline-flex h-12 w-64 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
                        isAmpPricing ? "bg-blue-600" : "bg-slate-200"
                    )}
                >
                    <span className="absolute left-4 text-xs font-bold text-slate-500 z-10 transition-opacity duration-200" style={{ opacity: isAmpPricing ? 0 : 1 }}>Standard</span>
                    <span className="absolute right-4 text-xs font-bold text-white z-10 transition-opacity duration-200" style={{ opacity: isAmpPricing ? 1 : 0 }}>AMP Pricing</span>

                    <span
                        className={cn(
                            "inline-block h-10 w-32 transform rounded-full bg-white shadow transition duration-300 ease-in-out flex items-center justify-center",
                            isAmpPricing ? "translate-x-[7.5rem]" : "translate-x-1"
                        )}
                    >
                        <span className="text-xs font-bold text-slate-900">
                            {isAmpPricing ? "Active" : "Inactive"}
                        </span>
                    </span>
                </button>
                {isAmpPricing && (
                    <p className="mt-4 text-sm text-blue-600 font-medium animate-in fade-in slide-in-from-top-2">
                        $100/mo Discount Applied!
                    </p>
                )}
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
                {tiers.map((tier) => (
                    <div
                        key={tier.name}
                        className={cn(
                            "relative bg-white rounded-2xl border p-8 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col h-full",
                            tier.highlight ? "border-blue-500 ring-4 ring-blue-500/10 z-10 shadow-lg" : "border-slate-200"
                        )}
                    >
                        {tier.highlight && (
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-md">
                                Recommended
                            </div>
                        )}

                        <div className="mb-6">
                            <h3 className="text-xl font-bold text-slate-900">{tier.name}</h3>
                            <p className="text-sm text-slate-500 mt-1 font-medium">{tier.desc}</p>
                        </div>

                        <div className="mb-8 flex items-baseline">
                            <span className="text-4xl font-extrabold text-slate-900">
                                ${isAmpPricing ? tier.ampPrice : tier.price}
                            </span>
                            <span className="text-slate-500 font-medium ml-2">/month</span>
                        </div>

                        <ul className="space-y-4 mb-8 flex-1">
                            {tier.features.map((feature, i) => (
                                <li key={i} className="flex items-start text-sm">
                                    <Check className="w-5 h-5 text-blue-500 shrink-0 mr-3" />
                                    <span className="text-slate-700 leading-tight">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <a
                            href="#book"
                            className={cn(
                                "w-full block text-center py-3 rounded-xl font-semibold transition-colors",
                                tier.highlight
                                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-500/20"
                                    : "bg-slate-100 text-slate-900 hover:bg-slate-200"
                            )}
                        >
                            Get Started
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}
