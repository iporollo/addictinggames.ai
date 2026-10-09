'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import type { PlayableGame } from '@/lib/games';
import { recordPlayed, forgetPlayed } from '@/lib/history';
import { useShowcaseVersion } from '@/lib/showcase-version';
import { BackToDiscover } from './BackToDiscover';
import { Icon } from './Icon';

export function GamePlayer({ game }: { game: PlayableGame }) {
  const version = useShowcaseVersion();
  const [state, setState] = useState<'loading' | 'loaded' | 'failed'>('loading');
  const [attempt, setAttempt] = useState(0);
  const [fullscreenError, setFullscreenError] = useState('');
  const viewport = useRef<HTMLDivElement>(null);
  const loaded = useRef(false);

  useEffect(() => {
    const timer = window.setTimeout(() => { if (!loaded.current) setState('failed'); }, 30000);
    return () => window.clearTimeout(timer);
  }, [attempt]);

  function fail() { loaded.current = false; setState('failed'); forgetPlayed(game.slug); }
  function retry() { loaded.current = false; setState('loading'); setAttempt(value => value + 1); }
  async function fullscreen() {
    try {
      if (!document.fullscreenEnabled || !viewport.current?.requestFullscreen) { setFullscreenError('Fullscreen isn’t available in this browser. The game is still ready to play below.'); return; }
      await viewport.current.requestFullscreen();
    } catch { setFullscreenError('Fullscreen couldn’t open. You can keep playing in the page.'); }
  }

  return <main id="main" className="player-page container">
    <div className="player-topline"><BackToDiscover /><Link href="/games" className="text-link">All Games <Icon name="arrow" width={16} /></Link></div>
    <div className="player-panel"><div className="player-heading"><div><span className="eyebrow">{game.category}</span><h2>{game.title}</h2><p>{game.description}</p><a className="author-link" href={`https://x.com/${game.author}`} target="_blank" rel="noopener noreferrer">By @{game.author}</a></div><button type="button" className="button secondary fullscreen-button" aria-label="Enter fullscreen" onClick={fullscreen}><Icon name="fullscreen" /><span>Fullscreen</span></button></div>
      {fullscreenError && <p className="fullscreen-message" role="status">{fullscreenError}</p>}
      <div className="game-viewport" ref={viewport} aria-busy={state === 'loading'}>
        <button type="button" className="exit-fullscreen button secondary" onClick={() => document.exitFullscreen().catch(() => setFullscreenError('Use your browser’s fullscreen control to return.'))}><Icon name="close" />Exit fullscreen</button>
        {state === 'loading' && <div className="player-state" role="status"><span className="spinner" /><h3>Getting your game ready</h3><p>Loading {game.title}…</p></div>}
        {state === 'failed' ? <div className="player-state"><Icon name="gamepad" width={44} height={44} /><h3>This game is taking a break</h3><p>We couldn’t load the game right now. Give it another try in a moment.</p><button type="button" className="button primary" onClick={retry}>Try again</button><Link href={version === 'b' ? '/' : '/version-a'} className="text-link">Discover another game</Link></div> : <iframe key={attempt} title={`Play ${game.title}`} src={game.embedUrl} allow="autoplay; fullscreen; gamepad" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" onLoad={() => {
          loaded.current = true;
          setState('loaded');
          // Only games verified in a real browser can reach this route.
          recordPlayed(game.slug);
        }} onError={fail} />}
      </div>
      <div className="player-bottom"><span><Icon name="info" width={16} />Some games play best with a keyboard and mouse.</span>{state === 'loaded' && <button type="button" className="text-button" onClick={fail}>Game not loading?</button>}</div>
    </div>
  </main>;
}
