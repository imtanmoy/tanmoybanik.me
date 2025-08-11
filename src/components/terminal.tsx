import { useState, useEffect } from "react";
import { portfolioData } from "../data/portfolio";

const PROMPT = "tanmoy@portfolio:~$ ";

export const Terminal = () => {
  const [visibleCommands, setVisibleCommands] = useState<number>(0);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(true);

  const commands = [
    {
      command: "whoami",
      type: "info"
    },
    {
      command: "cat about.txt",
      type: "about"
    },
    {
      command: "ls -la skills/",
      type: "skills"
    },
    {
      command: "cat experience.log",
      type: "experience"
    },
    {
      command: "tree projects/",
      type: "projects"
    },
    {
      command: "ls education/",
      type: "education"
    },
    {
      command: "cat achievements.md",
      type: "awards"
    },
    {
      command: "cat contact.info",
      type: "contact"
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (visibleCommands < commands.length) {
        setVisibleCommands(prev => prev + 1);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [visibleCommands, commands.length]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const renderCommandOutput = (cmd: any) => {
    const textColor = isDarkMode ? 'text-gray-300' : 'text-gray-700';
    const mutedColor = isDarkMode ? 'text-gray-400' : 'text-gray-600';
    const accentColor = isDarkMode ? 'text-cyan-400' : 'text-blue-600';
    const highlightColor = isDarkMode ? 'text-orange-400' : 'text-orange-600';
    const cardBg = isDarkMode ? 'bg-gray-800/30' : 'bg-gray-50';
    const borderColor = isDarkMode ? 'border-gray-700' : 'border-gray-200';

    switch (cmd.type) {
      case "info":
        return (
          <div className={`${cardBg} rounded-lg p-6 ${borderColor} border`}>
            <div className="flex items-center space-x-4">
              <div className={`w-12 h-12 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg`}>
                TB
              </div>
              <div>
                <div className={`${textColor} font-bold text-2xl mb-1`}>Tanmoy Banik</div>
                <div className={`${accentColor} text-lg font-medium mb-1`}>Full-Stack Software Engineer</div>
                <div className={`${mutedColor} text-sm flex items-center`}>
                  <span className="mr-2">📍</span>
                  Dhaka, Bangladesh • 7+ Years Experience
                </div>
              </div>
            </div>
            <div className={`${mutedColor} text-sm mt-4 p-4 rounded-md ${isDarkMode ? 'bg-gray-700/30' : 'bg-blue-50/50'}`}>
              ✨ Building the future, one line of code at a time
            </div>
          </div>
        );

      case "about":
        return (
          <div className="space-y-4">
            {portfolioData.about.map((paragraph, i) => (
              <div key={i} className={`${cardBg} rounded-lg p-4 ${borderColor} border ${textColor} leading-relaxed`}>
                {paragraph}
              </div>
            ))}
          </div>
        );

      case "skills":
        const skillCategories = Object.entries(portfolioData.skills).map(([category, skills]) => ({
          name: category.toLowerCase().replace(/\s+/g, '_'),
          skills: skills
        }));
        
        return (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
            {skillCategories.map((category, i) => (
              <div key={i} className={`${cardBg} rounded-lg p-4 ${borderColor} border`}>
                <div className={`${accentColor} font-bold text-lg mb-3 flex items-center`}>
                  <span className="mr-2">📁</span>
                  {category.name}/
                </div>
                <div className="space-y-2">
                  {category.skills.map((skill, j) => (
                    <div key={j} className={`${mutedColor} text-sm flex items-center`}>
                      <span className={`${highlightColor} mr-2`}>├── </span>
                      <span className="font-medium">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        );

      case "experience":
        return (
          <div className="space-y-6">
            {portfolioData.experiences.map((exp, i) => (
              <div key={i} className={`${cardBg} rounded-lg p-6 ${borderColor} border`}>
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div className="flex-1">
                    <div className={`${textColor} font-bold text-xl mb-2`}>{exp.position}</div>
                    <div className={`${accentColor} font-semibold text-lg mb-2 flex items-center`}>
                      <span className="mr-2">🏢</span>
                      {exp.company}
                    </div>
                    <div className={`${mutedColor} text-sm mb-3 flex items-center`}>
                      <span className="mr-2">📍</span>
                      {exp.location}
                    </div>
                  </div>
                  <div className={`${highlightColor} font-medium px-3 py-1 rounded-full text-sm ${isDarkMode ? 'bg-orange-500/10' : 'bg-orange-100'} border ${isDarkMode ? 'border-orange-500/20' : 'border-orange-200'}`}>
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                
                <div className={`${mutedColor} space-y-2 mb-4`}>
                  {exp.highlights.map((highlight, j) => (
                    <div key={j} className="flex items-start">
                      <span className={`${highlightColor} mr-2 mt-1`}>•</span>
                      <span className="text-sm leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>
                
                <div className={`pt-3 border-t ${borderColor}`}>
                  <div className={`${mutedColor} text-sm`}>
                    <span className="font-semibold">Tech Stack: </span>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {exp.technologies.map((tech, k) => (
                        <span key={k} className={`px-2 py-1 rounded text-xs font-medium ${isDarkMode ? 'bg-cyan-500/10 text-cyan-300 border border-cyan-500/20' : 'bg-blue-100 text-blue-700 border border-blue-200'}`}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "projects":
        return (
          <div className="space-y-4">
            {portfolioData.projects.map((project, i) => (
              <div key={i} className="flex items-start">
                <span className={`${highlightColor} mr-3 mt-1`}>
                  {i === portfolioData.projects.length - 1 ? '└── ' : '├── '}
                </span>
                <div className={`${cardBg} rounded-lg p-4 ${borderColor} border flex-1`}>
                  <div className={`${textColor} font-bold text-lg mb-2 flex items-center`}>
                    <span className="mr-2">📦</span>
                    {project.title}
                  </div>
                  <div className={`${mutedColor} text-sm leading-relaxed mb-3`}>
                    {project.description}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 6).map((tech, k) => (
                      <span key={k} className={`px-2 py-1 rounded text-xs font-medium ${isDarkMode ? 'bg-yellow-500/10 text-yellow-300 border border-yellow-500/20' : 'bg-yellow-100 text-yellow-700 border border-yellow-200'}`}>
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 6 && (
                      <span className={`px-2 py-1 rounded text-xs font-medium ${mutedColor} opacity-70`}>
                        +{project.technologies.length - 6} more
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "education":
        return (
          <div className="space-y-3">
            {portfolioData.education.map((edu, i) => (
              <div key={i} className={`${cardBg} rounded-lg p-4 ${borderColor} border flex items-center space-x-4`}>
                <span className={`${highlightColor} text-2xl`}>🎓</span>
                <div className="flex-1">
                  <div className={`${textColor} font-bold text-lg mb-1`}>
                    {edu.degree}
                  </div>
                  <div className={`${mutedColor} text-sm`}>
                    {edu.institution} • {edu.location} • {edu.year}
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "awards":
        return (
          <div className="space-y-4">
            {portfolioData.awards.map((award, i) => (
              <div key={i} className={`${cardBg} rounded-lg p-4 ${borderColor} border`}>
                <div className="flex items-start space-x-4">
                  <span className={`${highlightColor} text-2xl`}>🏆</span>
                  <div className="flex-1">
                    <div className={`${textColor} font-bold text-lg mb-2`}>
                      {award.title}
                    </div>
                    <div className={`${accentColor} text-sm font-medium mb-2`}>
                      {award.organization} • {award.year}
                    </div>
                    <div className={`${mutedColor} text-sm leading-relaxed`}>
                      {award.description}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        );

      case "contact":
        return (
          <div className={`${cardBg} rounded-lg p-6 ${borderColor} border`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-opacity-50 transition-colors">
                <span className={`${highlightColor} text-2xl`}>📧</span>
                <div>
                  <div className={`${accentColor} text-sm font-semibold`}>Email</div>
                  <div className={`${textColor} font-mono text-sm`}>hello@tanmoybanik.me</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-opacity-50 transition-colors">
                <span className={`${highlightColor} text-2xl`}>💼</span>
                <div>
                  <div className={`${accentColor} text-sm font-semibold`}>LinkedIn</div>
                  <div className={`${textColor} font-mono text-sm`}>linkedin.com/in/tanmoybanik</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-opacity-50 transition-colors">
                <span className={`${highlightColor} text-2xl`}>🐙</span>
                <div>
                  <div className={`${accentColor} text-sm font-semibold`}>GitHub</div>
                  <div className={`${textColor} font-mono text-sm`}>github.com/tanmoybanik</div>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-3 rounded-md hover:bg-opacity-50 transition-colors">
                <span className={`${highlightColor} text-2xl`}>🌐</span>
                <div>
                  <div className={`${accentColor} text-sm font-semibold`}>Website</div>
                  <div className={`${textColor} font-mono text-sm`}>tanmoybanik.me</div>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`min-h-screen ${isDarkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-gray-50 to-white'} font-mono text-sm transition-all duration-500`}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23${isDarkMode ? 'ffffff' : '000000'}' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="relative z-10 max-w-6xl mx-auto p-8">
        {/* Enhanced Terminal Header */}
        <div className={`${isDarkMode ? 'bg-gray-800/90' : 'bg-gray-200/90'} backdrop-blur-sm rounded-t-xl p-4 shadow-lg border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'}`}>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-red-500 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full shadow-md hover:shadow-lg transition-shadow cursor-pointer"></div>
              </div>
              <div className="flex items-center space-x-3">
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-bold text-base`}>{PROMPT}</span>
                <div className={`px-3 py-1 rounded-full ${isDarkMode ? 'bg-gray-700/50' : 'bg-gray-300/50'} backdrop-blur-sm`}>
                  <span className={`${isDarkMode ? 'text-cyan-400' : 'text-blue-600'} text-xs font-medium`}>
                    Portfolio Terminal v2.5
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className={`px-3 py-1 rounded-full ${isDarkMode ? 'bg-green-500/10' : 'bg-blue-500/10'} backdrop-blur-sm border ${isDarkMode ? 'border-green-500/20' : 'border-blue-500/20'}`}>
                <span className={`${isDarkMode ? 'text-green-400' : 'text-blue-600'} text-xs font-mono font-medium`}>
                  {commands.length} commands
                </span>
              </div>
              <button
                onClick={toggleTheme}
                className={`px-4 py-2 rounded-lg text-sm font-medium ${isDarkMode ? 'bg-cyan-500/10 text-cyan-400 hover:bg-cyan-500/20 border border-cyan-500/30' : 'bg-purple-500/10 text-purple-600 hover:bg-purple-500/20 border border-purple-500/30'} transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg`}
              >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Terminal Body */}
        <div className={`${isDarkMode ? 'bg-black/95' : 'bg-white/95'} backdrop-blur-sm rounded-b-xl p-8 min-h-[800px] border ${isDarkMode ? 'border-gray-700' : 'border-gray-300'} border-t-0 shadow-2xl`}>
          <div className="space-y-8">
            {commands.slice(0, visibleCommands).map((cmd, cmdIndex) => (
              <div 
                key={cmdIndex} 
                className="opacity-0 animate-fadeIn"
                style={{
                  animationDelay: `${cmdIndex * 0.2}s`,
                  animationFillMode: 'forwards'
                }}
              >
                {/* Enhanced Command Line */}
                <div className="flex items-center mb-4 group">
                  <div className={`flex items-center space-x-3 p-3 rounded-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} group-hover:scale-105 transition-all duration-300`}>
                    <span className={`${isDarkMode ? 'text-orange-400' : 'text-blue-600'} font-bold text-lg`}>$</span>
                    <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-mono text-lg`}>{cmd.command}</span>
                    <div className={`w-3 h-5 ${isDarkMode ? 'bg-orange-400' : 'bg-blue-600'} animate-pulse rounded-sm`}></div>
                  </div>
                </div>
                
                {/* Enhanced Command Output */}
                <div className="ml-4 mb-6">
                  {renderCommandOutput(cmd)}
                </div>
              </div>
            ))}
          </div>
          
          {/* Enhanced Loading State */}
          {visibleCommands < commands.length && (
            <div className="flex items-center justify-center py-8">
              <div className={`flex items-center space-x-4 p-4 rounded-lg ${isDarkMode ? 'bg-gray-800/50' : 'bg-gray-100/50'} backdrop-blur-sm border ${isDarkMode ? 'border-gray-700/50' : 'border-gray-200/50'} shadow-lg`}>
                <span className={`${isDarkMode ? 'text-orange-400' : 'text-blue-600'} font-bold text-lg`}>$</span>
                <span className={`${isDarkMode ? 'text-gray-300' : 'text-gray-700'} font-mono text-lg animate-pulse`}>Loading next command...</span>
                <div className="flex space-x-1">
                  <div className={`w-2 h-2 ${isDarkMode ? 'bg-orange-400' : 'bg-blue-600'} rounded-full animate-bounce`}></div>
                  <div className={`w-2 h-2 ${isDarkMode ? 'bg-orange-400' : 'bg-blue-600'} rounded-full animate-bounce delay-100`}></div>
                  <div className={`w-2 h-2 ${isDarkMode ? 'bg-orange-400' : 'bg-blue-600'} rounded-full animate-bounce delay-200`}></div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out;
        }
      `}</style>
    </div>
  );
};