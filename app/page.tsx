import GameCard from './components/GameCard';
import Header from './components/Header';
import SubscriptionForm from './components/SubscriptionForm';

export interface Game {
  id: string;
  title: string;
  description: string;
  category: string;
  slug: string;
  imageUrl?: string;
  emoji?: string;
  author?: string;
  gameUrl: string;
}

export const featuredGames: Game[] = [
  {
    id: '1',
    title: 'fly.pieter.com',
    description: 'Free to play MMO flight simulator',
    category: 'Simulation',
    slug: 'fly-pieter',
    imageUrl: '/games/fly_pieter.webp',
    author: 'levelsio',
    gameUrl: 'https://fly.pieter.com',
  },
  {
    id: '2',
    title: 'Combat Mission',
    description: 'Tactical combat simulation',
    category: 'Action',
    slug: 'combat-mission',
    author: 'reaganmaconi',
    imageUrl: '/games/combat_mission.jpeg',
    gameUrl: 'https://combatmission.vercel.app/',
  },
  {
    id: '3',
    title: 'Platform Party',
    description: 'Create, share, and play custom platformer levels!',
    category: 'Multiplayer',
    slug: 'platform-party',
    imageUrl: '/games/platform_party.jpg',
    author: 'javinladish',
    gameUrl: 'https://platformparty.io/play/',
  },
  {
    id: '4',
    title: 'Cybertruck Rocket League',
    description: 'Rocket-powered cybertruck soccer',
    category: 'Sports',
    slug: 'cybertruck-rocket',
    imageUrl: '/games/cybertruck_rocket.webp',
    author: 'rick_boers',
    gameUrl: 'https://rickboers.com/game.html',
  },
  {
    id: '5',
    title: '3D Car Driving Simulator',
    description: 'Realistic 3D driving experience',
    category: 'Simulation',
    slug: '3d-car-simulator',
    imageUrl: '/games/car_simulator.jpeg',
    author: 'ozgrozer',
    gameUrl: 'https://3d-car-driving-simulation.vercel.app',
  },
  {
    id: '6',
    title: '2D GTA',
    imageUrl: '/games/2d_gta.webp',
    description: 'Top down GTA inspired game with procedurally generated maps',
    category: 'Action',
    slug: '2d-gta',
    author: 'marckohlbrugge',
    gameUrl: 'https://gta.marc.io',
  },
  {
    id: '7',
    title: 'Island Survivor',
    imageUrl: '/games/island_survivor.jpg',
    description: 'Survive a crash landing on a desert island',
    category: 'Survival',
    slug: 'island-survivor',
    author: 'jasperdeboer',
    gameUrl: 'https://ja.sperdeboer.nl/island/',
  },
  {
    id: '8',
    title: 'Blocky RTS',
    imageUrl: '/games/aoe_rts.png',
    description: 'Simple block styled real-time strategy game',
    category: 'Strategy',
    slug: 'aoe-rts',
    author: 'HeyItzaMi',
    gameUrl: 'https://aoe-rts.itzami.com/',
  },
];

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
                {featuredGames.map((game) => (
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
          <div className="lg:w-80">
            {/* Email Subscription */}
            <SubscriptionForm />

            {/* Quick Links */}
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-normal text-gray-800 mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="/games" className="text-blue-600 hover:underline">
                    View All Games
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
