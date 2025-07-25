"use client"; // This remains a client component because of the scroll effect logic we'll add
import React from "react";
import Link from "next/link"; // We can still use Next's Link for the home button

const links = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#resume", label: "Resume" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    const href = e.currentTarget.href;
    const targetId = href.replace(/.*#/, "");
    const elem = document.getElementById(targetId);
    elem?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black/30 backdrop-blur-lg z-50 border-b border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="#about" onClick={handleScroll} className="text-2xl font-bold text-accent">
              Dax Manuel
            </a>
          </div>
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleScroll}
                className="font-medium text-text-secondary hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
} 