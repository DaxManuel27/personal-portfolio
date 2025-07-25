import "../styles/globals.css";
import type { Metadata } from "next";
import React from "react";
import Navbar from "@/components/Navbar";
import MatrixBackground from "@/components/MatrixBackground";
import CustomCursor from "@/components/CustomCursor";

export const metadata: Metadata = {
  title: "Dax Manuel | Software Engineering Student",
  description: "Personal portfolio of Dax Manuel, a software engineering student at UNB.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-background text-text">
        <CustomCursor />
        <MatrixBackground />
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
} 