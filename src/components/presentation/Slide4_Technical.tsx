"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Search, Share2, Paintbrush, Globe } from "lucide-react";
import SlideContainer from "./shared/SlideContainer";

export default function Slide4_Technical({ step }: { step: number }) {
  const sources = [
    { id: 1, icon: <Search size={24} />, label: "Google Listings", color: "from-blue-500/20 to-blue-900/20", border: "border-blue-500/30", text: "text-blue-400" },
    { id: 2, icon: <Share2 size={24} />, label: "Social Media", color: "from-pink-500/20 to-purple-900/20", border: "border-pink-500/30", text: "text-pink-400" },
    { id: 3, icon: <Paintbrush size={24} />, label: "Brand Assets", color: "from-amber-500/20 to-orange-900/20", border: "border-amber-500/30", text: "text-amber-400" },
  ];

  return (
    <div className="relative w-full h-full bg-black text-white overflow-hidden flex items-center justify-center">
      <SlideContainer>
        <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center h-full pt-10">
          
          <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut", layout: { duration: 1, ease: "easeInOut" } }}
            className="text-center mb-16"
          >
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">How It Works</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Seamless & Accurate.</h2>
            <p className="mt-4 text-xl text-zinc-400 font-light max-w-2xl mx-auto">We use information already connected to their business to tailor the website to their vision.</p>
          </motion.div>

          {/* Central Animation Area */}
          <div className="relative w-full max-w-4xl aspect-[21/9] flex items-center justify-between px-10">
            
            {/* Left Side: Sources */}
            <div className="flex flex-col gap-6 w-1/3">
              {sources.map((source, i) => (
                <div key={source.id} className="h-[72px]">
                  <motion.div
                    initial={{ opacity: 0, x: -50, scale: 0.9 }}
                    animate={{ opacity: 1, x: 0, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 + i * 0.2, ease: "easeOut" }}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-gradient-to-r ${source.color} border ${source.border} backdrop-blur-sm h-full`}
                  >
                    <div className={`p-2 rounded-lg bg-black/50 ${source.text}`}>
                      {source.icon}
                    </div>
                    <span className="font-semibold">{source.label}</span>
                  </motion.div>
                </div>
              ))}
            </div>

            {/* Connecting Lines */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center z-0">
                  <motion.svg 
                    className="w-full h-full absolute inset-0 opacity-40" 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.4 }}
                    transition={{ duration: 1.5, delay: 1.0, ease: "easeInOut" }}
                  >
                    <path d="M 300 120 C 450 120, 450 200, 600 200" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    <path d="M 300 200 C 450 200, 450 200, 600 200" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    <path d="M 300 280 C 450 280, 450 200, 600 200" stroke="url(#gradient)" strokeWidth="2" fill="none" strokeDasharray="5,5" className="animate-[dash_20s_linear_infinite]" />
                    
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#71717a" stopOpacity="0" />
                        <stop offset="50%" stopColor="#e4e4e7" stopOpacity="1" />
                        <stop offset="100%" stopColor="#71717a" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </motion.svg>
            </div>

            {/* Right Side: The Result */}
            <div className="w-1/3 flex justify-end z-10">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8, filter: "blur(20px)" }}
                    animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
                    transition={{ duration: 1, ease: "easeOut", delay: 1.0 }}
                    className="relative"
                  >
                    {/* Glow effect */}
                    <div className="absolute -inset-10 bg-white/10 blur-3xl rounded-full" />
                    
                    <div className="relative p-8 rounded-2xl bg-zinc-900 border border-zinc-700 shadow-2xl flex flex-col items-center text-center">
                      <div className="w-20 h-20 rounded-full bg-white text-black flex items-center justify-center mb-6">
                        <Globe size={40} strokeWidth={1.5} />
                      </div>
                      <h3 className="text-2xl font-bold mb-2">Custom Website</h3>
                      <p className="text-sm text-zinc-400">Tailored to match their vision and goals</p>
                    </div>
                  </motion.div>
            </div>

          </div>
        </div>
      </SlideContainer>
    </div>
  );
}
