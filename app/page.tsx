import Link from 'next/link';
import GameCard from './components/GameCard';
import Header from './components/Header';
import SubscriptionForm from './components/SubscriptionForm';
import { games } from '@/utils/games';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      <Header />

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Main Content */}
          <div className="flex-1">
            {/* Featured Games Section */}
            <section className="mb-8">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-normal text-gray-800">
                  Featured Games
                </h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {games.map((game) => (
                  <GameCard
                    key={game.id}
                    title={game.title}
                    imageUrl={game.imageUrl}
                    emoji={game.emoji}
                    description={game.description}
                    slug={game.slug}
                    author={game.author}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:w-80 pb-8">
            {/* Email Subscription */}
            <SubscriptionForm />

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-normal text-gray-800 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/games" className="text-blue-600 hover:underline">
                    View All Games
                  </Link>
                </li>
                <li>
                  <Link
                    href="/submit"
                    className="text-blue-600 hover:underline"
                  >
                    Submit Game
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
