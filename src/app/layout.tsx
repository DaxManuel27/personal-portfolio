import "../styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Personal Portfolio",
  description: "My personal portfolio site",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-background text-text">
        <Navbar />
        {children}
      </body>
    </html>
  );
} 