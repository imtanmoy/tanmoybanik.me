import React from "react";
import { AnimateOnScroll } from "./animate-on-scroll";
import { FlatCard } from "./glowing-card";
import { portfolioData } from "../data/portfolio";

export const Education: React.FC = () => {
  const { education, certificates } = portfolioData;

  return (
    <AnimateOnScroll id="education">
      <div className="w-full mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-emerald-500/50 mr-4"></div>
          <h2 className="text-3xl font-semibold text-white text-center">
            Education
          </h2>
          <div className="h-px w-12 bg-emerald-500/50 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12 max-w-5xl mx-auto">
          {education.map((item, index) => (
            <FlatCard key={index} className="gap-1">
              <h3 className="text-xl text-white font-medium">{item.degree}</h3>
              <span className="text-zinc-300">{item.institution}</span>
              <span className="text-gray-400">{item.location}</span>
              <span className="text-gray-400">{item.year}</span>
            </FlatCard>
          ))}
        </div>

        <div className="mt-10">
          <h3 className="text-2xl text-white font-medium mb-6 text-center">
            Professional Development
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {certificates.map((cert, index) => (
              <FlatCard key={index} className="p-4 gap-1">
                <span className="text-white text-sm font-medium">
                  {cert.name}
                </span>
                <span className="text-zinc-300 text-xs">{cert.issuer}</span>
                <span className="text-gray-400 text-xs">{cert.date}</span>
                <a
                  href={cert.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-300 text-xs"
                >
                  View Credential
                </a>
              </FlatCard>
            ))}
          </div>
        </div>
      </div>
    </AnimateOnScroll>
  );
};
