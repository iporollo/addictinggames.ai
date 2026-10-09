import { Discovery } from '@/components/Discovery';
import { Footer } from '@/components/Footer';

export const metadata = { title: 'Version A', robots: { index: false, follow: true } };

export default function VersionA() {
  return <><main id="main" className="container discovery"><Discovery /></main><Footer /></>;
}
