import Link from 'next/link';
import Image from 'next/image';
import { allListedGames } from '@/lib/games';
import { Icon } from '@/components/Icon';
import { Footer } from '@/components/Footer';

import { BackToDiscover } from '@/components/BackToDiscover';

export const metadata = { title: 'All Games' };
export default function AllGames() {
  return <><main id="main" className="container all-games-page"><BackToDiscover /><div className="page-heading"><div><span className="eyebrow">The whole collection</span><h2>All Games</h2><p>Find a familiar favorite or something completely new.</p></div><span className="list-count">{allListedGames.length} games · A–Z</span></div><ul className="all-games-list">{allListedGames.map(game => {
    const content = <><Image src={game.imageUrl} alt={`${game.title} game artwork`} width={100} height={100} /><div className="row-copy"><span className="row-category">{game.category}</span><h3>{game.title}</h3><p>{game.shortDescription}</p></div><span className="row-play"><span>{'externalUrl' in game ? 'Open game site ↗' : 'Play game'}</span><Icon name="play" /></span></>;
    return <li key={game.slug}>{'externalUrl' in game
      ? <a href={game.externalUrl} className="game-row" aria-label={`Open ${game.title} on its game site (new tab)`} target="_blank" rel="noopener noreferrer">{content}</a>
      : <Link href={`/games/${game.slug}`} className="game-row" aria-label={`Play ${game.title}`}>{content}</Link>}</li>;
  })}</ul></main><Footer /></>;
}
