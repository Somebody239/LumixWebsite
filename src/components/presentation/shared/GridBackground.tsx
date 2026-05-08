"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface GridBackgroundProps {
  color?: string;
  isometric?: boolean;
}

export default function GridBackground({ color = "rgba(128, 128, 128, 0.15)", isometric = false }: GridBackgroundProps) {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        style={
          {
            "--grid-color": color,
          } as React.CSSProperties
        }
        className={`absolute inset-0 h-[200%] w-[200%] -top-[50%] -left-[50%] bg-transparent bg-[linear-gradient(to_right,var(--grid-color)_1px,transparent_1px),linear-gradient(to_bottom,var(--grid-color)_1px,transparent_1px)] bg-[size:40px_40px] bg-center opacity-80 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_50%,transparent_100%)] ${
          isometric ? 'transform rotate-x-[60deg] rotate-z-[45deg] scale-150' : ''
        }`}
      />
    </div>
  );
}
