'use client';

import Link from 'next/link';
import type { ReactNode } from 'react';
import type { ListedGame } from '@/lib/games';
import { recordPlayed } from '@/lib/history';

export function GameLink({ game, className, children }: { game: ListedGame; className: string; children: ReactNode }) {
  const onClick = () => recordPlayed(game.slug);
  return 'externalUrl' in game
    ? <a href={game.externalUrl} className={className} aria-label={`Play ${game.title} (new tab)`} target="_blank" rel="noopener noreferrer" onClick={onClick}>{children}</a>
    : <Link href={`/games/${game.slug}`} className={className} aria-label={`Play ${game.title}`} onClick={onClick}>{children}</Link>;
}
