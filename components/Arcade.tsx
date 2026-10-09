'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { featuredGames, newGames, playableGames, simulatorGames, survivalGames, matchesGame, type PlayableGame } from '@/lib/games';
import { useRecentGames } from '@/lib/history';
import { Icon, type IconName } from './Icon';
import { Newsletter } from './Newsletter';
import { QuickLinks } from './QuickLinks';

const collections: { title: string; icon: IconName; games: PlayableGame[] }[] = [
  { title: 'Action', icon: 'action', games: playableGames.filter(game => game.category === 'Action') },
  { title: 'Simulators', icon: 'simulator', games: simulatorGames },
  { title: 'Survival and Strategy', icon: 'survival', games: survivalGames },
  { title: 'Multiplayer and Puzzle', icon: 'multiplayer', games: playableGames.filter(game => ['Multiplayer', 'Puzzle'].includes(game.category)) },
];

function ArcadeCard({ game, eager = false }: { game: PlayableGame; eager?: boolean }) {
  return <Link href={`/games/${game.slug}`} className="arcade-card" aria-label={`Play ${game.title}`}>
    <div className="arcade-artwork"><Image src={game.imageUrl} alt={`${game.title} game artwork`} fill sizes="(max-width: 639px) 44vw, (max-width: 1023px) 22vw, 16vw" loading={eager ? 'eager' : 'lazy'} /><span className="arcade-play"><Icon name="play" width={15} height={15} /></span></div>
    <div className="arcade-card-copy"><h3>{game.title}</h3><p>{game.shortDescription}</p></div>
  </Link>;
}

function ArcadeSection({ id, title, note, games, featured = false, recentEmpty = false, filtering = false }: {
  id: string; title: string; note: string; games: PlayableGame[]; featured?: boolean; recentEmpty?: boolean; filtering?: boolean;
}) {
  return <section id={id} className="arcade-section" aria-labelledby={`${id}-heading`}>
    <div className="arcade-section-heading"><div><h2 id={`${id}-heading`}>{title}</h2><p>{note}</p></div>{featured && <Link href="/games" className="view-all">View All Games <Icon name="arrow" width={16} /></Link>}</div>
    {games.length ? <ul className="arcade-grid" aria-label={`${title} games`}>{games.map(game => <li key={game.slug}><ArcadeCard game={game} eager={featured} /></li>)}</ul> : <div className="arcade-empty"><Icon name={recentEmpty ? 'clock' : 'search'} width={26} height={26} /><div><h3>{recentEmpty ? 'Your next favorite starts here' : 'No games found'}</h3><p>{recentEmpty ? 'Play a game and it’ll be waiting here when you return.' : filtering ? 'Try another title, category, or creator.' : 'More games will find their way here.'}</p></div></div>}
  </section>;
}

export function Arcade() {
  const [query, setQuery] = useState('');
  const recent = useRecentGames();
  const filtering = Boolean(query.trim());
  const filter = (games: PlayableGame[]) => games.filter(game => matchesGame(game, query, 'Discover'));
  const count = filter(playableGames).length;

  return <>
    <div className="arcade-tools">
      <div className="search-field arcade-search"><Icon name="search" /><label className="sr-only" htmlFor="arcade-search">Search Games</label><input id="arcade-search" type="search" placeholder="Search Games" autoComplete="off" maxLength={100} value={query} onChange={event => setQuery(event.target.value)} />{query && <button type="button" className="search-clear" aria-label="Clear search" onClick={() => setQuery('')}><Icon name="close" width={18} /></button>}</div>
      <nav className="arcade-nav" aria-label="Arcade sections"><a href="#featured">Featured</a><a href="#new-games">New Games</a><a href="#recently-played">Recently Played</a></nav>
    </div>
    {filtering && <div className="arcade-search-status" role="status"><p>{count} {count === 1 ? 'game' : 'games'} found for “{query.trim()}”</p><button type="button" className="text-button" onClick={() => setQuery('')}>Clear search <Icon name="close" width={15} /></button></div>}
    <div className="arcade-layout">
      <div className="arcade-main">
        <ArcadeSection id="featured" title="Featured" note="Small games. Big possibilities." games={filter(featuredGames)} featured filtering={filtering} />
        <ArcadeSection id="new-games" title="New Games" note="A fresh place to start exploring." games={filter(newGames)} filtering={filtering} />
        <ArcadeSection id="recently-played" title="Recently Played" note="Pick up where you left off. Saved on this browser." games={filter(recent)} recentEmpty={!recent.length} filtering={filtering} />
        <div className="arcade-collections">{collections.map(collection => {
          const games = filter(collection.games);
          if (!games.length) return null;
          const id = `collection-${collection.icon}`;
          return <section key={collection.title} className="arcade-collection" aria-labelledby={id}><div className="arcade-collection-heading"><Icon name={collection.icon} width={19} height={19} /><h2 id={id}>{collection.title}</h2></div><ul>{games.map(game => <li key={game.slug}><ArcadeCard game={game} /></li>)}</ul></section>;
        })}</div>
      </div>
      <aside className="arcade-sidebar" aria-label="Stay connected"><Newsletter /><QuickLinks /></aside>
    </div>
  </>;
}
