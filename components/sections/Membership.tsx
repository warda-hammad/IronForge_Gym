"use client";

import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { useCart } from "@/lib/use-cart";
import { Product } from "@/lib/mock-data";

const plans = [
    {
        id: "plan-basic",
        name: "Basic Membership",
        price: 29,
        priceString: "$29",
        description: "Essential access for fitness enthusiasts.",
        features: ["Access to gym floor", "Locker room access", "Free WiFi", "1 Guest pass/month"],
        highlight: false,
        image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "plan-pro",
        name: "Pro Membership",
        price: 59,
        priceString: "$59",
        description: "Unlock all classes and premium features.",
        features: ["All Basic features", "Unlimited group classes", "Sauna & Steam room", "Nutrition consultation", "5 Guest passes/month"],
        highlight: true,
        image: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop"
    },
    {
        id: "plan-elite",
        name: "Elite Membership",
        price: 99,
        priceString: "$99",
        description: "The ultimate personal training experience.",
        features: ["All Pro features", "4 Personal Training sessions", "Private locker", "Massage therapy (1x/mo)", "Unlimited Guest passes"],
        highlight: false,
        image: "https://images.unsplash.com/photo-1593079831268-3381b0db4a77?q=80&w=2069&auto=format&fit=crop"
    },
];

export default function Membership() {
    const { addToCart } = useCart();

    const handleAddToCart = (plan: typeof plans[0]) => {
        const product: Product = {
            id: plan.id,
            name: plan.name,
            price: plan.price,
            category: 'Membership',
            image: plan.image,
            description: plan.description,
            features: plan.features
        };
        addToCart(product);
    };

    return (
        <section id="membership" className="py-24 bg-background relative overflow-hidden transition-colors duration-300">
            {/* Background Accents */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-20 right-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
                <div className="absolute bottom-20 left-0 w-96 h-96 bg-neon/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 md:px-6 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
                    <h2 className="text-neon font-bold tracking-widest uppercase text-sm">Membership Plans</h2>
                    <h3 className="text-4xl md:text-5xl font-black text-foreground uppercase italic">
                        Choose Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon to-foreground">Power</span>
                    </h3>
                    <p className="text-muted-foreground">
                        Flexible plans designed to fit your goals and lifestyle. No hidden fees. Cancel anytime.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {plans.map((plan) => (
                        <Card
                            key={plan.name}
                            className={`flex flex-col border-border bg-card/50 backdrop-blur-sm transition-all duration-300 hover:border-neon/50 hover:bg-card ${plan.highlight ? 'border-neon shadow-lg scale-105 z-10' : ''}`}
                        >
                            <CardHeader>
                                <CardTitle className="text-2xl font-bold uppercase text-foreground">{plan.name}</CardTitle>
                                <div className="flex items-baseline gap-1 mt-2">
                                    <span className="text-4xl font-black text-foreground">{plan.priceString}</span>
                                    <span className="text-muted-foreground">/mo</span>
                                </div>
                                <CardDescription className="pt-2 text-muted-foreground">{plan.description}</CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <ul className="space-y-3">
                                    {plan.features.map((feature) => (
                                        <li key={feature} className="flex items-center gap-3 text-sm text-foreground">
                                            <div className={`flex items-center justify-center w-5 h-5 rounded-full ${plan.highlight ? 'bg-neon text-white dark:text-black' : 'bg-muted text-neon'}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    variant={plan.highlight ? "default" : "outline"}
                                    className={`w-full ${plan.highlight ? 'text-white dark:text-black' : ''}`}
                                    onClick={() => handleAddToCart(plan)}
                                >
                                    Choose {plan.name}
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
