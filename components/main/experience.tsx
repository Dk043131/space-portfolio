'use client';

export const Experience = () => {
  return (
    <section id="about-me" className="py-20 px-4 md:px-12 max-w-7xl mx-auto z-20">
      <div className="text-center mb-16">
        <div className="inline-block px-4 py-1 rounded-full border border-[#0066ff]/50 bg-[#0066ff]/10 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
          Journey &amp; Leadership
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_25px_rgba(0,212,255,0.4)]">
          Experience &amp; Education
        </h2>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Balancing rigorous academic foundations at KIOT Salem with production internships, student governance, and intensive 36-hour hackathons.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Column: Timeline */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-cyan-400">⚡</span> Academic &amp; Industry Track
          </h3>

          {/* Item 1 */}
          <div className="p-6 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl relative">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#0066ff]/20 text-cyan-300 border border-[#0066ff]/40">
              2025 · 1 Month
            </span>
            <h4 className="text-lg font-bold text-white mt-2">Data Science Intern</h4>
            <div className="text-sm text-cyan-400 font-mono mb-2">Thiranex · Online</div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Executed exploratory data analysis, data pre-processing pipelines, feature engineering, and predictive modeling on real-world datasets, strengthening production problem-solving.
            </p>
          </div>

          {/* Item 2 */}
          <div className="p-6 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl relative">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#0066ff]/20 text-cyan-300 border border-[#0066ff]/40">
              2025 – 2029 · 2nd Year
            </span>
            <h4 className="text-lg font-bold text-white mt-2">B.Tech — Information Technology</h4>
            <div className="text-sm text-cyan-400 font-mono mb-2">
              Knowledge Institute of Technology, Salem
            </div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Core focus on data structures, algorithmic efficiency, distributed systems, and AI model orchestration. Active student lead within the IT department.
            </p>
          </div>

          {/* Item 3 */}
          <div className="p-6 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl relative">
            <span className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-[#0066ff]/20 text-cyan-300 border border-[#0066ff]/40">
              2026
            </span>
            <h4 className="text-lg font-bold text-white mt-2">Modern Web Development Seminar</h4>
            <div className="text-sm text-cyan-400 font-mono mb-2">VIJESHA IT Services LLP</div>
            <p className="text-sm text-gray-300 leading-relaxed">
              Explored modern cloud application deployment workflows, enterprise web architecture patterns, and reactive full-stack tooling.
            </p>
          </div>
        </div>

        {/* Right Column: Leadership & Hackathons */}
        <div className="flex flex-col gap-6">
          <h3 className="text-xl font-bold text-white flex items-center gap-2 mb-2">
            <span className="text-cyan-400">🎖️</span> Leadership &amp; Hackathon Arenas
          </h3>

          {/* Leadership Box */}
          <div className="p-6 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl">
            <h4 className="text-base font-bold text-white mb-3">Institutional Leadership</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✦</span>
                <div>
                  <strong className="text-white">Member, Research &amp; Development Committee</strong>
                  <p className="text-xs text-gray-400">Knowledge Institute of Technology — Incubating peer research, project exhibitions, and symposium papers.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-cyan-400 mt-1">✦</span>
                <div>
                  <strong className="text-white">Placement Ambassador</strong>
                  <p className="text-xs text-gray-400">KIOT Placement Ambassador Programme — Coordinating industry recruitment interfaces and peer technical workshops.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Hackathons Box */}
          <div className="p-6 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl">
            <h4 className="text-base font-bold text-white mb-3">Competitive Hackathons</h4>
            <div className="grid grid-cols-2 gap-3 text-xs font-mono">
              <div className="p-3 rounded-lg bg-[#0066ff]/10 border border-[#0066ff]/25">
                <div className="font-bold text-white">Codesangam (36h)</div>
                <div className="text-cyan-400 text-[11px]">Alliance University</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0066ff]/10 border border-[#0066ff]/25">
                <div className="font-bold text-white">SPRING FEST (8h)</div>
                <div className="text-cyan-400 text-[11px]">KSR College</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0066ff]/10 border border-[#0066ff]/25">
                <div className="font-bold text-white">JCT SDG (24h)</div>
                <div className="text-cyan-400 text-[11px]">JCT College</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0066ff]/10 border border-[#0066ff]/25">
                <div className="font-bold text-white">DEALATHON</div>
                <div className="text-cyan-400 text-[11px]">SRM College, Chennai</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0066ff]/10 border border-[#0066ff]/25">
                <div className="font-bold text-white">FORGEX AI</div>
                <div className="text-cyan-400 text-[11px]">Erode Sengunthar</div>
              </div>
              <div className="p-3 rounded-lg bg-[#0066ff]/10 border border-[#0066ff]/25">
                <div className="font-bold text-white">KPR Hackathon</div>
                <div className="text-cyan-400 text-[11px]">KPR Institute</div>
              </div>
            </div>
          </div>

          {/* Certifications Box */}
          <div className="p-6 rounded-2xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl">
            <h4 className="text-base font-bold text-white mb-3">Verified Certifications</h4>
            <div className="flex flex-wrap gap-3">
              <div className="px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-xs text-cyan-200">
                🐍 <strong>Python (Basic)</strong> — HackerRank (2025)
              </div>
              <div className="px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/30 text-xs text-cyan-200">
                📈 <strong>Digital Marketing</strong> — HubSpot Academy
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
