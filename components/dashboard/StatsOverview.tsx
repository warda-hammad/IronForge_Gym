import { Activity, Flame, Trophy } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const stats = [
    {
        title: "Workouts Completed",
        value: "12",
        icon: Trophy,
        color: "text-yellow-400",
    },
    {
        title: "Active Streak",
        value: "5 Days",
        icon: Flame,
        color: "text-orange-500",
    },
    {
        title: "Calories Burned",
        value: "14,200",
        icon: Activity,
        color: "text-neon",
    },
];

export default function StatsOverview() {
    return (
        <div className="grid gap-4 md:grid-cols-3">
            {stats.map((stat, index) => (
                <Card key={index} className="border-border bg-card hover:bg-accent/50 transition-colors">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                            {stat.title}
                        </CardTitle>
                        <stat.icon className={`h-4 w-4 ${stat.color}`} />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                        <p className="text-xs text-muted-foreground mt-1 uppercase">+2 from last week</p>
                    </CardContent>
                </Card>
            ))}
        </div>
    );
}
