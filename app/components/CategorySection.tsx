interface Game {
  id: string;
  title: string;
}

interface CategorySectionProps {
  title: string;
  games: Game[];
  layout?: 'grid' | 'list';
}

export default function CategorySection({
  title,
  games,
  layout = 'grid',
}: CategorySectionProps) {
  if (layout === 'list') {
    return (
      <section className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-normal text-gray-800 mb-4">{title}</h2>
        <div className="space-y-3">
          {games.map((game, index) => (
            <div
              key={game.id}
              className="flex items-center space-x-3 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <span className="text-gray-400">{index + 1}.</span>
              <span className="text-sm">{game.title}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-normal text-gray-800 mb-4">{title}</h2>
      <div className="grid grid-cols-2 gap-3">
        {games.map((game) => (
          <div
            key={game.id}
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors py-2 px-3 bg-gray-50 rounded hover:bg-gray-100"
          >
            {game.title}
          </div>
        ))}
      </div>
    </section>
  );
}
