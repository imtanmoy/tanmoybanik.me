import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/imtanmoy',
    icon: FiGithub,
    label: 'GitHub'
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/imtanmoybanik/',
    icon: FiLinkedin,
    label: 'LinkedIn'
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/Tanmoy_Banik',
    icon: FiTwitter,
    label: 'Twitter'
  },
  {
    name: 'Email',
    href: 'mailto:imtanmoybanik@gmail.com',
    icon: FiMail,
    label: 'Email'
  },
  {
    name: 'Resume',
    href: 'https://drive.google.com/file/d/1iqze1eHEopeTrmkYsBRFDiDVAI2u1g8c/view?usp=sharing',
    icon: AiOutlineFilePdf,
    label: 'Resume'
  }
];

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex flex-wrap items-center justify-center gap-3">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-zinc-800/30 text-zinc-200 rounded-full text-sm border border-zinc-700/50 hover:bg-emerald-500/10 hover:text-emerald-300 hover:border-emerald-500/30 transition-all duration-300"
            aria-label={link.label}
          >
            <Icon className="text-lg" />
            <span className="font-medium">{link.label}</span>
          </a>
        );
      })}
    </div>
  );
};
