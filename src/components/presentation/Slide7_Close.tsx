"use client";

import { motion } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";
import VortexBackground from "./shared/VortexBackground";

export default function Slide7_Close({ step }: { step: number }) {
  return (
    <div className="relative w-full h-full bg-black text-white overflow-hidden flex items-center justify-center">
      <VortexBackground />
      <SlideContainer>
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
          
          <motion.div
            layout
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="text-center"
          >
            <div className="w-24 h-24 rounded-full bg-white text-black flex items-center justify-center text-4xl font-black tracking-tighter mx-auto mb-8 shadow-[0_0_100px_rgba(255,255,255,0.3)]">
              Lx
            </div>
            <h2 className="text-5xl md:text-8xl font-bold tracking-tighter text-white mb-6">
              Thank You.
            </h2>
            <p className="text-xl md:text-2xl text-zinc-400 font-light">
              Questions?
            </p>
          </motion.div>

        </div>
      </SlideContainer>
    </div>
  );
}
