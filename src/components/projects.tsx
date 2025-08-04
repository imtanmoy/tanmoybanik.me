import React from "react";
import { AnimateOnScroll } from "./animate-on-scroll";
import { FlatCard } from "./glowing-card";
import { FiExternalLink, FiGithub } from "react-icons/fi";
import { portfolioData, type Project } from "../data/portfolio";
import { cn } from "../utils/cn";
import { TechnologyBadge } from "../utils/icon-mapping";

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  project: Project;
}

const ProjectCard = ({ project, className, ...props }: Props) => {
  return (
    <div className={cn("group relative", className)} {...props}>
      <FlatCard
        className={`flex flex-col h-full transition-all duration-300 relative overflow-hidden`}
      >
        {project.image && (
          <div className="w-full h-40 overflow-hidden mb-4 rounded-sm bg-white/5 relative">
            <img
              src={project.image}
              alt={`Screenshot of ${project.title} project showing the user interface and key features`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              decoding="async"
              loading="lazy"
            />
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-xl text-white font-medium mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, index) => (
              <TechnologyBadge key={index} technology={tech} className="py-0.5" />
            ))}
          </div>

          <div className="flex gap-3 mt-2 pt-2 border-t border-emerald-500/10 justify-between items-center">
            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={`View ${project.title} project - Opens in new tab`}
                >
                  <FiExternalLink aria-hidden="true" /> 
                  Live
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center gap-1 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:ring-offset-2 focus:ring-offset-black rounded"
                  aria-label={`GitHub repository for ${project.title} - Opens in new tab`}
                >
                  <FiGithub aria-hidden="true" /> 
                  GitHub
                  <span className="sr-only">(opens in new tab)</span>
                </a>
              )}
            </div>
          </div>
        </div>
      </FlatCard>
    </div>
  );
};

export const Projects: React.FC = () => {
  const sortedProjects = [...portfolioData.projects];

  return (
    <AnimateOnScroll id="projects">
      <div className="w-full px-4 py-16">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-emerald-500/50 mr-4"></div>
          <h2 id="projects-heading" className="text-3xl font-semibold text-white text-center">
            Projects
          </h2>
          <div className="h-px w-12 bg-emerald-500/50 ml-4"></div>
        </div>
        <div className="flex flex-wrap justify-center max-w-6xl mx-auto gap-4">
          {sortedProjects.map((project, index) => (
            <ProjectCard
              key={index}
              project={project}
              className="w-full sm:w-1/2 md:w-1/3"
            />
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default Projects;
