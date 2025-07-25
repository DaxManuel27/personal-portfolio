"use client";
import React, { useEffect, useRef } from "react";

const TAIL_LENGTH = 12;

const CustomCursor = () => {
  const cursorRef = useRef<HTMLDivElement | null>(null);
  const tailRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let currentX = 0, currentY = 0;
    let raf: number;
    const tail: { x: number; y: number }[] = Array(TAIL_LENGTH).fill({ x: 0, y: 0 });

    const animate = () => {
      currentX += (mouseX - currentX) * 0.18;
      currentY += (mouseY - currentY) * 0.18;
      // Update tail positions
      tail.unshift({ x: currentX, y: currentY });
      if (tail.length > TAIL_LENGTH) tail.pop();

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${currentX - 24}px, ${currentY - 24}px, 0)`;
      }
      // Draw tail
      tailRefs.current.forEach((el, i) => {
        if (el) {
          const t = tail[i + 1] || tail[tail.length - 1];
          el.style.transform = `translate3d(${t.x - 24}px, ${t.y - 24}px, 0)`;
          el.style.opacity = `${1 - i / (TAIL_LENGTH + 2)}`;
        }
      });
      raf = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    document.addEventListener("mousemove", handleMouseMove);
    raf = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      {/* Tail segments */}
      {Array.from({ length: TAIL_LENGTH }).map((_, i) => (
        <div
          key={i}
          ref={el => { tailRefs.current[i] = el; }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: 48,
            height: 48,
            pointerEvents: "none",
            zIndex: 9998,
            mixBlendMode: "lighten",
            transition: "opacity 0.2s linear",
          }}
        >
          <div
            style={{
              width: 48,
              height: 48,
              borderRadius: "50%",
              background: "rgba(0,229,255,0.10)",
              border: "2px solid #00E5FF",
              boxShadow: "0 0 24px 8px #00E5FF22",
              position: "absolute",
              top: 0,
              left: 0,
            }}
          />
        </div>
      ))}
      {/* Main cursor */}
      <div
        ref={cursorRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: 48,
          height: 48,
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "lighten",
        }}
      >
        <div
          style={{
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(0,229,255,0.15)",
            border: "2px solid #00E5FF",
            boxShadow: "0 0 24px 8px #00E5FF44",
            position: "absolute",
            top: 0,
            left: 0,
          }}
        />
        <div
          style={{
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: "#00E5FF",
            position: "absolute",
            top: 20,
            left: 20,
          }}
        />
      </div>
    </>
  );
};

export default CustomCursor; 