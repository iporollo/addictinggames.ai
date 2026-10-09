'use client';

import { useEffect, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';

const KEY = 'addictinggames:version:v1';
const EVENT = 'addictinggames:version-change';

function snapshot(): 'a' | 'b' {
  try { return window.sessionStorage.getItem(KEY) === 'a' ? 'a' : 'b'; }
  catch { return 'b'; }
}

function subscribe(notify: () => void) {
  window.addEventListener(EVENT, notify);
  return () => window.removeEventListener(EVENT, notify);
}

// Remember only a layout choice in this tab. Game history remains shared in
// the existing localStorage store; neither store contains form submissions.
export function useShowcaseVersion() {
  const pathname = usePathname();
  const remembered = useSyncExternalStore(subscribe, snapshot, () => 'b');
  const routeVersion = pathname === '/' || pathname === '/version-b' ? 'b' : pathname === '/version-a' ? 'a' : null;
  useEffect(() => {
    if (!routeVersion || snapshot() === routeVersion) return;
    try {
      window.sessionStorage.setItem(KEY, routeVersion);
      window.dispatchEvent(new Event(EVENT));
    } catch { /* Restricted storage never blocks navigation. */ }
  }, [routeVersion]);
  return routeVersion ?? remembered;
}
