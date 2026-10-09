import Link from 'next/link';
import { Icon } from './Icon';

export function BackToDiscover() {
  return <Link href="/" className="back-link"><Icon name="back" />Back to Discover</Link>;
}
