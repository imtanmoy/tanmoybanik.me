import React from 'react';
import { getTechnologyIcon } from '../utils/icon-mapping';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/imtanmoy',
    label: 'GitHub'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/imtanmoybanik/',
    label: 'LinkedIn'
  },
  {
    name: 'X',
    href: 'https://twitter.com/Tanmoy_Banik',
    label: 'X'
  },
  {
    name: 'Email',
    href: 'mailto:imtanmoybanik@gmail.com',
    label: 'Email'
  },
  {
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1iqze1eHEopeTrmkYsBRFDiDVAI2u1g8c/view?usp=sharing',
    label: 'Resume'
  }
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {socialLinks.map((link) => {
        const { icon, color } = getTechnologyIcon(link.name);
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800/30 text-zinc-200 rounded-full text-sm border border-zinc-700/50 hover:bg-zinc-700/40 hover:border-zinc-600/50 transition-all duration-300 group"
            aria-label={link.label}
          >
            <span className={`text-lg transition-colors duration-300 ${color} group-hover:opacity-80`}>
              {icon}
            </span>
            <span className="font-medium group-hover:text-white transition-colors duration-300">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};
