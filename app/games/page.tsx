import Image from 'next/image';
import { allListedGames } from '@/lib/games';
import { gameTags } from '@/lib/game-categories';
import { Icon } from '@/components/Icon';
import { Footer } from '@/components/Footer';

import { BackToDiscover } from '@/components/BackToDiscover';
import { GameLink } from '@/components/GameLink';
import { formatAddedDate, gameAddedDate } from '@/lib/added-dates';

export const metadata = { title: 'All Games' };
export default function AllGames() {
  return <><main id="main" className="container all-games-page"><BackToDiscover /><div className="page-heading"><div><span className="eyebrow">The whole collection</span><h2>All Games</h2><p>Find a familiar favorite or something completely new.</p></div><span className="list-count">{allListedGames.length} games · A–Z</span></div><ul className="all-games-list">{allListedGames.map(game => {
    const added = gameAddedDate(game.slug);
    const content = <><Image src={game.imageUrl} alt={`${game.title} game artwork`} width={100} height={100} /><div className="row-copy"><span className="row-category">{gameTags(game).join(' · ')}</span><h3>{game.title}</h3><p>{game.shortDescription}</p></div><span className="row-actions">{added && <time className="added-date" dateTime={added}>Added: {formatAddedDate(added)}</time>}<span className="row-play"><span>Play game</span><Icon name="play" /></span></span></>;
    return <li key={game.slug}><GameLink game={game} className="game-row">{content}</GameLink></li>;
  })}</ul></main><Footer /></>;
}
