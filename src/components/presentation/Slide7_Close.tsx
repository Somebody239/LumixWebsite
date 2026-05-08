"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";
import VortexBackground from "./shared/VortexBackground";

export default function Slide7_Close({ step }: { step: number }) {
  return (
    <div className="relative w-full h-full bg-black text-white overflow-hidden">
      {/* Passing reverse to make the vortex expand instead of contract */}
      <VortexBackground reverse />
      
      <SlideContainer>
        <div className="relative z-10 flex flex-col items-center justify-center text-center h-full px-4">
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Let's build something remarkable.
            </h1>
          </motion.div>

          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                className="max-w-2xl"
              >
                <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                  We are looking for builders, thinkers, and people who want to own what they create.
                </p>
                <div className="grid grid-cols-3 gap-6 text-sm font-bold tracking-widest uppercase text-zinc-500">
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5, duration: 1 }}>Autonomy</motion.span>
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.0, duration: 1 }}>Impact</motion.span>
                  <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5, duration: 1 }}>Upside</motion.span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SlideContainer>
    </div>
  );
}
