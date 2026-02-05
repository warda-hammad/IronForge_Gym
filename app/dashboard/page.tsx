import StatsOverview from "@/components/dashboard/StatsOverview";
import WorkoutLogger from "@/components/dashboard/WorkoutLogger";
import ProgressChart from "@/components/dashboard/ProgressChart";

export default function DashboardPage() {
    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-3xl font-black uppercase italic tracking-tighter text-foreground">
                    Dashboard
                </h1>
                <div className="text-muted-foreground text-sm">
                    Welcome back, <span className="text-foreground font-bold">Warrior</span>
                </div>
            </div>

            {/* Stats Row */}
            <StatsOverview />

            <div className="grid lg:grid-cols-3 gap-6">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-6">
                    <ProgressChart />
                    {/* Recent activity or other charts could go here */}
                </div>

                {/* Sidebar/Form Area */}
                <div className="lg:col-span-1">
                    <WorkoutLogger />
                </div>
            </div>
        </div>
    );
}
