"use client";

import React from "react";
import { 
  SiJavascript, 
  SiPython, 
  SiHtml5, 
  SiCss3, 
  SiMysql, 
  SiNodedotjs, 
  SiExpress, 
  SiReact, 
  SiScikitlearn, 
  SiPandas, 
  SiNumpy, 
  SiGit, 
  SiGithub, 
  SiIntellijidea, 
  SiMacos, 
  SiLinux,
  SiOpenjdk
} from "react-icons/si";
import { VscCode } from "react-icons/vsc";
import { FaWindows } from "react-icons/fa";

const getIconColor = (skillName: string): string => {
  const colorMap: { [key: string]: string } = {
    "Java": "#ED8B00",
    "JavaScript": "#F7DF1E",
    "Python": "#3776AB",
    "HTML/CSS": "#E34F26",
    "SQL": "#4479A1",
    "NodeJS": "#339933",
    "ExpressJS": "#000000",
    "React": "#61DAFB",
    "Scikit-learn": "#F7931E",
    "pandas": "#150458",
    "numpy": "#013243",
    "Git": "#F05032",
    "GitHub": "#181717",
    "VS Code": "#007ACC",
    "IntelliJ Idea": "#000000",
    "MacOS": "#000000",
    "Windows": "#0078D4",
    "Linux": "#FCC624",
  };
  return colorMap[skillName] || "#b266ff";
};

const skillGroups = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: SiOpenjdk },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Python", icon: SiPython },
      { name: "HTML/CSS", icon: SiHtml5 },
      { name: "SQL", icon: SiMysql },
    ],
  },
  {
    title: "Frameworks / Libraries",
    skills: [
      { name: "NodeJS", icon: SiNodedotjs },
      { name: "ExpressJS", icon: SiExpress },
      { name: "React", icon: SiReact },
      { name: "Scikit-learn", icon: SiScikitlearn },
      { name: "pandas", icon: SiPandas },
      { name: "numpy", icon: SiNumpy },
    ],
  },
  {
    title: "Developer Tools",
    skills: [
      { name: "Git", icon: SiGit },
      { name: "GitHub", icon: SiGithub },
      { name: "VS Code", icon: VscCode },
      { name: "IntelliJ Idea", icon: SiIntellijidea },
      { name: "MacOS", icon: SiMacos },
      { name: "Windows", icon: FaWindows },
      { name: "Linux", icon: SiLinux },
    ],
  },
];

export default function TechnicalSkills() {
  return (
    <section className="w-full py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-6xl font-bold text-accent mb-16 text-center">Technical Skills</h2>
        <div className="w-full space-y-20">
          {skillGroups.map((group) => (
            <div key={group.title} className="max-w-6xl mx-auto">
              <h3 className="text-3xl font-semibold text-accent mb-10 text-center">{group.title}</h3>
              <div className="flex flex-wrap justify-center gap-6">
                {group.skills.map((skill) => {
                  const IconComponent = skill.icon;
                  return (
                    <div
                      key={skill.name}
                      className={`bg-zinc-900 rounded-xl py-4 px-6 border border-accent hover:bg-accent/10 transition-all duration-300 cursor-pointer text-center motion-safe:animate-[float_3s_ease-in-out_infinite] flex flex-col items-center gap-3
                      ${group.title === "Languages" ? "w-[200px]" : ""}
                      ${group.title === "Frameworks / Libraries" ? "w-[170px]" : ""}
                      ${group.title === "Developer Tools" ? "w-[130px]" : ""}`}
                      style={{
                        animationDelay: `${(group.skills.indexOf(skill) * 0.2)}s`
                      }}
                    >
                      <IconComponent className="text-4xl" style={{ color: getIconColor(skill.name) }} />
                      <span className="text-lg font-semibold text-accent text-center block">{skill.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 