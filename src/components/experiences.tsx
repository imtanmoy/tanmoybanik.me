import { AnimateOnScroll } from "./animate-on-scroll";
import { FlatCard } from "./glowing-card";
import { portfolioData } from "../data/portfolio";
import { TechnologyBadge } from "../utils/icon-mapping";

export const Experiences = () => {
  const { experiences } = portfolioData;

  return (
    <AnimateOnScroll id="experiences">
      <div className="w-full mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-emerald-500/50 mr-4"></div>
          <h2 id="experiences-heading" className="text-3xl font-semibold text-white text-center">
            Professional Experience
          </h2>
          <div className="h-px w-12 bg-emerald-500/50 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-5xl mx-auto">
          {experiences.map((exp, index) => (
            <FlatCard key={index}>
              <div className="flex flex-col">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl text-white font-medium">
                      {exp.position}
                    </h3>
                    <p className="text-zinc-300 text-lg">
                      {exp.company} | {exp.location}
                    </p>
                    <p className="text-gray-400 text-sm">
                      {exp.startDate} - {exp.endDate}
                    </p>
                  </div>
                </div>

                <ul className="text-gray-300 text-sm space-y-2 mb-4">
                  {exp.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-3 h-3 text-emerald-400 mr-2 mt-1 flex-shrink-0"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      {highlight}
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIdx) => (
                    <TechnologyBadge key={techIdx} technology={tech} />
                  ))}
                </div>
              </div>
            </FlatCard>
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
};
