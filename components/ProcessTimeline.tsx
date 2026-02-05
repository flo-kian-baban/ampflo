import { cn } from "@/lib/cn";
import { Calendar, Camera, CheckCircle2, FileVideo, Rocket } from "lucide-react";

export default function ProcessTimeline() {
    const steps = [
        {
            title: "Kickoff Strategy Call & Meet",
            desc: "We align on your brand voice, target audience, and monthly goals.",
            icon: Rocket,
        },
        {
            title: "Two-Week Foundation Phase",
            desc: "We build your initial content vault without posting, ensuring we launch with momentum.",
            icon: CheckCircle2,
        },
        {
            title: "Monthly Content Day",
            desc: "One efficient shoot day to capture everything we need for the month.",
            icon: Camera,
        },
        {
            title: "Weekly Asset Delivery (Fridays)",
            desc: "Draft content delivered to your inbox every Friday, organized and ready for green light.",
            icon: FileVideo,
        },
        {
            title: "Monthly Review (Weekends)",
            desc: "Review drafts and request edits before the next week's rollout starts.",
            icon: Calendar,
        },
    ];

    return (
        <div className="relative max-w-3xl mx-auto">
            {/* Vertical Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-slate-200 md:left-1/2 md:-translate-x-1/2" />

            <div className="space-y-12">
                {steps.map((step, idx) => (
                    <div key={idx} className={cn("relative flex items-center md:justify-between group", idx % 2 === 0 ? "md:flex-row-reverse" : "")}>

                        {/* Icon/Dot */}
                        <div className="absolute left-8 -translate-x-1/2 md:left-1/2 md:-translate-x-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-white border-4 border-slate-100 shadow-sm z-10 group-hover:scale-110 transition-transform duration-300">
                            <step.icon className="w-6 h-6 text-blue-600" />
                        </div>

                        {/* Content Spacer for the other side on desktop */}
                        <div className="hidden md:block w-5/12" />

                        {/* Content Card */}
                        <div className="ml-24 md:ml-0 w-full md:w-5/12">
                            <div className={cn("p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 relative",
                                // Adding little arrow pointing to the dot
                                // Desktop arrow (hidden on mobile)
                                "md:before:content-[''] md:before:absolute md:before:top-1/2 md:before:-translate-y-1/2 md:before:w-4 md:before:h-4 md:before:bg-white md:before:rotate-45 md:before:border-l md:before:border-b md:before:border-slate-100",
                                idx % 2 === 0
                                    ? "md:before:-left-2 md:before:border-l md:before:border-b md:before:border-t-0 md:before:border-r-0"
                                    : "md:before:-right-2 md:before:border-r md:before:border-t md:before:border-l-0 md:before:border-b-0"
                            )}>
                                {/* Mobile arrow removed to prevent text overlap */}

                                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-wider text-blue-600 uppercase bg-blue-50 rounded-full">
                                    Step 0{idx + 1}
                                </span>
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>

                    </div>
                ))}
            </div>
        </div>
    );
}
