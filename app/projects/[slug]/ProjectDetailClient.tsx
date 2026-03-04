'use client';

import { useState } from 'react';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
    Box,
    Button,
    Chip,
    Container,
    Grid,
    Typography,
    Table,
    TableBody,
    TableRow,
    TableCell,
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import CloseIcon from '@mui/icons-material/Close';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CallIcon from '@mui/icons-material/Call';
import { getProjectBySlug } from '@/lib/data/projects';
import InquiryForm from '@/components/organisms/InquiryForm';

// RoomViewer is currently missing from the codebase
// const RoomViewer = dynamic(() => import('@/components/3d/room/RoomViewer'), { ssr: false });

const statusColors: Record<string, string> = {
    completed: '#16A34A', ongoing: '#D97706', planning: '#6B7280',
};
const statusLabels: Record<string, string> = {
    completed: 'Completed', ongoing: 'In Progress', planning: 'Planning',
};

export default function ProjectDetailClient({ slug }: { slug: string }) {
    const project = getProjectBySlug(slug);
    const [activeImage, setActiveImage] = useState(0);
    const [roomViewerOpen, setRoomViewerOpen] = useState(false);

    if (!project) notFound();

    return (
        <>
            {/* Room Viewer Overlay - Disabled as component is missing */}
            {/* 
            {roomViewerOpen && project.hasRoomViewer && (
                <Box sx={{ position: 'fixed', inset: 0, zIndex: 9999 }}>
                    <RoomViewer />
                    ...
                </Box>
            )}
            */}

            {/* Breadcrumb */}
            <Box sx={{ pt: { xs: 10, md: 12 }, pb: 2, background: '#F8F9FA', borderBottom: '1px solid #E5E7EB' }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Button
                            component={Link}
                            href="/projects"
                            startIcon={<ArrowBackIcon />}
                            sx={{ color: '#6B7280', fontSize: '0.82rem', p: 0, '&:hover': { color: '#1E3A8A', background: 'transparent' } }}
                        >
                            All Projects
                        </Button>
                        <Typography sx={{ color: '#D1D5DB', mx: 1 }}>›</Typography>
                        <Typography sx={{ color: '#1E3A8A', fontSize: '0.82rem', fontWeight: 600 }}>{project.title}</Typography>
                    </Box>
                </Container>
            </Box>

            {/* Hero Image + Title */}
            <Box
                sx={{
                    background: 'linear-gradient(160deg, #0A1628 0%, #1E3A8A 100%)',
                    py: { xs: 6, md: 8 },
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute', inset: 0,
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mb: 3 }}>
                        <Chip
                            label={project.category.replace('-', ' ').replace(/\b\w/g, c => c.toUpperCase())}
                            size="small"
                            sx={{ background: 'rgba(37,99,235,0.2)', color: '#60A5FA', border: '1px solid rgba(96,165,250,0.3)', fontWeight: 600 }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.8 }}>
                            <Box sx={{ width: 8, height: 8, borderRadius: '50%', background: statusColors[project.status] }} />
                            <Typography sx={{ color: 'white', fontSize: '0.82rem', fontWeight: 600 }}>
                                {statusLabels[project.status]}
                            </Typography>
                        </Box>
                    </Box>
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'white',
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: 700,
                            fontSize: { xs: '2rem', md: '3rem' },
                            mb: 1.5,
                        }}
                    >
                        {project.title}
                    </Typography>
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1rem', mb: 3 }}>
                        {project.location} · {project.year} · {project.area}
                    </Typography>
                    {/* Room Viewer Button - Disabled */}
                    {/* 
                    {project.hasRoomViewer && (
                        <Button ...>
                            Explore Room in 3D
                        </Button>
                    )}
                    */}
                </Container>
            </Box>

            {/* Main Content */}
            <Box sx={{ py: { xs: 6, md: 10 }, background: '#F8F9FA' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={5}>

                        {/* LEFT - Image Gallery + Description */}
                        <Grid size={{ xs: 12, md: 8 }}>

                            {/* Image Gallery */}
                            <Box sx={{ mb: 5 }}>
                                {/* Main Image Placeholder */}
                                <Box
                                    sx={{
                                        height: { xs: 260, md: 440 },
                                        borderRadius: '8px',
                                        background: 'linear-gradient(135deg, #0A1628 0%, #1E3A8A 100%)',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        mb: 2,
                                    }}
                                >
                                    <Box
                                        aria-hidden="true"
                                        sx={{
                                            position: 'absolute', inset: 0,
                                            backgroundImage: 'linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)',
                                            backgroundSize: '32px 32px',
                                        }}
                                    />
                                    <Box sx={{ position: 'absolute', bottom: 16, left: 16 }}>
                                        <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em' }}>
                                            Image {activeImage + 1} / {project.images.length}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center' }}>
                                        <Typography
                                            sx={{
                                                color: 'rgba(255,255,255,0.15)',
                                                fontFamily: '"Playfair Display", serif',
                                                fontWeight: 700,
                                                fontSize: { xs: '1.5rem', md: '2.5rem' },
                                            }}
                                        >
                                            {project.images[activeImage]?.alt}
                                        </Typography>
                                    </Box>
                                </Box>
                                {/* Thumbnail Strip */}
                                <Box sx={{ display: 'flex', gap: 1.5, overflowX: 'auto', pb: 1 }}>
                                    {project.images.map((img, idx) => (
                                        <Box
                                            key={idx}
                                            onClick={() => setActiveImage(idx)}
                                            sx={{
                                                minWidth: 80,
                                                height: 60,
                                                borderRadius: '6px',
                                                background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                                                cursor: 'pointer',
                                                border: activeImage === idx ? '2px solid #2563EB' : '2px solid transparent',
                                                opacity: activeImage === idx ? 1 : 0.6,
                                                transition: 'all 0.2s ease',
                                                '&:hover': { opacity: 1 },
                                                flexShrink: 0,
                                            }}
                                        />
                                    ))}
                                </Box>
                            </Box>

                            {/* Description */}
                            <Box sx={{ mb: 5 }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontWeight: 700,
                                        color: '#0A1628',
                                        fontSize: '1.4rem',
                                        mb: 2.5,
                                    }}
                                >
                                    Project Overview
                                </Typography>
                                <Typography sx={{ color: '#374151', fontSize: '0.97rem', lineHeight: 1.85 }}>
                                    {project.longDescription}
                                </Typography>
                            </Box>

                            {/* Project Timeline Strip */}
                            <Box sx={{ background: 'white', border: '1px solid #E5E7EB', borderRadius: '8px', p: 3, mb: 5 }}>
                                <Typography
                                    sx={{ fontWeight: 700, color: '#0A1628', fontSize: '1rem', mb: 2.5, fontFamily: '"Playfair Display", serif' }}
                                >
                                    Project Timeline
                                </Typography>
                                <Box sx={{ display: 'flex', gap: 0, flexWrap: 'wrap' }}>
                                    {['Planning & Approvals', 'Foundation', 'Superstructure', 'MEP & Finishing', 'Handover'].map((phase, idx) => (
                                        <Box
                                            key={idx}
                                            sx={{
                                                flex: '1 1 80px',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                alignItems: 'center',
                                                position: 'relative',
                                                '&:not(:last-child)::after': {
                                                    content: '""',
                                                    position: 'absolute',
                                                    top: 12,
                                                    left: '50%',
                                                    width: '100%',
                                                    height: 2,
                                                    background: idx <= 3 ? 'linear-gradient(90deg, #2563EB, #BFDBFE)' : '#E5E7EB',
                                                },
                                            }}
                                        >
                                            <Box
                                                sx={{
                                                    width: 24,
                                                    height: 24,
                                                    borderRadius: '50%',
                                                    background: idx <= 3 ? 'linear-gradient(135deg, #1E3A8A, #2563EB)' : '#E5E7EB',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    color: idx <= 3 ? 'white' : '#9CA3AF',
                                                    fontSize: '0.65rem',
                                                    fontWeight: 700,
                                                    zIndex: 1,
                                                    mb: 1,
                                                }}
                                            >
                                                {idx + 1}
                                            </Box>
                                            <Typography
                                                sx={{
                                                    fontSize: '0.65rem',
                                                    color: idx <= 3 ? '#1E3A8A' : '#9CA3AF',
                                                    fontWeight: 600,
                                                    textAlign: 'center',
                                                    lineHeight: 1.4,
                                                }}
                                            >
                                                {phase}
                                            </Typography>
                                        </Box>
                                    ))}
                                </Box>
                            </Box>

                            {/* Location Map */}
                            <Box sx={{ mb: 5 }}>
                                <Typography
                                    variant="h4"
                                    sx={{
                                        fontFamily: '"Playfair Display", serif',
                                        fontWeight: 700,
                                        color: '#0A1628',
                                        fontSize: '1.4rem',
                                        mb: 2.5,
                                    }}
                                >
                                    Location
                                </Typography>
                                <Box
                                    sx={{
                                        height: 320,
                                        borderRadius: '8px',
                                        overflow: 'hidden',
                                        border: '1px solid #E5E7EB',
                                        background: 'linear-gradient(135deg, #EFF6FF, #DBEAFE)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}
                                >
                                    {project.mapEmbedUrl ? (
                                        <iframe
                                            src={project.mapEmbedUrl}
                                            width="100%"
                                            height="100%"
                                            style={{ border: 0 }}
                                            allowFullScreen
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            title={`Map showing location of ${project.title} in ${project.location}`}
                                        />
                                    ) : (
                                        <Box sx={{ textAlign: 'center' }}>
                                            <Typography sx={{ color: '#6B7280', fontWeight: 600, mb: 1 }}>{project.location}</Typography>
                                            <Typography sx={{ color: '#9CA3AF', fontSize: '0.85rem' }}>Map coming soon</Typography>
                                        </Box>
                                    )}
                                </Box>
                            </Box>
                        </Grid>

                        {/* RIGHT SIDEBAR - Specs + Inquiry */}
                        <Grid size={{ xs: 12, md: 4 }}>

                            {/* Specs Table */}
                            <Box
                                sx={{
                                    background: 'white',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                    mb: 3,
                                }}
                            >
                                <Box
                                    sx={{
                                        background: 'linear-gradient(135deg, #0A1628, #1E3A8A)',
                                        px: 3,
                                        py: 2,
                                    }}
                                >
                                    <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.9rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                                        Project Specifications
                                    </Typography>
                                </Box>
                                <Table size="small">
                                    <TableBody>
                                        {project.specs.map((spec, idx) => (
                                            <TableRow
                                                key={idx}
                                                sx={{
                                                    '&:nth-of-type(odd)': { background: '#F9FAFB' },
                                                    '&:last-child td': { border: 0 },
                                                }}
                                            >
                                                <TableCell
                                                    sx={{
                                                        color: '#6B7280',
                                                        fontSize: '0.8rem',
                                                        fontWeight: 600,
                                                        borderColor: '#F3F4F6',
                                                        py: 1.5,
                                                        width: '45%',
                                                    }}
                                                >
                                                    {spec.label}
                                                </TableCell>
                                                <TableCell
                                                    sx={{
                                                        color: '#0A1628',
                                                        fontSize: '0.85rem',
                                                        fontWeight: 700,
                                                        borderColor: '#F3F4F6',
                                                        py: 1.5,
                                                    }}
                                                >
                                                    {spec.value}
                                                </TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </Box>

                            {/* Quick Contact */}
                            <Box
                                sx={{
                                    background: 'linear-gradient(160deg, #0A1628, #1E3A8A)',
                                    borderRadius: '8px',
                                    p: 3,
                                    mb: 3,
                                }}
                            >
                                <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.95rem', mb: 1.5 }}>
                                    Interested in a Similar Project?
                                </Typography>
                                <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.83rem', lineHeight: 1.7, mb: 2.5 }}>
                                    Get a free consultation and custom estimate for your project.
                                </Typography>
                                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
                                    <Button
                                        component="a"
                                        href="tel:+919876543210"
                                        variant="contained"
                                        startIcon={<CallIcon />}
                                        fullWidth
                                        sx={{
                                            background: 'linear-gradient(135deg, #1E3A8A, #2563EB)',
                                            fontWeight: 600,
                                            py: 1.2,
                                            '&:hover': { background: 'linear-gradient(135deg, #0A1628, #1E3A8A)' },
                                        }}
                                    >
                                        Call Now
                                    </Button>
                                    <Button
                                        component="a"
                                        href={`https://wa.me/919876543210?text=Hi Arjun, I'm interested in a project similar to ${project.title}.`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        variant="outlined"
                                        startIcon={<WhatsAppIcon />}
                                        fullWidth
                                        sx={{
                                            borderColor: '#25D366',
                                            color: '#25D366',
                                            borderWidth: 2,
                                            fontWeight: 600,
                                            py: 1.2,
                                            '&:hover': { background: 'rgba(37,211,102,0.08)', borderColor: '#25D366' },
                                        }}
                                    >
                                        WhatsApp Us
                                    </Button>
                                </Box>
                            </Box>

                            {/* Inquiry Form */}
                            <Box
                                sx={{
                                    background: 'white',
                                    border: '1px solid #E5E7EB',
                                    borderRadius: '8px',
                                    overflow: 'hidden',
                                }}
                            >
                                <Box
                                    sx={{
                                        background: '#F8F9FA',
                                        borderBottom: '1px solid #E5E7EB',
                                        px: 3,
                                        py: 2,
                                    }}
                                >
                                    <Typography sx={{ fontWeight: 700, color: '#0A1628', fontSize: '0.9rem' }}>
                                        Send an Inquiry
                                    </Typography>
                                </Box>
                                <Box sx={{ p: 3 }}>
                                    <InquiryForm projectId={project.id} projectTitle={project.title} />
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
        </>
    );
}
