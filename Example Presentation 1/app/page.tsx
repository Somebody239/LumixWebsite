"use client"

import { useState, useEffect, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Slide1_Title from "@/components/Slide1_Title"
import Slide2_ExecSummary from "@/components/Slide2_ExecSummary"
import Slide3_Problem from "@/components/Slide3_Problem"
import Slide4_Solution from "@/components/Slide4_Solution"
import Slide5_Validation from "@/components/Slide5_Validation"
import Slide6_Timeline from "@/components/Slide6_Timeline"
import Slide7_ThankYou from "@/components/Slide7_ThankYou"

const slides = [
    Slide1_Title,
    Slide2_ExecSummary,
    Slide3_Problem,
    Slide4_Solution,
    Slide5_Validation,
    Slide6_Timeline,
    Slide7_ThankYou,
]

export default function PresentationPage() {
    const [currentSlide, setCurrentSlide] = useState(0)
    const [direction, setDirection] = useState(0)

    // Navigation Logic
    const paginate = useCallback((newDirection: number) => {
        setDirection(newDirection)
        setCurrentSlide((prev) => {
            const next = prev + newDirection
            if (next < 0) return 0
            if (next >= slides.length) return slides.length - 1
            return next
        })
    }, [])

    const toggleFullscreen = useCallback(() => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen().catch((e) => {
                console.error(`Error attempting to enable fullscreen mode: ${e.message} (${e.name})`)
            })
        } else {
            if (document.exitFullscreen) {
                document.exitFullscreen()
            }
        }
    }, [])

    // Keyboard Event Listener
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            switch (e.key) {
                case "ArrowRight":
                case "ArrowDown":
                case " ":
                    e.preventDefault() // Prevent scrolling for space
                    paginate(1)
                    break
                case "ArrowLeft":
                case "ArrowUp":
                    e.preventDefault()
                    paginate(-1)
                    break
                case "f":
                case "F":
                    toggleFullscreen()
                    break
                default:
                    break
            }
        }

        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [paginate, toggleFullscreen])

    // Mouse Click Navigation
    const handleMouseClick = (e: React.MouseEvent) => {
        const width = window.innerWidth
        if (e.clientX > width / 2) {
            paginate(1)
        } else {
            paginate(-1)
        }
    }

    const SlideComponent = slides[currentSlide]

    return (
        <div
            className="w-full h-screen bg-black overflow-hidden relative select-none cursor-none"
            onClick={handleMouseClick}
        >
            <AnimatePresence initial={false} custom={direction} mode="wait">
                <motion.div
                    key={currentSlide}
                    custom={direction}
                    variants={{
                        enter: (direction: number) => ({
                            x: direction > 0 ? 1000 : -1000,
                            opacity: 0,
                        }),
                        center: {
                            zIndex: 1,
                            x: 0,
                            opacity: 1,
                        },
                        exit: (direction: number) => ({
                            zIndex: 0,
                            x: direction < 0 ? 1000 : -1000,
                            opacity: 0,
                        }),
                    }}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 },
                    }}
                    className="absolute w-full h-full"
                >
                    <SlideComponent />
                </motion.div>
            </AnimatePresence>
        </div>
    )
}
