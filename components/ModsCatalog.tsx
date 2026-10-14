'use client';
import Link from 'next/link';
import { useState } from 'react';
import { allMods, newMods, modGames, filterMods } from '@/lib/mods';
import { ModImage } from './ModImage';
import { Newsletter } from './Newsletter';
import { QuickLinks } from './QuickLinks';
import { Icon } from './Icon';
import { SelectControl } from './SelectControl';

export function ModsCatalog({ all = false }: { all?: boolean }) {
  const [query, setQuery] = useState('');
  const [game, setGame] = useState('');
  const items = filterMods(all ? allMods : newMods, query, game);
  return <>
    {all && <Link href="/mods" className="back-link">← Back to New Mods</Link>}
    <p className="form-note">These are research listings of AI-assisted mods. Check each mod’s file security review before installing; a listing does not certify its download.</p>
    <div className="mods-tools">
      <label className="search-field"><Icon name="search" width={18} /><span className="sr-only">Search mods</span><input type="search" placeholder="Search mods or games" value={query} onChange={event => setQuery(event.target.value)} /></label>
      <label className="mods-game-filter">Game<SelectControl value={game} onChange={event => setGame(event.target.value)}><option value="">All games</option>{modGames.map(name => <option key={name} value={name}>{name}</option>)}</SelectControl></label>
    </div>
    <div className="arcade-layout mods-layout"><section className="mods-panel" aria-labelledby="mods-heading">
      <div className="mods-panel-heading"><h2 id="mods-heading">{all ? 'View All Mods' : 'New Mods'}</h2>{all ? <span className="list-count">{items.length} {items.length === 1 ? 'mod' : 'mods'} · A–Z</span> : <Link href="/mods/all">View All Mods <Icon name="arrow" width={17} /></Link>}</div>
      {items.length ? <div className={all ? 'mods-all-rows' : 'mods-tile-grid'}>{items.map(mod => <Link key={mod.id} href={`/mods/${mod.id}`} className={all ? 'mod-list-row' : 'mod-tile'}><ModImage mod={mod} /><div className="mod-card-copy"><h3>{mod.name}</h3><p>{mod.game}</p></div>{all && <span className="mod-view-link">View mod <Icon name="arrow" width={17} /></span>}</Link>)}</div> : <p className="mods-empty" role="status">No mods match. Try another game or search.</p>}
    </section><aside className="arcade-sidebar" aria-label="Mod updates and links"><Newsletter variant="mods" /><QuickLinks variant="mods" /></aside></div>
  </>;
}
