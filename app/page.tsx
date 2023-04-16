import clsx from 'clsx';
import { Inter, Source_Code_Pro } from 'next/font/google';
import Image from 'next/image';

import BgImage from '@/assets/images/intro-bg.jpg';

const inter = Inter({ subsets: ['latin'] });
const sourceCodePro = Source_Code_Pro({
  fallback: ['monospace'],
  preload: true,
  weight: '600',
  subsets: ['latin'],
});

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
        <div className="relative z-10 flex flex-col items-center justify-center gap-2">
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
      </section>
    </main>
  );
}
