"use client";

import { useState } from "react";
import { Plus, Save } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Exercise {
    id: number;
    name: string;
    sets: string;
    reps: string;
    weight: string;
}

const EXERCISE_CATEGORIES = [
    {
        name: "Chest",
        exercises: ["Bench Press", "Incline Bench Press", "Dumbbell Press", "Chest Flyes", "Push-ups"]
    },
    {
        name: "Back",
        exercises: ["Deadlift", "Barbell Row", "Pull-ups", "Lat Pulldown", "Seated Row", "Face Pulls"]
    },
    {
        name: "Legs",
        exercises: ["Squat", "Leg Press", "Leg Extensions", "Hamstring Curls", "Calf Raises"]
    },
    {
        name: "Shoulders",
        exercises: ["Overhead Press", "Lateral Raises", "Front Raises", "Dumbbell Clean"]
    },
    {
        name: "Arms",
        exercises: ["Barbell Curls", "Hammer Curls", "Preacher Curls", "Tricep Pushdowns", "Skullcrushers", "Dips"]
    },
    {
        name: "Core",
        exercises: ["Plank", "Crunch", "Leg Raises", "Russian Twists"]
    },
    {
        name: "Other",
        exercises: ["Cardio", "HIIT", "Other"]
    }
];

export default function WorkoutLogger() {
    const [exercises, setExercises] = useState<Exercise[]>([]);
    const [currentExercise, setCurrentExercise] = useState({
        name: "",
        sets: "",
        reps: "",
        weight: "",
    });

    const handleAddExercise = (e: React.FormEvent) => {
        e.preventDefault();
        if (!currentExercise.name || !currentExercise.sets) return;

        setExercises([
            ...exercises,
            { ...currentExercise, id: Date.now() }
        ]);

        // Reset form
        setCurrentExercise({
            name: "",
            sets: "",
            reps: "",
            weight: "",
        });
    };

    const handleSaveWorkout = () => {
        if (exercises.length === 0) return;

        const newWorkout = {
            id: Date.now(),
            date: new Date().toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit'
            }),
            exercises: exercises
        };

        const savedWorkouts = JSON.parse(localStorage.getItem("workouts") || "[]");
        localStorage.setItem("workouts", JSON.stringify([newWorkout, ...savedWorkouts]));

        alert("Workout saved successfully! Keep grinding! 🔥");
        setExercises([]);
    };

    return (
        <Card className="border-border bg-card">
            <CardHeader>
                <CardTitle className="text-xl font-bold uppercase italic text-foreground">Log Workout</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">

                {/* Form */}
                <form onSubmit={handleAddExercise} className="grid md:grid-cols-5 gap-4 items-end">
                    <div className="md:col-span-2 space-y-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase">Exercise Name</label>
                        <select
                            value={currentExercise.name}
                            onChange={(e) => setCurrentExercise({ ...currentExercise, name: e.target.value })}
                            className="w-full bg-background border border-border rounded-md p-2 text-foreground text-sm focus:border-neon focus:outline-none appearance-none"
                            required
                        >
                            <option value="" disabled className="bg-background">Choose exercise...</option>
                            {EXERCISE_CATEGORIES.map(category => (
                                <optgroup key={category.name} label={category.name} className="bg-background text-neon font-bold">
                                    {category.exercises.map(ex => (
                                        <option key={ex} value={ex} className="bg-background text-foreground font-normal">
                                            {ex}
                                        </option>
                                    ))}
                                </optgroup>
                            ))}
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase">Sets</label>
                        <input
                            type="text"
                            placeholder="3"
                            value={currentExercise.sets}
                            onChange={(e) => setCurrentExercise({ ...currentExercise, sets: e.target.value })}
                            className="w-full bg-background border border-border rounded-md p-2 text-foreground text-sm focus:border-neon focus:outline-none placeholder:text-muted-foreground"
                            required
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase">Reps</label>
                        <input
                            type="text"
                            placeholder="15"
                            value={currentExercise.reps}
                            onChange={(e) => setCurrentExercise({ ...currentExercise, reps: e.target.value })}
                            className="w-full bg-background border border-border rounded-md p-2 text-foreground text-sm focus:border-neon focus:outline-none placeholder:text-muted-foreground"
                        />
                    </div>
                    <div className="space-y-2">
                        <label className="text-xs font-medium text-muted-foreground uppercase">Weight</label>
                        <input
                            type="text"
                            placeholder="e.g. 60kg or 135lbs"
                            value={currentExercise.weight}
                            onChange={(e) => setCurrentExercise({ ...currentExercise, weight: e.target.value })}
                            className="w-full bg-background border border-border rounded-md p-2 text-foreground text-sm focus:border-neon focus:outline-none placeholder:text-muted-foreground"
                        />
                    </div>
                    <Button type="submit" size="sm" className="w-full md:w-auto mt-2 md:mt-0" disabled={!currentExercise.name}>
                        <Plus className="w-4 h-4 mr-1" /> Add
                    </Button>
                </form>

                {/* List */}
                {exercises.length > 0 ? (
                    <div className="space-y-2 mt-4">
                        <h3 className="text-sm font-medium text-muted-foreground uppercase tracking-wide mb-2">Current Session</h3>
                        {exercises.map((ex) => (
                            <div key={ex.id} className="flex items-center justify-between p-3 bg-muted/50 rounded-md border border-border">
                                <span className="font-bold text-foreground">{ex.name}</span>
                                <div className="text-sm text-muted-foreground space-x-4">
                                    <span><span className="text-neon">{ex.sets}</span> sets</span>
                                    <span><span className="text-neon">{ex.reps}</span> reps</span>
                                    <span><span className="text-neon">{ex.weight}</span> kg</span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-8 text-muted-foreground text-sm italic">
                        No exercises added yet. Start your grind!
                    </div>
                )}

                <div className="pt-4 border-t border-border flex justify-end">
                    <Button
                        onClick={handleSaveWorkout}
                        disabled={exercises.length === 0}
                        className="w-full md:w-auto uppercase font-bold tracking-widest text-white dark:text-black"
                    >
                        <Save className="w-4 h-4 mr-2" /> Save Workout
                    </Button>
                </div>

            </CardContent>
        </Card>
    );
}
