'use client';

import { useState, type FormEvent } from 'react';
import { Icon } from './Icon';

export function Newsletter() {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [error, setError] = useState('');
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) || email.length > 254) { setError('Enter a valid email address, like you@example.com.'); setState('error'); return; }
    setError('');
    setState('loading');
    try {
      const response = await fetch('/api/subscribe', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email: email.trim() }) });
      const result = await response.json();
      if (!response.ok || result.success !== true) throw new Error('Subscription unavailable');
      setEmail('');
      setState('success');
    } catch {
      setError('We couldn’t subscribe you right now. Please try again in a moment.');
      setState('error');
    }
  }
  return <section className="newsletter" aria-labelledby="newsletter-heading">
    <div className="newsletter-heading"><span className="newsletter-icon"><Icon name="mail" width={24} height={24} /></span><div><h2 id="newsletter-heading">Stay Updated</h2><p>Get the latest in AI game development straight to your inbox.</p></div></div>
    {state === 'success' ? <div className="form-success" role="status"><Icon name="check" /><div><strong>You’re on the list!</strong><p>Thanks for subscribing to AddictingGames.AI.</p></div></div> : <form onSubmit={submit} noValidate>
      <div className="newsletter-fields"><label className="sr-only" htmlFor="newsletter-email">Email address</label><input id="newsletter-email" type="email" placeholder="Enter your email" value={email} aria-invalid={state === 'error'} aria-describedby={state === 'error' ? 'newsletter-error newsletter-note' : 'newsletter-note'} onChange={event => { setEmail(event.target.value); if (state === 'error') setState('idle'); }} disabled={state === 'loading'} required /><button type="submit" className="button primary" disabled={state === 'loading'}>{state === 'loading' ? 'Subscribing…' : 'Subscribe'}<Icon name="arrow" width={17} /></button></div>
      {state === 'error' && <p id="newsletter-error" className="field-error" role="alert">{error}</p>}
      <p id="newsletter-note" className="form-note">Updates from AddictingGames.AI.</p>
    </form>}
  </section>;
}
