"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";


const data = [
    { date: "Jan 01", weight: 70 },
    { date: "Jan 08", weight: 72 },
    { date: "Jan 15", weight: 71.5 },
    { date: "Jan 22", weight: 73 },
    { date: "Jan 29", weight: 74.5 },
    { date: "Feb 05", weight: 75 },
];

export default function ProgressChart() {
    return (
        <Card className="border-border bg-card col-span-1 lg:col-span-2">
            <CardHeader>
                <CardTitle className="text-xl font-bold uppercase italic text-foreground">Strength Progress</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="h-[300px] w-full">
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" strokeOpacity={0.2} vertical={false} />
                            <XAxis
                                dataKey="date"
                                stroke="#888888"
                                tick={{ fill: "#888888", fontSize: 12 }}
                                tickLine={false}
                                axisLine={false}
                            />
                            <YAxis
                                stroke="#888888"
                                tick={{ fill: "#888888", fontSize: 12 }}
                                tickLine={false}
                                axisLine={false}
                                domain={['dataMin - 5', 'dataMax + 5']}
                            />
                            <Tooltip
                                contentStyle={{
                                    backgroundColor: "var(--color-card)",
                                    borderColor: "var(--color-border)",
                                    borderRadius: "8px",
                                    color: "var(--color-foreground)"
                                }}
                                itemStyle={{ color: "var(--color-foreground)" }}
                                labelStyle={{ color: "var(--color-muted-foreground)" }}
                            />
                            <Line
                                type="monotone"
                                dataKey="weight"
                                stroke="var(--color-neon)"
                                strokeWidth={4}
                                dot={{ r: 4, fill: "var(--color-neon)", strokeWidth: 0 }}
                                activeDot={{ r: 8, fill: "var(--color-neon)", stroke: "var(--color-background)", strokeWidth: 2 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </CardContent>
        </Card>
    );
}
