import Image from "next/image";
import React from "react";

interface AboutProps {
  name?: string;
  bio?: string;
}

export default function About({
  name = "Dax Manuel",
  bio = "Tech, AI, and Business.",
  bio1 = "Hi, I'm Dax. Currently a UNB Men's Varsity Soccer Player and Software Engineering Student. Feel free to reach out to connect and chat about any projects, ideas, or just to say hi!"
}: AboutProps) {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start text-center md:text-left px-4 gap-12 max-w-5xl animate-fade-in">
      <div className="relative w-72 h-72 shrink-0 rounded-full overflow-hidden border-4 border-accent mb-8 md:mb-0 md:mt-6">
        <Image
          src="/IMG_5580.jpg"
          alt="Profile picture"
          fill
          style={{ objectFit: "cover", objectPosition: "center 25%" }}
        />
      </div>
      <div>
        <h1 className="text-5xl font-bold mb-6 text-accent leading-tight">{name}</h1>
        <h2 className="text-2xl font-bold mb-6 text-accent leading-tight">Software Engineering Student @ UNB</h2>
        <p className="text-2xl leading-relaxed text-text/80 max-w-prose">{bio}</p>
        <p className="text-xl leading-relaxed text-text/80 max-w-prose">{bio1}</p>
      </div>
    </div>
  );
} 