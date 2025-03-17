"use client";

import { motion } from "framer-motion";
import { MessageSquare, Users, Lock, Zap, Globe, Smartphone } from "lucide-react";

const features = [
  {
    icon: <MessageSquare className="h-10 w-10 text-emerald-500" />,
    title: "Real-time Messaging",
    description: "Send and receive messages instantly with no delay or refresh needed."
  },
  {
    icon: <Lock className="h-10 w-10 text-emerald-500" />,
    title: "End-to-End Encryption",
    description: "Your conversations are secure and private with our encryption technology."
  },
  {
    icon: <Globe className="h-10 w-10 text-emerald-500" />,
    title: "Cross-Platform",
    description: "Use Vartalaap on any device with our web, desktop, and mobile applications."
  },
  {
    icon: <Smartphone className="h-10 w-10 text-emerald-500" />,
    title: "Responsive Design",
    description: "Enjoy the same great experience on any screen size or device."
  }
];

export function FeaturesSection() {
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
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="bg-zinc-900 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
            Powerful Features for Modern Communication
          </h2>
          <p className="mx-auto max-w-2xl text-zinc-400">
            Vartalaap combines the best messaging features with a sleek, intuitive interface
            to provide the ultimate communication experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-2"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl bg-zinc-800/50 p-6 backdrop-blur-sm transition-all hover:bg-zinc-800/70"
            >
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-700/50">
                {feature.icon}
              </div>
              <h3 className="mb-2 text-xl font-semibold text-white">{feature.title}</h3>
              <p className="text-zinc-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
} 