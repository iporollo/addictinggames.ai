'use client';

import { useMemo, useSyncExternalStore } from 'react';
import { playableGames } from './games';

const KEY = 'addictinggames:recent:v1';
const EVENT = 'addictinggames:history-change';
type Entry = { slug: string; openedAt: number };

function snapshot() {
  try { return window.localStorage.getItem(KEY) || '[]'; }
  catch { return '[]'; }
}

function readEntries(raw: string): Entry[] {
  try {
    const entries: unknown = JSON.parse(raw);
    if (!Array.isArray(entries)) return [];
    const seen = new Set<string>();
    return entries.filter((entry): entry is Entry => {
      if (!entry || typeof entry !== 'object' || typeof entry.slug !== 'string' ||
        typeof entry.openedAt !== 'number' || !Number.isFinite(entry.openedAt) ||
        !playableGames.some(game => game.slug === entry.slug) || seen.has(entry.slug)) return false;
      seen.add(entry.slug);
      return true;
    }).sort((a, b) => b.openedAt - a.openedAt).slice(0, 11);
  } catch { return []; }
}

function write(entries: Entry[]) {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(entries));
    window.dispatchEvent(new Event(EVENT));
  } catch { /* Private browsing and storage restrictions never block playing. */ }
}

export function recordPlayed(slug: string) {
  if (!playableGames.some(game => game.slug === slug)) return;
  write([{ slug, openedAt: Date.now() }, ...readEntries(snapshot()).filter(entry => entry.slug !== slug)].slice(0, 11));
}

export function forgetPlayed(slug: string) {
  write(readEntries(snapshot()).filter(entry => entry.slug !== slug));
}

function subscribe(notify: () => void) {
  const handleStorage = (event: StorageEvent) => { if (!event.key || event.key === KEY) notify(); };
  window.addEventListener('storage', handleStorage);
  window.addEventListener(EVENT, notify);
  return () => {
    window.removeEventListener('storage', handleStorage);
    window.removeEventListener(EVENT, notify);
  };
}

export function useRecentGames() {
  const raw = useSyncExternalStore(subscribe, snapshot, () => '[]');
  return useMemo(() => readEntries(raw).flatMap(entry => {
    const game = playableGames.find(game => game.slug === entry.slug);
    return game ? [game] : [];
  }), [raw]);
}
