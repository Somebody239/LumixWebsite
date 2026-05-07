"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer className="bg-neutral-950 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-xl font-bold tracking-tight">Lumix Design</span>
            </Link>
            <p className="text-neutral-400 text-sm leading-relaxed max-w-xs">
              Clean, modern websites crafted for businesses that want to make a lasting impression online.
            </p>

            <div className="pt-2">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-3">Navigation</h3>
              <div className="grid grid-cols-2 gap-2">
                <Link href="/" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Home
                </Link>
                <Link href="/about" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  About
                </Link>
                <Link href="/services" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Services
                </Link>
                <Link href="/pricing" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Pricing
                </Link>
                <Link href="/contact" className="text-neutral-400 hover:text-white transition-colors text-sm">
                  Contact
                </Link>
              </div>
            </div>
          </div>

          {/* Get in Touch */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Get in Touch</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              Ready to bring your vision to life? Reach out for a free consultation and let's build something great together.
            </p>
            <Button asChild className="w-full bg-white text-black hover:bg-neutral-200 mt-4">
              <Link href="/contact">
                Start a Project
              </Link>
            </Button>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-neutral-500 shrink-0" />
                <a
                  href="tel:+12896820466"
                  className="text-neutral-400 hover:text-white transition-colors text-sm"
                >
                  +1 (289) 682-0466
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <Mail size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                <a
                  href="mailto:lumixwebdesign@gmail.com"
                  className="text-neutral-400 hover:text-white transition-colors text-sm break-all"
                >
                  lumixwebdesign@gmail.com
                </a>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-neutral-500 shrink-0 mt-0.5" />
                <span className="text-neutral-400 text-sm">
                  Ontario, Canada
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 pt-6 border-t border-neutral-800">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-neutral-500 text-xs">
              © {new Date().getFullYear()} Lumix Design. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/privacy-policy" className="text-neutral-500 hover:text-white transition-colors text-xs">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-neutral-500 hover:text-white transition-colors text-xs">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
