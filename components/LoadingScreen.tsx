"use client";

import React from "react";
import { motion } from "framer-motion";

const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-100 flex items-center justify-center bg-white"
    >
      <div className="flex flex-col items-center">
        {/* Simple but elegant loader */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="text-4xl font-bold tracking-tighter text-primary"
        >
          MY<span className="text-accent">S</span>A
        </motion.div>

        {/* Progress bar line */}
        <div className="mt-8 w-48 h-px bg-gray-100 overflow-hidden">
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "100%" }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "linear",
            }}
            className="w-full h-full bg-accent"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
