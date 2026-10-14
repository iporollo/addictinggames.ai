'use client';

import Link from 'next/link';
import { useState, type FormEvent } from 'react';
import { Icon } from './Icon';
import { SelectControl } from './SelectControl';

type Fields = 'name' | 'description' | 'url' | 'email' | 'github' | 'author' | 'originalGame' | 'price';
function httpUrl(value: string) { try { return ['http:', 'https:'].includes(new URL(value).protocol); } catch { return false; } }

export function SubmitForm({ kind = 'game' }: { kind?: 'game' | 'mod' }) {
  const isMod = kind === 'mod';
  const item = isMod ? 'mod' : 'game';
  const [errors, setErrors] = useState<Partial<Record<Fields, string>>>({});
  const [state, setState] = useState<'idle' | 'loading' | 'success'>('idle');
  const [submitError, setSubmitError] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: Fields) => String(data.get(name) || '').trim();
    const next: Partial<Record<Fields, string>> = {};
    if (!value('name')) next.name = `Give your ${item} a name.`;
    if (!value('description')) next.description = `Tell us a little about your ${item}.`;
    if (!httpUrl(value('url'))) next.url = `Enter a complete ${item} URL beginning with https:// or http://.`;
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value('email')) || value('email').length > 254) next.email = 'Enter a valid email address, like you@example.com.';
    if (isMod && !value('originalGame')) next.originalGame = 'Enter the original game this mod belongs to.';
    if (isMod && !['free', 'paid', 'unknown'].includes(value('price'))) next.price = 'Select the mod pricing.';
    if (value('github')) {
      try {
        const url = new URL(value('github'));
        if (url.protocol !== 'https:' || url.hostname !== 'github.com' || !/^\/[^/]+\/[^/]+\/?$/.test(url.pathname) || url.username || url.password) next.github = 'Enter a GitHub repository URL, such as https://github.com/you/game.';
      } catch { next.github = 'Enter a valid GitHub repository URL.'; }
    }
    if (value('author') && !/^@?[A-Za-z0-9_]{1,15}$/.test(value('author'))) next.author = 'Use a valid X handle, such as @yourname, or leave this blank.';
    setErrors(next);
    setSubmitError('');
    if (Object.keys(next).length) { (form.elements.namedItem(Object.keys(next)[0]) as HTMLElement)?.focus(); return; }
    setState('loading');
    try {
      const response = await fetch('/api/submit-game', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...(isMod ? { kind: 'mod', originalGame: value('originalGame'), price: value('price') } : {}), name: value('name'), description: value('description'), gameUrl: value('url'), email: value('email'), github: value('github'), author: value('author') }),
      });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Submission unavailable');
      form.reset();
      setState('success');
    } catch {
      setSubmitError(`We couldn’t send your ${item} right now. Your details are still here. Please try again in a moment.`);
      setState('idle');
    }
  }

  if (state === 'success') return <div className="submission-success" role="status"><span className="success-icon"><Icon name="check" width={32} height={32} /></span><h3>Thanks for sharing your {item}.</h3><p>Your {item} details have been received for review.</p><Link href={isMod ? "/mods" : "/"} className="button primary">Back to the {isMod ? "mods" : "games"} <Icon name="arrow" /></Link><button type="button" className="text-button" onClick={() => setState('idle')}>Submit another {item}</button></div>;

  const error = (field: Fields) => errors[field] && <p className="field-error" id={`${field}-error`} role="alert">{errors[field]}</p>;
  const attrs = (field: Fields) => ({ 'aria-invalid': Boolean(errors[field]), 'aria-describedby': errors[field] ? `${field}-error` : undefined });
  return <form className="submit-form" onSubmit={submit} noValidate><fieldset disabled={state === 'loading'}>
    <div className="form-field"><label htmlFor="game-name">{isMod ? "Mod" : "Game"} Name <span>Required</span></label><input id="game-name" name="name" placeholder={isMod ? "Your mod name" : "The next one-more-round game"} maxLength={100} required {...attrs('name')} />{error('name')}</div>
    {isMod && <><div className="form-field"><label htmlFor="mod-original-game">Original Game <span>Required</span></label><input id="mod-original-game" name="originalGame" placeholder="Minecraft, Skyrim, or another game" maxLength={100} required {...attrs('originalGame')} />{error('originalGame')}</div><div className="form-field"><label htmlFor="mod-price">Pricing <span>Required</span></label><SelectControl id="mod-price" name="price" defaultValue="" required {...attrs('price')}><option value="" disabled>Select pricing</option><option value="free">Free</option><option value="paid">Paid</option><option value="unknown">Not confirmed</option></SelectControl>{error('price')}</div></>}
    <div className="form-field"><label htmlFor="game-description">Description <span>Required</span></label><textarea id="game-description" name="description" placeholder={isMod ? "What does it add or change, and how did AI help build it?" : "What makes your game fun to play?"} rows={4} maxLength={2000} required {...attrs('description')} />{error('description')}</div>
    <div className="form-field"><label htmlFor="game-url">{isMod ? "Official Mod" : "Game"} URL <span>Required</span></label><input id="game-url" name="url" type="url" placeholder={isMod ? "https://your-official-mod-page.com" : "https://your-game.com"} maxLength={2048} required {...attrs('url')} />{error('url')}</div>
    <div className="form-field"><label htmlFor="game-email">Email Address <span>Required</span></label><input id="game-email" name="email" type="email" placeholder="you@example.com" maxLength={254} autoComplete="email" autoCapitalize="off" spellCheck={false} required {...attrs('email')} />{error('email')}</div>
    <div className="form-field"><label htmlFor="game-github">GitHub Repository <span>Optional</span></label><input id="game-github" name="github" type="url" placeholder="https://github.com/you/your-game" maxLength={2048} {...attrs('github')} />{error('github')}</div>
    <div className="form-field"><label htmlFor="game-author">Author Twitter/X Handle <span>Optional</span></label><input id="game-author" name="author" placeholder="@yourname" maxLength={16} autoCapitalize="off" spellCheck={false} {...attrs('author')} />{error('author')}</div>
    <div className="submission-note"><Icon name="info" /><p>Your {item} details will be sent to AddictingGames.AI for review.</p></div>
    {submitError && <p className="field-error" role="alert">{submitError}</p>}
    <button type="submit" className="button primary submit-form-button">{state === 'loading' ? 'Submitting…' : (isMod ? 'Submit a Mod' : 'Submit A Game')}<Icon name="arrow" /></button>
  </fieldset></form>;
}
