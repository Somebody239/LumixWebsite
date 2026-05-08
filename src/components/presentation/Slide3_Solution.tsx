"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";
import GridBackground from "./shared/GridBackground";

export default function Slide3_Solution({ step }: { step: number }) {
  const steps = [
    { title: "Bespoke Design", desc: "Built from scratch. No templates." },
    { title: "High Performance", desc: "React/Next.js foundation for speed." },
    { title: "Accessible Pricing", desc: "Starting at $219.99." },
    { title: "Fast Delivery", desc: "Shipped in 2-4 weeks." },
  ];

  return (
    <div className="relative w-full h-full bg-zinc-950 text-white overflow-hidden">
      <GridBackground isometric color="rgba(255,255,255,0.05)" />
      
      <SlideContainer>
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">The Solution</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">The Lumix Model</h2>
            <p className="mt-4 text-xl text-zinc-400 font-light">Premium quality. Zero bloat.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {steps.map((s, i) => (
              <div key={i} className="min-h-[160px] relative">
                <AnimatePresence>
                  {step > i && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="absolute inset-0 p-6 rounded-2xl bg-white/5 border border-white/10"
                    >
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-sm font-bold mb-4">
                        {i + 1}
                      </div>
                      <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                      <p className="text-zinc-400 text-sm">{s.desc}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="mt-16 h-[100px] relative w-full max-w-2xl mx-auto">
            <AnimatePresence>
              {step >= 5 && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0 p-1 rounded-xl bg-gradient-to-r from-zinc-800 via-zinc-400 to-zinc-800"
                >
                  <div className="bg-zinc-950 h-full w-full px-8 py-6 rounded-lg text-center flex items-center justify-center">
                    <p className="text-lg font-medium">We deliver agency-quality work at freelancer prices by standardizing our internal processes, not our designs.</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </div>
      </SlideContainer>
    </div>
  );
}
