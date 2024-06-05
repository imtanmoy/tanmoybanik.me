import React from 'react';
import { AiOutlineFilePdf } from 'react-icons/ai';
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi';

const classNames = {
  anchor:
    'flex items-center justify-center cursor-pointer text-[#6e6e73] hover:text-pink-700 transition-colors duration-300 ease-in-out',
  icon: 'text-2xl',
};

export const SocialLinks: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-x-8">
      <a
        href="https://github.com/imtanmoy"
        target="_blank"
        rel="noopener noreferrer"
        className={classNames.anchor}
        aria-label="GitHub"
      >
        <FiGithub className={classNames.icon} />
      </a>
      <a
        href="https://www.linkedin.com/in/imtanmoybanik/"
        target="_blank"
        rel="noopener noreferrer"
        className={classNames.anchor}
        aria-label="LinkedIn"
      >
        <FiLinkedin className={classNames.icon} />
      </a>
      <a
        href="https://twitter.com/Tanmoy_Banik"
        target="_blank"
        rel="noopener noreferrer"
        className={classNames.anchor}
        aria-label="Twitter"
      >
        <FiTwitter className={classNames.icon} />
      </a>
      <a
        href="mailto:imtanmoybanik@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className={classNames.anchor}
        aria-label="Email"
      >
        <FiMail className={classNames.icon} />
      </a>
      <a
        href="https://drive.google.com/file/d/1iqze1eHEopeTrmkYsBRFDiDVAI2u1g8c/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Resume"
        className={classNames.anchor}
      >
        <AiOutlineFilePdf className={classNames.icon} />
      </a>
    </div>
  );
};
