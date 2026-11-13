'use client';
import { useState } from "react";
import { ProjectCard } from "@/components/sub/project-card";
import { ALL_PROJECTS_LIST, PROJECTS } from "@/constants";

export const Projects = () => {
  const [filter, setFilter] = useState<string>("all");
  const [search, setSearch] = useState<string>("");

  const filteredCatalog = ALL_PROJECTS_LIST.filter((proj) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "flagship" && proj.role.includes("Flagship")) ||
      (filter === "ai" && (proj.category.includes("AI") || proj.category.includes("RAG") || proj.category.includes("NLP"))) ||
      (filter === "mobile" && (proj.category.includes("iOS") || proj.category.includes("Mobile") || proj.category.includes("Transit"))) ||
      (filter === "systems" && (proj.category.includes("IoT") || proj.category.includes("DevTools") || proj.category.includes("Security")));

    const query = search.toLowerCase();
    const matchesSearch =
      !query ||
      proj.name.toLowerCase().includes(query) ||
      proj.stack.toLowerCase().includes(query) ||
      proj.desc.toLowerCase().includes(query);

    return matchesFilter && matchesSearch;
  });

  return (
    <section
      id="projects"
      className="flex flex-col items-center justify-center py-20 px-4 md:px-12 max-w-7xl mx-auto z-20"
    >
      {/* Flagship Header */}
      <div className="text-center mb-12">
        <div className="inline-block px-4 py-1 rounded-full border border-[#0066ff]/50 bg-[#0066ff]/10 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
          Hardest-Worked Builds
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-300 drop-shadow-[0_0_25px_rgba(0,212,255,0.4)]">
          Flagship Software Projects
        </h1>
        <p className="mt-3 text-gray-300 max-w-2xl mx-auto text-sm sm:text-base">
          Autonomous multi-agent engines, sub-400ms HUD routers, offline-first native iOS platforms, and vernacular AI language learning ecosystems.
        </p>
      </div>

      {/* Flagship Cards Grid */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
        {PROJECTS.map((project) => (
          <ProjectCard
            key={project.title}
            src={project.image}
            title={project.title}
            description={project.description}
            link={project.link}
            tags={project.tags}
            flagship={project.flagship}
          />
        ))}
      </div>

      {/* Complete Project Archive (All 20 Builds) */}
      <div className="w-full pt-12 border-t border-[#0066ff]/20">
        <div className="text-center mb-8">
          <div className="inline-block px-4 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-300 font-mono text-xs uppercase tracking-widest mb-3">
            Comprehensive Index
          </div>
          <h2 className="text-2xl sm:text-4xl font-bold text-white">
            All 20 Shipped Builds &amp; Platforms
          </h2>
          <p className="mt-2 text-gray-400 text-sm max-w-xl mx-auto">
            Spanning Autonomous Agents, Full-Stack Web, Embedded Robotics, HealthTech, and Quantitative Finance.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          <div className="flex flex-wrap items-center gap-2">
            {[
              { id: "all", label: "All (20)" },
              { id: "flagship", label: "★ Flagship (5)" },
              { id: "ai", label: "AI & Agents" },
              { id: "mobile", label: "iOS & Mobile" },
              { id: "systems", label: "IoT & Systems" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setFilter(tab.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono tracking-wider transition-all duration-200 border ${
                  filter === tab.id
                    ? "bg-gradient-to-r from-[#0066ff] to-[#00d4ff] text-white border-transparent shadow-[0_0_15px_rgba(0,170,255,0.4)]"
                    : "bg-[#030014]/60 text-gray-300 border-[#0066ff]/30 hover:border-cyan-400"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="w-full md:w-72">
            <input
              type="text"
              placeholder="Search by keyword, tech, title..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full px-3.5 py-1.5 text-xs font-mono rounded-lg bg-[#030014]/80 border border-[#0066ff]/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors shadow-inner"
            />
          </div>
        </div>

        {/* Catalog Table / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredCatalog.map((item) => (
            <div
              key={item.id}
              className="p-5 rounded-xl border border-[#0066ff]/25 bg-[#030014]/60 backdrop-blur-md hover:border-cyan-400 transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,102,255,0.25)] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-[11px] font-mono text-cyan-400 uppercase tracking-widest font-semibold">
                    #{String(item.id).padStart(2, "0")} · {item.category}
                  </span>
                  {item.role.includes("★") && (
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-400/50">
                      ★ Flagship
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-bold text-white mb-1.5">
                  {item.name}
                </h3>
                <p className="text-xs text-gray-300 leading-relaxed mb-3">
                  {item.desc}
                </p>
              </div>

              <div className="pt-3 border-t border-[#0066ff]/15">
                <div className="text-[11px] font-mono text-gray-400">
                  <span className="text-cyan-400">Stack:</span> {item.stack}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
