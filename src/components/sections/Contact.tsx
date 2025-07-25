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
    <section className="relative w-full min-h-screen flex items-center justify-center py-20">
      <div className="max-w-[1400px] w-full mx-auto px-6 text-center">
        <h2 className="text-6xl font-bold text-purple-300 mb-10">Get In Touch</h2>
        <p className="text-xl text-white/80 mb-12 max-w-2xl mx-auto">
          Feel free to reach out for any opportunities, questions, or just to say
          hello!
        </p>
        <div className="flex flex-wrap justify-center gap-12">
          {socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-300 hover:text-purple-400 transition-colors"
              title={social.name.charAt(0).toUpperCase() + social.name.slice(1)}
            >
              <social.icon className="w-14 h-14" />
              <span className="sr-only">{social.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
} 