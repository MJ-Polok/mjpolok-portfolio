import { cn } from "../lib/utils";
import React from "react";
import type { ReactNode } from "react";

interface AuroraBackgroundProps extends React.HTMLProps<HTMLDivElement> {
    children: ReactNode;
    showRadialGradient?: boolean;
}

export const AuroraBackground = ({
    className,
    children,
    showRadialGradient = true,
    ...props
}: AuroraBackgroundProps) => {
    return (
        <div
            className={cn(
                "dark relative flex min-h-screen w-full flex-col bg-zinc-900 text-slate-50 transition-colors",
                className,
            )}
            {...props}
        >
            <div
                className="fixed inset-0 overflow-hidden"
                style={
                    {
                        "--aurora":
                            "repeating-linear-gradient(100deg,#3b82f6_10%,#a5b4fc_15%,#93c5fd_20%,#ddd6fe_25%,#60a5fa_30%)",
                        "--dark-gradient":
                            "repeating-linear-gradient(100deg,#000_0%,#000_7%,transparent_10%,transparent_12%,#000_16%)",
                        "--white-gradient":
                            "repeating-linear-gradient(100deg,#fff_0%,#fff_7%,transparent_10%,transparent_12%,#fff_16%)",
                        "--blue-300": "#93c5fd",
                        "--blue-400": "#60a5fa",
                        "--blue-500": "#3b82f6",
                        "--indigo-300": "#a5b4fc",
                        "--violet-200": "#ddd6fe",
                        "--black": "#000",
                        "--white": "#fff",
                        "--transparent": "transparent",
                    } as React.CSSProperties
                }
            >
                <div className="absolute inset-0 bg-slate-950/35 backdrop-blur-[2px]" />

                <div
                    className={cn(
                        "pointer-events-none absolute -inset-[10px] filter will-change-transform animate-aurora",
                        "opacity-30 blur-[6px]",
                        "md:opacity-50 md:blur-[10px]",
                        "invert dark:invert-0",
                        "[background-image:var(--dark-gradient),var(--aurora)]",
                        "[background-size:300%,_200%]",
                        "[background-position:50%_50%,50%_50%]",
                        "[--aurora:repeating-linear-gradient(100deg,var(--blue-500)_10%,var(--indigo-300)_15%,var(--blue-300)_20%,var(--violet-200)_25%,var(--blue-400)_30%)]",
                        "[--dark-gradient:repeating-linear-gradient(100deg,var(--black)_0%,var(--black)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--black)_16%)]",
                        "[--white-gradient:repeating-linear-gradient(100deg,var(--white)_0%,var(--white)_7%,var(--transparent)_10%,var(--transparent)_12%,var(--white)_16%)]",
                        "md:after:absolute md:after:inset-0 md:after:content-['']",
                        "md:after:[background-image:var(--dark-gradient),var(--aurora)]",
                        "md:after:[background-size:200%,_100%]",
                        "md:after:[background-attachment:fixed]",
                        "md:after:mix-blend-difference",
                        showRadialGradient &&
                        "[mask-image:radial-gradient(ellipse_at_100%_0%,black_10%,var(--transparent)_70%)]",
                    )}
                />
            </div>

            <div className="relative z-10 w-full">{children}</div>
        </div>
    );
};