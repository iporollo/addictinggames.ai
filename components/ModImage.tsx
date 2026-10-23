import Image from 'next/image';
import type { Mod } from '@/lib/mods';

export function ModImage({ mod, hero = false }: { mod: Mod; hero?: boolean }) {
  if (mod.image) return <Image src={mod.image} alt={mod.image_alt || `${mod.name} creator screenshot`} width={hero ? 1000 : 360} height={hero ? 625 : 360} unoptimized className={hero ? 'mod-detail-image' : mod.id === 'quick-hand-selector-balatro' ? 'mod-thumbnail mod-thumbnail-contain' : 'mod-thumbnail'} />;
  return <div className={hero ? 'mod-image-placeholder mod-hero-placeholder' : 'mod-image-placeholder'} role="img" aria-label={`Thumbnail unavailable for ${mod.name}`}><svg aria-hidden="true" width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"><rect x="3" y="3" width="18" height="18" rx="3" /><circle cx="8" cy="8" r="1.5" /><path d="m3 17 5-5 4 4 4-6 5 7" /></svg></div>;
}
