"use client";

import React from "react";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Java", "JavaScript", "Python", "HTML/CSS", "SQL"],
  },
  {
    title: "Frameworks / Libraries",
    skills: ["NodeJS", "ExpressJS", "React", "Scikit-learn", "pandas", "numpy"],
  },
  {
    title: "Developer Tools",
    skills: ["Git", "GitHub", "VS Code", "IntelliJ Idea", "MacOS", "Windows", "Linux"],
  },
];

export default function TechnicalSkills() {
  return (
    <section className="w-full py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-6xl font-bold text-purple-300 mb-16 text-center">Technical Skills</h2>
        <div className="w-full space-y-20">
          {skillGroups.map((group) => (
            <div key={group.title} className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-semibold text-purple-200 mb-10 text-center">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {group.skills.map((skill) => (
                  <div
                    key={skill}
                    className={`bg-zinc-900 rounded-xl py-4 px-6 border border-purple-500/20 hover:bg-gradient-to-br hover:from-indigo-500/20 hover:to-purple-600/20 transition-all duration-300 cursor-pointer text-center motion-safe:animate-[float_3s_ease-in-out_infinite]
                    ${group.title === "Languages" ? "w-[200px]" : ""}
                    ${group.title === "Frameworks / Libraries" ? "w-[170px]" : ""}
                    ${group.title === "Developer Tools" ? "w-[130px]" : ""}`}
                    style={{
                      animationDelay: `${(group.skills.indexOf(skill) * 0.2)}s`
                    }}
                  >
                    <span className="text-xl font-semibold text-purple-300 text-center block">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 