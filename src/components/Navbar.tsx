import React from "react";
import Link from "next/link";

const links = [
  { href: "/about", label: "about" },
  { href: "/projects", label: "projects" },
  { href: "/resume", label: "resume" },
  { href: "/contact", label: "contact" },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-end gap-6 text-text font-medium">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="hover:text-accent transition-colors duration-200 lowercase"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
} 