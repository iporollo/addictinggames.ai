import data from './mods-data.json';
import { modAddedDate } from './added-dates';

export type Mod = {
  id: string; name: string; game: string; creator: string; profile: string; post: string;
  ai_quote: string; ai_note?: string; ai_source?: string; listing?: string; repo?: string;
  summary: string; changes: string; cost: string; price_note: string; platform: string;
  version: string; install: string; image?: string; image_source?: string; image_alt?: string;
  comments?: { author: string; url: string; type: string }[];
  working_evidence?: string; security: string; warnings?: string[]; community_source?: string;
  released_at?: string;
};

export const mods: Mod[] = data;
export const modGames = [...new Set(mods.map(mod => mod.game))].sort((a, b) => a.localeCompare(b));
const postId = (mod: Mod) => BigInt(mod.post.match(/status\/(\d+)/)?.[1] || '0');
const releasedAt = (mod: Mod) => mod.released_at
  ? BigInt(Date.parse(mod.released_at))
  : ((postId(mod) >> BigInt(22)) + BigInt(1288834974657));
const listedAt = (mod: Mod) => {
  const added = modAddedDate(mod.id);
  return added ? BigInt(Date.parse(added)) : releasedAt(mod);
};
export const newMods = [...mods].sort((a, b) => listedAt(a) > listedAt(b) ? -1 : listedAt(a) < listedAt(b) ? 1 : 0);
export const allMods = [...mods].sort((a, b) => a.name.localeCompare(b.name));
export function filterMods(items: Mod[], query: string, game: string) {
  const text = query.trim().toLowerCase();
  return items.filter(mod => (!game || mod.game === game) && `${mod.name} ${mod.game}`.toLowerCase().includes(text));
}
