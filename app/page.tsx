import Hero from "@/components/sections/Hero";
import Membership from "@/components/sections/Membership";
import Classes from "@/components/sections/Classes";
import Trainers from "@/components/sections/Trainers";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <Membership />
      <Classes />
      <Trainers />
    </main>
  );
}
