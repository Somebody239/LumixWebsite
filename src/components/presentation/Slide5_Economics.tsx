"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

export default function Slide5_Economics({ step }: { step: number }) {
  return (
    <div className="relative w-full h-full bg-black text-white overflow-hidden flex items-center justify-center">
      <SlideContainer>
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full">
          
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", layout: { duration: 1, ease: "easeInOut" } }}
            className="text-center mb-16"
          >
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Pricing</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Affordable Excellence.</h2>
          </motion.div>

          {/* Pricing Comparison */}
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center w-full max-w-4xl">
            
            {/* Traditional */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, x: -20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full md:w-1/2 p-10 rounded-2xl bg-zinc-950 border border-zinc-800 text-center relative overflow-hidden"
            >
              <h3 className="text-xl font-bold text-zinc-400 mb-6 uppercase tracking-wider">Traditional Agencies</h3>
              <div className="flex items-start justify-center gap-2 mb-2 text-zinc-500 line-through decoration-zinc-700 decoration-2">
                <span className="text-3xl mt-1">$</span>
                <span className="text-6xl md:text-7xl font-bold">2,000</span>
                <span className="text-3xl self-end mb-2">+</span>
              </div>
              <p className="text-zinc-500 text-sm">Up to $5,000 for a basic website.</p>
            </motion.div>

            {/* VS Badge */}
            <div className="w-12 h-12 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-500 font-bold absolute z-10 mx-auto md:relative shrink-0">
              VS
            </div>

            {/* Lumix */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, x: 20 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="w-full md:w-1/2 p-10 rounded-2xl bg-gradient-to-b from-zinc-900 to-black border border-zinc-600 shadow-2xl shadow-zinc-900/50 text-center relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out" />
                  
                  <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-wider">Lumix</h3>
                  <div className="flex items-start justify-center gap-2 mb-2 text-white">
                    <span className="text-3xl mt-1 text-zinc-400">$</span>
                    <span className="text-6xl md:text-7xl font-bold">200</span>
                    <span className="text-3xl self-end mb-2 text-zinc-400">- $500</span>
                  </div>
                  <p className="text-zinc-400 text-sm">Professional, customized, and live.</p>
                </motion.div>

          </div>

              <motion.div
                initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="mt-20 text-center"
              >
                <h3 className="text-3xl md:text-4xl font-light text-zinc-300">
                  Stop being overlooked.<br/>
                  <span className="font-bold text-white tracking-tight">Start being discovered.</span>
                </h3>
              </motion.div>

        </div>
      </SlideContainer>
    </div>
  );
}
