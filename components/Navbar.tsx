"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Dumbbell, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { useCart } from "@/lib/use-cart";

const navLinks = [
    { name: "Home", href: "/#hero" },
    { name: "Membership", href: "/#membership" },
    { name: "Classes", href: "/#classes" },
    { name: "Trainers", href: "/#trainers" },
    { name: "Store", href: "/store" },
    { name: "Contact", href: "/contact" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();
    const { totalItems, setIsOpen: setIsCartOpen } = useCart();

    const isStore = pathname === "/store";

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled || !isStore ? "bg-black/90 backdrop-blur-md py-4 shadow-lg border-b border-white/10" : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <Dumbbell className="h-8 w-8 text-neon group-hover:text-neon-hover transition-colors" />
                    <span className="text-xl font-bold tracking-tighter text-foreground uppercase italic transition-colors">
                        Iron<span className="text-neon">Forge</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={`text-sm font-medium transition-colors uppercase tracking-wide ${pathname === link.href ? "text-neon" : "text-muted-foreground hover:text-neon"}`}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-4 ml-4">
                        <button
                            onClick={() => setIsCartOpen(true)}
                            className="relative rounded-full p-2 hover:bg-white/5 transition-colors focus:outline-none"
                            aria-label="Open cart"
                        >
                            <ShoppingCart className="h-6 w-6 text-foreground" />
                            {totalItems > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-neon text-[10px] font-bold text-black ring-2 ring-background">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <Link href="/contact">
                            <Button variant="default" size="sm" className="text-white dark:text-black font-bold">
                                Join Now
                            </Button>
                        </Link>
                    </div>
                </div>

                {/* Mobile Toggle */}
                <div className="flex items-center gap-4 md:hidden">
                    <button
                        onClick={() => setIsCartOpen(true)}
                        className="relative rounded-full p-2 hover:bg-white/5 transition-colors focus:outline-none"
                        aria-label="Open cart"
                    >
                        <ShoppingCart className="h-6 w-6 text-foreground" />
                        {totalItems > 0 && (
                            <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-neon text-[10px] font-bold text-black ring-2 ring-background">
                                {totalItems}
                            </span>
                        )}
                    </button>
                    <button
                        className="text-foreground"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background border-b border-border overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="text-lg font-medium text-foreground hover:text-neon"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" onClick={() => setIsOpen(false)}>
                                <Button className="w-full mt-2 text-white dark:text-black">Join Now</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
