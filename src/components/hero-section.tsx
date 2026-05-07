"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-32 overflow-hidden w-full" aria-label="Hero Section">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 hero-gradient" aria-hidden="true"></div>

      {/* Minimal floating shapes */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <motion.div
          className="absolute top-1/4 left-1/4 w-3 h-3 rounded-full bg-foreground/10"
          animate={{
            y: [0, -15, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 5,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/3 right-1/4 w-2 h-2 rounded-full bg-foreground/15"
          animate={{
            y: [0, -10, 0],
            opacity: [0.15, 0.35, 0.15],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 6,
            ease: "easeInOut",
            delay: 1
          }}
        />
        <motion.div
          className="absolute bottom-1/3 right-1/3 w-4 h-4 rounded-full bg-foreground/5"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.05, 0.15, 0.05]
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 4,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Problem + Solution */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="inline-flex items-center bg-foreground/5 border border-foreground/10 px-4 py-1.5 rounded-full text-sm text-muted-foreground"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Web Design Studio — Ontario, Canada
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Websites that
              <br />
              <span className="text-muted-foreground">actually work.</span>
            </motion.h1>

            <motion.p
              className="text-lg text-muted-foreground max-w-lg leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Most small businesses struggle with outdated designs, poor user experience, and websites that don't convert. We solve that with clean, modern design that puts your business first.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                size="lg"
                asChild
                className="bg-neutral-900 text-white hover:bg-neutral-800 transition-all"
              >
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="border-foreground/20 hover:bg-foreground/5 transition-all"
              >
                <Link href="/services">
                  View Our Work
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Right: Problem/Solution Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="space-y-4">
              {/* The Problem */}
              <motion.div
                className="bg-foreground/[0.03] border border-foreground/10 rounded-xl p-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-muted-foreground/40" />
                  <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">The Problem</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  48% of people cite website design as the #1 factor in deciding a business's credibility. Yet most small businesses settle for generic templates that fail to represent their brand.
                </p>
              </motion.div>

              {/* The Solution */}
              <motion.div
                className="bg-neutral-800 text-white rounded-xl p-6"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-white/40" />
                  <span className="text-xs uppercase tracking-widest text-white/70 font-medium">Our Solution</span>
                </div>
                <p className="text-white/80 leading-relaxed">
                  Lumix Design creates bespoke, high-performance websites tailored to your brand — at a price small businesses can actually afford. No templates. No compromises.
                </p>
              </motion.div>

              {/* Quick Stats */}
              <motion.div
                className="grid grid-cols-3 gap-3"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
              >
                {[
                  { value: "2–4", label: "Week Delivery" },
                  { value: "100%", label: "Responsive" },
                  { value: "24/7", label: "Support" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-foreground/[0.03] border border-foreground/10 rounded-lg p-3 text-center"
                  >
                    <div className="text-lg font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
