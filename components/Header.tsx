'use client';

import Link from 'next/link';
import { useShowcaseVersion } from '@/lib/showcase-version';
import { comicSans } from '@/app/fonts';

// Original TitleWord structure, font, sizes, baseline, gap, tracking and stroke.
// CSS handles the original 768px mobile breakpoint without a hydration resize.
const TitleWord = ({ text }: { text: string }) => (
  <span className="title-word">
    <span className="title-initial text-stroke">{text.charAt(0)}</span>
    <span className="title-rest text-stroke">{text.slice(1)}</span>
  </span>
);

export default function Header() {
  const version = useShowcaseVersion();
  const isB = version === 'b';
  return (
    <header className="site-header">
      <div className="brand-container">
        <Link href={isB ? '/' : '/version-a'} className="brand-link" aria-label="AddictingGames.AI home">
          <h1 className={`${comicSans.className} brand-logo`}>
            <TitleWord text="ADDICTING" />
            <TitleWord text="GAMES" />
            <span className="title-rest title-ai text-stroke">.AI</span>
          </h1>
        </Link>
        <nav className="version-switch" aria-label="Site version">
          <Link href="/version-a" aria-current={!isB ? 'page' : undefined}>Version A</Link>
          <Link href="/version-b" aria-current={isB ? 'page' : undefined}>Version B</Link>
        </nav>
      </div>
    </header>
  );
}
