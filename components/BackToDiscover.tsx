'use client';

import Link from 'next/link';
import { useShowcaseVersion } from '@/lib/showcase-version';
import { Icon } from './Icon';

export function BackToDiscover() {
  const version = useShowcaseVersion();
  return <Link href={version === 'b' ? '/' : '/version-a'} className="back-link"><Icon name="back" />Back to Discover</Link>;
}
