"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { slideInFromTop } from "@/lib/motion";

export const Encryption = () => {
  return (
    <section id="encryption" className="flex flex-row relative items-center justify-center min-h-screen w-full h-full -z-20 overflow-hidden">
      {/* Top Heading */}
      <div className="absolute w-auto h-auto top-10 z-[5] px-4 text-center">
        <motion.div
          variants={slideInFromTop}
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center text-gray-200"
        >
          Autonomous Intelligence{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_20px_rgba(0,212,255,0.4)]">
            &amp;
          </span>{" "}
          Zero-Knowledge Security.
        </motion.div>
      </div>

      {/* Center 3D Lock */}
      <div className="flex flex-col items-center justify-center translate-y-[-30px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
          <Image
            src="/lock-top.png"
            alt="Cryptora Security Lock top"
            width={55}
            height={55}
            className="translate-y-5 transition-all duration-300 group-hover:translate-y-11 filter drop-shadow-[0_0_15px_rgba(0,212,255,0.6)]"
          />
          <Image
            src="/lock-main.png"
            alt="Cryptora Security Lock main"
            width={75}
            height={75}
            className="z-10 filter drop-shadow-[0_0_20px_rgba(0,102,255,0.7)]"
          />
        </div>

        <div className="Welcome-box px-[18px] py-[6px] z-[20] border my-[18px] border-[#0066ff]/60 bg-[#0066ff]/10 backdrop-blur-md shadow-[0_0_25px_rgba(0,170,255,0.3)]">
          <h1 className="Welcome-text text-[13px] font-semibold tracking-wider uppercase text-cyan-200">
            DK SYSTEM 3.0 &amp; Cryptora Architecture
          </h1>
        </div>
      </div>

      {/* Bottom Subtitle */}
      <div className="absolute z-[20] bottom-[40px] px-4 text-center max-w-xl">
        <div className="cursive text-xl sm:text-2xl font-medium text-center text-cyan-200">
          Sub-400ms LLM cascade routing paired with client-side zero-knowledge cryptographic relays.
        </div>
      </div>

      {/* Background Cosmic Video */}
      <div className="w-full flex items-start justify-center absolute inset-0 pointer-events-none">
        <video
          loop
          muted
          autoPlay
          playsInline
          preload="none"
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/videos/encryption-bg.webm" type="video/webm" />
        </video>
      </div>
    </section>
  );
};
