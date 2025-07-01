import React from "react";

interface Project {
  title: string;
  description: string;
  link?: string;
  imageUrl?: string;
}

const dummyProjects: Project[] = [
  {
    title: "Premier League Sports Betting Model",
    description:
      "Python project that collects match data, trains Sci-Kit Learn models, and predicts Premier League outcomes for betting insights.",
    link: "https://github.com/DaxManuel27/model",
    imageUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f2/Premier_League_Logo.svg/800px-Premier_League_Logo.svg.png",
  },
];

export default function Projects() {
  return (
    <div className="max-w-6xl mx-auto px-4 animate-fade-in">
      <h2 className="text-4xl font-semibold mb-12 text-accent text-center lowercase">projects</h2>
      <div className="grid gap-6">
        {dummyProjects.map((project) => (
          <a
            key={project.title}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 rounded-lg bg-primary hover:bg-primary/80 transition-colors border border-accent/20 md:flex md:items-center md:gap-8"
          >
            {project.imageUrl && (
              <div className="md:w-1/3 w-full flex-shrink-0 mb-4 md:mb-0 flex items-center justify-center">
                <img
                  src={project.imageUrl}
                  alt={`${project.title} logo`}
                  className="w-full h-40 object-contain"
                />
              </div>
            )}
            <div className="md:w-2/3 w-full">
              <h3 className="text-2xl font-medium mb-3 text-text">{project.title}</h3>
              <p className="text-lg text-text/80">{project.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 