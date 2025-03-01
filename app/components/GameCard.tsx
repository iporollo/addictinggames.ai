import Image from 'next/image';
import Link from 'next/link';

interface GameCardProps {
  title: string;
  imageUrl?: string;
  emoji?: string;
  description: string;
  slug?: string;
  author?: string;
}

export default function GameCard({
  title,
  imageUrl,
  emoji,
  description,
  slug,
}: GameCardProps) {
  const content = (
    <>
      <div className="w-24 h-24 flex-shrink-0 bg-gray-50 rounded flex items-center justify-center">
        {emoji ? (
          <span className="text-4xl">{emoji}</span>
        ) : (
          imageUrl && (
            <div className="relative w-full h-full">
              <Image
                src={imageUrl}
                alt={title}
                fill
                className="object-cover rounded"
                sizes="96px"
              />
            </div>
          )
        )}
      </div>
      <div>
        <span className="text-blue-600 hover:underline font-medium mb-1 block">
          {title}
        </span>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </>
  );

  if (slug) {
    return (
      <Link
        href={`/games/${slug}`}
        className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
      >
        {content}
      </Link>
    );
  }

  return (
    <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      {content}
    </div>
  );
}
