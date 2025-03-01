'use client';

import { useEffect, useRef, useState, use } from 'react';
import Header from '../../components/Header';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { featuredGames, Game } from '../../page';

interface GamePageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function GamePage({ params }: GamePageProps) {
  const { slug } = use(params);
  const game = featuredGames.find((g: Game) => g.slug === slug);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const [isLoading, setIsLoading] = useState(true);

  if (!game || !game.gameUrl) {
    notFound();
  }

  useEffect(() => {
    const handleIframeMouseEnter = () => {
      document.body.style.overflow = 'hidden';
    };

    const handleIframeMouseLeave = () => {
      document.body.style.overflow = 'auto';
    };

    const handleIframeLoad = () => {
      setIsLoading(false);
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener('mouseenter', handleIframeMouseEnter);
      iframe.addEventListener('mouseleave', handleIframeMouseLeave);
      iframe.addEventListener('load', handleIframeLoad);
    }

    return () => {
      if (iframe) {
        iframe.removeEventListener('mouseenter', handleIframeMouseEnter);
        iframe.removeEventListener('mouseleave', handleIframeMouseLeave);
        iframe.removeEventListener('load', handleIframeLoad);
      }
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 overflow-hidden">
      <Header />

      <div className="container mx-auto px-4 pb-8">
        {/* Back to All Games Button */}
        <div className="mb-4">
          <Link
            href="/"
            className="inline-flex items-center text-gray-600 hover:text-gray-800 transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z"
                clipRule="evenodd"
              />
            </svg>
            Back to All Games
          </Link>
        </div>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          {/* Game Header */}
          <div className="p-6 border-b border-gray-200">
            <h1 className="text-3xl font-normal text-gray-800 mb-2">
              {game.title}
            </h1>
            <p className="text-gray-600">{game.description}</p>
            {game.author && (
              <p className="text-gray-600 mt-2">
                <a
                  href={`https://x.com/${game.author}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:underline"
                >
                  @{game.author}
                </a>
              </p>
            )}
          </div>

          {/* Game Container */}
          <div className="relative w-full" style={{ height: '80vh' }}>
            {isLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mb-4"></div>
                  <p className="text-gray-600">Loading game...</p>
                </div>
              </div>
            )}
            <iframe
              ref={iframeRef}
              src={game.gameUrl}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
}
