import React from "react";
import portfolioData from "../data/portfolio.json";
import { AnimateOnScroll } from "./animate-on-scroll";
import { FlatCard } from "./glowing-card";

export const Education: React.FC = () => {
  const { education, certifications } = portfolioData;

  return (
    <AnimateOnScroll id="education">
      <div className="w-full mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-violet-500/50 mr-4"></div>
          <h2 className="text-3xl font-semibold text-white text-center">
            Education
          </h2>
          <div className="h-px w-12 bg-violet-500/50 ml-4"></div>
        </div>

        {/* Formal Education */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {education.map((item, index) => (
            <FlatCard key={index}>
              <h3 className="text-xl text-white font-medium mb-2">
                {item.degree}
              </h3>
              <p className="text-violet-400 mb-1">{item.institution}</p>
              <p className="text-gray-400 mb-2">{item.year}</p>
            </FlatCard>
          ))}
        </div>

        {/* Professional Development */}
        <div className="mt-10">
          <h3 className="text-2xl text-white font-medium mb-6 text-center">
            Professional Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {certifications.map((cert, index) => (
              <FlatCard key={index} className="p-4">
                <p className="text-white text-sm font-medium mb-1">
                  {cert.name}
                </p>
                <p className="text-violet-400 text-xs">{cert.issuer}</p>
              </FlatCard>
            ))}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};
