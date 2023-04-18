import { Metadata } from 'next';

export const siteUrl = 'https://tanmoybanik.me';
export const siteTitle =
  'Tanmoy Banik - Software Engineer | Full Stack Developer';
export const siteDescription =
  'Experienced software engineer with 6+ years of expertise in back-end, front-end, and DevOps technologies. Proficient in various programming languages, databases, and frameworks for software development. Collaborates with design teams to develop user-friendly interfaces and implement design systems. Passionate and results-driven with a focus on delivering high-quality software solutions on time and within budget.';
export const siteImage = '/images/me.jpg';

export const keywords = [
  'software engineer',
  'back-end',
  'front-end',
  'DevOps',
  'Node.js',
  'Java',
  'Golang',
  'Python',
  'PHP',
  'MongoDB',
  'MySQL',
  'PostgreSQL',
  'Redis',
  'TypeScript',
  'React',
  'Next.js',
  'REST',
  'GraphQL',
  'StoryBook',
  'CloudFormation',
  'CDK',
  'Docker',
  'AWS',
  'GCP',
  'Nginx',
  'user-friendly interfaces',
  'design systems',
];

export const openGraph: Metadata['openGraph'] = {
  type: 'website',
  url: siteUrl,
  title: siteTitle,
  description: siteDescription,
  images: [siteImage],
};

export const twitterCard: Metadata['twitter'] = {
  card: 'summary_large_image',
  site: '@tanmoy_banik',
  title: siteTitle,
  description: siteDescription,
  images: [siteImage],
};

export const siteMetadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  keywords: keywords,
  openGraph: openGraph,
  twitter: twitterCard,
};
