import { Arcade } from '@/components/Arcade';
import { Footer } from '@/components/Footer';

export const metadata = { title: 'Version B', alternates: { canonical: '/' }, robots: { index: false, follow: true } };
export default function VersionB() {
  return <><main id="main" className="container arcade-page"><Arcade /></main><Footer compact /></>;
}
