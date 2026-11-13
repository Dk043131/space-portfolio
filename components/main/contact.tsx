'use client';
import { useState } from "react";
import Link from "next/link";
import { CANDIDATE_INFO } from "@/constants";

export const Contact = () => {
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 md:px-12 max-w-7xl mx-auto z-20">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full border border-[#0066ff]/50 bg-[#0066ff]/10 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
          Initiate Handshake
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_25px_rgba(0,212,255,0.4)]">
          Let&apos;s Connect &amp; Collaborate
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Open for high-impact AI/ML internships, full-stack engineering roles, and innovative autonomous agent projects.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
        {/* Left Column: Direct Communication Channels */}
        <div className="flex flex-col gap-4">
          <h3 className="text-xl font-bold text-white mb-2">Direct Channels</h3>

          {/* Email */}
          <div className="p-5 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0066ff]/15 border border-cyan-400/40 flex items-center justify-center text-xl text-cyan-300">
                ✉️
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-gray-400">
                  Official Email
                </div>
                <div className="text-sm sm:text-base font-semibold text-white font-mono">
                  {CANDIDATE_INFO.email}
                </div>
              </div>
            </div>
            <button
              onClick={() => handleCopy(CANDIDATE_INFO.email, "Email")}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#0066ff]/20 text-cyan-300 border border-[#0066ff]/40 hover:border-cyan-400 hover:bg-[#0066ff]/40 transition-all"
            >
              {copiedText === "Email" ? "Copied! ✓" : "Copy"}
            </button>
          </div>

          {/* Phone */}
          <div className="p-5 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0066ff]/15 border border-cyan-400/40 flex items-center justify-center text-xl text-cyan-300">
                📞
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-gray-400">
                  Phone / WhatsApp
                </div>
                <div className="text-sm sm:text-base font-semibold text-white font-mono">
                  +91 {CANDIDATE_INFO.phone}
                </div>
              </div>
            </div>
            <button
              onClick={() => handleCopy(CANDIDATE_INFO.phone, "Phone")}
              className="px-3.5 py-1.5 rounded-lg text-xs font-mono font-semibold bg-[#0066ff]/20 text-cyan-300 border border-[#0066ff]/40 hover:border-cyan-400 hover:bg-[#0066ff]/40 transition-all"
            >
              {copiedText === "Phone" ? "Copied! ✓" : "Copy"}
            </button>
          </div>

          {/* LinkedIn */}
          <Link
            href={CANDIDATE_INFO.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="p-5 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl flex items-center justify-between gap-4 hover:border-cyan-400 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0066ff]/15 border border-cyan-400/40 flex items-center justify-center text-xl text-cyan-300">
                💼
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-gray-400">
                  LinkedIn Profile
                </div>
                <div className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  deepakkumar-a-1759a2360
                </div>
              </div>
            </div>
            <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">↗</span>
          </Link>

          {/* GitHub */}
          <Link
            href={CANDIDATE_INFO.github}
            target="_blank"
            rel="noreferrer noopener"
            className="p-5 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl flex items-center justify-between gap-4 hover:border-cyan-400 transition-all group"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-[#0066ff]/15 border border-cyan-400/40 flex items-center justify-center text-xl text-cyan-300">
                🐙
              </div>
              <div>
                <div className="text-[11px] font-mono uppercase tracking-widest text-gray-400">
                  GitHub Repositories
                </div>
                <div className="text-sm sm:text-base font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  github.com/Dk043131
                </div>
              </div>
            </div>
            <span className="text-cyan-400 group-hover:translate-x-1 transition-transform">↗</span>
          </Link>
        </div>

        {/* Right Column: Candidate Quick Dossier */}
        <div className="p-8 rounded-3xl border border-cyan-500/40 bg-[#030014]/80 backdrop-blur-2xl shadow-[0_0_40px_rgba(0,102,255,0.2)]">
          <div className="flex items-center gap-3 pb-4 mb-4 border-b border-[#0066ff]/25">
            <span className="text-2xl">📍</span>
            <h3 className="text-lg font-bold text-white uppercase tracking-wider font-mono">
              Candidate Dossier
            </h3>
          </div>

          <div className="space-y-3.5 text-sm">
            <div className="flex justify-between items-center py-1 border-b border-gray-800">
              <span className="text-gray-400 font-mono text-xs uppercase">Full Name</span>
              <span className="font-semibold text-white">{CANDIDATE_INFO.name}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-800">
              <span className="text-gray-400 font-mono text-xs uppercase">Base Location</span>
              <span className="font-semibold text-white">{CANDIDATE_INFO.location}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-800">
              <span className="text-gray-400 font-mono text-xs uppercase">Institution</span>
              <span className="font-semibold text-white">{CANDIDATE_INFO.college}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-800">
              <span className="text-gray-400 font-mono text-xs uppercase">Program</span>
              <span className="font-semibold text-cyan-300">{CANDIDATE_INFO.education}</span>
            </div>
            <div className="flex justify-between items-center py-1 border-b border-gray-800">
              <span className="text-gray-400 font-mono text-xs uppercase">Status</span>
              <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                Open for AI &amp; Full-Stack Roles
              </span>
            </div>
            <div className="flex justify-between items-center py-1">
              <span className="text-gray-400 font-mono text-xs uppercase">Languages</span>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#0066ff]/20 text-cyan-300 border border-[#0066ff]/40">
                  Tamil (Native)
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#0066ff]/20 text-cyan-300 border border-[#0066ff]/40">
                  English (Pro)
                </span>
                <span className="px-2 py-0.5 rounded text-[11px] bg-[#0066ff]/20 text-cyan-300 border border-[#0066ff]/40">
                  Japanese (Learning)
                </span>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 rounded-xl bg-[#0066ff]/10 border border-[#0066ff]/30 text-xs text-gray-300 leading-relaxed">
            <strong className="text-cyan-300">Deployment Velocity:</strong> Proven ability to conceptualize, design, and deploy production full-stack systems and multimodal AI agents with zero-knowledge encryption and sub-400ms latency cascades.
          </div>
        </div>
      </div>
    </section>
  );
};
