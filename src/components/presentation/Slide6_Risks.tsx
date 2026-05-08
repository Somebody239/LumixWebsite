"use client";

import { motion, AnimatePresence } from "framer-motion";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import SlideContainer from "./shared/SlideContainer";

export default function Slide6_Risks({ step }: { step: number }) {
  const risks = [
    { 
      risk: "Customer Acquisition Cost (CAC) is historically high for SMBs.", 
      workaround: "Product-Led Growth (PLG) and referral loops. Our pricing makes word-of-mouth our primary driver." 
    },
    { 
      risk: "Template builders like Wix or Squarespace have massive budgets.", 
      workaround: "We don't compete on templates. We compete on 'Done-For-You'. Business owners want to run their business, not drag and drop elements." 
    },
    { 
      risk: "Scaling a service business is notoriously difficult and ruins margins.", 
      workaround: "We scale the code, not the hours. Our proprietary component library means a 40 hour project takes 4." 
    }
  ];

  return (
    <div className="relative w-full h-full bg-black text-white overflow-hidden">
      <SlideContainer>
        <div className="relative z-10 w-full h-full flex flex-col justify-center">
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="mb-16"
          >
            <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Reality Check</span>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Risks and Mitigations</h2>
          </motion.div>

          <div className="space-y-8 max-w-4xl">
            {risks.map((item, i) => (
              <div key={i} className="min-h-[120px] relative">
                <AnimatePresence>
                  {step > i && (
                    <motion.div
                      initial={{ opacity: 0, filter: "blur(10px)", x: -10 }}
                      animate={{ opacity: 1, filter: "blur(0px)", x: 0 }}
                      transition={{ duration: 1.2, ease: "easeOut" }}
                      className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 bg-zinc-950 rounded-2xl p-6 border border-zinc-800"
                    >
                      <div>
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center">
                          <AlertCircle size={14} className="mr-2" />
                          The Risk
                        </div>
                        <p className="text-zinc-300 font-medium">{item.risk}</p>
                      </div>
                      <div className="border-t md:border-t-0 md:border-l border-zinc-800 pt-4 md:pt-0 md:pl-8">
                        <div className="text-xs font-bold text-zinc-500 uppercase tracking-wider mb-3 flex items-center">
                          <CheckCircle2 size={14} className="mr-2" />
                          The Strategy
                        </div>
                        <p className="text-zinc-400">{item.workaround}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </SlideContainer>
    </div>
  );
}
