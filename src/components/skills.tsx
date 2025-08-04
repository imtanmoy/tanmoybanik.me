import React, { useId } from "react";
import { AnimateOnScroll } from "./animate-on-scroll";
import { portfolioData } from "../data/portfolio";

interface SkillCategoryProps {
  category: string;
  skills: string[];
  categoryId: string;
}

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills, categoryId }) => {
  return (
    <div className="mb-4">
      <h3 className="text-lg text-white font-medium mb-3 border-b border-violet-500/20 pb-2">
        {category}
      </h3>
      <div className="flex flex-wrap gap-1.5">
        {skills.map((skill) => (
          <span
            key={`${categoryId}-${skill}`}
            className="px-2.5 py-1 bg-violet-500/10 text-violet-400 rounded-md text-xs hover:bg-violet-500/20 transition-colors duration-200"
          >
            {skill}
          </span>
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
          <div className="h-px w-12 bg-violet-500/50 mr-4"></div>
          <h2 className="text-3xl font-semibold text-white text-center">
            Skills
          </h2>
          <div className="h-px w-12 bg-violet-500/50 ml-4"></div>
        </div>

        <div className="text-center mb-6">
          <p className="text-gray-400 text-sm">
            Technologies I've learned and worked with - constantly evolving as I continue to grow as a developer.
          </p>
        </div>

        <div className="flex flex-col gap-y-4 max-w-4xl mx-auto">
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