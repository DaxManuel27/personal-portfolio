import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

interface SocialLink {
  name: string;
  url: string;
  username: string;
  icon: React.ElementType;
}

const socials: SocialLink[] = [
  {
    name: "instagram",
    username: "@daxmanuell",
    url: "https://www.instagram.com/daxmanuell?igsh=MTIzbjdtaTNpeXQ4eg%3D%3D&utm_source=qr",
    icon: FaInstagram,
  },
  {
    name: "linkedin",
    username: "Nikolas Dax Manuel",
    url: "https://www.linkedin.com/in/nikolasdaxmanuel/",
    icon: FaLinkedin,
  },
  {
    name: "github",
    username: "DaxManuel27",
    url: "https://github.com/DaxManuel27",
    icon: FaGithub,
  },
];

export default function Contact() {
  return (
    <div className="card animate-fade-in text-center max-w-lg flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold text-text mb-4">Get In Touch</h2>
      <p className="text-lg text-text-secondary mb-8">
        Feel free to reach out for any opportunities, questions, or just to say
        hello!
      </p>
      <div className="flex justify-center gap-8">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-accent transition-colors"
            title={social.name.charAt(0).toUpperCase() + social.name.slice(1)}
          >
            <social.icon className="w-10 h-10" />
            <span className="sr-only">{social.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
} 