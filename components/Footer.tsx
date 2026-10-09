import { Newsletter } from './Newsletter';
import { QuickLinks } from './QuickLinks';
import { FooterNote } from './FooterNote';

export function Footer({ compact = false }: { compact?: boolean }) {
  return <footer className={`site-footer container${compact ? ' arcade-footer' : ''}`}>{!compact && <div className="footer-panels"><Newsletter /><QuickLinks /></div>}<FooterNote /></footer>;
}
