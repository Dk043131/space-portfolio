"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CANDIDATE_INFO } from "@/constants";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-16 lg:px-20 mt-28 md:mt-36 w-full z-[20] max-w-7xl mx-auto"
    >
      {/* Left Column: Hero Copy */}
      <div className="h-full w-full flex flex-col gap-5 justify-center text-start max-w-2xl">
        {/* Welcome Box */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[6px] px-[14px] border border-[#0066ff]/50 bg-[#0066ff]/10 backdrop-blur-md shadow-[0_0_20px_rgba(0,102,255,0.3)]"
        >
          <SparklesIcon className="text-cyan-400 mr-[10px] h-5 w-5 animate-pulse" />
          <h1 className="Welcome-text text-[13px] font-semibold tracking-wider uppercase text-cyan-200">
            Autonomous AI & Full-Stack Developer
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-2 mt-2 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight"
        >
          <span>
            Architecting{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_25px_rgba(0,212,255,0.4)]">
              Autonomous AI
            </span>{" "}
            &amp; Intelligent Systems.
          </span>
        </motion.div>

        {/* Subtitle / Bio */}
        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-base sm:text-lg text-gray-300 my-2 leading-relaxed"
        >
          Hi, I&apos;m <strong className="text-white font-semibold">Deepakkumar A</strong>, a 2nd-year B.Tech Information Technology student at{" "}
          <span className="text-cyan-300">Knowledge Institute of Technology, Salem</span>. I engineer end-to-end multi-agent systems, sub-400ms LLM cascade routers, offline-first native iOS platforms, and machine learning data pipelines.
        </motion.p>

        {/* Telemetry Status Bar */}
        <motion.div
          variants={slideInFromLeft(0.9)}
          className="grid grid-cols-3 gap-3 my-2 p-3.5 rounded-xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-md shadow-[0_0_20px_rgba(0,102,255,0.15)]"
        >
          <div className="border-l-2 border-cyan-400 pl-3">
            <div className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">Builds</div>
            <div className="text-lg font-bold text-white">20+ Shipped</div>
          </div>
          <div className="border-l-2 border-blue-400 pl-3">
            <div className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">Honors</div>
            <div className="text-lg font-bold text-cyan-300">11+ Awards</div>
          </div>
          <div className="border-l-2 border-teal-400 pl-3">
            <div className="text-[10px] uppercase tracking-widest text-gray-400 font-mono">Latency</div>
            <div className="text-lg font-bold text-white">&lt;400ms Router</div>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-wrap items-center gap-4 mt-2"
        >
          <Link
            href="#projects"
            className="py-3 px-6 text-sm font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#0066ff] to-[#00d4ff] rounded-lg shadow-[0_0_25px_rgba(0,170,255,0.5)] hover:shadow-[0_0_35px_rgba(0,212,255,0.8)] hover:scale-105 transition-all duration-300 text-center"
          >
            Explore Projects →
          </Link>

          <Link
            href="#contact"
            className="py-3 px-6 text-sm font-semibold tracking-wider uppercase text-gray-200 border border-[#0066ff]/40 bg-[#030014]/60 rounded-lg hover:border-cyan-400 hover:text-white hover:bg-[#0066ff]/20 transition-all duration-300 text-center"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>

      {/* Right Column: Cosmic Visual Graphic */}
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full lg:w-1/2 h-full flex justify-center items-center mt-8 lg:mt-0"
      >
        <div className="relative w-full max-w-[500px] aspect-square flex items-center justify-center">
          {/* Ambient glow behind graphic */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0066ff]/20 to-[#00d4ff]/20 rounded-full blur-3xl -z-10 animate-pulse" />
          <Image
            src="/hero-bg.svg"
            alt="Deepakkumar A Portfolio AI Graph"
            height={550}
            width={550}
            draggable={false}
            priority
            className="select-none filter drop-shadow-[0_0_35px_rgba(0,170,255,0.4)]"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
