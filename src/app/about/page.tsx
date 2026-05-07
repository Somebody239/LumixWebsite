"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Calendar } from "lucide-react";
import AboutSection from "@/components/about-section";
import TeamSection from "@/components/team-section";
import { useRef } from "react";

function useMouseTilt(ref: React.RefObject<HTMLDivElement>) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15, mass: 1 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15, mass: 1 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["5deg", "-5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const xPct = ((e.clientX - rect.left) / rect.width - 0.5) * 0.5;
    const yPct = ((e.clientY - rect.top) / rect.height - 0.5) * 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return { rotateX, rotateY, handleMouseMove, handleMouseLeave };
}

export default function AboutPage() {
  const cardRef = useRef<HTMLDivElement>(null);
  const { rotateX, rotateY, handleMouseMove, handleMouseLeave } = useMouseTilt(cardRef);

  return (
    <main>
      {/* Hero section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About <span className="text-muted-foreground">Lumix Design</span>
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              We're a small team of passionate designers and developers dedicated to helping businesses make their mark online.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild className="bg-neutral-900 text-white hover:bg-neutral-800">
                <Link href="/contact">Work With Us</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="py-24 border-t border-foreground/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center bg-foreground/5 border border-foreground/10 px-4 py-1.5 rounded-full text-sm text-muted-foreground">
                  <span className="font-medium">Our Story</span>
                </div>
                <h2 className="text-4xl font-bold mb-6 tracking-tight">Our Mission</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in 2025, Lumix Design started with a clear purpose: to help businesses succeed online by creating clean, high-quality websites that don't break the bank.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  We believe every business deserves a professional online presence — not just the ones with enterprise budgets. Our approach combines modern web technologies with thoughtful design to deliver sites that look great and perform even better.
                </p>
                <p className="text-lg text-muted-foreground">
                  As a lean, focused team, we bring together design and development expertise to deliver websites that truly represent our clients' brands and help them achieve their goals.
                </p>
              </div>
            </motion.div>

            {/* Culture Card */}
            <div className="relative">
              <motion.div
                ref={cardRef}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative w-full"
              >
                <motion.div
                  className="w-full bg-neutral-800 text-white rounded-xl overflow-hidden p-8"
                  style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                    transformOrigin: "center center",
                  }}
                >
                  <div className="space-y-6">
                    <div className="inline-flex items-center bg-white/10 px-3 py-1 rounded-full text-xs text-white/70">
                      Our Culture
                    </div>
                    <h3 className="text-2xl font-bold">How we work</h3>
                    <div className="space-y-4">
                      {[
                        { title: "Transparent Communication", desc: "We keep you in the loop at every stage — no surprises, no jargon." },
                        { title: "Collaborative Process", desc: "Your input drives our design. We build with you, not just for you." },
                        { title: "Continuous Improvement", desc: "We stay current with the latest web standards and design trends." },
                      ].map((item) => (
                        <div key={item.title} className="border-l-2 border-white/20 pl-4">
                          <h4 className="font-medium text-white">{item.title}</h4>
                          <p className="text-sm text-white/60">{item.desc}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Core values section */}
      <AboutSection />

      {/* Team section */}
      <TeamSection />

      {/* CTA section */}
      <section className="py-20 border-t border-foreground/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to bring your vision to life?
            </motion.h2>
            <motion.p
              className="text-lg text-muted-foreground mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's discuss how our team can help you create a website that makes a lasting impression.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild className="bg-neutral-900 text-white hover:bg-neutral-800">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-foreground/20">
                <Link href="/services">Explore Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
