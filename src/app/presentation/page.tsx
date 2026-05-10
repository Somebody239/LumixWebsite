"use client";

import { useState, useEffect, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";

// Import all slides
import Slide1_Hook from "@/components/presentation/Slide1_Hook";
import Slide2_Problem from "@/components/presentation/Slide2_Problem";
import Slide3_Solution from "@/components/presentation/Slide3_Solution";
import Slide4_Technical from "@/components/presentation/Slide4_Technical";
import Slide5_Economics from "@/components/presentation/Slide5_Economics";
import Slide6_Risks from "@/components/presentation/Slide6_Risks";
import Slide7_Close from "@/components/presentation/Slide7_Close";

// Configure slides and their steps
const slideConfig = [
  { component: Slide1_Hook, totalSteps: 0 },
  { component: Slide2_Problem, totalSteps: 1 },
  { component: Slide3_Solution, totalSteps: 0 },
  { component: Slide4_Technical, totalSteps: 0 },
  { component: Slide5_Economics, totalSteps: 0 },
  { component: Slide6_Risks, totalSteps: 0 },
  { component: Slide7_Close, totalSteps: 0 },
];

export default function PresentationPage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const goToNextStep = useCallback(() => {
    if (currentStep < slideConfig[currentSlide].totalSteps) {
      setCurrentStep(s => s + 1);
    } else if (currentSlide < slideConfig.length - 1) {
      setCurrentSlide(s => s + 1);
      setCurrentStep(0);
    }
  }, [currentSlide, currentStep]);

  const goToPrevStep = useCallback(() => {
    if (currentStep > 0) {
      setCurrentStep(s => s - 1);
    } else if (currentSlide > 0) {
      setCurrentSlide(s => s - 1);
      setCurrentStep(slideConfig[currentSlide - 1].totalSteps);
    }
  }, [currentSlide, currentStep]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Toggle fullscreen with 'f'
      if (e.key.toLowerCase() === 'f') {
        if (!document.fullscreenElement) {
          document.documentElement.requestFullscreen().catch(err => {
            console.error(`Error attempting to enable full-screen mode: ${err.message}`);
          });
        } else {
          if (document.exitFullscreen) {
            document.exitFullscreen();
          }
        }
        return;
      }

      switch (e.key) {
        case "ArrowRight":
        case "Space":
        case "Enter":
        case " ":
          e.preventDefault();
          goToNextStep();
          break;
        case "ArrowLeft":
        case "Backspace":
          e.preventDefault();
          goToPrevStep();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goToNextStep, goToPrevStep]);

  const CurrentSlideComponent = slideConfig[currentSlide].component;

  return (
    <div 
      className="fixed inset-0 w-full h-full bg-black overflow-hidden z-[100]"
      onClick={goToNextStep}
    >
      {/* Help text for starting */}
      <div className="absolute top-4 left-4 z-50 text-white/30 text-xs font-mono opacity-0 hover:opacity-100 transition-opacity cursor-pointer">
        Press F for Fullscreen | Arrows/Space to navigate
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 1.02 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <CurrentSlideComponent step={currentStep} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
