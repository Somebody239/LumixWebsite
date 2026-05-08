"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";
import VortexBackground from "./shared/VortexBackground";

export default function Slide1_Hook({ step }: { step: number }) {
  return (
    <div className="relative w-full h-full bg-black text-white overflow-hidden">
      <VortexBackground />
      <SlideContainer>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", layout: { duration: 1, ease: "easeInOut" } }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-6 text-white">
              Lumix Design
            </h1>
            <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-2xl mx-auto">
              Websites that actually work.
            </p>
          </motion.div>

          <AnimatePresence mode="wait">
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                exit={{ opacity: 0, filter: "blur(10px)" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mt-16 max-w-3xl"
              >
                <p className="text-lg md:text-xl text-zinc-300 font-light italic leading-relaxed">
                  "Most small businesses are forced to choose between <span className="text-white font-medium">expensive agencies</span> that overcharge, or <span className="text-white font-medium">generic templates</span> that fail to convert."
                </p>
                <div className="mt-8 h-px w-24 bg-gradient-to-r from-transparent via-zinc-500 to-transparent mx-auto opacity-50" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SlideContainer>
    </div>
  );
}
