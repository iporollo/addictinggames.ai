'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { allListedGames, newGames, playableGames, orderedGames, matchesGame, type ListedGame } from '@/lib/games';
import { browseGames, browseTabs, gameRows, gameTags, type BrowseTab } from '@/lib/browse';
import { useRecentGames } from '@/lib/history';
import { Icon } from './Icon';
import { Newsletter } from './Newsletter';
import { QuickLinks } from './QuickLinks';

const featuredPicks = orderedGames([
  'turbo-kart-gp', 'thermopylae', 'soccar', 'heroes-journey', 'toybox-push',
]);

function ArcadeCard({ game, eager = false }: { game: ListedGame; eager?: boolean }) {
  const content = <>
    <div className="arcade-artwork"><Image src={game.imageUrl} alt={`${game.title} game artwork`} fill sizes="(max-width: 639px) 44vw, (max-width: 1023px) 22vw, 16vw" loading={eager ? 'eager' : 'lazy'} /><span className="arcade-play"><Icon name="play" width={15} height={15} /></span></div>
    <div className="arcade-card-copy"><h3>{game.title}</h3><p>{game.shortDescription}</p><div className="game-tags">{gameTags(game).map(tag => <span key={tag}>{tag}</span>)}{'externalUrl' in game && <span>Opens game site</span>}</div></div>
  </>;
  return 'externalUrl' in game
    ? <a href={game.externalUrl} className="arcade-card" aria-label={`Open ${game.title} on its game site (new tab)`} target="_blank" rel="noopener noreferrer">{content}</a>
    : <Link href={`/games/${game.slug}`} className="arcade-card" aria-label={`Play ${game.title}`}>{content}</Link>;
}

