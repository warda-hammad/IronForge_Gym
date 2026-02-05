"use client";

import { Instagram, Twitter, Linkedin } from "lucide-react";
import { Card } from "@/components/ui/card";

const trainers = [
    {
        name: "Marcus Thorne",
        role: "Head Strength Coach",
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop",
    },
    {
        name: "Sarah Jenkins",
        role: "Yoga & Flexibility Expert",
        image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1887&auto=format&fit=crop",
    },
    {
        name: "Alex Rivera",
        role: "HIIT & Conditioning Pro",
        image: "https://images.unsplash.com/photo-1567013127542-490d757e51fc?q=80&w=1887&auto=format&fit=crop",
    },
];

export default function Trainers() {
    return (
        <section id="trainers" className="py-24 bg-background transition-colors duration-300">
            <div className="container px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-neon font-bold tracking-widest uppercase text-sm">Expert Trainers</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase italic">
                        Meet The <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-foreground">Elite</span>
                    </h3>
                    <p className="text-muted-foreground">
                        Our certified personal trainers are here to guide, motivate, and push you to surpass your limits.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {trainers.map((trainer) => (
                        <Card key={trainer.name} className="group border-none bg-transparent shadow-none overflow-hidden">
                            <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden bg-muted mb-4">
                                {/* Background Image */}
                                <div
                                    className="absolute inset-0 bg-neutral-800 transition-transform duration-500 group-hover:scale-110 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${trainer.image})` }}
                                >
                                    <div className="w-full h-full bg-gradient-to-b from-transparent via-black/10 to-black/80" />
                                </div>

                                {/* Social Overlay */}
                                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                    <div className="p-3 bg-neon rounded-full text-black hover:scale-110 transition-transform cursor-pointer">
                                        <Instagram className="w-5 h-5" />
                                    </div>
                                    <div className="p-3 bg-neon rounded-full text-black hover:scale-110 transition-transform cursor-pointer">
                                        <Twitter className="w-5 h-5" />
                                    </div>
                                    <div className="p-3 bg-neon rounded-full text-black hover:scale-110 transition-transform cursor-pointer">
                                        <Linkedin className="w-5 h-5" />
                                    </div>
                                </div>
                            </div>
                            <div className="text-center space-y-1">
                                <h4 className="text-2xl font-bold text-foreground uppercase italic group-hover:text-neon transition-colors">{trainer.name}</h4>
                                <p className="text-sm font-medium text-neon tracking-wider uppercase">{trainer.role}</p>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
