import clsx from 'clsx';
import { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import BgImage from '@/assets/images/intro-bg.jpg';
import { Intro } from '@/ui/intro';

import { openGraphImage } from './shared-metadata';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main
      className={clsx(
        'flex min-h-screen flex-col items-center justify-center',
        inter.className,
      )}
    >
      <section className="flex flex-col items-center justify-center">
        <div className="fixed inset-0 z-0 h-full w-full overflow-hidden">
          <Image
            alt="Background Image"
            src={BgImage}
            placeholder="blur"
            quality={100}
            fill
            sizes="100vw"
            style={{
              objectFit: 'cover',
            }}
          />
          <div className="absolute inset-0 h-full w-full bg-[#111] opacity-80" />
        </div>
        <div className="relative z-10">
          <Intro />
        </div>
      </section>
    </main>
  );
}

export const metadata: Metadata = {
  ...openGraphImage,
  title: 'Tanmoy Banik - Software Engineer | Full Stack Developer',
  description:
    'Experienced software engineer with 6+ years of expertise in back-end, front-end, and DevOps technologies. Proficient in various programming languages, databases, and frameworks for software development. Collaborates with design teams to develop user-friendly interfaces and implement design systems. Passionate and results-driven with a focus on delivering high-quality software solutions on time and within budget.',
  keywords: [
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
  ],
};
