import localFont from 'next/font/local';

export const comicSans = localFont({
  src: [
    {
      path: '../public/fonts/comic-sans-ms.ttf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/comic-sans-ms-bold.ttf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-comic-sans',
});
