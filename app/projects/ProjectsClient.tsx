'use client';

import { useState } from 'react';
import { Box, Button, Container, Grid, Typography } from '@mui/material';
import SectionHeading from '@/components/ui/SectionHeading';
import ProjectCard from '@/components/cards/ProjectCard';
import { projects } from '@/lib/data/projects';

const categoryFilters = [
    { label: 'All Projects', value: 'all' },
    { label: 'Residential', value: 'residential' },
    { label: 'Commercial', value: 'commercial' },
    { label: 'Land Development', value: 'land-development' },
];

const statusFilters = [
    { label: 'All Status', value: 'all' },
    { label: 'Completed', value: 'completed' },
    { label: 'Ongoing', value: 'ongoing' },
    { label: 'Planning', value: 'planning' },
];

export default function ProjectsClient() {
    const [activeCategory, setActiveCategory] = useState('all');
    const [activeStatus, setActiveStatus] = useState('all');

    const filtered = projects.filter((p) => {
        const catMatch = activeCategory === 'all' || p.category === activeCategory;
        const statusMatch = activeStatus === 'all' || p.status === activeStatus;
        return catMatch && statusMatch;
    });

    return (
        <Box sx={{ pt: { xs: 10, md: 12 } }}>
            {/* Page Header */}
            <Box
                sx={{
                    background: 'transparent',
                    py: { xs: 7, md: 10 },
                    position: 'relative',
                    overflow: 'hidden',
                }}
            >
                <Box
                    aria-hidden="true"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
                <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 1 }}>
                    <Typography variant="overline" sx={{ color: '#60A5FA', letterSpacing: '0.14em', mb: 2, display: 'block' }}>
                        Our Portfolio
                    </Typography>
                    <Typography
                        variant="h1"
                        sx={{
                            color: 'white',
                            fontFamily: '"Playfair Display", serif',
                            fontWeight: 700,
                            fontSize: { xs: '2.2rem', md: '3.2rem' },
                            mb: 2,
                        }}
                    >
                        Projects
                    </Typography>
                    <Box
                        sx={{ width: 64, height: 3, background: 'linear-gradient(90deg, #1E3A8A, #2563EB)', borderRadius: 2, mb: 3 }}
                    />
                    <Typography sx={{ color: 'rgba(255,255,255,0.6)', fontSize: '1.05rem', maxWidth: 520 }}>
                        85+ completed and ongoing projects. Explore our portfolio across residential, commercial, and land development sectors.
                    </Typography>
                </Container>
            </Box>

            {/* Filters */}
            <Box sx={{ background: 'white', borderBottom: '1px solid #E5E7EB', py: 2.5, position: 'sticky', top: 64, zIndex: 10 }}>
                <Container maxWidth="xl">
                    <Box sx={{ display: 'flex', gap: 1, flexWrap: 'wrap', alignItems: 'center' }}>
                        <Typography sx={{ color: '#6B7280', fontSize: '0.8rem', fontWeight: 600, mr: 1, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                            Category:
                        </Typography>
                        {categoryFilters.map((f) => (
                            <Button
                                key={f.value}
                                onClick={() => setActiveCategory(f.value)}
                                variant={activeCategory === f.value ? 'contained' : 'outlined'}
                                size="small"
                                sx={{
                                    fontSize: '0.78rem',
                                    py: 0.5,
                                    px: 2,
                                    fontWeight: 600,
                                    ...(activeCategory === f.value
                                        ? { background: 'linear-gradient(135deg, #1E3A8A, #2563EB)', borderColor: 'transparent' }
                                        : { borderColor: '#E5E7EB', color: '#6B7280', '&:hover': { borderColor: '#1E3A8A', color: '#1E3A8A' } }),
                                }}
                            >
                                {f.label}
                            </Button>
                        ))}
                        <Box sx={{ width: 1, height: 20, background: '#E5E7EB', mx: 1, display: { xs: 'none', md: 'block' } }} />
                        <Typography sx={{ color: '#6B7280', fontSize: '0.8rem', fontWeight: 600, mr: 1, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                            Status:
                        </Typography>
                        {statusFilters.map((f) => (
                            <Button
                                key={f.value}
                                onClick={() => setActiveStatus(f.value)}
                                variant={activeStatus === f.value ? 'contained' : 'outlined'}
                                size="small"
                                sx={{
                                    fontSize: '0.78rem',
                                    py: 0.5,
                                    px: 2,
                                    fontWeight: 600,
                                    ...(activeStatus === f.value
                                        ? { background: 'linear-gradient(135deg, #1E3A8A, #2563EB)', borderColor: 'transparent' }
                                        : { borderColor: '#E5E7EB', color: '#6B7280', '&:hover': { borderColor: '#1E3A8A', color: '#1E3A8A' } }),
                                }}
                            >
                                {f.label}
                            </Button>
                        ))}
                    </Box>
                </Container>
            </Box>

            {/* Projects Grid */}
            <Box sx={{ py: { xs: 6, md: 9 }, background: '#F8F9FA' }}>
                <Container maxWidth="xl">
                    {filtered.length > 0 ? (
                        <>
                            <Typography sx={{ color: '#6B7280', fontSize: '0.85rem', mb: 4 }}>
                                Showing <strong>{filtered.length}</strong> project{filtered.length !== 1 ? 's' : ''}
                            </Typography>
                            <Grid container spacing={3}>
                                {filtered.map((project) => (
                                    <Grid key={project.id} size={{ xs: 12, sm: 6, md: 4 }}>
                                        <ProjectCard project={project} />
                                    </Grid>
                                ))}
                            </Grid>
                        </>
                    ) : (
                        <Box sx={{ textAlign: 'center', py: 12 }}>
                            <Typography sx={{ color: '#6B7280', fontSize: '1.1rem', mb: 2 }}>
                                No projects found for the selected filters.
                            </Typography>
                            <Button
                                onClick={() => { setActiveCategory('all'); setActiveStatus('all'); }}
                                variant="outlined"
                                sx={{ borderColor: '#1E3A8A', color: '#1E3A8A', borderWidth: 2 }}
                            >
                                Clear Filters
                            </Button>
                        </Box>
                    )}
                </Container>
            </Box>
        </Box>
    );
}
