const AIRTABLE_TABLE_ID = 'tbl5AUoCl96h5WEMk';

export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); }
  catch { return Response.json({ error: 'Invalid request' }, { status: 400 }); }
  if (!body || typeof body !== 'object') return Response.json({ error: 'Invalid request' }, { status: 400 });
  const data = body as Record<string, unknown>;
  const value = (key: string) => typeof data[key] === 'string' ? data[key].trim() : '';
  const name = value('name'), description = value('description'), author = value('author'), gameUrl = value('gameUrl'), github = value('github');
  if (!name || name.length > 100 || !description || description.length > 2000 || !/^@?[A-Za-z0-9_]{1,15}$/.test(author) || !gameUrl || gameUrl.length > 2048 || github.length > 2048) {
    return Response.json({ error: 'Check your game details and try again' }, { status: 400 });
  }
  try {
    if (!['https:', 'http:'].includes(new URL(gameUrl).protocol)) throw new Error('Invalid game URL');
    if (github) {
      const repository = new URL(github);
      if (repository.protocol !== 'https:' || repository.hostname !== 'github.com' || !/^\/[^/]+\/[^/]+\/?$/.test(repository.pathname) || repository.username || repository.password) throw new Error('Invalid repository');
    }
  } catch { return Response.json({ error: 'Check the game and repository URLs' }, { status: 400 }); }
  const apiKey = process.env.AIRTABLE_API_KEY;
  const base = process.env.AIRTABLE_BASE;
  if (!apiKey || !base) return Response.json({ error: 'Game submissions are temporarily unavailable' }, { status: 503 });
  try {
    const response = await fetch(`https://api.airtable.com/v0/${base}/${AIRTABLE_TABLE_ID}`, {
      method: 'POST', headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      // Keep the existing Airtable schema. The optional repository is included
      // in Description instead of assuming an unverified new Airtable column.
      body: JSON.stringify({ records: [{ fields: { Name: name, Description: github ? `${description}\n\nGitHub repository: ${github}` : description, Author: author, GameURL: gameUrl } }] }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return Response.json({ error: 'Could not submit the game right now' }, { status: 502 });
    return Response.json({ success: true });
  } catch { return Response.json({ error: 'Could not submit the game right now' }, { status: 502 }); }
}
