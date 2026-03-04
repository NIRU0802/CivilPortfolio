'use client';

import { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';


const galleryCategories = [
    { label: 'All', value: 'all' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Land Development', value: 'land' },
    { label: 'Under Construction', value: 'wip' },
];

const galleryItems = [
    { id: 1, category: 'residential', title: 'Greenwood Villa – Facade', aspect: 'landscape' },
    { id: 2, category: 'residential', title: 'Living Room – Premium Finish', aspect: 'portrait' },
    { id: 3, category: 'commercial', title: 'TechPark Office – Lobby', aspect: 'landscape' },
    { id: 4, category: 'land', title: 'Serene Valley – Layout Aerial', aspect: 'landscape' },
    { id: 5, category: 'residential', title: 'Master Bedroom – Luxury Villa', aspect: 'portrait' },
    { id: 6, category: 'wip', title: 'Riverside Apartments – Foundation', aspect: 'landscape' },
    { id: 7, category: 'commercial', title: 'Sunrise Plaza – Retail Facade', aspect: 'portrait' },
    { id: 8, category: 'land', title: 'Serene Valley – Road Works', aspect: 'landscape' },
    { id: 9, category: 'residential', title: 'Eco Villa – Entrance', aspect: 'landscape' },
    { id: 10, category: 'wip', title: 'Riverside Apartments – Formwork', aspect: 'portrait' },
    { id: 11, category: 'commercial', title: 'TechPark – Open Office Floor', aspect: 'landscape' },
    { id: 12, category: 'residential', title: 'Villa Rooftop Garden', aspect: 'portrait' },
];

const bgGradients = [
    'transparent',
];

export default function GalleryPage() {
    const [active, setActive] = useState('all');
    const [lightboxIdx, setLightboxIdx] = useState<number | null>(null);

    const filtered = galleryItems.filter((i) => active === 'all' || i.category === active);

    return (
        <Box sx={{ pt: { xs: 10, md: 12 } }}>
            {/* Header */}
            <Box
                sx={{
                    background: 'transparent',
                    py: { xs: 7, md: 10 },
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box aria-hidden="true" sx={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)', backgroundSize: '50px 50px' }} />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="overline" sx={{ color: '#60A5FA', letterSpacing: '0.14em', mb: 2, display: 'block' }}>
                        Visual Portfolio
                    </Typography>
                    <Typography variant="h1" sx={{ color: 'white', fontFamily: '"Playfair Display", serif', fontWeight: 700, fontSize: { xs: '2.2rem', md: '3.2rem' }, mb: 2 }}>
                        Project Gallery
                    </Typography>
                    <Box sx={{ width: 64, height: 3, background: 'linear-gradient(90deg, #1E3A8A, #2563EB)', borderRadius: 2, mb: 3 }} />
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: 520 }}>
                        A curated look at our completed and ongoing work across residential, commercial, and land development projects.
                    </Typography>
                </Container>
            </Box>

            {/* Category Filter */}
            <Box sx={{ background: 'white', borderBottom: '1px solid #E5E7EB', py: 2.5, position: 'sticky', top: 64, zIndex: 10 }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                        {galleryCategories.map((cat) => (
                            <Button
                                key={cat.value}
                                onClick={() => setActive(cat.value)}
                                variant={active === cat.value ? 'contained' : 'outlined'}
                                size="small"
                                sx={{
                                    fontSize: '0.78rem',
                                    py: 0.5,
                                    px: 2,
                                    fontWeight: 600,
                                    ...(active === cat.value
                                        ? { background: 'linear-gradient(135deg, #1E3A8A, #2563EB)', borderColor: 'transparent' }
                                        : { borderColor: '#E5E7EB', color: '#6B7280', '&:hover': { borderColor: '#1E3A8A', color: '#1E3A8A' } }),
                                }}
                            >
                                {cat.label}
                            </Button>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Gallery Grid */}
            <Box sx={{ py: { xs: 6, md: 9 }, background: '#F8F9FA' }}>
                <Container maxWidth="xl">
                    <Grid container spacing={2.5}>
                        {filtered.map((item, idx) => (
                            <Grid
                                key={item.id}
                                size={{
                                    xs: 12,
                                    sm: item.aspect === 'landscape' ? 8 : 4,
                                    md: idx % 5 === 0 ? 8 : 4,
                                }}
                            >
                                <Box
                                    onClick={() => setLightboxIdx(idx)}
                                    sx={{
                                        height: { xs: 200, md: item.aspect === 'landscape' ? 280 : 340 },
                                        borderRadius: '8px',
                                        background: bgGradients[item.id % bgGradients.length],
                                        cursor: 'pointer',
                                        position: 'relative',
                                        overflow: 'hidden',
                                        transition: 'all 0.3s ease',
                                        '&:hover': {
                                            transform: 'scale(1.02)',
                                            boxShadow: '0 12px 40px rgba(0,0,0,0.2)',
                                            '& .gallery-overlay': { opacity: 1 },
                                        },
                                    }}
                                >
                                    {/* Blueprint grid */}
                                    <Box
                                        aria-hidden="true"
                                        sx={{
                                            position: 'absolute', inset: 0,
                                            backgroundImage: 'linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)',
                                            backgroundSize: '28px 28px',
                                        }}
                                    />
                                    {/* Overlay */}
                                    <Box
                                        className="gallery-overlay"
                                        sx={{
                                            position: 'absolute', inset: 0,
                                            background: 'rgba(10,22,40,0.5)',
                                            opacity: 0,
                                            transition: 'opacity 0.3s ease',
                                            display: 'flex',
                                            alignItems: 'flex-end',
                                            p: 2.5,
                                        }}
                                    >
                                        <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '0.9rem' }}>
                                            {item.title}
                                        </Typography>
                                    </Box>
                                    {/* Category badge */}
                                    <Box
                                        sx={{
                                            position: 'absolute',
                                            top: 12,
                                            left: 12,
                                            background: 'rgba(10,22,40,0.7)',
                                            backdropFilter: 'blur(8px)',
                                            borderRadius: '4px',
                                            px: 1.2,
                                            py: 0.4,
                                        }}
                                    >
                                        <Typography sx={{ color: '#60A5FA', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                                            {galleryCategories.find((c) => c.value === item.category)?.label}
                                        </Typography>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box>

            {/* Lightbox */}
            {
                lightboxIdx !== null && (
                    <Box
                        onClick={() => setLightboxIdx(null)}
                        sx={{
                            position: 'fixed',
                            inset: 0,
                            background: 'rgba(5, 13, 28, 0.95)',
                            zIndex: 9999,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'zoom-out',
                        }}
                    >
                        <Box
                            onClick={(e) => e.stopPropagation()}
                            sx={{
                                maxWidth: '90vw',
                                maxHeight: '90vh',
                                width: { xs: '95vw', md: '70vw' },
                                height: { xs: '60vw', md: '55vh' },
                                borderRadius: '12px',
                                background: bgGradients[filtered[lightboxIdx]?.id % bgGradients.length],
                                position: 'relative',
                                overflow: 'hidden',
                                cursor: 'default',
                            }}
                        >
                            <Box
                                aria-hidden="true"
                                sx={{
                                    position: 'absolute', inset: 0,
                                    backgroundImage: 'linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px)',
                                    backgroundSize: '40px 40px',
                                }}
                            />
                            <Box sx={{ position: 'absolute', bottom: 24, left: 24 }}>
                                <Typography sx={{ color: 'white', fontWeight: 700, fontSize: '1.1rem' }}>
                                    {filtered[lightboxIdx]?.title}
                                </Typography>
                            </Box>
                        </Box>
                        {/* Navigation Arrows */}
                        {lightboxIdx > 0 && (
                            <Button
                                onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i ?? 0) - 1); }}
                                sx={{ position: 'fixed', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'white', background: 'rgba(10,22,40,0.6)', minWidth: 44, width: 44, height: 44, borderRadius: '50%', fontSize: '1.2rem' }}
                            >
                                ‹
                            </Button>
                        )}
                        {lightboxIdx < filtered.length - 1 && (
                            <Button
                                onClick={(e) => { e.stopPropagation(); setLightboxIdx((i) => (i ?? 0) + 1); }}
                                sx={{ position: 'fixed', right: 16, top: '50%', transform: 'translateY(-50%)', color: 'white', background: 'rgba(10,22,40,0.6)', minWidth: 44, width: 44, height: 44, borderRadius: '50%', fontSize: '1.2rem' }}
                            >
                                ›
                            </Button>
                        )}
                        <Button
                            onClick={() => setLightboxIdx(null)}
                            sx={{ position: 'fixed', top: 16, right: 16, color: 'white', background: 'rgba(10,22,40,0.6)', minWidth: 44, width: 44, height: 44, borderRadius: '50%' }}
                            aria-label="Close lightbox"
                        >
                            ✕
                        </Button>
                        <Typography sx={{ position: 'fixed', bottom: 16, color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', letterSpacing: '0.08em' }}>
                            {lightboxIdx + 1} / {filtered.length}
                        </Typography>
                    </Box>
                )
            }
        </Box >
    );
}
