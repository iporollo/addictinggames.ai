import Link from 'next/link';
import Image from 'next/image';
import { alphabeticalGames } from '@/lib/games';
import { Icon } from '@/components/Icon';
import { Footer } from '@/components/Footer';

import { BackToDiscover } from '@/components/BackToDiscover';

export const metadata = { title: 'All Games' };
export default function AllGames() {
  return <><main id="main" className="container all-games-page"><BackToDiscover /><div className="page-heading"><div><span className="eyebrow">The whole collection</span><h2>All Games</h2><p>Find a familiar favorite or something completely new.</p></div><span className="list-count">{alphabeticalGames.length} games · A–Z</span></div><ul className="all-games-list">{alphabeticalGames.map(game => <li key={game.slug}><Link href={`/games/${game.slug}`} className="game-row" aria-label={`Play ${game.title}`}><Image src={game.imageUrl} alt={`${game.title} game artwork`} width={100} height={100} /><div className="row-copy"><span className="row-category">{game.category}</span><h3>{game.title}</h3><p>{game.shortDescription}</p></div><span className="row-play"><span>Play game</span><Icon name="play" /></span></Link></li>)}</ul></main><Footer /></>;
}
