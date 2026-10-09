'use client';

import Link from 'next/link';
import { useEffect, useId, useRef, useState, type ReactNode } from 'react';
import type { PlayableGame } from '@/lib/games';
import { GameCard } from './GameCard';
import { Icon } from './Icon';

export function GameShelf({ title, note, games, viewAll, empty, featured }: {
  title: string; note?: string; games: PlayableGame[]; viewAll?: boolean; empty?: ReactNode; featured?: boolean;
}) {
  const id = useId();
  const ref = useRef<HTMLUListElement>(null);
  const [ends, setEnds] = useState({ start: true, end: true });
  const signature = games.map(game => game.slug).join(',');

  useEffect(() => {
    const shelf = ref.current;
    if (!shelf) return;
    const update = () => setEnds({ start: shelf.scrollLeft < 5, end: shelf.scrollLeft + shelf.clientWidth >= shelf.scrollWidth - 5 });
    const wheel = (event: WheelEvent) => {
      // Leave horizontal trackpad gestures native. Translate vertical wheel only
      // when this shelf can move; release the page at either end.
      if (Math.abs(event.deltaX) >= Math.abs(event.deltaY) || event.ctrlKey) return;
      const delta = event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? shelf.clientWidth : 1);
      if ((delta > 0 && shelf.scrollLeft + shelf.clientWidth < shelf.scrollWidth - 5) || (delta < 0 && shelf.scrollLeft > 5)) {
        event.preventDefault();
        shelf.scrollBy({ left: delta, behavior: 'instant' });
      }
    };
    update();
    shelf.addEventListener('scroll', update, { passive: true });
    shelf.addEventListener('wheel', wheel, { passive: false });
    const observer = new ResizeObserver(update);
    observer.observe(shelf);
    return () => { shelf.removeEventListener('scroll', update); shelf.removeEventListener('wheel', wheel); observer.disconnect(); };
  }, [signature]);

  function move(direction: number) {
    const shelf = ref.current;
    if (!shelf) return;
    shelf.scrollBy({ left: direction * shelf.clientWidth * 0.8, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }

  return (
    <section className={`game-section${featured ? ' featured-section' : ''}`} aria-labelledby={`${id}-heading`}>
      <div className="section-heading">
        <div className="section-title"><h2 id={`${id}-heading`}>{title}</h2>{note && <p>{note}</p>}</div>
        <div className="shelf-actions">
          {viewAll && <Link className="view-all" href="/games">View All Games <Icon name="arrow" width={17} /></Link>}
          {games.length > 0 && <div className="shelf-arrows">
            <button type="button" className="icon-button" aria-label={`Previous ${title} games`} aria-controls={id} onClick={() => move(-1)} disabled={ends.start}><Icon name="left" /></button>
            <button type="button" className="icon-button" aria-label={`Next ${title} games`} aria-controls={id} onClick={() => move(1)} disabled={ends.end}><Icon name="right" /></button>
          </div>}
        </div>
      </div>
      {games.length ? <ul id={id} ref={ref} className="game-shelf" aria-label={`${title} games`} tabIndex={0} onKeyDown={event => {
        if (event.target !== event.currentTarget) return;
        if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); move(event.key === 'ArrowRight' ? 1 : -1); }
        if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); ref.current?.scrollTo({ left: event.key === 'Home' ? 0 : ref.current.scrollWidth, behavior: 'instant' }); }
      }}>
        {games.map((game, index) => <li key={game.slug}><GameCard game={game} priority={featured && index < 5} /></li>)}
      </ul> : <div className="shelf-empty">{empty || <><Icon name="search" /><div><h3>No games here just yet</h3><p>Try another category or a different search.</p></div></>}</div>}
    </section>
  );
}
