"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";

export default function Slide4_Technical({ step }: { step: number }) {
  return (
    <div className="relative w-full h-full bg-[#0a0a0a] text-zinc-300 overflow-hidden font-mono">
      {/* Background Code pattern */}
      <div className="absolute inset-0 opacity-[0.03] text-[10px] leading-tight overflow-hidden break-words whitespace-pre-wrap">
        {Array.from({ length: 50 }).map(() => `import { Component } from 'react';\nexport function Build() { return <Scale /> }\nconst stack = ['Next.js', 'Tailwind', 'Vercel'];\n`).join('')}
      </div>

      <SlideContainer>
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <span className="text-teal-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block font-sans">The Engine</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight font-sans">Technical Superiority</h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { title: "React & Next.js Foundation", desc: "We don't use WordPress or Wix. We build on the same stack used by Netflix and Notion. This means zero bloat, instant page loads, and perfect SEO." },
                { title: "Modular Component Library", desc: "Instead of starting from zero every time, we've built a proprietary library of highly-optimized React components. We assemble the architecture, then customize the paint." },
                { title: "Edge Deployment", desc: "Sites are hosted on Vercel's Edge Network. Content is served from the data center closest to the user in milliseconds." }
              ].map((item, i) => (
                <div key={i} className="min-h-[100px] relative">
                  <AnimatePresence>
                    {step > i && (
                      <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5 }}
                        className="border-l-2 border-teal-500/50 pl-6"
                      >
                        <h3 className="text-white text-lg font-bold font-sans mb-2">{item.title}</h3>
                        <p className="text-sm font-sans text-zinc-400">{item.desc}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>

            <div className="relative h-full flex items-center justify-center">
              <AnimatePresence>
                {step >= 4 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="w-full bg-[#111] rounded-xl border border-zinc-800 shadow-2xl p-6"
                  >
                    <div className="flex gap-2 mb-6">
                      <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
                      <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/50" />
                      <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
                    </div>
                    <div className="space-y-2 text-sm text-teal-400/80">
                      <p><span className="text-pink-500">const</span> <span className="text-blue-400">advantage</span> = {'{'}</p>
                      <p className="pl-4">speed: <span className="text-amber-300">"99/100 Lighthouse"</span>,</p>
                      <p className="pl-4">scale: <span className="text-amber-300">"Infinite"</span>,</p>
                      <p className="pl-4">maintenance: <span className="text-amber-300">"Zero"</span></p>
                      <p>{'}'};</p>
                      <br/>
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.5, duration: 0.5 }}
                        className="text-zinc-500"
                      >
                        // The technical moat is our speed to delivery.
                      </motion.p>
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
