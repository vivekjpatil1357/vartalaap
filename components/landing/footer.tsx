"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Instagram, Linkedin } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-950 py-12 text-zinc-400">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="mb-4 text-xl font-bold text-white">Vartalaap</h3>
              <p className="mb-4 text-sm">
                A modern messaging platform with a sleek interface and powerful features.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  <Instagram className="h-5 w-5" />
                </a>
                <a href="#" className="text-zinc-400 hover:text-emerald-500 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-1"
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Product
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Download</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Updates</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-1"
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Support
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Help Center</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Community</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Contact Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Status</a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-1"
          >
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Legal
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-emerald-500 transition-colors">GDPR</a>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 border-t border-zinc-800 pt-8 text-center text-sm"
        >
          <p>© {currentYear} Vartalaap. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
} 