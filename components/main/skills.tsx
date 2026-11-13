import { SkillDataProvider } from "@/components/sub/skill-data-provider";
import { SkillText } from "@/components/sub/skill-text";

import {
  BACKEND_SKILL,
  FRONTEND_SKILL,
  FULLSTACK_SKILL,
  OTHER_SKILL,
  SKILL_DATA,
} from "@/constants";

export const Skills = () => {
  return (
    <section
      id="skills"
      style={{ transform: "scale(0.95)" }}
      className="flex flex-col items-center justify-center gap-4 h-full relative overflow-hidden py-16"
    >
      <SkillText />

      {/* Row 1: Primary Skills (Python, TS, React, Next, Node, FastAPI, Swift, PostgreSQL, MongoDB, Docker, Tailwind) */}
      <div className="flex flex-row justify-center flex-wrap mt-2 gap-4 sm:gap-6 items-center max-w-5xl z-10 px-4">
        {SKILL_DATA.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Row 2: Frontend & Mobile (React, Next.js, TS, JS, Tailwind, HTML, CSS, Framer, Redux) */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-4 sm:gap-6 items-center max-w-5xl z-10 px-4">
        {FRONTEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Row 3: Backend & Data (Python, FastAPI, Node, Express, PostgreSQL, Prisma, MongoDB, Firebase) */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-4 sm:gap-6 items-center max-w-5xl z-10 px-4">
        {BACKEND_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Row 4: Native & Systems (Swift, SwiftUI, React Native, Docker, Figma) */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-4 sm:gap-6 items-center max-w-5xl z-10 px-4">
        {FULLSTACK_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Row 5: Data Science & ML */}
      <div className="flex flex-row justify-center flex-wrap mt-4 gap-4 sm:gap-6 items-center max-w-5xl z-10 px-4">
        {OTHER_SKILL.map((skill, i) => (
          <SkillDataProvider
            key={skill.skill_name}
            src={skill.image}
            name={skill.skill_name}
            width={skill.width}
            height={skill.height}
            index={i}
          />
        ))}
      </div>

      {/* Background Cosmic Video */}
      <div className="w-full h-full absolute inset-0 pointer-events-none">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto object-cover"
            preload="none"
            playsInline
            loop
            muted
            autoPlay
          >
            <source src="/videos/skills-bg.webm" type="video/webm" />
          </video>
        </div>
      </div>
    </section>
  );
};
