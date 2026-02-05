"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { LayoutDashboard, Dumbbell, Settings, LogOut, Menu, X, ChevronRight, History as HistoryIcon, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

const navItems = [
    { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
    { name: "My Routine", href: "/dashboard/routine", icon: Dumbbell },
    { name: "History", href: "/dashboard/workout-history", icon: HistoryIcon },
    { name: "Settings", href: "/dashboard/settings", icon: Settings },
    { name: "Back to Home", href: "/", icon: Home },
]

export default function Sidebar() {
    const [isOpen, setIsOpen] = useState(false)
    const pathname = usePathname()

    return (
        <>
            {/* Mobile Trigger */}
            <Button
                variant="ghost"
                size="icon"
                className="fixed top-4 left-4 z-50 md:hidden"
                onClick={() => setIsOpen(!isOpen)}
            >
                <Menu className="h-6 w-6" />
            </Button>

            {/* Sidebar Container */}
            <AnimatePresence>
                <div className={`fixed inset-y-0 left-0 z-40 w-64 bg-card border-r border-border transform transition-transform duration-300 ease-in-out md:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                    <div className="flex flex-col h-full p-6">
                        {/* Logo */}
                        <div className="flex items-center gap-2 mb-10 px-2">
                            <Dumbbell className="h-8 w-8 text-neon" />
                            <span className="text-xl font-bold tracking-tighter text-foreground uppercase italic">
                                Iron<span className="text-neon">Forge</span>
                            </span>
                        </div>

                        {/* Navigation */}
                        <nav className="flex-1 space-y-2">
                            {navItems.map((item) => {
                                const Icon = item.icon
                                const isActive = pathname === item.href

                                return (
                                    <Link key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
                                        <div className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 group relative overflow-hidden ${isActive ? 'bg-neon/10 text-neon' : 'text-muted-foreground hover:text-foreground hover:bg-accent'}`}>
                                            <Icon className={`h-5 w-5 ${isActive ? 'text-neon' : 'group-hover:text-neon transition-colors'}`} />
                                            <span className="font-medium">{item.name}</span>
                                            {isActive && <motion.div layoutId="active-pill" className="absolute left-0 top-0 bottom-0 w-1 bg-neon" />}
                                        </div>
                                    </Link>
                                )
                            })}
                        </nav>

                        {/* Logout */}
                        <div className="pt-6 border-t border-border">
                            <Button variant="ghost" className="w-full justify-start gap-3 text-red-500 hover:text-red-600 hover:bg-red-500/10">
                                <LogOut className="h-5 w-5" />
                                Logout
                            </Button>
                        </div>
                    </div>
                </div>
            </AnimatePresence>

            {/* Mobile Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-30 bg-black/60 backdrop-blur-sm md:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    )
}
