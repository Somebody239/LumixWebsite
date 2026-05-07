"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Globe, MousePointerClick, PenTool, BarChart4, Search, Code, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
  index: number;
}

const ServiceCard = ({ icon, title, description, href, index }: ServiceCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Link href={href}>
        <Card className="h-full transition-all duration-300 hover:shadow-md hover:-translate-y-1 border-foreground/10 bg-card cursor-pointer group">
          <CardContent className="p-6 space-y-4">
            <motion.div
              className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              {icon}
            </motion.div>
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="text-muted-foreground group-hover:text-foreground/70 transition-colors">
              {description}
            </p>
            <div className="flex items-center text-sm text-muted-foreground group-hover:text-foreground transition-colors">
              Learn more <ArrowRight className="w-3 h-3 ml-1" />
            </div>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
};

const servicesData = [
  {
    icon: <Globe size={28} />,
    title: "Business Websites",
    description: "Custom-designed websites that establish your professional online presence and help you connect with customers.",
    slug: "business-websites"
  },
  {
    icon: <MousePointerClick size={28} />,
    title: "E-Commerce Stores",
    description: "Complete e-commerce platforms with shopping cart, secure payments, and inventory management systems.",
    slug: "ecommerce-solutions"
  },
  {
    icon: <PenTool size={28} />,
    title: "Portfolio Websites",
    description: "Stunning portfolio websites that showcase your work and attract potential clients with visual impact.",
    slug: "portfolio-websites"
  },
  {
    icon: <BarChart4 size={28} />,
    title: "Landing Pages",
    description: "Focused landing pages designed to convert visitors into customers with compelling design and clear CTAs.",
    slug: "landing-pages"
  },
  {
    icon: <Search size={28} />,
    title: "Content Platforms",
    description: "Content management systems that help you share knowledge, build authority, and engage your audience.",
    slug: "blog-content-sites"
  },
  {
    icon: <Code size={28} />,
    title: "Web Applications",
    description: "Tailored web applications and platforms built to meet your specific business needs and workflows.",
    slug: "custom-web-solutions"
  }
];

export default function ServicesOverview() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const techRef = useRef(null);
  const techInView = useInView(techRef, { once: true, amount: 0.1 });

  return (
    <>
      {/* Services Section */}
      <section className="py-24 relative" ref={sectionRef}>
        <div className="container-custom relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center bg-foreground/5 border border-foreground/10 px-4 py-1.5 rounded-full text-sm text-muted-foreground mb-4">
              <span className="font-medium">What We Build</span>
            </div>
            <h2 className="section-title">Solutions tailored to your business</h2>
            <p className="text-lg text-muted-foreground">
              From simple landing pages to complex web applications — we design and develop websites that drive results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {servicesData.map((service, index) => (
              <ServiceCard
                key={service.slug}
                icon={service.icon}
                title={service.title}
                description={service.description}
                href="/services"
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Technical Details Section */}
      <section className="py-24 border-t border-foreground/5" ref={techRef}>
        <div className="container-custom">
          <motion.div
            className="text-center max-w-3xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-flex items-center bg-foreground/5 border border-foreground/10 px-4 py-1.5 rounded-full text-sm text-muted-foreground mb-4">
              <span className="font-medium">How We Build</span>
            </div>
            <h2 className="section-title">Built with modern technology</h2>
            <p className="text-lg text-muted-foreground">
              Every website we deliver is built on a foundation of industry-leading tools and best practices.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "React & Next.js",
                description: "Server-rendered React applications for blazing fast performance and superior SEO.",
              },
              {
                title: "Responsive Design",
                description: "Every pixel adapts seamlessly across mobile, tablet, and desktop devices.",
              },
              {
                title: "SEO Optimized",
                description: "Built-in search engine optimization with proper meta tags, structured data, and semantic HTML.",
              },
              {
                title: "Performance First",
                description: "Optimized loading times, lazy loading, and efficient code for the best user experience.",
              },
            ].map((tech, index) => (
              <motion.div
                key={tech.title}
                className="p-6 border border-foreground/10 rounded-xl hover:border-foreground/20 transition-colors"
                initial={{ opacity: 0, y: 20 }}
                animate={techInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <div className="w-8 h-8 rounded-md bg-foreground/5 flex items-center justify-center text-foreground mb-4 text-sm font-bold">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h3 className="text-lg font-semibold mb-2">{tech.title}</h3>
                <p className="text-sm text-muted-foreground">{tech.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" variant="outline" asChild className="border-foreground/20 hover:bg-foreground hover:text-background transition-all">
              <Link href="/contact">Discuss Your Project</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
