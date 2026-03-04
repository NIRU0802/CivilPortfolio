import ProjectsClient from './ProjectsClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Browse numerous residential, commercial, and land development projects by Niraj Kathe across Nashik & Maharashtra.',
};

export default function ProjectsPage() {
    return <ProjectsClient />;
}
