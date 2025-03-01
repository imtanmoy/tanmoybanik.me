import React from "react";
import { AnimateOnScroll } from "./animate-on-scroll";
import { FlatCard } from "./glowing-card";
import { FiAward } from "react-icons/fi";
import { portfolioData, type Award } from "../data/portfolio";

const AwardCard: React.FC<{ award: Award }> = ({ award }) => {
  return (
    <FlatCard className="flex items-start gap-4 transition-all duration-300 hover:border-violet-500/50">
      {award.logo && (
        <div className="w-16 h-16 flex-shrink-0 bg-white/10 rounded-lg flex items-center justify-center p-2">
          <img
            src={award.logo}
            alt={`${award.title} logo`}
            className="max-w-full max-h-full object-contain"
            decoding="async"
            loading="lazy"
          />
        </div>
      )}

      <div className="flex-1">
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="text-xl text-white font-medium">{award.title}</h3>
            <p className="text-violet-400 text-sm">{award.organization}</p>
          </div>
          <span className="text-gray-400 text-sm font-light">{award.year}</span>
        </div>

        <p className="text-gray-400 text-sm mb-2">{award.description}</p>

        <div className="flex items-center text-violet-400 text-xs mt-2">
          <FiAward className="mr-2" />
          <span>Award Recipient</span>
        </div>
      </div>
    </FlatCard>
  );
};

export const Awards: React.FC = () => {
  const sortedAwards = [...portfolioData.awards].sort(
    (a, b) => parseInt(b.year) - parseInt(a.year)
  );

  return (
    <AnimateOnScroll id="awards">
      <div className="w-full mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-violet-500/50 mr-4"></div>
          <h2 className="text-3xl font-semibold text-white text-center">
            Awards
          </h2>
          <div className="h-px w-12 bg-violet-500/50 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sortedAwards.map((award, index) => (
            <AwardCard key={index} award={award} />
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
};
