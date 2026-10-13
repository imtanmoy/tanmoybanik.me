import type { APIRoute } from 'astro';
import { portfolioData } from '../data/portfolio';

const getLlmsTxt = (siteURL: URL) => `\
# Tanmoy Banik

> ${portfolioData.headline}

${portfolioData.profileSummary.join('\n\n')}

## Experience

${portfolioData.experiences
  .map((exp) => `- ${exp.position} at ${exp.company} (${exp.startDate} – ${exp.endDate})`)
  .join('\n')}

## Projects

${portfolioData.projects.map((proj) => `- ${proj.title}: ${proj.description}`).join('\n')}

## Skills

${Object.entries(portfolioData.skills)
  .map(([category, skills]) => `- ${category}: ${skills.join(', ')}`)
  .join('\n')}

## Links

- [Portfolio](${siteURL.href})
- [GitHub](https://github.com/imtanmoy)
- [LinkedIn](https://www.linkedin.com/in/imtanmoybanik/)
- [Email](mailto:imtanmoybanik@gmail.com)
`;

export const GET: APIRoute = ({ site }) => new Response(getLlmsTxt(site!));
