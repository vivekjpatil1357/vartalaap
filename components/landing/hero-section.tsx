"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { useMemo } from "react";

// Pre-defined positions for dots to avoid hydration mismatches
const dotPositions = [
  { x: 10, y: 20, opacity: 0.2, delay: 0 },
  { x: -15, y: -25, opacity: 0.3, delay: 0.1 },
  { x: 25, y: -10, opacity: 0.25, delay: 0.2 },
  { x: -20, y: 15, opacity: 0.2, delay: 0.3 },
  { x: 5, y: -30, opacity: 0.15, delay: 0.4 },
  { x: -25, y: -5, opacity: 0.3, delay: 0.5 },
  { x: 30, y: 25, opacity: 0.2, delay: 0.6 },
  { x: -10, y: -15, opacity: 0.25, delay: 0.7 },
  { x: 20, y: 10, opacity: 0.3, delay: 0.8 },
  { x: -30, y: 20, opacity: 0.2, delay: 0.9 },
  { x: 15, y: -20, opacity: 0.25, delay: 1 },
  { x: -5, y: 30, opacity: 0.15, delay: 1.1 },
  { x: 25, y: 5, opacity: 0.3, delay: 1.2 },
  { x: -20, y: -25, opacity: 0.2, delay: 1.3 },
  { x: 10, y: 15, opacity: 0.25, delay: 1.4 },
  { x: -15, y: 10, opacity: 0.3, delay: 1.5 },
  { x: 20, y: -15, opacity: 0.2, delay: 1.6 },
  { x: -25, y: 25, opacity: 0.25, delay: 1.7 },
  { x: 15, y: 5, opacity: 0.3, delay: 1.8 },
  { x: -10, y: -20, opacity: 0.2, delay: 1.9 },
];

export function HeroSection() {
  // Use useMemo to ensure the same values are used during client-side rendering
  const dots = useMemo(() => {
    return dotPositions.map((pos, index) => ({
      ...pos,
      id: `dot-${index}`,
      duration: 10 + (index % 5) * 4,
    }));
  }, []);

  return (
    <div className="relative overflow-hidden bg-zinc-950 py-20 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 via-zinc-900/50 to-zinc-950" />
      
      {/* Animated dots */}
      <div className="absolute inset-0">
        {dots.map((dot) => (
          <motion.div
            key={dot.id}
            className="absolute h-2 w-2 rounded-full bg-emerald-500/30"
            initial={{ 
              x: `${dot.x}%`, 
              y: `${dot.y}%`,
              opacity: dot.opacity
            }}
            animate={{ 
              x: [
                `${dot.x}%`, 
                `${dot.x + 10}%`, 
                `${dot.x - 5}%`, 
                `${dot.x}%`
              ],
              y: [
                `${dot.y}%`, 
                `${dot.y - 10}%`, 
                `${dot.y + 5}%`, 
                `${dot.y}%`
              ]
            }}
            transition={{ 
              duration: dot.duration, 
              repeat: Infinity,
              ease: "linear",
              delay: dot.delay
            }}
          />
        ))}
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-white md:text-6xl">
            Connect <span className="text-emerald-500">Instantly</span> with Vartalaap
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <p className="mx-auto mb-10 max-w-2xl text-lg text-zinc-400 md:text-xl">
            A modern messaging platform with a sleek interface, real-time messaging, 
            and seamless experience across all your devices.
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <Link href="/chat">
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
              Get Started
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
  
        </motion.div>
      </div>

      {/* Floating chat bubbles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -right-20 top-20 h-40 w-40 rounded-full bg-emerald-600/10 backdrop-blur-md"
          animate={{ 
            y: [0, 20, 0],
            x: [0, -10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -left-10 bottom-20 h-32 w-32 rounded-full bg-emerald-600/10 backdrop-blur-md"
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0],
            scale: [1, 1.05, 1]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute left-1/2 top-1/3 h-24 w-24 -translate-x-1/2 rounded-full bg-emerald-600/10 backdrop-blur-md"
          animate={{ 
            y: [0, 15, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
}