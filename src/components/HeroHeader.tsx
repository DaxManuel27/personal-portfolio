"use client";
import React, { useEffect, useRef, useState } from "react";

const TYPING_TEXT = "Software Engineering student @ UNB";
const TYPING_SPEED = 60;
const DELAY_BEFORE_RESTART = 2000; // 2 seconds delay before restarting

export default function HeroHeader() {
  const [displayed, setDisplayed] = useState("");
  const i = useRef(0);

  useEffect(() => {
    const typeText = () => {
      setDisplayed("");
      i.current = 0;
      const interval = setInterval(() => {
        if (i.current < TYPING_TEXT.length) {
          setDisplayed(TYPING_TEXT.substring(0, i.current + 1));
          i.current++;
        } else {
          clearInterval(interval);
          // Wait before restarting
          setTimeout(typeText, DELAY_BEFORE_RESTART);
        }
      }, TYPING_SPEED);
    };

    typeText();
  }, []);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/oct16.pdf';
    link.download = 'DaxManuel_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactMe = () => {
    const contactSection = document.getElementById("contact");
    contactSection?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full select-none">
      <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: "#00E5FF" }}>
        Dax Manuel
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-text-secondary min-h-[2.5em] mb-12">
        {displayed}
        <span className="animate-pulse">|</span>
      </h2>
      <div className="flex flex-col sm:flex-row gap-4 items-center">
        <button
          onClick={handleDownloadResume}
          className="group relative px-8 py-4 bg-gradient-to-r from-[#b266ff] to-[#00E5FF] rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#b266ff]/25 active:scale-95"
        >
          <span className="relative z-10">Download Resume</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF] to-[#b266ff] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </button>
        <button
          onClick={handleContactMe}
          className="group relative px-8 py-4 bg-transparent rounded-full text-white font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#b266ff]/25 active:scale-95"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#b266ff] to-[#00E5FF] p-[2px]">
            <div className="w-full h-full bg-black rounded-full"></div>
          </div>
          <span className="relative z-10 bg-gradient-to-r from-[#b266ff] to-[#00E5FF] bg-clip-text text-transparent">Contact Me</span>
        </button>
      </div>
    </div>
  );
} 