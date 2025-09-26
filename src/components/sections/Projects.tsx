
"use client";

import React from "react";

interface Project {
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
}

const dummyProjects: Project[] = [
  {
    title: "CodeSimplify Chrome Extension",
    description:
      "Chrome extension that provides real time code explanations using Gemini API. Full stack app with NodeJS, Express, and a sleek popup UI. (NodeJS, ExpressJS, Gemini API, HTML/CSS)",
    link: "https://github.com/DaxManuel27/codesimplify",
    imageUrl: "/codesimplify-logo.png",
  },
  {
    title: "Premier League Sports Betting Model",
    description:
      "Python project that collects match data, trains Sci-Kit Learn models, and predicts Premier League outcomes for betting insights.",
    link: "https://github.com/DaxManuel27/model",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/800px-Premier_League_Logo.svg.png",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="group w-full sm:w-[550px] h-96 cursor-pointer">
      <div className="relative preserve-3d w-full h-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
        {/* Front Side */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-zinc-900/80 rounded-xl [backface-visibility:hidden] border border-[#b266ff]">
          <h3 className="text-4xl font-bold text-[#b266ff] text-center px-8">{project.title}</h3>
        </div>
        {/* Back Side */}
        <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center bg-[#b266ff] rounded-xl [transform:rotateY(180deg)] [backface-visibility:hidden] border border-[#b266ff] p-12">
          <p className="text-white text-center mb-8 text-xl leading-relaxed">{project.description}</p>
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-white font-semibold hover:text-zinc-200 transition-all flex items-center gap-2 text-xl"
            >
              View on GitHub
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section className="w-full py-32 bg-white/5">
      <div className="max-w-[1400px] mx-auto px-6">
        <h2 className="text-6xl font-bold text-[#b266ff] mb-20 text-center">
          Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center [perspective:1000px]">
          {dummyProjects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}