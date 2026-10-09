import test from 'node:test';
import assert from 'node:assert/strict';
import { POST as subscribe } from '../app/api/subscribe/route.ts';
import { POST as submitGame } from '../app/api/submit-game/route.ts';

const request = data => new Request('http://localhost/api/form', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(data) });
const validGame = { name: 'Test game', description: 'An original browser game.', gameUrl: 'https://example.com/game', email: 'creator@example.com' };

async function withProvider(callback, response = new Response('{}', { status: 200 })) {
  const originalFetch = globalThis.fetch;
  const originalKey = process.env.AIRTABLE_API_KEY, originalBase = process.env.AIRTABLE_BASE;
  const calls = [];
  process.env.AIRTABLE_API_KEY = 'test-only-key'; process.env.AIRTABLE_BASE = 'test-only-base';
  globalThis.fetch = async (url, options) => { calls.push({ url, options }); return response; };
  try { await callback(calls); }
  finally {
    globalThis.fetch = originalFetch;
    if (originalKey === undefined) delete process.env.AIRTABLE_API_KEY; else process.env.AIRTABLE_API_KEY = originalKey;
    if (originalBase === undefined) delete process.env.AIRTABLE_BASE; else process.env.AIRTABLE_BASE = originalBase;
  }
}

test('invalid form input never reaches Airtable', async () => {
  await withProvider(async calls => {
    for (const email of ['', 'invalid', { nested: 'value' }, 'x'.repeat(255)+'@example.com']) assert.equal((await subscribe(request({ email }))).status, 400);
    for (const data of [{}, { ...validGame, author: 'bad handle' }, { ...validGame, gameUrl: 'javascript:alert(1)' }, { ...validGame, github: 'https://example.com/repo' }]) assert.equal((await submitGame(request(data))).status, 400);
    assert.equal(calls.length, 0);
  });
});

test('malformed JSON returns a validation error', async () => {
  for (const handler of [subscribe, submitGame]) assert.equal((await handler(new Request('http://localhost', { method: 'POST', body: '{' }))).status, 400);
});

test('missing configuration fails safely without provider calls', async () => {
  await withProvider(async calls => {
    delete process.env.AIRTABLE_API_KEY;
    assert.equal((await subscribe(request({ email: 'test@example.com' }))).status, 503);
    assert.equal((await submitGame(request(validGame))).status, 503);
    assert.equal(calls.length, 0);
  });
});

test('subscription preserves the existing waitlist contract', async () => {
  await withProvider(async calls => {
    assert.deepEqual(await (await subscribe(request({ email: ' test@example.com ' }))).json(), { success: true });
    assert.equal(calls[0].url, 'https://api.airtable.com/v0/test-only-base/Waitlist');
    assert.deepEqual(JSON.parse(calls[0].options.body), { records: [{ fields: { Email: 'test@example.com' } }] });
  });
});

test('game submission preserves existing fields and includes the optional repository', async () => {
  await withProvider(async calls => {
    assert.deepEqual(await (await submitGame(request({ ...validGame, author: '@test_creator', github: 'https://github.com/example/game' }))).json(), { success: true });
    assert.equal(calls[0].url, 'https://api.airtable.com/v0/test-only-base/tbl5AUoCl96h5WEMk');
    assert.deepEqual(JSON.parse(calls[0].options.body).records[0].fields, { Name: validGame.name, Description: validGame.description+'\n\nGitHub repository: https://github.com/example/game\n\nContact email (review only): creator@example.com', Author: '@test_creator', GameURL: validGame.gameUrl });
    assert.equal(calls.length, 1, 'a submission must not subscribe the contact email to the newsletter');
  });
});

test('all four required game fields are enforced before contacting Airtable', async () => {
  await withProvider(async calls => {
    for (const field of ['name', 'description', 'gameUrl', 'email']) {
      for (const value of [undefined, '', '   ']) {
        assert.equal((await submitGame(request({ ...validGame, [field]: value }))).status, 400, `${field} is required`);
      }
    }
    for (const email of ['invalid', 'user@domain', 'user name@example.com', { nested: 'email' }, 'a'.repeat(243)+'@example.com']) {
      assert.equal((await submitGame(request({ ...validGame, email }))).status, 400);
    }
    assert.equal(calls.length, 0);
  });
});

test('game submissions accept absent or blank optional fields and preserve the contact email', async () => {
  await withProvider(async calls => {
    for (const optional of [{}, { author: '', github: '' }, { author: '  ', github: '  ' }]) {
      const result = await submitGame(request({ ...validGame, email: ' creator@example.com ', ...optional }));
      assert.equal(result.status, 200);
      assert.deepEqual(await result.json(), { success: true });
    }
    assert.equal(calls.length, 3);
    for (const call of calls) {
      assert.deepEqual(JSON.parse(call.options.body).records[0].fields, {
        Name: validGame.name,
        Description: validGame.description+'\n\nContact email (review only): creator@example.com',
        GameURL: validGame.gameUrl,
      });
    }
  });
});

test('provider failures never become fake success or expose provider details', async () => {
  await withProvider(async () => {
    for (const [handler, data] of [[subscribe, { email: 'test@example.com' }], [submitGame, validGame]]) {
      const result = await handler(request(data));
      assert.equal(result.status, 502); assert.equal((await result.json()).success, undefined);
    }
  }, new Response('private provider error', { status: 500 }));
});
