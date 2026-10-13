import Link from 'next/link';
import { SubmitForm } from '@/components/SubmitForm';
import { Icon } from '@/components/Icon';
export const metadata = { title: 'Submit a Mod', alternates: { canonical: '/mods/submit' } };
export default function SubmitMod() {
  return <main id="main" className="container submit-page"><Link href="/mods" className="back-link">← Back to New Mods</Link><div className="submit-layout"><div className="submit-intro"><span className="eyebrow">Made something new?</span><h2>Give your game<br />a new possibility.</h2><p>Share an AI-assisted mod and tell us what it adds to the original game. Free mods are our focus.</p><div className="submit-intro-note"><Icon name="gamepad" width={28} height={28} /><span>New worlds. New mechanics.<br />New ways to play.</span></div></div><div className="submit-panel"><h2>Submit a Mod</h2><p className="form-intro">Include how AI helped build it in your description. Submissions are reviewed before listing.</p><SubmitForm kind="mod" /></div></div></main>;
}
