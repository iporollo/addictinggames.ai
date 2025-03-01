'use client';

import Link from 'next/link';

const TitleWord = ({ text }: { text: string }) => (
  <span className="inline-block">
    <span className="text-6xl text-stroke">{text.charAt(0)}</span>
    <span className="text-4xl text-stroke">{text.slice(1)}</span>
  </span>
);

export default function Header() {
  return (
    <header className="mb-8 bg-[#869bbf]">
      <div className="container mx-auto px-4">
        <Link href="/">
          <h1 className="font-['Comic_Sans_MS'] font-bold text-white py-4 tracking-wide flex items-baseline gap-2">
            <TitleWord text="ADDICTING" />
            <TitleWord text="GAMES" />
            <span className="text-4xl text-stroke ml-[-6px]">.AI</span>
          </h1>
        </Link>
      </div>
    </header>
  );
}
