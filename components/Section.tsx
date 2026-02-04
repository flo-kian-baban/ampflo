import { cn } from "@/lib/cn";
import { ReactNode } from "react";

interface SectionProps {
    id?: string;
    className?: string;
    children: ReactNode;
    fullWidth?: boolean;
}

export default function Section({ id, className, children, fullWidth = false }: SectionProps) {
    return (
        <section id={id} className={cn("py-16 md:py-24 relative", className)}>
            <div className={cn("mx-auto px-4 sm:px-6 lg:px-8", !fullWidth && "max-w-7xl")}>
                {children}
            </div>
        </section>
    );
}
