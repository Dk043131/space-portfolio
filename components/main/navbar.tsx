'use client';
import { useState } from "react";
import Link from "next/link";
import { CANDIDATE_INFO, NAV_LINKS, SOCIALS } from "@/constants";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full h-[70px] fixed top-0 shadow-lg shadow-[#0066ff]/20 bg-[#030014]/60 backdrop-blur-xl z-50 px-4 md:px-12 border-b border-[#0066ff]/20">
      <div className="w-full h-full flex items-center justify-between m-auto">
        {/* Brand / Logo */}
        <Link
          href="#about-me"
          className="flex items-center gap-3 group"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#0066ff] to-[#00d4ff] flex items-center justify-center font-extrabold text-white text-lg shadow-[0_0_20px_rgba(0,170,255,0.6)] group-hover:scale-105 transition-transform duration-300">
            DK
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-gray-100 text-sm md:text-base tracking-wider">
              DEEPAKKUMAR <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">A</span>
            </span>
            <span className="text-[10px] text-cyan-300 font-mono tracking-widest uppercase hidden md:inline">
              Autonomous AI & Full-Stack
            </span>
          </div>
        </Link>

        {/* Desktop Navbar Links */}
        <nav className="hidden lg:flex items-center justify-between border border-[#0066ff]/30 bg-[#030014]/70 px-6 py-2 rounded-full text-gray-200 shadow-[0_0_25px_rgba(0,102,255,0.15)]">
          <div className="flex items-center gap-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-sm font-medium tracking-wide text-gray-300 hover:text-cyan-400 transition-colors duration-200"
              >
                {link.title}
              </Link>
            ))}
          </div>
        </nav>

        {/* Right CTA & Socials */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-3 border-r border-[#0066ff]/30 pr-4">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="p-2 rounded-lg bg-[#0066ff]/10 hover:bg-[#00d4ff]/20 text-gray-300 hover:text-cyan-400 transition-all border border-[#0066ff]/20 hover:border-cyan-400"
                title={name}
              >
                <Icon className="h-4 w-4" />
              </Link>
            ))}
          </div>

          <Link
            href="#contact"
            className="py-1.5 px-4 text-xs font-semibold tracking-wider uppercase text-white bg-gradient-to-r from-[#0066ff] to-[#00d4ff] rounded-lg shadow-[0_0_15px_rgba(0,170,255,0.4)] hover:shadow-[0_0_25px_rgba(0,212,255,0.7)] hover:scale-105 transition-all duration-300"
          >
            Connect ⚡
          </Link>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-gray-300 hover:text-cyan-400 p-2 text-2xl focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation menu"
        >
          {isMobileMenuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="absolute top-[70px] left-0 w-full bg-[#030014]/95 backdrop-blur-2xl p-6 flex flex-col items-center gap-5 border-b border-[#0066ff]/30 lg:hidden shadow-2xl">
          <div className="flex flex-col items-center gap-4 w-full">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.title}
                href={link.link}
                className="text-base font-medium text-gray-200 hover:text-cyan-400 transition-colors w-full text-center py-1"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.title}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4 pt-3 border-t border-[#0066ff]/20 w-full justify-center">
            {SOCIALS.map(({ link, name, icon: Icon }) => (
              <Link
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                key={name}
                className="p-2.5 rounded-lg bg-[#0066ff]/10 text-cyan-300 border border-[#0066ff]/30"
              >
                <Icon className="h-5 w-5" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
