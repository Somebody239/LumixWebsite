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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
              Let's build something remarkable.
            </h1>
          </motion.div>

          <AnimatePresence>
            {step >= 1 && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="max-w-2xl"
              >
                <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                  We are looking for builders, thinkers, and people who want to own what they create.
                </p>
                <div className="grid grid-cols-3 gap-6 text-sm font-bold tracking-widest uppercase text-zinc-500">
                  <span>Autonomy</span>
                  <span>Impact</span>
                  <span>Upside</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </SlideContainer>
    </div>
  );
}
