import { TimelineEvent, Certification, Stat } from '@/types';

export const founderProfile = {
    name: 'Niraj Kathe',
    credentials: 'B.E. Civil, Structural Engineering Expert',
    title: 'Principal Civil Engineer & Developer',
    tagline: 'Engineering Nashik with precision and trust.',
    bio: `With over 15 years of experience in civil engineering and real estate development, Niraj Kathe has led the design and execution of numerous projects across residential, commercial, and infrastructure sectors in Maharashtra. His approach combines structural precision with architectural sensibility — ensuring every project is not just built right, but built beautifully.

Niraj founded his practice in 2011 with a singular focus: deliver engineering excellence without compromising on transparency or trust.`,
    avatar: '/images/founder/niraj-kathe.jpg',
    email: 'contact@nirajkathe.com',
    phone: '+91 98765 43210',
    location: 'Nashik, Maharashtra',
    linkedIn: 'https://www.linkedin.com',
};

export const timeline: TimelineEvent[] = [
    {
        year: '2008–2010',
        title: 'Graduate Engineer Trainee',
        company: 'Regional Infrastructure Corp, Mumbai',
        description: 'Worked on residential projects including structural supervision and quality control.',
    },
    {
        year: '2011–Present',
        title: 'Founder & Principal Engineer',
        company: 'Niraj Kathe Construction',
        description: 'Founded an independent practice specializing in end-to-end residential, commercial, and land development projects in Nashik.',
    },
];

export const certifications: Certification[] = [
    {
        id: '1',
        title: 'Project Management Professional (PMP)',
        issuer: 'Project Management Institute, USA',
        year: '2014',
        icon: 'verified',
    },
    {
        id: '2',
        title: 'LEED Accredited Professional (BD+C)',
        issuer: 'U.S. Green Building Council',
        year: '2016',
        icon: 'eco',
    },
    {
        id: '3',
        title: 'Chartered Engineer (Civil)',
        issuer: 'Institution of Engineers India',
        year: '2010',
        icon: 'engineering',
    },
    {
        id: '4',
        title: 'Registered Structural Engineer',
        issuer: 'Maharashtra State Council for Engineers',
        year: '2009',
        icon: 'badge',
    },
    {
        id: '5',
        title: 'RERA Registered Developer',
        issuer: 'Maharashtra RERA Authority',
        year: '2017',
        icon: 'apartment',
    },
];

export const stats: Stat[] = [
    { value: '85', label: 'Projects Completed', suffix: '+' },
    { value: '18', label: 'Years Experience', suffix: '+' },
    { value: '₹120', label: 'Crore Projects Delivered', suffix: 'Cr+' },
    { value: '100', label: 'Client Satisfaction Rate', suffix: '%' },
];

export const values = [
    {
        title: 'Structural Integrity',
        description: 'Every structure we build meets or exceeds IS code requirements. Safety is never negotiated.',
        icon: 'foundation',
    },
    {
        title: 'Transparent Budgeting',
        description: 'No hidden costs. Full financial transparency from estimate to completion.',
        icon: 'receipt_long',
    },
    {
        title: 'On-Time Delivery',
        description: '94% of our projects have been delivered on or before schedule in the past 5 years.',
        icon: 'schedule',
    },
    {
        title: 'Sustainable Practices',
        description: 'We integrate green building principles to reduce environmental impact and operational costs.',
        icon: 'eco',
    },
];
