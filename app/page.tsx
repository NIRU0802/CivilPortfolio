import type { Metadata } from 'next';
import { getFeaturedProjects } from '@/lib/data/projects';
import { services } from '@/lib/data/services';
import { testimonials } from '@/lib/data/testimonials';
import { stats } from '@/lib/data/about';
import HomeClient from './HomeClient';
import SceneWrapperClient from '@/components/3d/SceneWrapperClient';

export const metadata: Metadata = {
  title: 'Niraj Kathe | Civil Engineer & Developer – Nashik',
  description:
    'Premium civil engineering, residential construction, and land development in Nashik, Maharashtra. 15+ years experience. Free consultation available.',
};

export default function HomePage() {
  const featuredProjects = getFeaturedProjects();
  const featuredServices = services.slice(0, 3);

  return (
    <>
      <SceneWrapperClient />
      <HomeClient
        featuredProjects={featuredProjects}
        featuredServices={featuredServices}
        testimonials={testimonials}
        stats={stats}
      />
    </>
  );
}
