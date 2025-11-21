import { useEffect, useState } from "react";
import svgPathsDark from "../imports/svg-e2bxrl9g0y";
import svgPathsLight from "../imports/svg-f1e7kdkaai";

function DarkMode() {
    return (
        <div className="absolute h-full left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%] w-full" data-name="dark">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 81 72">
                <g id="dark">
                    <path d={svgPathsDark.p28fe5680} fill="url(#paint0_linear_43_224)" id="Ellipse 19" />
                    <path d={svgPathsDark.p4201100} fill="var(--fill-0, #FCFCFC)" id="Star 1" />
                    <path d={svgPathsDark.p35698340} fill="var(--fill-0, #FCFCFC)" id="Star 3" />
                    <path d={svgPathsDark.p161eb2f0} fill="var(--fill-0, #FCFCFC)" id="Star 4" />
                    <path d={svgPathsDark.p2a4f7f32} fill="var(--fill-0, #FCFCFC)" id="Star 5" />
                </g>
                <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_43_224" x1="35.3519" x2="55.0831" y1="24.8745" y2="53.6116">
                        <stop stopColor="#FCFCFC" />
                        <stop offset="1" stopColor="#3D3D3D" />
                    </linearGradient>
                </defs>
            </svg>
        </div>
    );
}

function LightMode() {
    return (
        <div className="absolute h-full left-[-2.22px] top-[-2.22px] w-full" data-name="light">
            <div className="absolute bottom-[-18.18%] left-[-11.76%] right-[-23.67%] top-0">
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 103 87">
                    <g id="light">
                        <path d={svgPathsLight.p227c8680} fill="url(#paint0_linear_43_164)" id="sun" />
                        <g filter="url(#filter0_d_43_164)" id="cloud">
                            <path d={svgPathsLight.p26ccd100} fill="var(--fill-0, #E5E5E5)" />
                        </g>
                        <g filter="url(#filter1_d_43_164)" id="cloud_2">
                            <path d={svgPathsLight.p2462bc00} fill="var(--fill-0, #FCFCFC)" />
                        </g>
                        <g filter="url(#filter2_d_43_164)" id="cloud_3">
                            <path d={svgPathsLight.p1c988000} fill="var(--fill-0, #FCFCFC)" />
                        </g>
                    </g>
                    <defs>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.0505" id="filter0_d_43_164" width="44.4271" x="-2.08005e-07" y="12.323">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="8.8638" />
                            <feGaussianBlur stdDeviation="4.4319" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_164" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_164" mode="normal" result="shape" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="30.0504" id="filter1_d_43_164" width="44.4271" x="57.6144" y="22.1595">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="8.8638" />
                            <feGaussianBlur stdDeviation="4.4319" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_164" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_164" mode="normal" result="shape" />
                        </filter>
                        <filter colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="44.319" id="filter2_d_43_164" width="75.3423" x="-2.07569e-07" y="42.1031">
                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                            <feColorMatrix in="SourceAlpha" result="hardAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
                            <feOffset dy="8.8638" />
                            <feGaussianBlur stdDeviation="4.4319" />
                            <feComposite in2="hardAlpha" operator="out" />
                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                            <feBlend in2="BackgroundImageFix" mode="normal" result="effect1_dropShadow_43_164" />
                            <feBlend in="SourceGraphic" in2="effect1_dropShadow_43_164" mode="normal" result="shape" />
                        </filter>
                        <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_43_164" x1="53.7372" x2="65.371" y1="8.30982" y2="59.8307">
                            <stop offset="0.360577" stopColor="#FBFD29" />
                            <stop offset="1" stopColor="#D36D06" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>
        </div>
    );
}

export function ThemeSwitcher() {
    const [theme, setTheme] = useState<"light" | "dark">("light");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedTheme = localStorage.getItem("theme");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const isDark = savedTheme ? savedTheme === "dark" : prefersDark;

        setTheme(isDark ? "dark" : "light");
        if (isDark) {
            document.documentElement.classList.add("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);

        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    };

    if (!mounted) {
        return null;
    }

    const isDark = theme === "dark";

    return (
        <button
            onClick={toggleTheme}
            className="relative h-20 w-36 cursor-pointer hover:opacity-90 transition-opacity"
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
        >
            <div
                className={`overflow-clip relative rounded-[71.164px] size-full transition-all duration-500 ${isDark
                        ? "bg-linear-to-l from-[#1a1a1a] to-[#615b5b]"
                        : "bg-linear-to-r from-[#87CEEB] to-[#E0F6FF]"
                    }`}
            >
                {/* Background icon - shows opposite of current theme */}
                <div
                    className={`transition-opacity duration-500 ${isDark ? "opacity-100" : "opacity-0"
                        }`}
                >
                    <DarkMode />
                </div>
                <div
                    className={`transition-opacity duration-500 ${isDark ? "opacity-0" : "opacity-100"
                        }`}
                >
                    <LightMode />
                </div>

                {/* Sliding switch ball */}
                <div
                    className={`absolute overflow-clip rounded-full size-[66.716px] top-[6.67px] transition-all duration-500 ${isDark
                            ? "left-[4.45px] shadow-[0px_0px_10px_0px_rgba(0,0,0,0.54)]"
                            : "left-[68.94px] shadow-[0px_0px_12.9px_0px_#f1a10f]"
                        }`}
                    style={{
                        backgroundImage: isDark
                            ? "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 66.716 66.716\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(2.0426e-16 3.3358 -3.3358 2.0426e-16 33.358 33.358)\\'><stop stop-color=\\'rgba(252,252,252,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(195,195,195,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(167,167,167,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(138,138,138,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')"
                            : "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 66.716 66.716\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(2.0426e-16 3.3358 -3.3358 2.0426e-16 33.358 33.358)\\'><stop stop-color=\\'rgba(252,252,252,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(250,254,182,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(248,254,147,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(247,255,112,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
                    }}
                />
            </div>
        </button>
    );
}
