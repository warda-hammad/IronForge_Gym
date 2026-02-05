"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const classes = [
    {
        id: "hiit",
        name: "High Intensity HIIT",
        time: "06:00 AM",
        trainer: "Alex S.",
        image: "/assets/classes/hiit.png",
        category: "Cardio",
        duration: "45 min",
        intensity: "High",
        desc: "Burn maximum calories with explosive movements and short rest periods."
    },
    {
        id: "power-lifting",
        name: "Power Lifting",
        time: "07:30 AM",
        trainer: "Marcus R.",
        image: "/assets/classes/powerlifting.png",
        category: "Strength",
        duration: "60 min",
        intensity: "Extreme",
        desc: "Master the big three: Squat, Bench, and Deadlift for ultimate strength."
    },
    {
        id: "yoga-flow",
        name: "Yoga Flow",
        time: "09:00 AM",
        trainer: "Sarah J.",
        image: "/assets/classes/yoga.png",
        category: "Flexibility",
        duration: "50 min",
        intensity: "Low",
        desc: "Find your balance and improve mobility with our signature flow."
    },
    {
        id: "crossfit",
        name: "CrossFit Box",
        time: "05:00 PM",
        trainer: "David K.",
        image: "/assets/classes/crossfit.png",
        category: "Mixed",
        duration: "60 min",
        intensity: "Extreme",
        desc: "Varied functional movements performed at high intensity."
    },
    {
        id: "boxing",
        name: "Boxing",
        time: "06:30 PM",
        trainer: "Mike T.",
        image: "/assets/classes/boxing.png",
        category: "Combat",
        duration: "45 min",
        intensity: "High",
        desc: "Technical striking and conditioning for the ultimate fighter's physique."
    },
    {
        id: "spin-cycle",
        name: "Spin Cycle",
        time: "08:00 PM",
        trainer: "Emily W.",
        image: "https://images.unsplash.com/photo-1534258936925-c4894738bfe3?q=80&w=2070&auto=format&fit=crop",
        category: "Cardio",
        duration: "45 min",
        intensity: "Medium",
        desc: "High-energy rhythmic cycling that pushes your cardiovascular limits."
    },
];

export default function Classes() {
    return (
        <section id="classes" className="py-24 bg-muted transition-colors duration-300">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
                    <div className="space-y-4 max-w-2xl">
                        <h2 className="text-neon font-bold tracking-widest uppercase text-sm">Our Classes</h2>
                        <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase italic">
                            Push Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-foreground">Limits</span>
                        </h3>
                        <p className="text-muted-foreground">
                            From high-intensity interval training to calming yoga flows, we have a class for every goal and fitness level.
                        </p>
                    </div>
                    <Link href="/schedule">
                        <Button variant="outline" className="shrink-0 border-neon text-neon hover:bg-neon hover:text-white dark:hover:text-black">
                            View Full Schedule
                        </Button>
                    </Link>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.slice(0, 3).map((item, index) => (
                        <Link
                            key={index}
                            href={`/workout/${item.id}`}
                            className="group relative overflow-hidden rounded-xl h-[400px] cursor-pointer block"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-neutral-800 transition-transform duration-500 group-hover:scale-110 bg-cover bg-center"
                                style={{ backgroundImage: `url(${item.image})` }}
                            >
                                <div className="w-full h-full bg-gradient-to-b from-transparent via-black/20 to-black/90 opacity-90" />
                            </div>

                            <div className="absolute inset-0 p-6 flex flex-col justify-end transition-all duration-300">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                    <h4 className="text-2xl font-bold text-white uppercase italic mb-2">{item.name}</h4>
                                    <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 mb-4 delay-75">
                                        {item.desc}
                                    </p>
                                    <div className="flex items-center gap-4 text-xs font-bold text-neon opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 uppercase tracking-widest">
                                        <span>{item.duration}</span>
                                        <div className="h-1 w-1 bg-neon rounded-full" />
                                        <span>{item.intensity}</span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
