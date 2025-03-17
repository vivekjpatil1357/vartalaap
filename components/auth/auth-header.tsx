"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

export function AuthHeader() {
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center space-x-2"
          >
            <Link href="/">
              <Button variant="ghost" className="text-zinc-400 hover:text-white">
                Back to Home
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    </header>
  );
} 