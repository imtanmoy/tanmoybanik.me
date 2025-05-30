"use client";

import About from "@/src/components/about";
import { Awards } from "@/src/components/awards";
import { Education } from "@/src/components/education";
import { Experiences } from "@/src/components/experiences";
import { Footer } from "@/src/components/footer";
import { Hero } from "@/src/components/hero";
import { NavBar } from "@/src/components/nav-bar";
import Projects from "@/src/components/projects";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col font-inter bg-primary_bg text-primary_text">
      <NavBar />
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <About />
        <Experiences />
        <Projects />
        <Awards />
        <Education />
        <Footer />
      </div>
    </main>
  );
}
