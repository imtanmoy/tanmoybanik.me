import React, { useId } from "react";
import { AnimateOnScroll } from "./animate-on-scroll";
import { portfolioData } from "../data/portfolio";
import { TechnologyBadge } from "../utils/icon-mapping";

interface SkillCategoryProps {
  category: string;
  skills: string[];
  categoryId: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills, categoryId }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg text-white font-medium mb-4 border-b border-emerald-500/30 pb-2">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <TechnologyBadge
            key={`${categoryId}-${skill}`}
            technology={skill}
            className="py-1 font-medium"
          />
        ))}
      </div>
    </div>
  );
};

export const Skills: React.FC = () => {
  const { skills } = portfolioData;
  const sectionId = useId();

  return (
    <AnimateOnScroll id={sectionId}>
      <div className="w-full mx-auto px-4 py-12">
        <div className="flex items-center justify-center mb-4">
          <div className="h-px w-12 bg-emerald-500/50 mr-4"></div>
          <h2 id="skills-heading" className="text-3xl font-semibold text-white text-center">
            Skills
          </h2>
          <div className="h-px w-12 bg-emerald-500/50 ml-4"></div>
        </div>

        <div className="text-center mb-8">
          <p className="text-gray-400 text-sm">
            Technologies I've learned and worked with - constantly evolving as I continue to grow as a developer.
          </p>
        </div>

        <div className="flex flex-col gap-y-6 max-w-6xl mx-auto">
          {Object.entries(skills).map(([category, skillList]) => {
            const categoryId = `${sectionId}-${category}`;
            return (
              <SkillCategory
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