"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 z-50 w-full bg-zinc-950/80 backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center"
          >
            <Link href="/" className="flex items-center">
              <span className="text-xl font-bold text-white">Vartalaap</span>
              <span className="ml-1 rounded-full bg-emerald-500 px-1.5 py-0.5 text-xs font-medium text-white">
                Beta
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="hidden md:flex md:items-center md:space-x-6"
          >
            <Link href="#features" onClick={() =>
            {
              document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
            }} className="text-sm text-zinc-400 hover:text-white transition-colors">
              Features
            </Link>
            <Link href="#how-to-use" onClick={() =>
            {
              document.getElementById("how-to-use")?.scrollIntoView({ behavior: "smooth" });
            }} className="text-sm text-zinc-400 hover:text-white transition-colors">
              How to Use
            </Link>
            <Link href="#contact-us" className="text-sm text-zinc-400 hover:text-white transition-colors">
              Contact Us
            </Link>
            
          </motion.nav>

          {/* Desktop Auth Buttons */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="hidden md:flex md:items-center md:space-x-2"
          >
            <Link href="/auth/signin">
              <Button variant="ghost" className="text-zinc-400 hover:text-white">
                Sign In
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button className="bg-emerald-600 hover:bg-emerald-700">
                Sign Up
              </Button>
            </Link>
          </motion.div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              className="text-zinc-400 hover:text-white"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: isMenuOpen ? "auto" : 0,
          opacity: isMenuOpen ? 1 : 0
        }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden bg-zinc-900"
      >
        <div className="container mx-auto px-4 py-4">
          <nav className="flex flex-col space-y-4">
            <Link
              href="#features"
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#how-to-use"
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              How to Use
            </Link>
            <Link
              href="#pricing"
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#faq"
              className="text-zinc-400 hover:text-white transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              FAQ
            </Link>
            <div className="flex flex-col space-y-2 pt-4 border-t border-zinc-800">
              <Link href="/auth/signin" onClick={() => setIsMenuOpen(false)}>
                <Button variant="ghost" className="w-full justify-start text-zinc-400 hover:text-white">
                  Sign In
                </Button>
              </Link>
              <Link href="/auth/signup" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-emerald-600 hover:bg-emerald-700">
                  Sign Up
                </Button>
              </Link>
            </div>
          </nav>
        </div>
      </motion.div>
    </header>
  );
} 