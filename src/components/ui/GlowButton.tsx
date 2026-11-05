import type { ButtonHTMLAttributes } from "react";

interface GlowButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
}

export function GlowButton({ children, className = "", ...props }: GlowButtonProps) {
    return (
        <button
            className={`relative inline-flex items-center gap-2 px-8 py-4 overflow-hidden rounded-lg group shadow-primary ${className}`}
            {...props}
        >
            {/* Animated gradient border */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-40 group-hover:opacity-100 transition-opacity duration-300"></div>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 bg-linear-to-r from-blue-500 via-purple-500 to-pink-500 rounded-lg opacity-0 group-hover:opacity-75 blur-xl transition-all duration-300 group-hover:blur-2xl"></div>

            {/* Inner background */}
            <div className="absolute inset-0.5 bg-black/75 dark:bg-black shadow-inner group rounded-lg"></div>

            {/* Content */}
            <span className="relative z-10 flex items-center gap-2 bg-linear-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:via-purple-300 group-hover:to-pink-300 transition-all duration-300">
                {children}
            </span>
        </button>
    );
}
