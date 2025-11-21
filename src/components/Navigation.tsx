import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "./ThemeSwitcher";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navItems = [
        { label: "Home", href: "#home" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Skills", href: "#skills" },
        { label: "Contact", href: "#contact" },
    ];

    const scrollToSection = (href: string) => {
        setIsMobileMenuOpen(false);

        if (href === "#home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const element = document.querySelector(href);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
        }
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                ? "bg-white dark:bg-gray-900 shadow-md"
                : "bg-white/10 dark:bg-black/20 backdrop-blur-md"
                }`}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <a
                        href="#home"
                        onClick={(e) => {
                            e.preventDefault();
                            scrollToSection("#home");
                        }}
                        className={`transition-colors ${isScrolled ? "text-gray-900" : "text-white"
                            }`}
                    >
                        {"<EMJ />"}
                    </a>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className={`transition-colors hover:text-blue-600 ${isScrolled ? "text-gray-700 dark:text-gray-200" : "text-white"
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                        <ThemeSwitcher />
                    </div>

                    {/* Mobile Menu and Theme Toggle */}
                    <div className="md:hidden flex items-center gap-2">
                        <ThemeSwitcher />
                        <button
                            className={`p-2 ${isScrolled ? "text-gray-900" : "text-white"
                                }`}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-6 w-6" />
                            ) : (
                                <Menu className="h-6 w-6" />
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden py-4 bg-[rgba(255,255,255,0)] border-t text-[rgb(255,255,255)]">
                        {navItems.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.href);
                                }}
                                className={`block py-3 px-4 text-gray-100 hover:bg-gray-900/40 rounded-md  hover:text-blue-600 transition-colors ${isScrolled ? " text-gray-600 " : "text-gray-100"
                                    }`}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>
                )}
            </div>
        </nav>
    );
}