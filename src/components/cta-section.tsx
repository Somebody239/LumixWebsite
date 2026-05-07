"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 bg-neutral-900 text-white relative" style={{ overflow: 'initial' }}>
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center bg-white/10 text-white/80 px-4 py-1.5 rounded-full text-sm">
              <span className="font-medium">Ready to start?</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-white">
              Let's build something
              <br />
              remarkable.
            </h2>

            <p className="text-xl text-white/60 max-w-xl">
              Your business deserves a website that works as hard as you do. Let's create a design that converts visitors into customers.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-white text-neutral-900 hover:bg-neutral-200"
                asChild
              >
                <Link href="/contact">
                  Start Your Project
                </Link>
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="border-white/20 text-white hover:bg-white/10"
                asChild
              >
                <Link href="/services">
                  See Our Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative bg-white/5 border border-white/10 rounded-xl p-8">
              <div className="space-y-6">
                {[
                  {
                    title: "Custom Design",
                    desc: "Every website is designed from scratch to match your brand identity"
                  },
                  {
                    title: "Affordable Pricing",
                    desc: "Professional websites starting at $219.99 — a fraction of industry rates"
                  },
                  {
                    title: "Quick Turnaround",
                    desc: "Your website live in as little as 2 weeks, without cutting corners"
                  },
                ].map((item, i) => (
                  <div key={item.title} className="flex items-center space-x-4">
                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 text-sm font-bold flex-shrink-0">
                      {String(i + 1).padStart(2, '0')}
                    </div>
                    <div>
                      <h3 className="font-medium text-white">{item.title}</h3>
                      <p className="text-white/50 text-sm">{item.desc}</p>
                    </div>
                  </div>
                ))}

                <div className="pt-2">
                  <Button
                    size="lg"
                    className="w-full bg-white/10 hover:bg-white/20 text-white border border-white/10"
                    asChild
                  >
                    <Link href="/pricing">
                      View Pricing
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
