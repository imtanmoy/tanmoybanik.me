import clsx from 'clsx';
import { Inter } from 'next/font/google';
import Image from 'next/image';

import BgImage from '@/assets/images/intro-bg.jpg';
import { Intro } from '@/ui/intro';

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
