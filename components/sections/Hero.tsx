"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="hero" className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/images/hero.png')",
                }}
            >
                <div className="absolute inset-0 bg-black/60 md:bg-black/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="container relative z-10 px-4 md:px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="space-y-6 max-w-4xl mx-auto"
                >
                    <h2 className="text-neon font-bold tracking-widest uppercase text-sm md:text-base">
                        Welcome to IronForge Gym
                    </h2>
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-white uppercase italic tracking-tighter leading-[0.9]">
                        Forge Your <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-500">Ultimate Body</span>
                    </h1>
                    <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                        Join the elite fitness community where performance meets passion.
                        State-of-the-art equipment, expert trainers, and a vibe that pushes you further.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Link href="/#membership" className="w-full sm:w-auto">
                            <Button size="lg" className="h-16 px-8 text-lg w-full">
                                Start Your Journey <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                        <Link href="/#classes" className="w-full sm:w-auto">
                            <Button variant="outline" size="lg" className="h-16 px-8 text-lg w-full">
                                View Class Schedule
                            </Button>
                        </Link>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 1.5 }}
            >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <div className="h-12 w-[1px] bg-gradient-to-b from-white/50 to-transparent" />
            </motion.div>
        </section>
    );
}
