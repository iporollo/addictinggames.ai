import type { Metadata } from 'next';
import Header from '@/components/Header';
import { comicSans } from './fonts';
import './globals.css';

export const metadata: Metadata = {
  title: { default: 'AddictingGames.AI — Discover your next game', template: '%s | AddictingGames.AI' },
  description: 'Play the best indie web games. Explore browser games, find a new favorite, and pick up where you left off on AddictingGames.AI.',
  metadataBase: new URL('https://addictinggames.ai'),
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" className={comicSans.variable}><body><a href="#main" className="skip-link">Skip to content</a><Header />{children}</body></html>;
}
