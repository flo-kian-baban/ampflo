"use client";

import { cn } from "@/lib/cn";
import { Check, Loader2, Send }
    from "lucide-react";
import { FormEvent, useState } from "react";

export default function BookForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate API call
        setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
            // Reset after a while if wanted, but success state usually sticks for landing pages
        }, 1500);
    };

    if (isSuccess) {
        return (
            <div className="w-full h-full min-h-[400px] flex flex-col items-center justify-center text-center p-8 bg-green-50 rounded-2xl border border-green-100 animate-in fade-in zoom-in duration-500">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-6 shadow-sm">
                    <Check className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Request Received</h3>
                <p className="text-slate-600 max-w-xs mx-auto">
                    We&apos;ll be in touch shortly to schedule your strategy call.
                </p>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-slate-700">Full Name</label>
                    <input
                        required
                        type="text"
                        id="name"
                        placeholder="Dr. John Doe"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-slate-700">Email Address</label>
                    <input
                        required
                        type="email"
                        id="email"
                        placeholder="john@clinic.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                    <label htmlFor="clinic" className="text-sm font-medium text-slate-700">Clinic Name</label>
                    <input
                        required
                        type="text"
                        id="clinic"
                        placeholder="Bright Smile Dental"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-slate-700">Phone Number</label>
                    <input
                        required
                        type="tel"
                        id="phone"
                        placeholder="(555) 123-4567"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none"
                    />
                </div>
            </div>

            <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-700">Message (Optional)</label>
                <textarea
                    id="message"
                    rows={3}
                    placeholder="Tell us about your current content efforts..."
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 focus:bg-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all outline-none resize-none"
                ></textarea>
            </div>



            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-6 rounded-xl transition-all shadow-lg shadow-blue-500/20 active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
            >
                {isSubmitting ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending Request...
                    </>
                ) : (
                    <>
                        Book Strategy Call
                        <Send className="w-4 h-4" />
                    </>
                )}
            </button>

            <p className="text-center text-xs text-slate-400 mt-4">
                Zero commitment. 100% clarity on your next steps.
            </p>
        </form>
    );
}
