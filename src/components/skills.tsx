import React, { useId } from "react";
import { AnimateOnScroll } from "./animate-on-scroll";
import { FlatCard } from "./glowing-card";
import { portfolioData } from "../data/portfolio";

interface SkillCardProps {
  category: string;
  skills: string[];
  categoryId: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills, categoryId }) => {
  return (
    <FlatCard className="flex flex-col gap-4 transition-all duration-300 hover:border-violet-500/50">
      <h3 className="text-xl text-white font-medium">{category}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span
            key={`${categoryId}-${skill}`}
            className="px-3 py-1 bg-violet-500/10 text-violet-400 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </FlatCard>
  );
};

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const sectionId = useId();

  return (
    <AnimateOnScroll id={sectionId}>
      <div className="w-full mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-violet-500/50 mr-4"></div>
          <h2 className="text-3xl font-semibold text-white text-center">
            Skills
          </h2>
          <div className="h-px w-12 bg-violet-500/50 ml-4"></div>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-400 text-md">
            These are the technologies I've learned and worked with. This list is constantly evolving as I continue to learn and grow as a developer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {Object.entries(skills).map(([category, skillList]) => {
            const categoryId = `${sectionId}-${category}`;
            return (
              <SkillCard
                key={categoryId}
                category={category}
                skills={skillList}
                categoryId={categoryId}
              />
            );
          })}
        </div>
      </div>
    </AnimateOnScroll>
  );
};