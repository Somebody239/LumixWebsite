"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Building2, Puzzle, X } from "lucide-react";
import SlideContainer from "./shared/SlideContainer";

export default function Slide2_Problem({ step }: { step: number }) {
  return (
    <div className="relative w-full h-full bg-black overflow-hidden text-white">
      <SlideContainer>
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
          
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", layout: { duration: 1, ease: "easeInOut" } }}
            className="mb-8"
          >
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Market Gap</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white">The two extremes of web design.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full mt-4 items-stretch">
            {/* Left: Traditional Agencies */}
            <div className="relative h-full">
              <AnimatePresence>
                {step >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-zinc-950 rounded-2xl p-8 md:p-10 border border-zinc-800 shadow-xl flex flex-col"
                  >
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 text-white rounded-full flex items-center justify-center mb-6">
                      <Building2 size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">Traditional Agencies</h3>
                    <ul className="space-y-4 flex-grow">
                      <li className="flex items-start">
                        <X size={20} className="text-zinc-500 mr-3 shrink-0" />
                        <span className="text-zinc-400">Charge $5k to $10k+ for basic sites</span>
                      </li>
                      <li className="flex items-start">
                        <X size={20} className="text-zinc-500 mr-3 shrink-0" />
                        <span className="text-zinc-400">Take 2 to 3 months to deliver</span>
                      </li>
                      <li className="flex items-start">
                        <X size={20} className="text-zinc-500 mr-3 shrink-0" />
                        <span className="text-zinc-400">Complex communication and bloat</span>
                      </li>
                    </ul>
                    <div className="mt-8 p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                      <p className="text-sm font-medium text-zinc-500">Result: <span className="text-white">Inaccessible to small businesses.</span></p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Right: DIY Builders */}
            <div className="relative h-full">
              <AnimatePresence>
                {step >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="h-full bg-zinc-950 rounded-2xl p-8 md:p-10 border border-zinc-800 shadow-xl flex flex-col"
                  >
                    <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 text-white rounded-full flex items-center justify-center mb-6">
                      <Puzzle size={24} />
                    </div>
                    <h3 className="text-2xl font-bold mb-4 text-white">DIY Template Builders</h3>
                    <ul className="space-y-4 flex-grow">
                      <li className="flex items-start">
                        <X size={20} className="text-zinc-500 mr-3 shrink-0" />
                        <span className="text-zinc-400">Generic designs that look like everyone else</span>
                      </li>
                      <li className="flex items-start">
                        <X size={20} className="text-zinc-500 mr-3 shrink-0" />
                        <span className="text-zinc-400">Poor SEO and technical performance</span>
                      </li>
                      <li className="flex items-start">
                        <X size={20} className="text-zinc-500 mr-3 shrink-0" />
                        <span className="text-zinc-400">High hidden costs in time and subscriptions</span>
                      </li>
                    </ul>
                    <div className="mt-8 p-4 bg-zinc-900 rounded-lg border border-zinc-800">
                      <p className="text-sm font-medium text-zinc-500">Result: <span className="text-white">Low conversion rates and brand damage.</span></p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </SlideContainer>
    </div>
  );
}
