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

  return (
    <div className="flex flex-col items-center justify-center h-screen w-full select-none">
      <h1 className="text-6xl md:text-7xl font-bold mb-6" style={{ color: "#00E5FF" }}>
        Dax Manuel
      </h1>
      <h2 className="text-2xl md:text-3xl font-medium text-text-secondary min-h-[2.5em]">
        {displayed}
        <span className="animate-pulse">|</span>
      </h2>
    </div>
  );
} 