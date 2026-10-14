'use client';

import { useEffect, useRef } from 'react';
import { Icon } from './Icon';

const FORM_ID = 'f4431d85-e203-4680-a3d2-4eb43639b22b';
const PUBLICATION_URL = 'https://addictinggames-ai-news.beehiiv.com/';

export function Newsletter({ variant = 'games' }: { variant?: 'games' | 'mods' }) {
  const embed = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = embed.current;
    if (!container) return;

    // beehiiv's loader attaches the form beside the script element that loaded it.
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://subscribe-forms.beehiiv.com/v3/loader.js';
    script.dataset.beehiivForm = FORM_ID;
    container.appendChild(script);

    return () => container.replaceChildren();
  }, []);

  return <section className="newsletter" aria-labelledby="newsletter-heading">
    <div className="newsletter-heading"><span className="newsletter-icon"><Icon name="mail" width={24} height={24} /></span><div><h2 id="newsletter-heading">Stay Updated</h2><p>{variant === 'mods' ? 'Get AI-made mod discoveries and site updates straight to your inbox.' : 'Get the latest in AI game development straight to your inbox.'}</p></div></div>
    <div className="newsletter-embed" ref={embed} />
    <p className="form-note">Updates from AddictingGames.ai. <a href={PUBLICATION_URL}>Subscribe on beehiiv</a></p>
  </section>;
}
