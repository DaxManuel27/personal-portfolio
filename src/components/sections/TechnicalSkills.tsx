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
    <div className="card card-hover animate-fade-in flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold text-text mb-8 text-center">Technical Skills</h2>
      <div className="w-full max-w-5xl space-y-10">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-2xl font-semibold text-accent mb-6 text-center">{group.title}</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {group.skills.map((skill) => (
                <div
                  key={skill}
                  className="bg-black/20 rounded-lg p-6 border border-white/10 hover:bg-black/40 hover:border-accent/50 transition-all duration-300 cursor-pointer flex flex-col items-center"
                >
                  <span className="text-lg font-semibold text-accent text-center">{skill}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 