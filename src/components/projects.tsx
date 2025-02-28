import React from "react";
import { AnimateOnScroll } from "./animate-on-scroll";
import { FlatCard } from "./glowing-card";
import { FiExternalLink, FiGithub } from "react-icons/fi";

// Import portfolio data
import portfolioData from "../data/portfolio.json";

// Project data structure
interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  githubLink?: string;
  image?: string;
  featured?: boolean;
  keyHighlights?: string[];
}

// Get projects from the imported JSON file
const projectsData = portfolioData.projects as Project[];

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  // Handle project with name instead of title
  const projectTitle = project.title || "Project";

  return (
    <div className="group relative">
      <FlatCard
        className={`
        flex flex-col h-full transition-all duration-300 
        ${
          project.featured
            ? "border-violet-500/40 hover:border-violet-500/60"
            : "border-violet-500/20 hover:border-violet-500/40"
        }
        relative overflow-hidden
      `}
      >
        {project.image && (
          <div className="w-full h-40 overflow-hidden mb-4 rounded-sm bg-white/5 relative">
            <img
              src={project.image}
              alt={`${projectTitle} thumbnail`}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              decoding="async"
              loading="lazy"
            />
            {project.featured && (
              <span className="absolute top-2 right-2 px-2 py-0.5 bg-violet-900/50 text-violet-400 text-xs rounded-full">
                Featured
              </span>
            )}
          </div>
        )}

        <div className="flex-1">
          <h3 className="text-xl text-white font-medium mb-2">
            {projectTitle}
          </h3>
          <p className="text-gray-400 mb-4 text-sm">{project.description}</p>
        </div>

        <div className="mt-auto">
          <div className="flex flex-wrap gap-2 mb-3">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2 py-0.5 bg-black/50 text-violet-300 text-xs rounded-full border border-violet-500/20"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 mt-2 pt-2 border-t border-violet-500/10 justify-between items-center">
            <div className="flex gap-3">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors flex items-center gap-1 text-sm"
                  aria-label={`View ${projectTitle} project`}
                >
                  <FiExternalLink /> Live
                </a>
              )}
              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-violet-400 transition-colors flex items-center gap-1 text-sm"
                  aria-label={`GitHub repository for ${projectTitle}`}
                >
                  <FiGithub /> GitHub
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
  // Filter and sort projects (featured first, then by recency if possible)
  const sortedProjects = [...projectsData].sort(
    (a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0)
  );

  return (
    <AnimateOnScroll id="projects">
      <div className="w-full mx-auto px-4 py-16">
        <div className="flex items-center justify-center mb-12">
          <div className="h-px w-12 bg-violet-500/50 mr-4"></div>
          <h2 className="text-3xl font-semibold text-white text-center">Projects</h2>
          <div className="h-px w-12 bg-violet-500/50 ml-4"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sortedProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </AnimateOnScroll>
  );
};

export default Projects;
