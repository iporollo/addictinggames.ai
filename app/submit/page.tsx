import { SubmitForm } from '@/components/SubmitForm';
import { Icon } from '@/components/Icon';

import { BackToDiscover } from '@/components/BackToDiscover';

export const metadata = { title: 'Submit A Game' };
export default function Submit() {
  return <main id="main" className="container submit-page"><BackToDiscover /><div className="submit-layout"><div className="submit-intro"><span className="eyebrow">Made something fun?</span><h2>Let’s play<br />what you made.</h2><p>Every great game starts with an idea.<br />Give yours a place to be discovered.</p><div className="submit-intro-note"><Icon name="gamepad" width={28} height={28} /><span>Big worlds. Tiny experiments.<br />There’s room for both.</span></div></div><div className="submit-panel"><h2>Submit A Game</h2><p className="form-intro">A few details, and you’re on your way.</p><SubmitForm /></div></div></main>;
}
