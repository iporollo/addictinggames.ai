import Link from 'next/link';
import Image from 'next/image';
import { type PlayableGame } from '@/lib/games';
import { Icon } from './Icon';

export function GameCard({ game, priority = false }: { game: PlayableGame; priority?: boolean }) {
  return (
    <Link href={`/games/${game.slug}`} className="game-card" aria-label={`Play ${game.title}`}>
      <div className="card-artwork">
        <Image src={game.imageUrl} alt={`${game.title} game artwork`} fill sizes="(max-width: 600px) 65vw, (max-width: 1024px) 30vw, 260px" priority={priority} />
        <span className="card-category">{game.category}</span>
        <span className="card-play"><Icon name="play" width={17} height={17} /></span>
      </div>
      <div className="card-copy">
        <h3>{game.title}</h3>
        <p>{game.shortDescription}</p>
      </div>
    </Link>
  );
}
