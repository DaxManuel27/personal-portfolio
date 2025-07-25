import React from "react";
import HeroHeader from "@/components/HeroHeader";
import About from "@/components/sections/About";
import Education from "@/components/sections/Education";
import TechnicalSkills from "@/components/sections/TechnicalSkills";
import Projects from "@/components/sections/Projects";
import ResumeSection from "@/components/sections/ResumeSection";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <div className="h-screen w-screen overflow-y-scroll">
      <section id="hero" className="min-h-screen w-full flex items-center justify-center">
        <HeroHeader />
      </section>
      <section id="about" className="min-h-screen w-full flex items-center justify-center">
        <About />
      </section>
      <section id="education" className="min-h-screen w-full flex items-center justify-center">
        <Education />
      </section>
      <section id="technical-skills" className="min-h-screen w-full flex items-center justify-center">
        <TechnicalSkills />
      </section>
      <section id="projects" className="min-h-screen w-full flex items-center justify-center">
        <Projects />
      </section>
      <section id="resume" className="min-h-screen w-full flex items-center justify-center">
        <ResumeSection />
      </section>
      <section id="contact" className="min-h-screen w-full flex items-center justify-center">
        <Contact />
      </section>
    </div>
  );
} 