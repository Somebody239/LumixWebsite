"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface GridBackgroundProps {
  color?: string;
  isometric?: boolean;
}

export default function GridBackground({ color = "rgba(255, 255, 255, 0.05)", isometric = false }: GridBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        style={
          {
            "--grid-color": color,
          } as React.CSSProperties
        }
        className={`absolute inset-0 h-[300%] w-[300%] -top-[100%] -left-[100%] bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:60px_60px] bg-center opacity-40 [mask-image:radial-gradient(ellipse_70%_70%_at_50%_50%,#000_20%,transparent_100%)] ${
          isometric ? 'transform rotate-x-[60deg] rotate-z-[45deg] scale-150' : ''
        }`}
      />
    </div>
  );
}
