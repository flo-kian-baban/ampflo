"use client";

import { cn } from "@/lib/cn";
import { Play } from "lucide-react";
import { useState } from "react";

interface VideoEmbedProps {
    title: string;
    placeholderText?: string;
    src?: string;
    className?: string;
    isVertical?: boolean;
}

export default function VideoEmbed({ title, placeholderText, src = "", className, isVertical = false }: VideoEmbedProps) {
    // Helper to get embed URL from various YouTube formats
    const getEmbedUrl = (url: string) => {
        if (!url) return "";

        try {
            // Already an embed URL
            if (url.includes("/embed/")) return url;

            let videoId = "";

            // Handle Shorts: youtube.com/shorts/ID
            if (url.includes("shorts/")) {
                videoId = url.split("shorts/")[1]?.split("?")[0];
            }
            // Handle Watch: youtube.com/watch?v=ID
            else if (url.includes("v=")) {
                videoId = url.split("v=")[1]?.split("&")[0];
            }
            // Handle Shortened: youtu.be/ID
            else if (url.includes("youtu.be/")) {
                videoId = url.split("youtu.be/")[1]?.split("?")[0];
            }

            if (videoId) {
                return `https://www.youtube.com/embed/${videoId}`;
            }

            return url;
        } catch (e) {
            return url;
        }
    };

    const finalSrc = getEmbedUrl(src);

    return (
        <div className={cn("group relative w-full overflow-hidden rounded-2xl bg-gray-100 shadow-sm ring-1 ring-gray-900/5", isVertical ? "aspect-[9/16] max-w-[320px] mx-auto" : "aspect-video", className)}>
            {/* If src is present (later), showing the iframe. For now it is empty so it might show nothing or browser default. */}
            {/* To allow user to paste link later, we ensure the iframe is here. */}
            <iframe
                data-video={title}
                src={finalSrc}
                title={title}
                className="absolute inset-0 w-full h-full object-cover z-10"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
            />

            {/* Decorative Placeholder / Fallback when SRC is empty or loading */}
            {(!src || src === "") && (
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-50 text-slate-400 z-0 pointer-events-none">
                    <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center mb-4">
                        <Play className="w-6 h-6 ml-1 text-slate-300" />
                    </div>
                    <p className="font-medium text-sm">{placeholderText || title}</p>
                    <p className="text-xs text-slate-300 mt-1 uppercase tracking-wider">Video Placeholder</p>
                </div>
            )}
        </div>
    );
}
