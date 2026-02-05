import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ContactPage() {
    return (
        <main className="min-h-screen bg-background pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-5xl md:text-7xl font-black uppercase italic tracking-tighter mb-12 text-center">
                        Get in <span className="text-neon">Touch</span>
                    </h1>

                    <div className="grid md:grid-cols-2 gap-16">
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-xl font-bold uppercase tracking-wider mb-6">Contact Info</h2>
                                <div className="space-y-6 text-muted-foreground">
                                    <div className="flex items-start gap-4">
                                        <MapPin className="w-6 h-6 text-neon shrink-0" />
                                        <div>
                                            <p className="font-bold text-foreground">Our Location</p>
                                            <p>123 Fitness Blvd, Muscle City, CA 90210</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Phone className="w-6 h-6 text-neon shrink-0" />
                                        <div>
                                            <p className="font-bold text-foreground">Call Us</p>
                                            <p>+1 (555) 123-4567</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Mail className="w-6 h-6 text-neon shrink-0" />
                                        <div>
                                            <p className="font-bold text-foreground">Email Us</p>
                                            <p>info@ironforge.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div>
                                <h2 className="text-xl font-bold uppercase tracking-wider mb-6">Hours</h2>
                                <div className="flex items-start gap-4 text-muted-foreground">
                                    <Clock className="w-6 h-6 text-neon shrink-0" />
                                    <div>
                                        <p>Mon-Fri: 5am - 11pm</p>
                                        <p>Sat-Sun: 7am - 8pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-card border border-white/10 rounded-3xl p-8 shadow-2xl">
                            <h2 className="text-xl font-bold uppercase tracking-wider mb-8">Send a Message</h2>
                            <form className="space-y-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Full Name</label>
                                    <Input placeholder="John Doe" className="bg-background border-white/10" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Email Address</label>
                                    <Input placeholder="john@example.com" className="bg-background border-white/10" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-[0.2em] text-white/50">Message</label>
                                    <textarea
                                        className="w-full h-32 bg-background border border-white/10 rounded-lg p-3 text-sm focus:outline-none focus:border-neon transition-colors"
                                        placeholder="How can we help you?"
                                    ></textarea>
                                </div>
                                <Button className="w-full text-black font-black uppercase tracking-[0.2em] h-14">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
