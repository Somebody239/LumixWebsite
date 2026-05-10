"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";
import GridBackground from "./shared/GridBackground";
import { Laptop, Zap, CheckCircle2 } from "lucide-react";

export default function Slide3_Solution({ step }: { step: number }) {
  return (
    <div className="relative w-full h-full bg-black text-white overflow-hidden">
      <GridBackground isometric color="rgba(255,255,255,0.05)" />
      
      <SlideContainer>
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
          
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", layout: { duration: 1, ease: "easeInOut" } }}
            className="text-center mb-12"
          >
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Enter Lumix</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Digital growth made simple and affordable.</h2>
            <p className="mt-4 text-xl text-zinc-400 font-light">We bring the website directly to them.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full items-stretch mt-4 max-w-5xl mx-auto">
            {/* Box 1 */}
            <div className="relative h-full min-h-[220px]">
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
                    className="p-8 h-full rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col text-center items-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6">
                      <Laptop size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Free Personalized Demos</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">We identify businesses with no presence, build a real working website, and present it directly.</p>
                  </motion.div>
            </div>

            {/* Box 2 */}
            <div className="relative h-full min-h-[220px]">
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="p-8 h-full rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col text-center items-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6">
                      <Zap size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Zero Effort Required</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">No countless hours spent building. Just open the demo, scroll, and instantly visualize the business online.</p>
                  </motion.div>
            </div>

            {/* Box 3 */}
            <div className="relative h-full min-h-[220px]">
                  <motion.div
                    initial={{ opacity: 0, filter: "blur(10px)", y: 10 }}
                    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                    transition={{ duration: 0.8, delay: 0.9, ease: "easeOut" }}
                    className="p-8 h-full rounded-2xl bg-zinc-950 border border-zinc-800 flex flex-col text-center items-center"
                  >
                    <div className="w-14 h-14 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-white mb-6">
                      <CheckCircle2 size={24} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">Seamless Handoff</h3>
                    <p className="text-zinc-400 text-sm leading-relaxed">Owners simply give feedback and approvals, while we handle all the technical work behind the scenes.</p>
                  </motion.div>
            </div>
          </div>

        </div>
      </SlideContainer>
    </div>
  );
}
