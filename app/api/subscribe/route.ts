export async function POST(request: Request) {
  let body: unknown;
  try { body = await request.json(); }
  catch { return Response.json({ error: 'Invalid request' }, { status: 400 }); }
  const email = body && typeof body === 'object' && 'email' in body && typeof body.email === 'string' ? body.email.trim() : '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) || email.length > 254) {
    return Response.json({ error: 'A valid email address is required' }, { status: 400 });
  }
  const apiKey = process.env.AIRTABLE_API_KEY;
  const base = process.env.AIRTABLE_BASE;
  if (!apiKey || !base) return Response.json({ error: 'Subscriptions are temporarily unavailable' }, { status: 503 });
  try {
    const response = await fetch(`https://api.airtable.com/v0/${base}/Waitlist`, {
      method: 'POST', headers: { Authorization: `Bearer ${apiKey}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({ records: [{ fields: { Email: email } }] }),
      signal: AbortSignal.timeout(10000),
    });
    if (!response.ok) return Response.json({ error: 'Could not subscribe right now' }, { status: 502 });
    return Response.json({ success: true });
  } catch { return Response.json({ error: 'Could not subscribe right now' }, { status: 502 }); }
}
