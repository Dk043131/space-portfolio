'use client';
import { AWARDS_DATA } from "@/constants";

export const Achievements = () => {
  return (
    <section id="awards" className="py-20 px-4 md:px-12 max-w-7xl mx-auto z-20">
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 rounded-full border border-[#0066ff]/50 bg-[#0066ff]/10 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
          Proven Track Record
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_25px_rgba(0,212,255,0.4)]">
          Achievements &amp; Honors
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Recognized across Tamil Nadu for project expos, technical research papers, hackathons, and departmental excellence.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {AWARDS_DATA.map((award, index) => (
          <div
            key={index}
            className="p-6 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,170,255,0.3)] hover:-translate-y-1 flex items-start gap-4"
          >
            <div className="w-12 h-12 rounded-xl bg-[#0066ff]/15 border border-[#00d4ff]/40 flex items-center justify-center text-2xl flex-shrink-0 shadow-[0_0_15px_rgba(0,102,255,0.3)]">
              {award.medal}
            </div>

            <div className="flex flex-col flex-grow">
              <h3 className="text-base font-bold text-white leading-snug">
                {award.title}
              </h3>
              <div className="text-xs text-gray-300 mt-1 mb-2 font-medium">
                {award.org}
              </div>
              <div className="mt-auto">
                <span className="inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-cyan-500/15 text-cyan-300 border border-cyan-400/40">
                  {award.prize}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
