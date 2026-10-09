import type { SVGProps } from 'react';

const paths = {
  search: 'm21 21-4.5-4.5 M18 10.5a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0',
  plus: 'M12 5v14 M5 12h14',
  left: 'm14 6-6 6 6 6',
  right: 'm10 6 6 6-6 6',
  arrow: 'M4 12h16 m-6-6 6 6-6 6',
  back: 'M20 12H4 m6-6-6 6 6 6',
  play: 'm9 5 11 7-11 7Z',
  clock: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M12 7v5l3 2',
  compass: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 m-6-3-2 4-4 2 2-4Z',
  action: 'm13 2-9 12h7l-1 8 10-12h-7Z',
  simulator: 'M5 17H3v-6l2-6h14l2 6v6h-2 M5 17h14 M7 17v3 M17 17v3 M3 11h18 M6 14h2 M16 14h2',
  survival: 'm12 3-7 9h4l-5 6h16l-5-6h4Z M12 18v4',
  strategy: 'M3 3h7v7H3Z M14 3h7v7h-7Z M3 14h7v7H3Z M14 14h7v7h-7Z',
  multiplayer: 'M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2 M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0 M22 21v-2a4 4 0 0 0-3-3.87 M16 3.13a4 4 0 0 1 0 7.75',
  close: 'm6 6 12 12 M18 6 6 18',
  mail: 'M3 5h18v14H3Z m0 1 9 7 9-7',
  check: 'm5 12 4 4L19 6',
  fullscreen: 'M8 3H3v5 M16 3h5v5 M21 16v5h-5 M3 16v5h5',
  gamepad: 'M6 7h12l3 11a2 2 0 0 1-3 2l-4-3h-4l-4 3a2 2 0 0 1-3-2Z M7 10v5 M4.5 12.5h5 M16 11h.01 M18 14h.01',
  info: 'M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0 M12 11v6 M12 7h.01',
} as const;

export type IconName = keyof typeof paths;

export function Icon({ name, ...props }: SVGProps<SVGSVGElement> & { name: IconName }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}><path d={paths[name]} /></svg>;
}
