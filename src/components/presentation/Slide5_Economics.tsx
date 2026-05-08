"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

export default function Slide5_Economics({ step }: { step: number }) {
  return (
    <div className="relative w-full h-full bg-white text-zinc-900 overflow-hidden">
      <SlideContainer>
        <div className="relative z-10 w-full h-full flex flex-col justify-center items-center text-center">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <span className="text-green-600 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Opportunity</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Economics</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-5xl">
            {/* Metric 1 */}
            <div className="min-h-[200px] relative">
              <AnimatePresence>
                {step >= 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center h-full"
                  >
                    <div className="text-5xl font-bold text-zinc-900 mb-2">32M+</div>
                    <p className="text-zinc-500 font-medium">Small Businesses in NA</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Metric 2 */}
            <div className="min-h-[200px] relative">
              <AnimatePresence>
                {step >= 2 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-3xl bg-zinc-50 border border-zinc-100 flex flex-col items-center justify-center h-full"
                  >
                    <div className="text-5xl font-bold text-zinc-900 mb-2">80%</div>
                    <p className="text-zinc-500 font-medium">Gross Margins</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Metric 3 */}
            <div className="min-h-[200px] relative">
              <AnimatePresence>
                {step >= 3 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-8 rounded-3xl bg-green-50 border border-green-100 flex flex-col items-center justify-center h-full"
                  >
                    <div className="text-5xl font-bold text-green-700 mb-2">Equity</div>
                    <p className="text-green-800/70 font-medium">For First 5 Hires</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          <div className="mt-16 h-20 relative w-full max-w-3xl">
            <AnimatePresence>
              {step >= 4 && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0 text-xl text-zinc-600 font-light"
                >
                  "We are targeting the largest, most underserved market in the world. And we are giving the people who build it a real piece of the pie."
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </SlideContainer>
    </div>
  );
}
