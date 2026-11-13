import { Achievements } from "@/components/main/achievements";
import { Contact } from "@/components/main/contact";
import { Encryption } from "@/components/main/encryption";
import { Experience } from "@/components/main/experience";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-24">
        <Hero />
        <Skills />
        <Encryption />
        <Projects />
        <Achievements />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
