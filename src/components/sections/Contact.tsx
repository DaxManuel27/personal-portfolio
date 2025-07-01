import React from "react";

interface SocialLink {
  name: string;
  url: string;
  username: string;
  imageUrl: string;
}

const socials: SocialLink[] = [
  {
    name: "instagram",
    username: "@daxmanuell",
    url: "https://www.instagram.com/daxmanuell?igsh=MTIzbjdtaTNpeXQ4eg%3D%3D&utm_source=qr",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png",
  },
  {
    name: "linkedin",
    username: "Nikolas Dax Manuel",
    url: "https://www.linkedin.com/in/nikolasdaxmanuel/",
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
  },
  {
    name: "github",
    username: "DaxManuel27",
    url: "https://github.com/DaxManuel27",
    imageUrl: "https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png",
  },
];

export default function Contact() {
  return (
    <div className="flex flex-col items-center px-4 text-center animate-fade-in">
      <h2 className="text-4xl font-semibold mb-8 text-accent lowercase">contact</h2>
      <p className="mb-6 text-lg text-text/80 max-w-prose">Feel free to reach out to me on any of these platforms:</p>
      <div className="grid gap-6 w-full max-w-md">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 p-4 rounded-lg bg-primary hover:bg-primary/80 transition-colors border border-accent/20"
          >
            <img
              src={social.imageUrl}
              alt={`${social.name} logo`}
              className="w-10 h-10 object-contain flex-shrink-0"
              style={{ minWidth: "2.5rem" }}
            />
            <div className="flex flex-col text-left items-start">
              <span className="text-text font-medium">{social.name.charAt(0).toUpperCase() + social.name.slice(1)}</span>
              <span className="text-text/70 text-sm">{social.username}</span>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
} 