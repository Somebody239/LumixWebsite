"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import ContactSection from "@/components/contact-section";
import CustomBooking from "@/components/custom-booking";

export default function ContactPage() {
  const [businessName, setBusinessName] = useState("");

  useEffect(() => {
    const stored = sessionStorage.getItem('businessName');
    if (stored) {
      setBusinessName(stored);
      sessionStorage.removeItem('businessName');
    }
  }, []);

  return (
    <main>
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
              {businessName ? (
                <>Let&apos;s build <span className="text-muted-foreground">{businessName}</span></>
              ) : (
                <>Get in <span className="text-muted-foreground">touch</span></>
              )}
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {businessName
                ? `Ready to bring ${businessName} online? Let's discuss your vision.`
                : "Ready to create your new website? Let's start a conversation."
              }
            </motion.p>
          </div>
        </div>
      </section>

      <ContactSection />

      <section className="py-20 bg-foreground/[0.03] border-t border-foreground/5">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div className="inline-flex items-center bg-foreground/5 border border-foreground/10 px-4 py-1.5 rounded-full text-sm text-muted-foreground">
                  <span className="font-medium">Book a Call</span>
                </div>
                <h2 className="text-3xl font-bold mb-6 tracking-tight">Free 30-Minute Consultation</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Speak with our team to discuss your project and get expert recommendations.
                </p>
                <ul className="space-y-3">
                  {["Personalized design recommendations", "Review of your current web presence", "Clear timeline and pricing overview", "No obligation — just honest advice"].map((item) => (
                    <li key={item} className="flex items-start">
                      <CheckCircle className="text-foreground mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <CustomBooking />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-foreground/5">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="section-title">Common Questions</h2>
            <p className="text-lg text-muted-foreground">Answers about working with Lumix Design.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { q: "How quickly will I hear back?", a: "We respond within 1 business day." },
              { q: "Do you work internationally?", a: "Yes, we work with clients globally and accommodate different time zones." },
              { q: "What info should I include?", a: "Your business name, goals, and any specific features you need." },
              { q: "Can I talk before committing?", a: "Absolutely. We offer a free 30-minute consultation with no obligation." }
            ].map((faq, i) => (
              <motion.div key={faq.q} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
                <h3 className="text-xl font-semibold mb-3">{faq.q}</h3>
                <p className="text-muted-foreground">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
