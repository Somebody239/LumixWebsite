"use client";

import { motion, AnimatePresence } from "framer-motion";
import SlideContainer from "./shared/SlideContainer";
import Image from "next/image";

export default function Slide6_Risks({ step }: { step: number }) {
  // Using Slide6_Risks component name but repurposing for Traction as per plan
  return (
    <div className="relative w-full h-full bg-black text-white overflow-hidden flex items-start justify-center pt-24">
      <SlideContainer>
        <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center justify-start h-full">
          
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", layout: { duration: 1, ease: "easeInOut" } }}
            className="text-center mb-12"
          >
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Real Progress</span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Early Traction.</h2>
          </motion.div>

          <div className="flex flex-col w-full gap-8">
            
            {/* Stats Row */}
            <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto w-full">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="flex flex-col items-center justify-center p-8 rounded-2xl bg-zinc-950 border border-zinc-800"
                  >
                    <span className="text-6xl md:text-7xl font-bold text-white mb-2">30</span>
                    <span className="text-zinc-400 text-sm uppercase tracking-widest text-center">Businesses Contacted<br/>(1 Day)</span>
                  </motion.div>
              
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="flex flex-col items-center justify-center p-8 rounded-2xl bg-zinc-950 border border-zinc-800"
                  >
                    <span className="text-6xl md:text-7xl font-bold text-white mb-2">2</span>
                    <span className="text-zinc-400 text-sm uppercase tracking-widest text-center">Paying Customers<br/>(~$250 avg)</span>
                  </motion.div>
            </div>

            {/* Showcase Row */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4 w-full"
                >
                  {/* Stelsae Maison */}
                  <div className="flex flex-col overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800">
                    <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                      <div className="mx-auto text-xs text-zinc-500 font-mono">stelsaemaison.com</div>
                    </div>
                    <div className="relative w-full aspect-[16/10] bg-zinc-900">
                      <Image 
                        src="/images/previews/STÉLSAÉ MAISON.png" 
                        alt="Stelsae Maison Website" 
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                      <h4 className="font-bold text-lg text-white">Stelsae Maison</h4>
                      <p className="text-zinc-400 text-sm">Jewellery Startup</p>
                    </div>
                  </div>

                  {/* M5 Catering */}
                  <div className="flex flex-col overflow-hidden rounded-2xl bg-zinc-950 border border-zinc-800">
                    <div className="h-8 bg-zinc-900 border-b border-zinc-800 flex items-center px-4 gap-2">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-amber-500/50" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                      <div className="mx-auto text-xs text-zinc-500 font-mono">m5catering.ca</div>
                    </div>
                    <div className="relative w-full aspect-[16/10] bg-zinc-900">
                      <Image 
                        src="/images/previews/M5 Catering.png" 
                        alt="M5 Catering Website" 
                        fill
                        className="object-cover object-top"
                      />
                    </div>
                    <div className="p-4 bg-zinc-950 border-t border-zinc-800">
                      <h4 className="font-bold text-lg text-white">M5 Catering</h4>
                      <p className="text-zinc-400 text-sm">Catering Service • Milton, ON</p>
                    </div>
                  </div>
                </motion.div>

          </div>

        </div>
      </SlideContainer>
    </div>
  );
}
