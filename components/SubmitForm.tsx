'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { useShowcaseVersion } from '@/lib/showcase-version';
import { Icon } from './Icon';

type Fields = 'name' | 'description' | 'author' | 'url' | 'github';
function httpUrl(value: string) { try { return ['http:', 'https:'].includes(new URL(value).protocol); } catch { return false; } }

export function SubmitForm() {
  const version = useShowcaseVersion();
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [submitError, setSubmitError] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: Fields) => String(data.get(name) || '').trim();
    const next: Partial<Record<Fields, string>> = {};
    if (!value('name')) next.name = 'Give your game a name.';
    if (!value('description')) next.description = 'Tell us a little about your game.';
    if (!/^@?[A-Za-z0-9_]{1,15}$/.test(value('author'))) next.author = 'Use a valid X handle, such as @yourname.';
    if (!httpUrl(value('url'))) next.url = 'Enter a complete game URL beginning with https:// or http://.';
    if (value('github')) {
      try {
        const url = new URL(value('github'));
        if (url.protocol !== 'https:' || url.hostname !== 'github.com' || !/^\/[^/]+\/[^/]+\/?$/.test(url.pathname) || url.username || url.password) next.github = 'Enter a GitHub repository URL, such as https://github.com/you/game.';
      } catch { next.github = 'Enter a valid GitHub repository URL.'; }
    }
    setErrors(next);
    setSubmitError('');
    if (Object.keys(next).length) { (form.elements.namedItem(Object.keys(next)[0]) as HTMLElement)?.focus(); return; }
    setState('loading');
    try {
      const response = await fetch('/api/submit-game', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: value('name'), description: value('description'), author: value('author'), gameUrl: value('url'), github: value('github') }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Submission unavailable');
      form.reset();
      setState('success');
    } catch {
      setSubmitError('We couldn’t send your game right now. Your details are still here. Please try again in a moment.');
      setState('idle');
    }
  }

  if (state === 'success') return <div className="submission-success" role="status"><span className="success-icon"><Icon name="check" width={32} height={32} /></span><h3>Thanks for sharing your game.</h3><p>Your game details have been received for review.</p><Link href={version === 'b' ? '/' : '/version-a'} className="button primary">Back to the games <Icon name="arrow" /></Link><button type="button" className="text-button" onClick={() => setState('idle')}>Submit another game</button></div>;

  const error = (field: Fields) => errors[field] && <p className="field-error" id={`${field}-error`} role="alert">{errors[field]}</p>;
  const attrs = (field: Fields) => ({ 'aria-invalid': Boolean(errors[field]), 'aria-describedby': errors[field] ? `${field}-error` : undefined });
  return <form className="submit-form" onSubmit={submit} noValidate><fieldset disabled={state === 'loading'}>
    <div className="form-field"><label htmlFor="game-name">Game Name <span>Required</span></label><input id="game-name" name="name" placeholder="The next one-more-round game" maxLength={100} required {...attrs('name')} />{error('name')}</div>
    <div className="form-field"><label htmlFor="game-description">Description <span>Required</span></label><textarea id="game-description" name="description" placeholder="What makes your game fun to play?" rows={4} maxLength={2000} required {...attrs('description')} />{error('description')}</div>
    <div className="form-field"><label htmlFor="game-author">Author Twitter/X Handle <span>Required</span></label><input id="game-author" name="author" placeholder="@yourname" maxLength={16} autoCapitalize="off" spellCheck={false} required {...attrs('author')} />{error('author')}</div>
    <div className="form-field"><label htmlFor="game-url">Game URL <span>Required</span></label><input id="game-url" name="url" type="url" placeholder="https://your-game.com" maxLength={2048} required {...attrs('url')} />{error('url')}</div>
    <div className="form-field"><label htmlFor="game-github">GitHub Repository <span>Optional</span></label><input id="game-github" name="github" type="url" placeholder="https://github.com/you/your-game" maxLength={2048} {...attrs('github')} />{error('github')}</div>
    <div className="submission-note"><Icon name="info" /><p>Your game details will be sent to AddictingGames.AI for review.</p></div>
    {submitError && <p className="field-error" role="alert">{submitError}</p>}
    <button type="submit" className="button primary submit-form-button">{state === 'loading' ? 'Submitting…' : 'Submit A Game'}<Icon name="arrow" /></button>
  </fieldset></form>;
}
