'use client';

import { useState } from 'react';
import Link from 'next/link';
import { categories, featuredGames, newGames, mostPlayedGames, simulatorGames, survivalGames, playableGames, matchesGame, type Category, type PlayableGame } from '@/lib/games';
import { useRecentGames } from '@/lib/history';
import { GameShelf } from './GameShelf';
import { Icon, type IconName } from './Icon';

const categoryIcons: Record<Category, IconName> = { Discover: 'compass', Action: 'action', Simulators: 'simulator', Survival: 'survival', Strategy: 'strategy', Multiplayer: 'multiplayer' };

export function Discovery() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<Category>('Discover');
  const recent = useRecentGames();
  const filter = (games: PlayableGame[]) => games.filter(game => matchesGame(game, query, category));
  const count = filter(playableGames).length;
  const filtering = Boolean(query.trim()) || category !== 'Discover';

  return <>
    <div className="discovery-tools">
      <div className="search-row">
        <div className="search-field"><Icon name="search" width={23} height={23} /><label className="sr-only" htmlFor="game-search">Search games</label><input id="game-search" type="search" placeholder="Search games" value={query} onChange={event => setQuery(event.target.value)} autoComplete="off" />{query && <button type="button" className="search-clear" aria-label="Clear search" onClick={() => setQuery('')}><Icon name="close" /></button>}<span className="search-hint">Find your next favorite</span></div>
        <Link href="/submit" className="button primary submit-link"><Icon name="plus" />Submit A Game</Link>
      </div>
      <div className="filter-row"><nav className="category-filters" aria-label="Game categories">{categories.map(item => <button type="button" key={item} aria-pressed={category === item} className={`category-filter${category === item ? ' selected' : ''}`} onClick={() => setCategory(item)}><Icon name={categoryIcons[item]} width={17} height={17} />{item}</button>)}</nav><p className="catalog-count">{playableGames.length} games to explore</p></div>
      {filtering && <div className="filter-status" role="status"><span>{count} {count === 1 ? 'game' : 'games'} found{query.trim() ? ` for “${query.trim()}”` : ` in ${category}`}</span><button type="button" onClick={() => { setQuery(''); setCategory('Discover'); }}>Reset filters <Icon name="close" width={15} height={15} /></button></div>}
    </div>
    <GameShelf title="Featured" note="Small games. Big possibilities." games={filter(featuredGames)} viewAll featured />
    <GameShelf title="Recently Played" note="Pick up where you left off." games={filter(recent)} empty={!recent.length ? <><span className="empty-icon"><Icon name="clock" width={25} height={25} /></span><div><h3>Your next favorite starts here</h3><p>Play a game and it’ll be waiting here when you return.</p></div><span className="local-history-note">Saved on this browser</span></> : undefined} />
    <GameShelf title="New Games" note="A fresh place to start exploring." games={filter(newGames)} />
    <GameShelf title="Most Played" note="A showcase selection, not a live ranking." games={filter(mostPlayedGames)} />
    <GameShelf title="Simulators" note="A different world. Your own pace." games={filter(simulatorGames)} />
    <GameShelf title="Survival" note="Build, adapt, and make it through." games={filter(survivalGames)} />
  </>;
}
