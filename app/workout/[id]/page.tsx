"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { PROGRAMS } from "@/lib/programs-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
    Clock,
    BarChart,
    ArrowLeft,
    CheckCircle2,
    Dumbbell,
    Trophy,
    Play
} from "lucide-react";
import { motion } from "framer-motion";

export default function WorkoutDetailPage() {
    const params = useParams();
    const id = params?.id as string;
    const workout = PROGRAMS.find((p) => p.id.toLowerCase() === id?.toLowerCase());

    if (!workout) {
        notFound();
    }

    // Append origin for localhost embedding
    const videoUrl = `${workout.videoUrl}?origin=${typeof window !== 'undefined' ? window.location.origin : ''}`;

    return (
        <div className="min-h-screen bg-background text-foreground pt-24 pb-16">
            <div className="container mx-auto px-4">
                <Link
                    href="/schedule"
                    className="inline-flex items-center gap-2 text-muted-foreground hover:text-neon transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Schedule
                </Link>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content: Video and Description */}
                    <div className="lg:col-span-2 space-y-8">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-4"
                        >
                            <div className="flex items-center gap-4">
                                <Badge className="bg-neon text-black font-black uppercase tracking-widest px-3 py-1">
                                    {workout.category}
                                </Badge>
                                <span className="text-muted-foreground font-bold tracking-widest uppercase text-xs">
                                    Trainer: {workout.trainer}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-6xl font-black uppercase italic tracking-tighter">
                                {workout.name}
                            </h1>
                        </motion.div>

                        {/* Video Player Container */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="relative aspect-video rounded-3xl overflow-hidden border border-border bg-card shadow-2xl shadow-neon/5 group"
                        >
                            <iframe
                                src={videoUrl}
                                title={workout.name}
                                className="absolute inset-0 w-full h-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                allowFullScreen
                                referrerPolicy="strict-origin-when-cross-origin"
                            />
                            <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                                <Button variant="secondary" size="sm" className="bg-black/60 backdrop-blur-md text-white border-white/20 hover:bg-black/80" asChild>
                                    <a href={workout.videoUrl.replace('embed/', 'watch?v=')} target="_blank" rel="noopener noreferrer">
                                        Watch on YouTube
                                    </a>
                                </Button>
                            </div>
                        </motion.div>

                        <div className="space-y-6">
                            <h2 className="text-3xl font-black uppercase italic text-neon">Overview</h2>
                            <p className="text-muted-foreground text-lg leading-relaxed">
                                {workout.description}
                            </p>
                        </div>

                        {/* Benefits Grid */}
                        <div className="grid md:grid-cols-2 gap-8 pt-8">
                            <div className="space-y-6">
                                <h3 className="text-xl font-black uppercase italic flex items-center gap-3">
                                    <Trophy className="text-neon w-6 h-6" />
                                    Key Benefits
                                </h3>
                                <ul className="space-y-4">
                                    {workout.benefits.map((benefit, i) => (
                                        <li key={i} className="flex items-start gap-3">
                                            <CheckCircle2 className="text-neon w-5 h-5 shrink-0 mt-1" />
                                            <span className="text-foreground/90 font-medium">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="space-y-6">
                                <h3 className="text-xl font-black uppercase italic flex items-center gap-3">
                                    <Dumbbell className="text-neon w-6 h-6" />
                                    Equipment Needed
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {workout.equipment.map((item, i) => (
                                        <Badge key={i} variant="secondary" className="bg-white/5 border-white/10 text-foreground px-3 py-1">
                                            {item}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Stats & CTA */}
                    <div className="space-y-8">
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.4 }}
                            className="bg-card/50 backdrop-blur-sm border border-border rounded-3xl p-8 sticky top-24 space-y-8"
                        >
                            <div className="space-y-6">
                                <div className="flex items-center justify-between py-4 border-b border-white/5">
                                    <div className="flex items-center gap-3 text-muted-foreground uppercase text-sm font-bold tracking-widest">
                                        <Clock className="w-5 h-5 text-neon" />
                                        Duration
                                    </div>
                                    <span className="font-black text-xl italic">{workout.duration}</span>
                                </div>
                                <div className="flex items-center justify-between py-4 border-b border-white/5">
                                    <div className="flex items-center gap-3 text-muted-foreground uppercase text-sm font-bold tracking-widest">
                                        <BarChart className="w-5 h-5 text-neon" />
                                        Intensity
                                    </div>
                                    <span className="font-black text-xl italic text-neon">{workout.intensity}</span>
                                </div>
                            </div>

                            <div className="space-y-4">
                                <h4 className="text-center text-sm font-bold uppercase tracking-widest text-muted-foreground">Ready to start?</h4>
                                <Button className="w-full bg-neon text-black font-black uppercase italic h-14 text-lg hover:bg-neon-hover shadow-lg shadow-neon/20 group" asChild>
                                    <Link href="/contact">
                                        Join This Class
                                        <Play className="ml-2 w-5 h-5 fill-current" />
                                    </Link>
                                </Button>
                                <p className="text-center text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                                    No credit card required for consultation
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    );
}
