"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

export default function Slide2_Problem({ step }: { step: number }) {
  return (
    <div className="relative w-full h-full bg-zinc-50 overflow-hidden text-zinc-900">
      <SlideContainer>
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Market Gap</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The two extremes of web design.</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 w-full h-full min-h-[400px]">
            {/* Left: Traditional Agencies */}
            <div className="relative h-full">
              <AnimatePresence>
                {step >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-white rounded-2xl p-8 border border-zinc-200 shadow-sm flex flex-col justify-center"
                  >
                    <div className="w-12 h-12 bg-red-100 text-red-600 rounded-full flex items-center justify-center mb-6 text-xl">🏢</div>
                    <h3 className="text-2xl font-bold mb-4">Traditional Agencies</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3">✕</span>
                        <span className="text-zinc-600">Charge $5k - $10k+ for basic sites</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3">✕</span>
                        <span className="text-zinc-600">Take 2-3 months to deliver</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 mr-3">✕</span>
                        <span className="text-zinc-600">Complex communication & bloat</span>
                      </li>
                    </ul>
                    <div className="mt-8 p-4 bg-zinc-50 rounded-lg border border-zinc-100">
                      <p className="text-sm font-medium text-zinc-500">Result: <span className="text-zinc-900">Inaccessible to small businesses.</span></p>
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
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 bg-zinc-900 text-white rounded-2xl p-8 shadow-xl flex flex-col justify-center"
                  >
                    <div className="w-12 h-12 bg-amber-500/20 text-amber-500 rounded-full flex items-center justify-center mb-6 text-xl">🧩</div>
                    <h3 className="text-2xl font-bold mb-4">DIY Template Builders</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-3">✕</span>
                        <span className="text-zinc-300">Generic designs that look like everyone else</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-3">✕</span>
                        <span className="text-zinc-300">Poor SEO and technical performance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-amber-500 mr-3">✕</span>
                        <span className="text-zinc-300">High hidden costs in time & subscriptions</span>
                      </li>
                    </ul>
                    <div className="mt-8 p-4 bg-zinc-800 rounded-lg border border-zinc-700">
                      <p className="text-sm font-medium text-zinc-400">Result: <span className="text-white">Low conversion rates and brand damage.</span></p>
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
