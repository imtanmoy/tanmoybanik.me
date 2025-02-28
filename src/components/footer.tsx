import React from "react";
import { FiGithub, FiLinkedin, FiMail, FiTwitter } from "react-icons/fi";

export const Footer: React.FC = () => {
  return (
    <footer className="flex flex-col gap-2.5 py-6 w-full text-center border border-t-1 border-white/10 relative z-10">
      <p className="text-white/50">Made with ❤️ by Tanmoy Banik</p>
      <div className="flex items-center justify-center gap-4 text-white">
        <a
          href="https://www.linkedin.com/in/imtanmoybanik/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:scale-[120%] hover:text-violet-400 transition-all duration-300"
          aria-label="LinkedIn"
        >
          <FiLinkedin size={20} />
        </a>
        <a
          href="https://github.com/imtanmoy"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:scale-[120%] hover:text-violet-400 transition-all duration-300"
          aria-label="GitHub"
        >
          <FiGithub size={20} />
        </a>
        <a
          href="mailto:imtanmoybanik@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:scale-[120%] hover:text-violet-400 transition-all duration-300"
          aria-label="Email"
        >
          <FiMail size={20} />
        </a>
        <a
          href="https://twitter.com/Tanmoy_Banik"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer hover:scale-[120%] hover:text-violet-400 transition-all duration-300"
          aria-label="Twitter"
        >
          <FiTwitter size={20} />
        </a>
      </div>
      <p className="text-white/30 text-xs mt-2">
        © {new Date().getFullYear()} Tanmoy Banik. All rights reserved.
      </p>
    </footer>
  );
};
