import { ModsCatalog } from '@/components/ModsCatalog';
import { Footer } from '@/components/Footer';
export const metadata = { title: 'New Mods', description: 'Discover AI-assisted game mods, creator posts and original game details.', alternates: { canonical: '/mods' } };
export default function ModsPage() { return <><main id="main" className="container mods-page"><ModsCatalog /></main><Footer compact /></>; }
