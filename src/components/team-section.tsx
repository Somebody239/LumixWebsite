"use client";

import { Mail } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { TestimonialAvatar } from "./placeholder-image";
import { useRef } from "react";
import { useInView } from "framer-motion";

const teamMembers = [
  {
    name: "Kishan Joshi",
    role: "Co-Founder & Designer",
    subRole: "Creative lead & website architect",
    bio: "As co-founder and lead designer, Kishan brings creative vision and meticulous attention to detail to every Lumix project. His passion for clean, modern aesthetics ensures every client receives a website that truly captures their brand essence.",
    image: "/images/team-1.jpg",
    email: "kishan.cut@gmail.com"
  },
  {
    name: "Kanika Joshi",
    role: "Co-Founder & Developer",
    bio: "As co-founder and lead developer, Kanika brings technical expertise and problem-solving skills to Lumix Design. Her proficiency in modern web technologies ensures every website is fast, reliable, and built to the highest standards.",
    image: "/images/team-2.jpg",
    email: "Jkanika239@gmail.com"
  }
];

export default function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="py-16 border-t border-foreground/5" id="team" ref={ref}>
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center bg-foreground/5 border border-foreground/10 px-4 py-1.5 rounded-full text-sm text-muted-foreground mb-3">
            <span className="font-medium">Our Team</span>
          </div>
          <h2 className="section-title mb-4">Meet the founders</h2>
          <p className="text-lg text-muted-foreground">
            A small but dedicated team bringing together design and development expertise to create exceptional websites.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.name}
              variants={itemVariants}
              className="group h-full"
            >
              <Card className="overflow-visible border border-foreground/10 hover:border-foreground/20 transition-all duration-300 mt-8 rounded-xl h-full">
                <CardContent className="relative px-5 py-4 h-full flex flex-col">
                  <div className="absolute -top-6 -left-6">
                    <div className="relative">
                      <div className="absolute inset-0 bg-background rounded-full -m-2 blur-[2px]"></div>
                      <Avatar className="h-20 w-20 ring-[3px] ring-foreground/10 relative">
                        <AvatarImage
                          src={member.image}
                          alt={member.name}
                          className="object-cover rounded-full ring-2 ring-background"
                          onError={(e: React.SyntheticEvent<HTMLImageElement>) => {
                            const target = e.currentTarget;
                            target.onerror = null;
                            target.style.display = "none";
                          }}
                        />
                        <AvatarFallback className="bg-foreground/5 text-foreground text-2xl">
                          <TestimonialAvatar name={member.name} size={80} />
                        </AvatarFallback>
                      </Avatar>
                    </div>
                  </div>

                  <div className="pl-16 pt-1">
                    <h3 className="text-lg font-semibold leading-tight mb-0.5">{member.name}</h3>
                    <p className="text-muted-foreground text-sm font-medium leading-snug">{member.role}</p>
                    {member.subRole && (
                      <p className="text-muted-foreground/60 text-[11px] mt-0.5 leading-tight">{member.subRole}</p>
                    )}
                  </div>
                  
                  <div className="mt-2 flex-grow">
                    <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                    <div className="flex items-center mt-2">
                      <a
                        href={`mailto:${member.email}`}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label={`Email ${member.name}`}
                      >
                        <Mail size={16} />
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-3">
            Interested in working with us on your next project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center text-foreground hover:underline font-medium"
          >
            Get in Touch <span className="ml-1">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
