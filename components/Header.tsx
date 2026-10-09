import Link from 'next/link';
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
  return (
    <header className="site-header">
      <div className="brand-container">
        <Link href="/" className="brand-link" aria-label="AddictingGames.AI home">
          <h1 className={`${comicSans.className} brand-logo`}>
            <TitleWord text="ADDICTING" />
            <TitleWord text="GAMES" />
            <span className="title-rest title-ai text-stroke">.AI</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}
