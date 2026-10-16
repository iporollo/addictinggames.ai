import dates from './added-dates.json';

// First appearance on the main branch, using the commit day in America/New_York.
// Update this record when a new game or mod is published to the site.
export function gameAddedDate(slug: string) {
  return dates.games[slug as keyof typeof dates.games];
}

export function modAddedDate(id: string) {
  return dates.mods[id as keyof typeof dates.mods];
}

export function formatAddedDate(date: string) {
  const [year, month, day] = date.split('-');
  return `${Number(month)}/${Number(day)}/${year}`;
}
