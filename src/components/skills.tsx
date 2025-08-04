import React, { useId } from "react";
import { AnimateOnScroll } from "./animate-on-scroll";
import { portfolioData } from "../data/portfolio";
import { 
  SiJavascript, 
  SiTypescript, 
  SiPython, 
  SiOpenjdk, 
  SiGo, 
  SiPhp,
  SiC,
  SiReact,
  SiNextdotjs,
  SiRedux,
  SiGraphql,
  SiNodedotjs,
  SiSpringboot,
  SiFastapi,
  SiFlask,
  SiDjango,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiRedis,
  SiAmazon,
  SiGooglecloud,
  SiDocker,
  SiNginx,
  SiGithubactions,
  SiVitest,
  SiJest,
  SiMocha,
  SiCypress,
  SiRabbitmq,
  SiMqtt,
  SiElasticsearch,
  SiGit,
  SiStripe,
  SiTailwindcss,
  SiApollographql,
  SiExpo
} from "react-icons/si";
import { TbApi, TbBooks, TbCode, TbDatabase, TbCloud, TbTestPipe, TbTool } from "react-icons/tb";

const skillIconMap: Record<string, React.ReactNode> = {
  // Programming Languages
  "JavaScript": <SiJavascript className="text-yellow-400" />,
  "TypeScript": <SiTypescript className="text-blue-600" />,
  "Python": <SiPython className="text-blue-400" />,
  "Java": <SiOpenjdk className="text-orange-700" />,
  "Golang": <SiGo className="text-cyan-400" />,
  "PHP": <SiPhp className="text-indigo-500" />,
  "C": <SiC className="text-blue-700" />,
  "SQL": <TbDatabase className="text-orange-500" />,
  
  // Back-end
  "Node.js (NestJS, Express.js)": <SiNodedotjs className="text-green-600" />,
  "Serverless Framework": <TbCloud className="text-orange-500" />,
  "Spring Boot": <SiSpringboot className="text-green-600" />,
  "FastAPI": <SiFastapi className="text-green-700" />,
  "Flask": <SiFlask className="text-gray-300" />,
  "Django": <SiDjango className="text-green-700" />,
  "Laravel": <SiLaravel className="text-red-600" />,
  
  // Front-end
  "React.js": <SiReact className="text-cyan-400" />,
  "React Native": <SiReact className="text-cyan-400" />,
  "Next.js": <SiNextdotjs className="text-white" />,
  "Redux": <SiRedux className="text-purple-600" />,
  "GraphQL": <SiGraphql className="text-pink-500" />,
  "Apollo GraphQL": <SiApollographql className="text-blue-500" />,
  "REST APIs": <TbApi className="text-green-500" />,
  "Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
  "Expo": <SiExpo className="text-blue-600" />,
  "StoryBook": <TbBooks className="text-pink-500" />,
  
  // Database
  "MongoDB": <SiMongodb className="text-green-600" />,
  "MySQL": <SiMysql className="text-blue-500" />,
  "PostgreSQL": <SiPostgresql className="text-blue-700" />,
  "Redis": <SiRedis className="text-red-600" />,
  
  // DevOps & Cloud
  "AWS (CloudFormation, CDK, ECS, Lambda)": <SiAmazon className="text-orange-500" />,
  "Google Cloud Platform (GCP)": <SiGooglecloud className="text-blue-500" />,
  "Docker": <SiDocker className="text-blue-400" />,
  "Nginx": <SiNginx className="text-green-600" />,
  "GitHub Actions": <SiGithubactions className="text-gray-700" />,
  "CI/CD": <TbTool className="text-blue-500" />,
  
  // Testing Frameworks
  "Vitest": <SiVitest className="text-yellow-500" />,
  "Jest": <SiJest className="text-red-600" />,
  "Mocha": <SiMocha className="text-brown-600" />,
  "Chai": <TbTestPipe className="text-yellow-600" />,
  "Supertest": <TbTestPipe className="text-green-600" />,
  "Cypress": <SiCypress className="text-gray-300" />,
  
  // Other Technologies
  "RabbitMQ": <SiRabbitmq className="text-orange-500" />,
  "MQTT": <SiMqtt className="text-purple-600" />,
  "WebAuthn": <TbTool className="text-blue-600" />,
  "Elasticsearch": <SiElasticsearch className="text-yellow-500" />,
  "Logstash": <TbTool className="text-yellow-600" />,
  "Kibana (ELK Stack)": <TbTool className="text-pink-500" />,
  "Git": <SiGit className="text-orange-600" />,
  "Microservices": <TbCode className="text-purple-600" />,
  "Stripe": <SiStripe className="text-indigo-600" />
};

interface SkillCategoryProps {
  category: string;
  skills: string[];
  categoryId: string;
}

const SkillBadge: React.FC<{ skill: string; categoryId: string }> = ({ skill, categoryId }) => {
  const iconElement = skillIconMap[skill] || <TbCode className="text-gray-400" />;
  return (
    <span
      key={`${categoryId}-${skill}`}
      className="inline-flex items-center gap-1 rounded bg-zinc-800/30 px-2 py-1 text-xs font-medium border border-zinc-700/50 text-zinc-200"
    >
      <span className="text-sm">
        {iconElement}
      </span>
      {skill}
    </span>
  );
};

const SkillCategory: React.FC<SkillCategoryProps> = ({ category, skills, categoryId }) => {
  return (
    <div className="mb-6">
      <h3 className="text-lg text-white font-medium mb-4 border-b border-emerald-500/30 pb-2">
        {category}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <SkillBadge
            key={`${categoryId}-${skill}`}
            skill={skill}
            categoryId={categoryId}
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
          <h2 className="text-3xl font-semibold text-white text-center">
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