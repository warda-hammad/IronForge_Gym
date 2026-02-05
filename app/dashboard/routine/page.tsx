import { Dumbbell } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function RoutinePage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-black uppercase italic tracking-tighter text-foreground">
                    My Routine
                </h1>
            </div>

            <Card className="border-border bg-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-bold uppercase italic text-foreground">
                        <Dumbbell className="text-neon" /> Current Split
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                    <p className="text-muted-foreground">Your personalized workout routine will appear here.</p>
                    {/* Placeholder content */}
                    <div className="grid gap-4 md:grid-cols-2">
                        {['Push Day', 'Pull Day', 'Leg Day', 'Rest'].map((day) => (
                            <div key={day} className="p-4 rounded-lg bg-accent/20 border border-border hover:border-neon transition-all">
                                <div className="flex justify-between items-center mb-2">
                                    <h3 className="font-bold text-foreground">{day}</h3>
                                    <span className="text-xs font-bold text-muted-foreground">0%</span>
                                </div>
                                <div className="h-2 w-full bg-foreground/10 rounded-full overflow-hidden">
                                    <div className="h-full bg-neon w-2" />
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
