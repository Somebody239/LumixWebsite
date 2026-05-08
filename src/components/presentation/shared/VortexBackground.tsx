"use client";

import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export default function VortexBackground({ reverse = false }: { reverse?: boolean }) {
  // Generate an array of path data objects for the vortex effect
  const paths = useMemo(() => Array.from({ length: 150 }, (_, i) => {
    const startAngle = Math.random() * Math.PI * 2; 
    const startRadius = 300 + Math.random() * 600; 

    // Calculate the starting point of the path
    const startX = 500 + startRadius * Math.cos(startAngle);
    const startY = 300 + startRadius * Math.sin(startAngle) * 0.5; 

    const endX = 500;
    const endY = 300;

    const twist = Math.PI / 2 + (Math.random() - 0.5) * Math.PI / 2;
    const cp1Angle = startAngle - twist;
    const cp1Radius = startRadius * 0.7;
    const cp1x = 500 + cp1Radius * Math.cos(cp1Angle);
    const cp1y = 300 + cp1Radius * Math.sin(cp1Angle) * 0.6;

    const cp2Angle = startAngle - twist / 2;
    const cp2Radius = startRadius * 0.3;
    const cp2x = 500 + cp2Radius * Math.cos(cp2Angle);
    const cp2y = 300 + cp2Radius * Math.sin(cp2Angle) * 0.8;

    return {
      id: i,
      d: reverse 
        ? `M ${endX} ${endY} C ${cp2x} ${cp2y}, ${cp1x} ${cp1y}, ${startX} ${startY}`
        : `M ${startX} ${startY} C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${endX} ${endY}`,
      width: 0.2 + Math.random() * 0.5,
      opacity: 0.02 + Math.random() * 0.1, // Dimmed
      duration: 10 + Math.random() * 15, // Slower, more fluid
      delay: Math.random() * 10,
    };
  }), [reverse]);

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <svg
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200vw] h-[200vh] text-zinc-500"
        viewBox="0 0 1000 600"
        fill="none"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <radialGradient id="vortexGradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
            <stop offset="0%" stopColor="rgba(0,0,0,1)" />
            <stop offset="20%" stopColor="rgba(5,5,5,1)" />
            <stop offset="60%" stopColor="rgba(10,10,12,0.8)" />
            <stop offset="100%" stopColor="rgba(10,10,12,0)" />
          </radialGradient>
        </defs>

        <circle cx="500" cy="300" r="100" fill="url(#vortexGradient)" />
        <circle cx="500" cy="300" r="3" fill="black" />

        {paths.map((path) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke="currentColor"
            strokeWidth={path.width}
            strokeOpacity={path.opacity}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{
              pathLength: 1,
              opacity: [0, 0.5, 0], 
            }}
            transition={{
              duration: path.duration,
              repeat: Infinity,
              ease: "linear",
              delay: path.delay,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
