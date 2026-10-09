import Link from 'next/link';
import { Icon } from './Icon';

export function QuickLinks() {
  return <nav className="quick-links" aria-label="Quick Links"><h2>Quick Links</h2><Link href="/games">View All Games <Icon name="arrow" width={17} /></Link><Link href="/submit">Submit A Game <Icon name="arrow" width={17} /></Link></nav>;
}
