"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const baseFeatures = [
  "Modern, responsive design",
  "Customized to match your brand",
  "Fast loading times",
  "Security & maintenance",
  "Multiple pages (Home, Services, Contact, etc.)",
  "Unique design elements",
  "Perfect for small businesses"
];

const premiumFeatures = [
  "Everything in Base Website",
  "User account integration",
  "Payment processing",
  "E-commerce capabilities",
  "User personalization",
  "Customer reviews",
  "Shipping management"
];

export default function PricingPage() {
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
              Simple, <span className="text-muted-foreground">honest</span> pricing
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Professional web design at a fraction of the industry standard cost.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Key benefits section */}
      <section className="py-12 border-t border-foreground/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Why invest in professional web design?</h2>
            <p className="text-lg text-muted-foreground">
              A well-designed website is the most cost-effective marketing investment your business can make.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Connect with Customers",
                description: "Create a direct line of communication between your business and your audience."
              },
              {
                title: "Build Credibility",
                description: "A professional website establishes trust and authority in your market."
              },
              {
                title: "Grow Your Business",
                description: "Convert visitors into customers with purposeful, conversion-focused design."
              },
              {
                title: "Stand Out Online",
                description: "Leave a lasting impression with a clean, modern design that sets you apart."
              }
            ].map((benefit) => (
              <div
                key={benefit.title}
                className="p-6 rounded-xl border border-foreground/10 hover:border-foreground/20 transition-colors"
              >
                <h3 className="text-lg font-semibold mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing plans section */}
      <section className="py-24 border-t border-foreground/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="inline-flex items-center bg-foreground/5 border border-foreground/10 px-4 py-1.5 rounded-full text-sm text-muted-foreground mb-4">
              <span className="font-medium">Transparent Pricing</span>
            </div>
            <h2 className="section-title">Choose the right plan</h2>
            <p className="text-lg text-muted-foreground">
              No hidden fees. No surprises. Just great websites.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Base Website Plan */}
            <div className="relative rounded-2xl border-2 border-foreground/20 p-8 hover:border-foreground/40 transition-colors">
              <div className="absolute -top-4 left-4 right-4 bg-neutral-900 text-white text-center py-1.5 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="pt-4">
                <h3 className="text-2xl font-bold mb-2">Base Website</h3>
                <p className="text-muted-foreground mb-4">Perfect for small businesses and professional services</p>

                <div className="flex items-baseline my-8">
                  <span className="text-5xl font-bold">$219.99</span>
                  <span className="text-muted-foreground ml-2">
                    <span className="line-through">$3,000</span>
                    <span className="text-sm"> industry avg</span>
                  </span>
                </div>

                <Button
                  size="lg"
                  className="w-full mb-8 bg-neutral-900 text-white hover:bg-neutral-800"
                  asChild
                >
                  <Link href="/contact">
                    Get Started <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <h4 className="font-medium text-lg mb-4">Features include:</h4>
                <ul className="space-y-3">
                  {baseFeatures.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <Check className="text-neutral-300 h-5 w-5 mr-2 shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Premium Website Plan */}
            <div className="rounded-2xl border border-foreground/10 p-8 hover:border-foreground/20 transition-colors">
              <h3 className="text-2xl font-bold mb-2">Premium Website</h3>
              <p className="text-muted-foreground mb-4">For e-commerce, user accounts, and advanced features</p>

              <div className="flex items-baseline my-8">
                <span className="text-5xl font-bold">$349.99</span>
                <span className="text-muted-foreground ml-2">
                  <span className="line-through">$8,000</span>
                  <span className="text-sm"> industry avg</span>
                </span>
              </div>

              <Button
                size="lg"
                className="w-full mb-8"
                variant="outline"
                asChild
              >
                <Link href="/contact">
                  Contact Us <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <h4 className="font-medium text-lg mb-4">Everything from Base, plus:</h4>
              <ul className="space-y-3">
                {premiumFeatures.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="text-neutral-300 h-5 w-5 mr-2 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQ */}
      <section className="py-24 border-t border-foreground/5">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="section-title">Pricing FAQ</h2>
            <p className="text-lg text-muted-foreground">
              Common questions about our pricing and process.
            </p>
          </div>

          <div className="max-w-3xl mx-auto">
            <div className="border border-foreground/10 rounded-xl overflow-hidden">
              {[
                {
                  question: "What's included in the pricing?",
                  answer: "Our prices are all-inclusive — design, development, testing, and launch. No hidden fees."
                },
                {
                  question: "Do you offer payment plans?",
                  answer: "Yes, we can arrange flexible payment options. Contact us to discuss what works for your budget."
                },
                {
                  question: "What's the difference between Base and Premium?",
                  answer: "The Base plan covers informational websites. Premium adds user accounts, e-commerce, and advanced functionality."
                },
                {
                  question: "How long does it take?",
                  answer: "Base websites typically take 2–4 weeks. Premium sites take 4–8 weeks depending on complexity."
                },
                {
                  question: "Do you offer maintenance after launch?",
                  answer: "Yes. We provide ongoing maintenance to keep your website secure, updated, and performing well."
                }
              ].map((faq) => (
                <div key={faq.question} className="border-b border-foreground/10 last:border-b-0">
                  <div className="p-6">
                    <h3 className="text-lg font-medium mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA section */}
      <section className="py-20 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl font-bold mb-6 tracking-tight"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Ready to get started?
            </motion.h2>
            <motion.p
              className="text-lg text-white/70 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Contact us for a free consultation and let's create something great together.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" asChild className="bg-white text-neutral-900 hover:bg-neutral-200">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                <Link href="/services">View Services</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
