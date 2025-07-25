import React from "react";

interface Project {
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
}

const dummyProjects: Project[] = [
  {
    title: "CheetahCode",
    description:
      "Full stack web app for practicing and testing coding speed in real time. Features user authentication, RESTful APIs, and a responsive typing area. (ReactJS, NodeJs, ExpressJS, Supabase)",
    link: "https://github.com/DaxManuel27/cheetahcode", // Replace with actual URL if available
    imageUrl: "/cheetahcode-logo.png", // Placeholder, replace with actual logo if available
  },
  {
    title: "CodeSimplify Chrome Extension",
    description:
      "Chrome extension that provides real time code explanations using Gemini API. Full stack app with NodeJS, Express, and a sleek popup UI. (NodeJS, ExpressJS, Gemini API, HTML/CSS)",
    link: "https://github.com/DaxManuel27/codesimplify", // Replace with actual URL if available
    imageUrl: "/codesimplify-logo.png", // Placeholder, replace with actual logo if available
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

export default function Projects() {
  return (
    <div className="card card-hover animate-fade-in w-full max-w-4xl flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold text-text mb-8 text-center">
        Projects
      </h2>
      <div className="space-y-8 w-full">
        {dummyProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-black/20 rounded-xl p-6 hover:bg-black/40 transition-colors duration-300 border border-white/10"
          >
            <div className="flex flex-col md:flex-row items-center md:items-center gap-6">
              {project.imageUrl && (
                <div className="w-full md:w-1/4 flex-shrink-0 flex items-center justify-center">
                  <img
                    src={project.imageUrl}
                    alt={`${project.title} logo`}
                    className="w-full h-auto object-contain"
                  />
                </div>
              )}
              <div className="flex-grow text-left md:flex md:flex-col md:justify-center">
                <h3 className="text-xl font-semibold text-accent mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary">{project.description}</p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 