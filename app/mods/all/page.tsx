import { ModsCatalog } from '@/components/ModsCatalog';
import { Footer } from '@/components/Footer';
export const metadata = { title: 'View All Mods', alternates: { canonical: '/mods/all' } };
export default function AllModsPage() { return <><main id="main" className="container mods-page"><ModsCatalog all /></main><Footer compact /></>; }
