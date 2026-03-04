import type { Metadata } from 'next';
import { services } from '@/lib/data/services';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
    title: 'Services',
    description: 'Residential construction, commercial development, land development, structural design, project management and renovation services in Nashik.',
};

export default function ServicesPage() {
    return <ServicesClient services={services} />;
}
