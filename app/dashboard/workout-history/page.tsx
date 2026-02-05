"use client";

import { useState, useEffect } from "react";
import { History as LogIcon, Calendar, Dumbbell, Trash2 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Exercise {
    id: number;
    name: string;
    sets: string;
    reps: string;
    weight: string;
}

interface Workout {
    id: number;
    date: string;
    exercises: Exercise[];
}

export default function WorkoutHistoryPage() {
    const [workouts, setWorkouts] = useState<Workout[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const saved = JSON.parse(localStorage.getItem("workouts") || "[]");
        setWorkouts(saved);
    }, []);

    const deleteWorkout = (id: number) => {
        const updated = workouts.filter(w => w.id !== id);
        setWorkouts(updated);
        localStorage.setItem("workouts", JSON.stringify(updated));
    };

    if (!mounted) return null;

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-black uppercase italic tracking-tighter text-foreground">
                    Workout History
                </h1>
            </div>

            {workouts.length > 0 ? (
                <div className="space-y-6">
                    {workouts.map((workout) => (
                        <Card key={workout.id} className="border-border bg-card">
                            <CardHeader className="flex flex-row items-center justify-between border-b border-border pb-4">
                                <div className="flex items-center gap-3">
                                    <div className="p-2 bg-neon/10 rounded-full text-neon">
                                        <Calendar className="w-5 h-5" />
                                    </div>
                                    <CardTitle className="text-lg font-bold text-foreground">
                                        {workout.date}
                                    </CardTitle>
                                </div>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="text-muted-foreground hover:text-red-500 hover:bg-red-500/10"
                                    onClick={() => deleteWorkout(workout.id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                </Button>
                            </CardHeader>
                            <CardContent className="pt-6">
                                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                                    {workout.exercises.map((ex) => (
                                        <div key={ex.id} className="p-4 rounded-lg bg-accent/20 border border-border">
                                            <div className="flex items-center gap-2 mb-2">
                                                <Dumbbell className="w-4 h-4 text-neon" />
                                                <h4 className="font-bold text-foreground">{ex.name}</h4>
                                            </div>
                                            <div className="grid grid-cols-3 gap-2 text-xs text-muted-foreground uppercase tracking-wider font-bold">
                                                <div>
                                                    <span className="text-neon block">{ex.sets}</span>
                                                    Sets
                                                </div>
                                                <div>
                                                    <span className="text-neon block">{ex.reps}</span>
                                                    Reps
                                                </div>
                                                <div>
                                                    <span className="text-neon block">{ex.weight}</span>
                                                    Weight
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            ) : (
                <Card className="border-border bg-card">
                    <CardContent className="flex flex-col items-center justify-center py-16 space-y-4">
                        <LogIcon className="w-16 h-16 text-muted-foreground opacity-20" />
                        <div className="text-center">
                            <h3 className="text-xl font-bold text-foreground uppercase italic">No History Yet</h3>
                            <p className="text-muted-foreground">Your saved workouts will appear here. Go crush some goals!</p>
                        </div>
                    </CardContent>
                </Card>
            )}
        </div>
    );
}
