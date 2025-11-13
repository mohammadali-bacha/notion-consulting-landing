"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className = "", hover = true }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -8, scale: 1.02 } : {}}
      className={`bg-white rounded-xl md:rounded-2xl border border-gray-100 shadow-sm transition-shadow duration-300 ${
        hover ? "hover:shadow-xl hover:shadow-primary-100/50" : ""
      } ${className}`}
    >
      {children}
    </motion.div>
  );
}

