import { notFound } from 'next/navigation';
import { playableGames } from '@/lib/games';
import { GamePlayer } from '@/components/GamePlayer';

export function generateStaticParams() { return playableGames.map(game => ({ slug: game.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = playableGames.find(game => game.slug === slug);
  return { title: game?.title || 'Game not found', description: game?.description };
}
export default async function GamePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const game = playableGames.find(game => game.slug === slug);
  if (!game) notFound();
  return <GamePlayer key={game.slug} game={game} />;
}
