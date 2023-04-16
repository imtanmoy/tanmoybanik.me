import clsx from 'clsx';
import { Source_Code_Pro } from 'next/font/google';
import React from 'react';

const sourceCodePro = Source_Code_Pro({
  fallback: ['monospace'],
  preload: true,
  weight: '600',
  subsets: ['latin'],
});

export const Intro: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h1
        className={clsx(
          'mb-0 text-3xl font-semibold uppercase leading-relaxed tracking-[0.5rem] text-pink-700',
          sourceCodePro.className,
        )}
        style={{
          textShadow: '0 0 6px rgba(0, 0, 0, 0.2)',
        }}
      >
        {'<Hello World!/>'}
      </h1>
      <p className="max-w-screen-md px-12 py-0 text-center text-2xl font-light leading-normal tracking-widest">
        {`I'm`} <span style={{ color: '#cc005f' }}>Tanmoy Banik</span> a
        passionate full-stack engineer who has experience building modern &
        highly scalable web apps and services.
      </p>
    </div>
  );
};
