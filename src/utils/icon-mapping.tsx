import React from 'react';
import { 
  SiReact, 
  SiNodedotjs, 
  SiTypescript, 
  SiPython, 
  SiFlask, 
  SiSpringboot, 
  SiDocker, 
  SiCelery, 
  SiRedis, 
  SiMysql, 
  SiMongodb, 
  SiPostgresql, 
  SiAmazon, 
  SiGraphql, 
  SiNestjs, 
  SiRabbitmq, 
  SiMqtt, 
  SiD3Dotjs,
  SiIpfs,
  SiJavascript,
  SiOpenjdk,
  SiGithubactions,
  SiGooglecloud,
  SiRedux,
  SiDjango,
  SiLaravel,
  SiElasticsearch,
  SiKibana,
  SiLogstash,
  SiPlotly,
  SiVitest,
  SiJest,
  SiMocha,
  SiCypress,
  SiGithub,
  SiLinkedin,
  SiX,
  SiFastapi,
  SiGo,
  SiPhp,
  SiC,
  SiNextdotjs,
  SiApollographql,
  SiTailwindcss,
  SiExpo,
  SiSqlalchemy,
  SiSqlite,
  SiNginx,
  SiStripe
} from 'react-icons/si';
import { 
  TbTestPipe, 
  TbTool, 
  TbCode,
  TbShield,
  TbDeviceMobile,
  TbLanguage,
  TbDatabase,
  TbApi,
  TbBooks,
  TbCloud
} from 'react-icons/tb';
import { 
  HiOutlineMail,
  HiOutlineDocumentText
} from 'react-icons/hi';

export interface TechnologyIcon {
  icon: React.ReactNode;
  color: string;
}

