import Link from 'next/link';
import { notFound } from 'next/navigation';
import { mods } from '@/lib/mods';
import { ModImage } from '@/components/ModImage';
import { Footer } from '@/components/Footer';

export function generateStaticParams() { return mods.map(mod => ({ slug: mod.id })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = mods.find(mod => mod.id === slug);
  return { title: mod?.name || 'Mod not found', description: mod?.summary, alternates: { canonical: `/mods/${slug}` } };
}
function SourceLink({ href, children }: { href?: string; children: React.ReactNode }) {
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{children} ↗</a> : null;
}
export default async function ModDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const mod = mods.find(mod => mod.id === slug);
  if (!mod) notFound();
  return <><main id="main" className="container mod-detail-page"><Link href="/mods" className="back-link">← Back to New Mods</Link>
    <div className="mod-detail-title"><span className="eyebrow">{mod.game}</span><h2>{mod.name}</h2><p>{mod.summary}</p><span className="mod-mobile-price" data-price={mod.cost === 'Free' ? 'free' : 'unknown'}>{mod.cost}</span></div>
    <div className="mod-detail-grid"><div className="mod-detail-content"><ModImage mod={mod} hero />{mod.image_source && <p className="mod-image-caption"><SourceLink href={mod.image_source}>Creator image source</SourceLink></p>}
      {mod.warnings?.length ? <section className="mod-detail-block" aria-label="Warnings and review limits"><h3>Warnings and review limits</h3><ul>{mod.warnings.map(warning => <li key={warning}>{warning}</li>)}</ul></section> : null}
      <section className="mod-detail-block"><h3>What changes in {mod.game}?</h3><p>{mod.changes}</p></section>
      <section className="mod-detail-block"><h3>From the creator</h3><SourceLink href={mod.profile}>{mod.creator}</SourceLink><blockquote>{mod.ai_quote}</blockquote><p className="form-note">{mod.ai_note || 'Creator statement about AI involvement in building the mod.'}</p><div className="mod-source-links"><SourceLink href={mod.post}>{mod.post.includes('x.com/') ? 'Read the original X post' : 'Read the official mod listing'}</SourceLink>{mod.ai_source && mod.ai_source !== mod.post && <SourceLink href={mod.ai_source}>AI-build statement source</SourceLink>}</div></section>
      <section className="mod-detail-block"><h3>Community responses</h3>{mod.comments?.length ? mod.comments.map(comment => <div key={comment.url} className="mod-comment"><strong>{comment.author}</strong><p>{comment.type}</p><SourceLink href={comment.url}>Read the response</SourceLink></div>) : <p>Positive comments and independent successful-use reports have not been confirmed. Read the original discussion for current replies.</p>}{mod.working_evidence && <p className="mod-release-note">{mod.working_evidence}</p>}<SourceLink href={mod.community_source}>Community discussion</SourceLink></section>
      <section className="mod-detail-block"><h3>Getting started</h3><p>{mod.install}</p><SourceLink href={mod.listing}>Official mod page</SourceLink></section>
    </div><aside className="mod-detail-sidebar"><section className="mod-detail-block"><h3>Mod details</h3><div className="mod-price" data-price={mod.cost === 'Free' ? 'free' : 'unknown'}>{mod.cost}</div><p className="form-note">{mod.price_note}</p><dl><dt>Original game</dt><dd>{mod.game}</dd><dt>Creator</dt><dd><SourceLink href={mod.profile}>{mod.creator}</SourceLink></dd><dt>Platform</dt><dd>{mod.platform}</dd><dt>Game version</dt><dd>{mod.version}</dd></dl><div className="mod-source-links"><SourceLink href={mod.listing}>Visit official mod page</SourceLink><SourceLink href={mod.repo}>Source code</SourceLink></div></section><section className="mod-detail-block"><h3>File security review</h3><p>{mod.security}</p><p className="form-note">Listing a mod does not certify its download. No mod installers or release files were executed during this research.</p></section></aside></div>
  </main><Footer compact /></>;
}
