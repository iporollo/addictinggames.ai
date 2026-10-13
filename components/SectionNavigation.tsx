'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function SectionNavigation() {
  const isMods = usePathname().startsWith('/mods');
  return <nav className="section-navigation" aria-label="Main navigation">
    <Link href="/" aria-current={!isMods ? 'page' : undefined}>Games</Link>
    <Link href="/mods" aria-current={isMods ? 'page' : undefined}>Mods</Link>
  </nav>;
}
