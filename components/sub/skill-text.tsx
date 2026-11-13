"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const SkillText = () => {
  return (
    <div className="w-full h-auto flex flex-col items-center justify-center text-center px-4">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[6px] px-[14px] border border-[#0066ff]/50 bg-[#0066ff]/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,102,255,0.3)] mb-4"
      >
        <SparklesIcon className="text-cyan-400 mr-[10px] h-5 w-5 animate-pulse" />
        <h1 className="Welcome-text text-[13px] font-semibold tracking-wider uppercase text-cyan-200">
          Core Technical Capabilities
        </h1>
      </motion.div>

      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white text-center mt-2 mb-3"
      >
        Engineering with{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_20px_rgba(0,212,255,0.4)]">
          Modern AI &amp; Cloud Stacks
        </span>
      </motion.div>

      <motion.p
        variants={slideInFromRight(0.5)}
        className="cursive text-xl sm:text-2xl text-gray-300 mt-1 mb-8"
      >
        From exploratory data science models to autonomous multi-agent systems
      </motion.p>
    </div>
  );
};
