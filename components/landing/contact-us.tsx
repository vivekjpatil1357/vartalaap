"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactUs() {
  return (
    <section id="contact" className="bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Get in <span className="text-emerald-500">Touch</span>
          </h2>
          <p className="text-zinc-400">
            Have questions or feedback? We'd love to hear from you.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          <form className="space-y-6">
            <div className="space-y-2">
              <Input
                type="text"
                placeholder="Your Name"
                className="bg-zinc-800/30 border-zinc-700"
              />
            </div>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your Email"
                className="bg-zinc-800/30 border-zinc-700"
              />
            </div>
            <div className="space-y-2">
              <Textarea
                placeholder="Your Message"
                className="bg-zinc-800/30 border-zinc-700 min-h-[150px]"
              />
            </div>
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600">
              Send Message
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
} 