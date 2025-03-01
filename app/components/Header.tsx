'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { comicSans } from '../fonts';

const TitleWord = ({ text, isMobile }: { text: string; isMobile: boolean }) => (
  <span className="inline-block">
    <span className={`${isMobile ? 'text-4xl' : 'text-6xl'} text-stroke`}>
      {text.charAt(0)}
    </span>
    <span className={`${isMobile ? 'text-2xl' : 'text-4xl'} text-stroke`}>
      {text.slice(1)}
    </span>
  </span>
);

export default function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Initial check
    checkIfMobile();

    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);

    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  return (
    <header className="mb-8 bg-[#869bbf]">
      <div className="container mx-auto px-4">
        <Link href="/">
          <h1
            className={`${comicSans.className} font-bold text-white py-4 tracking-wide flex flex-wrap items-baseline gap-2`}
          >
            <TitleWord text="ADDICTING" isMobile={isMobile} />
            <TitleWord text="GAMES" isMobile={isMobile} />
            <span
              className={`${
                isMobile ? 'text-2xl' : 'text-4xl'
              } text-stroke ml-[-6px]`}
            >
              .AI
            </span>
          </h1>
        </Link>
      </div>
    </header>
  );
}
