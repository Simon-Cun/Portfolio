"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

type Sparkle = {
  id: number;
  x: number;
  y: number;
  dx: number;
  dy: number;
  size: number;
};

const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    fill="white"
    {...props}
  >
    <path d="M12 2 L13.5 10.5 L22 12 L13.5 13.5 L12 22 L10.5 13.5 L2 12 L10.5 10.5 Z" />
  </svg>
);

export default function ClickSparkles() {
  const [sparkles, setSparkles] = useState<Sparkle[]>([]);

  const handleClick = (e: MouseEvent) => {
    const newSparkles: Sparkle[] = [];

    for (let i = 0; i < 12; i++) {
      const angle = Math.random() * 2 * Math.PI;
      const distance = 50 + Math.random() * 50;
      const size = 6 + Math.random() * 10;

      newSparkles.push({
        id: Date.now() + i,
        x: e.clientX,
        y: e.clientY,
        dx: Math.cos(angle) * distance,
        dy: Math.sin(angle) * distance,
        size,
      });
    }

    setSparkles((prev) => [...prev, ...newSparkles]);
  };

  useEffect(() => {
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  useEffect(() => {
    if (sparkles.length === 0) return;
    const timer = setTimeout(() => {
      setSparkles([]);
    }, 1400); // ⏳ increased from 800ms
    return () => clearTimeout(timer);
  }, [sparkles]);

  return (
    <>
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="pointer-events-none fixed z-[9999]"
          initial={{
            opacity: 1,
            scale: 1,
            rotate: Math.random() * 360,
            x: 0,
            y: 0,
          }}
          animate={{
            opacity: 0,
            scale: 2,
            rotate: 90,
            x: sparkle.dx,
            y: sparkle.dy,
          }}
          transition={{
            duration: 1.2, // 🐢 slower and longer
            ease: "easeOut",
          }}
          style={{
            left: sparkle.x,
            top: sparkle.y,
            width: sparkle.size,
            height: sparkle.size,
            filter: "drop-shadow(0 0 6px white)", // ✨ glow effect
          }}
        >
          <Star width={sparkle.size} height={sparkle.size} />
        </motion.div>
      ))}
    </>
  );
}
