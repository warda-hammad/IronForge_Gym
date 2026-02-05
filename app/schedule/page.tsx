"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { PROGRAMS, WorkoutProgram } from "@/lib/programs-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, BarChart, ChevronRight, Play } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Cardio", "Strength", "Flexibility", "Combat", "Mixed"] as const;

export default function SchedulePage() {
    const [activeCategory, setActiveCategory] = useState<typeof categories[number]>("All");

    const filteredPrograms = useMemo(() => {
        if (activeCategory === "All") return PROGRAMS;
        return PROGRAMS.filter((p) => p.category === activeCategory);
    }, [activeCategory]);

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-16 space-y-4">
                    <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
                        Workout <span className="text-neon">Schedule</span>
                    </h1>
                    <p className="text-muted-foreground text-lg">
                        Explore our full range of elite programs. Select a class to watch the training video and start your journey.
                    </p>
                </div>

                {/* Filter Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((cat) => (
                        <Button
                            key={cat}
                            variant={activeCategory === cat ? "default" : "outline"}
                            onClick={() => setActiveCategory(cat)}
                            className={`rounded-full px-6 transition-all duration-300 ${activeCategory === cat ? "bg-neon text-black shadow-lg shadow-neon/20" : "hover:border-neon hover:text-neon"
                                }`}
                        >
                            {cat}
                        </Button>
                    ))}
                </div>

                {/* Programs Grid */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {filteredPrograms.map((program) => (
                            <motion.div
                                key={program.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <Link href={`/workout/${program.id}`}>
                                    <Card className="group relative overflow-hidden border-border bg-card/50 backdrop-blur-sm hover:border-neon/50 transition-all duration-500 h-full flex flex-col">
                                        <div className="relative aspect-video overflow-hidden">
                                            <Image
                                                src={program.image}
                                                alt={program.name}
                                                fill
                                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                                            />
                                            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
                                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                <div className="bg-neon/90 p-4 rounded-full text-black transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                                    <Play className="fill-current" />
                                                </div>
                                            </div>
                                            <Badge className="absolute top-4 left-4 bg-neon text-black border-none font-bold uppercase tracking-widest text-[10px]">
                                                {program.category}
                                            </Badge>
                                        </div>
                                        <CardContent className="p-6 flex-1 flex flex-col justify-between">
                                            <div>
                                                <h3 className="text-2xl font-bold uppercase italic mb-2 group-hover:text-neon transition-colors">
                                                    {program.name}
                                                </h3>
                                                <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                                                    {program.description}
                                                </p>
                                            </div>
                                            <div className="space-y-4">
                                                <div className="flex items-center justify-between text-xs font-bold uppercase tracking-widest text-muted-foreground">
                                                    <div className="flex items-center gap-2">
                                                        <Clock className="w-4 h-4 text-neon" />
                                                        <span>{program.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <BarChart className="w-4 h-4 text-neon" />
                                                        <span>{program.intensity}</span>
                                                    </div>
                                                </div>
                                                <div className="pt-4 border-t border-border flex items-center justify-between text-neon font-black italic uppercase group-hover:translate-x-1 transition-transform">
                                                    Watch Video
                                                    <ChevronRight className="w-5 h-5" />
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </Link>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
}
