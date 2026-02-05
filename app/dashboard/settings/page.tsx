"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Settings, Moon, Bell, Sun } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";

export default function SettingsPage() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [notifications, setNotifications] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null; // Avoid hydration mismatch
    }

    const isDark = theme === "dark";

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-black uppercase italic tracking-tighter text-foreground">
                    Settings
                </h1>
            </div>

            <Card className="border-border bg-card">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-xl font-bold uppercase italic text-foreground">
                        <Settings className="text-neon" /> Account Preferences
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 rounded-lg bg-muted border border-border">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-background rounded-full text-neon">
                                    {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Dark Mode</h4>
                                    <p className="text-sm text-muted-foreground">Toggle system theme preference</p>
                                </div>
                            </div>
                            <Switch checked={isDark} onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")} />
                        </div>

                        <div className="flex items-center justify-between p-4 rounded-lg bg-muted border border-border">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-background rounded-full text-neon">
                                    <Bell className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Notifications</h4>
                                    <p className="text-sm text-muted-foreground">Email updates about your progress</p>
                                </div>
                            </div>
                            <Switch checked={notifications} onCheckedChange={setNotifications} />
                        </div>
                    </div>

                    <div className="pt-4 border-t border-border">
                        <Button variant="destructive" className="w-full md:w-auto">Delete Account</Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
