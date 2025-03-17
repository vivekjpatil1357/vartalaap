"use client";

import { motion } from "framer-motion";
import { UserPlus, MessageSquare, Settings } from "lucide-react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

const steps = [
  {
    icon: <UserPlus className="h-8 w-8 text-emerald-500" />,
    title: "Create an Account",
    description: "Sign up with your email or connect with your social media accounts for quick access.",
    animationUrl: "https://lottie.host/dbe1e6e6-60c1-497f-b01c-87680fc8ade4/WKNRj10jsO.json"
  },
  {
    icon: <MessageSquare className="h-8 w-8 text-emerald-500" />,
    title: "Start Chatting",
    description: "Find friends, create groups, or connect with new people to start conversations.",
    animationUrl: "https://lottie.host/4bcf8038-23ef-4e65-82a4-3569444bdee2/5xQlkunXQ0.json"
  },
  
];

function StepAnimation({ url }: { url: string }) {
  const [animationData, setAnimationData] = useState<any>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchAnimation = async () => {
      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setAnimationData(data);
        setError(false);
      } catch (err) {
        console.error('Error loading animation:', err);
        setError(true);
      }
    };

    fetchAnimation();
  }, [url]);

  if (error) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-zinc-400 text-center">
          <div className="mb-2">
            {/* Fallback icon */}
            <svg className="w-12 h-12 mx-auto text-emerald-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <p className="text-sm">Animation unavailable</p>
        </div>
      </div>
    );
  }

  if (!animationData) {
    return (
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-8 h-8 border-4 border-emerald-500/30 border-t-emerald-500 rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <Lottie
      animationData={animationData}
      loop={true}
      autoplay={true}
      className="w-full h-full"
      rendererSettings={{
        preserveAspectRatio: "xMidYMid slice"
      }}
    />
  );
}

export function HowToUse() {
  return (
    <section className="bg-zinc-950 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            How to Use <span className="text-emerald-500">Vartalaap</span>
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Getting started with Vartalaap is easy. Follow these simple steps to begin
            your messaging journey.
          </p>
        </motion.div>

        <div className="space-y-20">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col items-center gap-8 md:flex-row ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div className="w-full md:w-1/2">
                <div className="rounded-xl bg-zinc-800/30 p-6 backdrop-blur-sm">
                  <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-zinc-700/50">
                    {step.icon}
                  </div>
                  <h3 className="mb-2 text-2xl font-semibold text-white">
                    <span className="mr-2 text-emerald-500">0{index + 1}.</span> {step.title}
                  </h3>
                  <p className="text-zinc-400">{step.description}</p>
                </div>
              </div>
              
              <div className="w-full md:w-1/2">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                  className="relative h-64 w-full overflow-hidden rounded-xl border border-zinc-800 bg-zinc-900/50 shadow-xl backdrop-blur-sm md:h-80"
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-full h-full max-w-[300px] mx-auto">
                      <StepAnimation url={step.animationUrl} />
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
} 