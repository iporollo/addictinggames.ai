import './globals.css';
import { comicSans } from './fonts';

export const metadata = {
  title: 'AddictingGames.AI',
  description: 'Play the best indie web games',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={comicSans.variable}>
      <body>{children}</body>
    </html>
  );
}
