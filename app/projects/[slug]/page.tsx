import { notFound } from 'next/navigation';
import { getProjectBySlug, projects } from '@/lib/data/projects';
import ProjectDetailClient from './ProjectDetailClient';
import type { Metadata } from 'next';

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return { title: 'Project Not Found' };
    return {
        title: project.title,
        description: project.description,
        openGraph: {
            title: `${project.title} | Niraj Kathe`,
            description: project.description,
            images: [{ url: project.coverImage.src, width: 800, height: 600, alt: project.coverImage.alt }],
        },
    };
}

export default async function ProjectDetailPage({ params }: Props) {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) notFound();
    return <ProjectDetailClient slug={slug} />;
}
