"use client";

import {
  CircleCheck,
  Users,
  LightbulbIcon,
  Gem,
  Rocket,
  HeartHandshake,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  index: number;
}

const ValueCard = ({ icon, title, description, index }: ValueCardProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 border border-foreground/10 rounded-xl hover:border-foreground/20 transition-all duration-300"
      whileHover={{ y: -3 }}
    >
      <div className="w-12 h-12 rounded-full bg-foreground/5 flex items-center justify-center text-foreground mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </motion.div>
  );
};

const values = [
  {
    icon: <CircleCheck size={28} />,
    title: "Quality First",
    description: "We build websites with clean code, modern design principles, and best practices to ensure your site performs beautifully."
  },
  {
    icon: <Users size={28} />,
    title: "Client-Centered",
    description: "Your goals, brand, and vision guide our process. We listen carefully and create websites that truly represent your business."
  },
  {
    icon: <LightbulbIcon size={28} />,
    title: "Modern Solutions",
    description: "We stay on top of the latest web technologies to provide you with a site that's fast, secure, and built for today's users."
  },
  {
    icon: <Gem size={28} />,
    title: "Accessible Pricing",
    description: "We deliver high-quality websites at reasonable prices, making professional web presence accessible for businesses of all sizes."
  },
  {
    icon: <Rocket size={28} />,
    title: "Fast Delivery",
    description: "We work efficiently to get your website up and running quickly, without sacrificing quality or attention to detail."
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Ongoing Support",
    description: "Our relationship doesn't end when your site goes live. We provide support and guidance to help your online presence grow."
  },
];

export default function AboutSection() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  return (
    <section className="py-24 border-t border-foreground/5" ref={sectionRef}>
      <div className="container-custom">
        {/* Mission Statement */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-flex items-center bg-foreground/5 border border-foreground/10 px-4 py-1.5 rounded-full text-sm text-muted-foreground mb-4">
            <span className="font-medium">Why Lumix</span>
          </div>
          <h2 className="section-title">What sets us apart</h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            Our approach to web design combines technical expertise, creative vision, and a commitment to delivering exceptional value.
          </p>
        </motion.div>

        {/* Core Values */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((value, idx) => (
            <ValueCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={idx}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