// Central mapping of all technologies to their icons and colors
export const technologyIconMap: Record<string, TechnologyIcon> = {
  // Frontend Technologies
  "React": { icon: <SiReact />, color: "text-cyan-400" },
  "React.js": { icon: <SiReact />, color: "text-cyan-400" },
  "React Native": { icon: <SiReact />, color: "text-cyan-400" },
  "Next.js": { icon: <SiNextdotjs />, color: "text-white" },
  "Redux": { icon: <SiRedux />, color: "text-purple-600" },
  "JavaScript": { icon: <SiJavascript />, color: "text-yellow-400" },
  "TypeScript": { icon: <SiTypescript />, color: "text-blue-600" },
  "D3.js": { icon: <SiD3Dotjs />, color: "text-orange-500" },
  "Plotly.js": { icon: <SiPlotly />, color: "text-blue-500" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "text-cyan-400" },
  "Expo": { icon: <SiExpo />, color: "text-blue-600" },
  "Material-UI": { icon: <TbCode />, color: "text-blue-500" },
  "StoryBook": { icon: <TbBooks />, color: "text-pink-500" },
  
  // Backend Technologies
  "Node.js": { icon: <SiNodedotjs />, color: "text-green-600" },
  "Node": { icon: <SiNodedotjs />, color: "text-green-600" },
  "Node.js (NestJS, Express.js)": { icon: <SiNodedotjs />, color: "text-green-600" },
  "NestJS": { icon: <SiNestjs />, color: "text-red-600" },
  "Python": { icon: <SiPython />, color: "text-blue-400" },
  "Flask": { icon: <SiFlask />, color: "text-gray-300" },
  "Django": { icon: <SiDjango />, color: "text-green-700" },
  "FastAPI": { icon: <SiFastapi />, color: "text-green-700" },
  "Spring Boot": { icon: <SiSpringboot />, color: "text-green-600" },
  "Laravel": { icon: <SiLaravel />, color: "text-red-600" },
  "Java": { icon: <SiOpenjdk />, color: "text-orange-700" },
  "Golang": { icon: <SiGo />, color: "text-cyan-400" },
  "PHP": { icon: <SiPhp />, color: "text-indigo-500" },
  "C": { icon: <SiC />, color: "text-blue-700" },
  "Serverless Framework": { icon: <TbCloud />, color: "text-orange-500" },
  
  // Databases
  "PostgreSQL": { icon: <SiPostgresql />, color: "text-blue-700" },
  "MySQL": { icon: <SiMysql />, color: "text-blue-500" },
  "MongoDB": { icon: <SiMongodb />, color: "text-green-600" },
  "Redis": { icon: <SiRedis />, color: "text-red-600" },
  "MSSQL": { icon: <TbDatabase />, color: "text-red-700" },
  "SQL": { icon: <TbDatabase />, color: "text-orange-500" },
  "SQLite": { icon: <SiSqlite />, color: "text-blue-600" },
  "SQLAlchemy": { icon: <SiSqlalchemy />, color: "text-red-600" },
  
  // Cloud & DevOps
  "AWS": { icon: <SiAmazon />, color: "text-orange-500" },
  "AWS ECS": { icon: <SiAmazon />, color: "text-orange-500" },
  "AWS Lambda": { icon: <SiAmazon />, color: "text-orange-500" },
  "AWS (CloudFormation, CDK, ECS, Lambda)": { icon: <SiAmazon />, color: "text-orange-500" },
  "Docker": { icon: <SiDocker />, color: "text-blue-400" },
  "Docker Compose": { icon: <SiDocker />, color: "text-blue-400" },
  "GitHub Actions": { icon: <SiGithubactions />, color: "text-gray-700" },
  "Google Cloud Platform": { icon: <SiGooglecloud />, color: "text-blue-500" },
  "Google Cloud Platform (GCP)": { icon: <SiGooglecloud />, color: "text-blue-500" },
  "CI/CD": { icon: <TbTool />, color: "text-blue-500" },
  "Nginx": { icon: <SiNginx />, color: "text-green-600" },
  
  // Message Queues & Protocols
  "RabbitMQ": { icon: <SiRabbitmq />, color: "text-orange-500" },
  "MQTT": { icon: <SiMqtt />, color: "text-purple-600" },
  "Celery": { icon: <SiCelery />, color: "text-green-500" },
  
  // Testing & Monitoring
  "Vitest": { icon: <SiVitest />, color: "text-yellow-500" },
  "Jest": { icon: <SiJest />, color: "text-red-600" },
  "Mocha": { icon: <SiMocha />, color: "text-brown-600" },
  "Chai": { icon: <TbTestPipe />, color: "text-yellow-600" },
  "Supertest": { icon: <TbTestPipe />, color: "text-green-600" },
  "Cypress": { icon: <SiCypress />, color: "text-gray-300" },
  "Elasticsearch": { icon: <SiElasticsearch />, color: "text-yellow-500" },
  "Logstash": { icon: <SiLogstash />, color: "text-yellow-600" },
  "Kibana": { icon: <SiKibana />, color: "text-pink-500" },
  "Kibana (ELK Stack)": { icon: <SiKibana />, color: "text-pink-500" },
  "ELK Stack": { icon: <SiElasticsearch />, color: "text-yellow-500" },
  
  // APIs & GraphQL
  "GraphQL": { icon: <SiGraphql />, color: "text-pink-500" },
  "Apollo GraphQL": { icon: <SiApollographql />, color: "text-blue-500" },
  "REST APIs": { icon: <TbApi />, color: "text-green-500" },
  
  // Security & Authentication
  "WebAuthn": { icon: <TbShield />, color: "text-blue-600" },
  "HIPAA Compliance": { icon: <TbShield />, color: "text-green-600" },
  
  // Other Technologies
  "Tesseract OCR": { icon: <TbLanguage />, color: "text-purple-500" },
  "Natural Language Processing": { icon: <TbLanguage />, color: "text-indigo-500" },
  "MEAN Stack": { icon: <TbCode />, color: "text-green-600" },
  "IONIC": { icon: <TbDeviceMobile />, color: "text-blue-500" },
  "Mobile Development": { icon: <TbDeviceMobile />, color: "text-blue-500" },
  "IPFS": { icon: <SiIpfs />, color: "text-blue-600" },
  "Git": { icon: <SiGithub />, color: "text-orange-600" },
  "Microservices": { icon: <TbCode />, color: "text-purple-600" },
  "Stripe": { icon: <SiStripe />, color: "text-indigo-600" },
  
  // Social & Communication
  "GitHub": { icon: <SiGithub />, color: "text-gray-300" },
  "LinkedIn": { icon: <SiLinkedin />, color: "text-blue-500" },
  "X": { icon: <SiX />, color: "text-white" },
  "Email": { icon: <HiOutlineMail />, color: "text-red-400" },
  "Resume": { icon: <HiOutlineDocumentText />, color: "text-green-400" }
};

// Helper function to get technology icon and color
export const getTechnologyIcon = (technology: string): TechnologyIcon => {
  return technologyIconMap[technology] || { 
    icon: <TbCode />, 
    color: "text-gray-400" 
  };
};

// Helper component for rendering technology badges
export interface TechnologyBadgeProps {
  technology: string;
  className?: string;
}

export const TechnologyBadge: React.FC<TechnologyBadgeProps> = ({ 
  technology, 
  className = "" 
}) => {
  const { icon, color } = getTechnologyIcon(technology);
  
  return (
    <span className={`inline-flex items-center gap-1 bg-zinc-800/30 text-zinc-200 text-xs px-2 py-1 rounded-full border border-zinc-700/50 ${className}`}>
      <span className={`text-sm ${color}`}>
        {icon}
      </span>
      {technology}
    </span>
  );
};