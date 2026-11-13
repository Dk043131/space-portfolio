import Link from "next/link";
import { CANDIDATE_INFO, FOOTER_DATA } from "@/constants";

export const Footer = () => {
  return (
    <footer className="w-full bg-[#030014]/90 text-gray-200 shadow-2xl p-8 md:p-14 z-50 border-t border-[#0066ff]/20">
      <div className="w-full flex flex-col items-center justify-center m-auto max-w-7xl">
        <div className="w-full h-full flex flex-row items-start justify-around flex-wrap gap-8">
          {FOOTER_DATA.map((column) => (
            <div
              key={column.title}
              className="min-w-[200px] h-auto flex flex-col items-start justify-start"
            >
              <h3 className="font-bold text-sm tracking-widest uppercase font-mono text-cyan-300 mb-4">
                {column.title}
              </h3>
              <div className="flex flex-col gap-2.5">
                {column.data.map(({ name, icon: Icon, link }) => (
                  <Link
                    key={name}
                    href={link}
                    target={link.startsWith("http") ? "_blank" : undefined}
                    rel={link.startsWith("http") ? "noreferrer noopener" : undefined}
                    className="flex flex-row items-center text-xs text-gray-400 hover:text-cyan-300 transition-colors gap-2"
                  >
                    {Icon && <Icon className="h-4 w-4 text-cyan-400" />}
                    <span>{name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-6 border-t border-[#0066ff]/20 w-full flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-3">
          <div>
            &copy; 2025–2026 <strong className="text-gray-300 font-semibold">{CANDIDATE_INFO.name}</strong>. Built on 3D Space Architecture.
          </div>
          <div className="font-mono text-cyan-500">
            Knowledge Institute of Technology, Salem · Tamil Nadu
          </div>
        </div>
      </div>
    </footer>
  );
};
