"use client";

import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Footer() {
    return (
        <footer id="contact" className="bg-muted border-t border-border transition-colors duration-300">
            <div className="container px-4 md:px-6 py-16">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Brand */}
                    <div className="space-y-4">
                        <Link href="/" className="flex items-center gap-2 group">
                            <Dumbbell className="h-8 w-8 text-neon group-hover:text-neon-hover transition-colors" />
                            <span className="text-xl font-bold tracking-tighter text-foreground uppercase italic transition-colors">
                                Iron<span className="text-neon">Forge</span>
                            </span>
                        </Link>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Forging elite fitness through discipline, science, and iron. Join the movement today.
                        </p>
                        <div className="flex gap-4">
                            {[Facebook, Instagram, Twitter].map((Icon, i) => (
                                <div key={i} className="p-2 rounded-full bg-background border border-border text-foreground hover:border-neon hover:text-neon transition-colors cursor-pointer">
                                    <Icon className="w-4 h-4" />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Contact Info */}
                    <div className="space-y-4">
                        <h4 className="text-foreground font-bold uppercase tracking-widest text-sm">Contact</h4>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div className="flex items-start gap-4">
                                <MapPin className="w-5 h-5 text-neon shrink-0" />
                                <div>
                                    <p>123 Fitness Blvd</p>
                                    <p>Muscle City, CA 90210</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Phone className="w-5 h-5 text-neon shrink-0" />
                                <p>+1 (555) 123-4567</p>
                            </div>
                        </div>
                    </div>

                    {/* Hours */}
                    <div className="space-y-4">
                        <h4 className="text-foreground font-bold uppercase tracking-widest text-sm">Hours</h4>
                        <div className="space-y-4 text-sm text-muted-foreground">
                            <div className="flex items-start gap-4">
                                <Clock className="w-5 h-5 text-neon shrink-0" />
                                <div>
                                    <p>Mon-Fri: 5am - 11pm</p>
                                    <p>Sat-Sun: 7am - 8pm</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <Mail className="w-5 h-5 text-neon shrink-0" />
                                <p>info@ironforge.com</p>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter */}
                    <div className="space-y-4">
                        <h4 className="text-foreground font-bold uppercase tracking-widest text-sm">Newsletter</h4>
                        <div className="space-y-2">
                            <Input
                                placeholder="Enter your email"
                                className="bg-background border-border text-foreground focus-visible:ring-neon placeholder:text-muted-foreground"
                            />
                            <Button className="w-full text-white dark:text-black font-bold">Subscribe</Button>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-muted-foreground">
                    <p>&copy; 2024 IronForge Gym. All rights reserved.</p>
                    <div className="flex gap-6">
                        <span className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</span>
                        <span className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