function ScrollingRow({ games, index }: { games: ListedGame[]; index: number }) {
  const list = useRef<HTMLUListElement>(null);
  const [edges, setEdges] = useState({ start: true, end: false });
  const id = `new-games-row-${index}`;
  useEffect(() => {
    const element = list.current;
    if (!element) return;
    const update = () => setEdges({ start: element.scrollLeft <= 1, end: element.scrollLeft + element.clientWidth >= element.scrollWidth - 1 });
    const observer = new ResizeObserver(update);
    observer.observe(element);
    element.addEventListener('scroll', update, { passive: true });
    return () => { observer.disconnect(); element.removeEventListener('scroll', update); };
  }, []);
  function scroll(direction: number) {
    const element = list.current;
    if (element) element.scrollBy({ left: direction * element.clientWidth * .8, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  }
  return <div className="new-games-row">
    <div className="row-controls"><span id={`${id}-label`}>Row {index + 1} · {games.length} games</span><div>
      <button type="button" aria-label={`Previous games in row ${index + 1}`} aria-controls={id} disabled={edges.start} onClick={() => scroll(-1)}>←</button>
      <button type="button" aria-label={`Next games in row ${index + 1}`} aria-controls={id} disabled={edges.end} onClick={() => scroll(1)}>→</button>
    </div></div>
    <ul id={id} ref={list} className="game-scroll-row" tabIndex={0} aria-labelledby={`${id}-label`} onKeyDown={event => {
      if (event.target !== event.currentTarget) return;
      if (event.key === 'ArrowRight' || event.key === 'ArrowLeft') { event.preventDefault(); scroll(event.key === 'ArrowRight' ? 1 : -1); }
      if (event.key === 'Home' || event.key === 'End') { event.preventDefault(); list.current?.scrollTo({ left: event.key === 'Home' ? 0 : list.current.scrollWidth }); }
    }}>{games.map(game => <li key={game.slug}><ArcadeCard game={game} /></li>)}</ul>
  </div>;
}

function ArcadeSection({ id, title, note, games, featured = false, recentEmpty = false, filtering = false, scrolling = false }: {
  id: string; title: string; note: string; games: ListedGame[]; featured?: boolean; recentEmpty?: boolean; filtering?: boolean; scrolling?: boolean;
}) {
  return <section id={id} className="arcade-section" aria-labelledby={`${id}-heading`}>
    <div className="arcade-section-heading"><div><h2 id={`${id}-heading`}>{title}</h2><p>{note}</p></div>{featured && <Link href="/games" className="view-all">View All Games <Icon name="arrow" width={16} /></Link>}</div>
    {games.length ? scrolling ? <div className="new-games-rows">{gameRows(games).map((row, index) => <ScrollingRow key={index} games={row} index={index} />)}</div> : <ul className="arcade-grid" aria-label={`${title} games`}>{games.map(game => <li key={game.slug}><ArcadeCard game={game} eager={featured} /></li>)}</ul> : <div className="arcade-empty"><Icon name={recentEmpty ? 'clock' : 'search'} width={26} height={26} /><div><h3>{recentEmpty ? 'Your next favorite starts here' : 'No games found'}</h3><p>{recentEmpty ? 'Play a game and it’ll be waiting here when you return.' : filtering ? 'Try another title, category, or creator.' : 'More games will find their way here.'}</p></div></div>}
  </section>;
}

export function Arcade() {
  const [query, setQuery] = useState('');
  const [tab, setTab] = useState<BrowseTab>('All');
  const recent = useRecentGames();
  const filtering = Boolean(query.trim());
  function filter<T extends ListedGame>(games: T[]): T[] { return games.filter(game => matchesGame(game, query) || gameTags(game).join(' ').toLocaleLowerCase('en').includes(query.trim().toLocaleLowerCase('en'))); }
  const count = filter(allListedGames).length;
  const browsed = filter(browseGames(playableGames, tab));

  return <>
    <div className="arcade-tools">
      <div className="search-field arcade-search"><Icon name="search" /><label className="sr-only" htmlFor="arcade-search">Search Games</label><input id="arcade-search" type="search" placeholder="Search Games" autoComplete="off" maxLength={100} value={query} onChange={event => setQuery(event.target.value)} />{query && <button type="button" className="search-clear" aria-label="Clear search" onClick={() => setQuery('')}><Icon name="close" width={18} /></button>}</div>
      <nav className="arcade-nav" aria-label="Arcade sections"><a href="#featured">Featured</a><a href="#new-games">New Games</a><a href="#multiplayer">Multiplayer</a></nav>
    </div>
    {filtering && <div className="arcade-search-status" role="status"><p>{count} {count === 1 ? 'game' : 'games'} found for “{query.trim()}”</p><button type="button" className="text-button" onClick={() => setQuery('')}>Clear search <Icon name="close" width={15} /></button></div>}
    <div className="arcade-layout">
      <div className="arcade-main">
        <ArcadeSection id="featured" title="Featured" note="Five handpicked games to play next." games={filter(featuredPicks)} featured filtering={filtering} />
        <ArcadeSection key={query} id="new-games" title="New Games" note="Explore new games. Some open on their own sites and may take longer to load. Swipe, use the arrows, or tab through every card." games={filter(newGames)} filtering={filtering} scrolling />
        <ArcadeSection id="multiplayer" title="Multiplayer" note="Play with friends. Choose online multiplayer or a local two-player match." games={filter(browseGames(playableGames, 'Multiplayer'))} filtering={filtering} />
        <ArcadeSection id="recently-played" title="Recently Played" note="Pick up where you left off. Saved on this browser." games={filter(recent)} recentEmpty={!recent.length} filtering={filtering} />
        <section className="arcade-section browse-section" aria-labelledby="browse-heading">
          <div className="arcade-section-heading"><div><h2 id="browse-heading">Browse Games</h2><p>Find your kind of game. One game can fit several genres.</p></div></div>
          <div role="tablist" aria-label="Browse games by category" className="browse-tabs">{browseTabs.map((name, index) => <button key={name} type="button" role="tab" id={`tab-${index}`} aria-selected={tab === name} aria-controls="browse-panel" tabIndex={tab === name ? 0 : -1} onClick={() => setTab(name)} onKeyDown={event => {
            let next = index;
            if (event.key === 'ArrowRight') next = (index + 1) % browseTabs.length;
            else if (event.key === 'ArrowLeft') next = (index + browseTabs.length - 1) % browseTabs.length;
            else if (event.key === 'Home') next = 0;
            else if (event.key === 'End') next = browseTabs.length - 1;
            else return;
            event.preventDefault(); setTab(browseTabs[next]); document.getElementById(`tab-${next}`)?.focus();
          }}>{name}</button>)}</div>
          <div id="browse-panel" role="tabpanel" aria-labelledby={`tab-${browseTabs.indexOf(tab)}`} tabIndex={0}>
            <p className="browse-count" role="status">{browsed.length} {browsed.length === 1 ? 'game' : 'games'}{tab === 'Update' ? ' updated in the last 30 days' : ` · ${tab}`}</p>
            {browsed.length ? <ul className="arcade-grid">{browsed.map(game => <li key={game.slug}><ArcadeCard game={game} /></li>)}</ul> : <div className="arcade-empty"><div><h3>{tab === 'Update' ? 'No verified recent updates yet' : 'No games found'}</h3><p>{tab === 'Update' ? 'Games appear here when a dated update has been verified.' : 'Try another category or clear your search.'}</p></div></div>}
          </div>
        </section>
      </div>
      <aside className="arcade-sidebar" aria-label="Stay connected"><Newsletter /><QuickLinks /></aside>
    </div>
  </>;
}
