import Image from "next/image";
import React from "react";

interface AboutProps {
  name?: string;
  bio?: string;
  bio1?: string;
}

export default function About({
  name = "Dax Manuel",
  bio = "Tech, AI, and Business.",
  bio1 = "Hi, I'm Dax. Currently a UNB Men's Varsity Soccer Player and Software Engineering Student. Feel free to reach out to connect and chat about any projects, ideas, or just to say hi!",
}: AboutProps) {
  return (
    <div className="card animate-fade-in flex flex-col items-center justify-center h-full">
      <div className="flex flex-col md:flex-row items-center md:items-center text-center md:text-left gap-8">
        <div className="relative w-48 h-48 md:w-60 md:h-60 shrink-0 rounded-full overflow-hidden border-4 border-accent/50">
          <Image
            src="/IMG_5580.jpg"
            alt="Profile picture"
            fill
            style={{ objectFit: "cover", objectPosition: "center 25%" }}
            priority
          />
        </div>
        <div className="flex-grow md:flex md:flex-col md:justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-accent leading-tight mb-2">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl font-semibold text-text-secondary mb-4">
            Software Engineering Student @ UNB
          </h2>
          <p className="text-lg text-text-secondary max-w-prose mb-2">{bio}</p>
          <p className="text-lg text-text-secondary max-w-prose">{bio1}</p>
        </div>
      </div>
    </div>
  );
} 