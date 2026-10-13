import Link from 'next/link';
import { Icon } from './Icon';

export function QuickLinks({ variant = 'games' }: { variant?: 'games' | 'mods' }) {
  const mods = variant === 'mods';
  return <nav className="quick-links" aria-label="Quick Links"><h2>Quick Links</h2><Link href={mods ? "/mods/all" : "/games"}>{mods ? "View All Mods" : "View All Games"} <Icon name="arrow" width={17} /></Link><Link href={mods ? "/mods/submit" : "/submit"}>{mods ? "Submit a Mod" : "Submit A Game"} <Icon name="arrow" width={17} /></Link></nav>;
}
