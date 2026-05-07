"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import { Globe, MousePointerClick, PenTool, BarChart4, Search, Code } from "lucide-react";

const servicesData = [
  {
    icon: <Globe size={28} />,
    title: "Business Websites",
    description: "Custom-designed websites that establish your professional online presence and connect you with customers.",
    features: ["Responsive Design", "Contact Forms", "SEO Optimized", "Professional Layout"],
    price: "$219.99",
    slug: "business-websites"
  },
  {
    icon: <MousePointerClick size={28} />,
    title: "E-Commerce Stores",
    description: "Complete e-commerce platforms with shopping cart, secure payments, and inventory management.",
    features: ["Shopping Cart", "Payment Gateway", "Inventory Management", "Order Processing"],
    price: "$349.99",
    slug: "ecommerce-solutions"
  },
  {
    icon: <PenTool size={28} />,
    title: "Portfolio Websites",
    description: "Stunning portfolio websites that showcase your work and attract potential clients.",
    features: ["Gallery Layouts", "Project Showcases", "Testimonials", "Contact Integration"],
    price: "$219.99",
    slug: "portfolio-websites"
  },
  {
    icon: <BarChart4 size={28} />,
    title: "Landing Pages",
    description: "Focused landing pages designed to convert visitors into customers with clear CTAs.",
    features: ["Conversion Focused", "Lead Capture", "A/B Testing", "Analytics"],
    price: "$219.99",
    slug: "landing-pages"
  },
  {
    icon: <Search size={28} />,
    title: "Content Platforms",
    description: "CMS-powered sites to share knowledge, build authority, and engage your audience.",
    features: ["Content Management", "SEO Optimized", "Social Sharing", "Comment System"],
    price: "$219.99",
    slug: "blog-content-sites"
  },
  {
    icon: <Code size={28} />,
    title: "Web Applications",
    description: "Tailored web apps built to meet your specific business needs and workflows.",
    features: ["Custom Features", "User Management", "Database Integration", "API Development"],
    price: "$349.99",
    slug: "custom-web-solutions"
  }
];

export default function ServicesPage() {
  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <main className="preload-fade-in w-full max-w-full overflow-x-hidden">
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              Our <span className="text-muted-foreground">Services</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-10">
              Professional web design solutions built to help your business stand out and drive results.
            </p>
            <Button size="lg" asChild className="bg-neutral-900 text-white hover:bg-neutral-800">
              <Link href="/contact">Get a Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-24 border-t border-foreground/5">
        <div className="container-custom">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {servicesData.map((service) => (
              <motion.div key={service.slug} variants={item}>
                <Card className="overflow-hidden border-foreground/10 hover:border-foreground/20 transition-colors h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground mb-4">
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-muted-foreground mb-4 flex-grow">{service.description}</p>
                    <div className="mb-4">
                      <div className="text-sm font-medium mb-2">Key Features:</div>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature) => (
                          <span key={feature} className="text-xs bg-foreground/5 text-foreground/70 px-2 py-1 rounded-full">
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-between pt-4 border-t border-foreground/10">
                      <div className="text-lg font-bold">From {service.price}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-neutral-900 text-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Ready to start your project?</h2>
            <p className="text-lg text-white/70 mb-8">
              Our team is ready to help you build a website that represents your business perfectly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="bg-white text-neutral-900 hover:bg-neutral-200">
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button variant="outline" size="lg" asChild className="border-white/20 text-white hover:bg-white/10">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
