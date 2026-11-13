import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
  tags?: readonly string[];
  flagship?: boolean;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
  tags,
  flagship,
}: ProjectCardProps) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl shadow-xl border border-[#0066ff]/30 bg-[#030014]/70 backdrop-blur-xl hover:border-cyan-400 transition-all duration-300 flex flex-col justify-between hover:shadow-[0_0_35px_rgba(0,170,255,0.35)] hover:-translate-y-2">
      {/* Flagship Star Badge */}
      {flagship && (
        <div className="absolute top-3 right-3 z-20 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500/20 to-cyan-500/20 border border-amber-400/60 text-amber-300 font-mono text-[11px] font-bold tracking-wider uppercase backdrop-blur-md shadow-[0_0_15px_rgba(255,190,0,0.4)]">
          ★ Flagship
        </div>
      )}

      {/* Image Banner */}
      <div className="relative w-full h-52 overflow-hidden bg-[#070b1e]">
        <Image
          src={src}
          alt={title}
          width={800}
          height={450}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030014] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="relative p-6 flex flex-col flex-grow justify-between">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
            {title}
          </h2>
          <p className="mt-2.5 text-sm sm:text-base text-gray-300 leading-relaxed">
            {description}
          </p>
        </div>

        {/* Tech Tags */}
        <div className="mt-5 pt-4 border-t border-[#0066ff]/20 flex flex-col gap-3">
          {tags && tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono tracking-wide bg-[#0066ff]/15 text-cyan-200 border border-[#0066ff]/30"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="flex items-center justify-between mt-1">
            <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">
              Knowledge Institute of Tech
            </span>
            <Link
              href={link}
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-white transition-colors"
            >
              <span>Explore Code</span>
              <span>↗</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
