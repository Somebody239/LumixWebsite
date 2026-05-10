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
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="w-full max-w-6xl mx-auto flex flex-col items-center justify-center pt-8"
          >
            <div className="mb-16 text-center">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 text-white">
                Lumix Design
              </h1>
              <p className="text-xl md:text-2xl text-zinc-400 font-light">
                Websites that actually work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 w-full">
              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                className="text-center md:text-left"
              >
                <h2 className="text-7xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                  87%
                </h2>
                <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                  of Canadian businesses are local and contribute almost <span className="text-white font-medium">half of Canada's private-sector GDP</span>.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                className="text-center md:text-left"
              >
                <h2 className="text-7xl md:text-8xl font-bold tracking-tighter text-white mb-4">
                  94%
                </h2>
                <p className="text-xl md:text-2xl text-zinc-300 font-light leading-relaxed">
                  of consumers use online listings to find local businesses.
                </p>
                <p className="mt-6 text-lg text-zinc-500 font-light italic border-l-2 border-zinc-800 pl-4">
                  "If a business doesn’t exist online, many assume it doesn’t exist at all."
                </p>
              </motion.div>
            </div>
          </motion.div>


        </div>
      </SlideContainer>
    </div>
  );
}
