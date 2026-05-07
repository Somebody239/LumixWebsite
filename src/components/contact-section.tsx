"use client";

import { useState } from "react";
import { Mail, Phone, Send, CheckCircle, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function ContactSection() {
  const [formState, setFormState] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("submitting");
    setTimeout(() => {
      setFormStatus("success");
      setFormState({ name: "", email: "", phone: "", company: "", message: "" });
      setTimeout(() => setFormStatus("idle"), 5000);
    }, 1500);
  };

  return (
    <section className="py-24 border-t border-foreground/5" id="contact">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="mb-8">
              <h2 className="section-title">Get in touch</h2>
              <p className="text-lg text-muted-foreground max-w-xl">
                Ready to create your new website? Let's start a conversation about your project.
              </p>
            </div>

            <div className="space-y-6 mb-10">
              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Call Us</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+12896820466" className="hover:text-foreground transition-colors">
                      +1 (289) 682-0466
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">Monday – Friday, 9 AM – 6 PM EST</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="w-10 h-10 rounded-full bg-foreground/5 flex items-center justify-center text-foreground shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1">Email Us</h3>
                  <p className="text-muted-foreground">
                    <a href="mailto:lumixwebdesign@gmail.com" className="hover:text-foreground transition-colors">
                      lumixwebdesign@gmail.com
                    </a>
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">We respond within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <Card className="border-foreground/10">
              <CardHeader>
                <CardTitle className="text-2xl">Send a Message</CardTitle>
                <CardDescription>Fill out the form and we'll get back to you shortly.</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Your Name</Label>
                      <Input id="name" name="name" value={formState.name} onChange={handleChange} placeholder="John Doe" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input id="email" name="email" type="email" value={formState.email} onChange={handleChange} placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" name="phone" value={formState.phone} onChange={handleChange} placeholder="(123) 456-7890" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="company">Company Name</Label>
                      <Input id="company" name="company" value={formState.company} onChange={handleChange} placeholder="Your Company" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">How Can We Help?</Label>
                    <Textarea id="message" name="message" value={formState.message} onChange={handleChange} placeholder="Tell us about your project..." rows={5} required />
                  </div>
                  <Button type="submit" className="w-full bg-neutral-900 text-white hover:bg-neutral-800" disabled={formStatus === "submitting"}>
                    {formStatus === "idle" && (<><Send className="mr-2 h-4 w-4" /> Send Message</>)}
                    {formStatus === "submitting" && "Sending..."}
                    {formStatus === "success" && (<><CheckCircle className="mr-2 h-4 w-4" /> Message Sent!</>)}
                    {formStatus === "error" && (<><AlertCircle className="mr-2 h-4 w-4" /> Please Try Again</>)}
                  </Button>
                  {formStatus === "success" && (
                    <div className="p-3 bg-foreground/5 border border-foreground/10 rounded text-sm flex items-center">
                      <CheckCircle className="mr-2 h-4 w-4" /> Thank you! We'll be in touch shortly.
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
