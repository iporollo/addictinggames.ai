import Link from 'next/link';
export default function NotFound() { return <main id="main" className="container placeholder-page"><div className="placeholder-panel"><span className="eyebrow">Nothing to play here</span><h2>This game isn’t in the collection.</h2><p>There’s still plenty to discover.</p><Link href="/" className="button primary">Find a game</Link></div></main>; }
