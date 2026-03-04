'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Box, Button, Chip, Typography } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Project } from '@/types';

const statusColors: Record<string, string> = {
    completed: '#16A34A',
    ongoing: '#D97706',
    planning: '#6B7280',
};

const statusLabels: Record<string, string> = {
    completed: 'Completed',
    ongoing: 'In Progress',
    planning: 'Planning',
};

const categoryLabels: Record<string, string> = {
    residential: 'Residential',
    commercial: 'Commercial',
    'land-development': 'Land Development',
    infrastructure: 'Infrastructure',
};

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
    return (
        <Box
            sx={{
                borderRadius: '12px',
                overflow: 'hidden',
                background: 'white',
                border: '1px solid #E5E7EB',
                boxShadow: '0 2px 12px rgba(0,0,0,0.08)',
                transition: 'all 0.3s ease',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                    boxShadow: '0 12px 40px rgba(10, 22, 40, 0.15)',
                    transform: 'translateY(-6px)',
                    borderColor: '#2563EB',
                    '& .card-arrow': { transform: 'translateX(4px)' },
                },
            }}
        >
            {/* Image Area */}
            <Box
                sx={{
                    position: 'relative',
                    height: 220,
                    background: '#E5E7EB',
                    overflow: 'hidden',
                    flexShrink: 0,
                }}
            >
                {project.coverImage?.src ? (
                    <Image
                        src={project.coverImage.src}
                        alt={project.coverImage.alt || project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        style={{ objectFit: 'cover' }}
                    />
                ) : null}

                {/* Blueprint grid pattern overlay */}
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        backgroundImage:
                            'linear-gradient(rgba(37, 99, 235, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37, 99, 235, 0.15) 1px, transparent 1px)',
                        backgroundSize: '32px 32px',
                    }}
                />

                {/* Category pill */}
                <Box sx={{ position: 'absolute', top: 12, left: 12, zIndex: 2 }}>
                    <Chip
                        label={categoryLabels[project.category] || project.category}
                        size="small"
                        sx={{
                            background: 'rgba(10, 22, 40, 0.8)',
                            color: '#60A5FA',
                            fontWeight: 600,
                            fontSize: '0.7rem',
                            letterSpacing: '0.06em',
                            backdropFilter: 'blur(8px)',
                            border: '1px solid rgba(96, 165, 250, 0.3)',
                        }}
                    />
                </Box>

                {/* Status badge */}
                <Box sx={{ position: 'absolute', top: 12, right: 12, zIndex: 2 }}>
                    <Box
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: 0.6,
                            background: 'rgba(10, 22, 40, 0.85)',
                            backdropFilter: 'blur(8px)',
                            borderRadius: '20px',
                            px: 1.2,
                            py: 0.4,
                        }}
                    >
                        <Box
                            sx={{
                                width: 6,
                                height: 6,
                                borderRadius: '50%',
                                background: statusColors[project.status] || '#6B7280',
                                boxShadow: `0 0 0 2px ${statusColors[project.status] || '#6B7280'}40`,
                            }}
                        />
                        <Typography sx={{ color: 'white', fontSize: '0.68rem', fontWeight: 600, letterSpacing: '0.05em' }}>
                            {statusLabels[project.status] || project.status}
                        </Typography>
                    </Box>
                </Box>

                {/* Project year */}
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 12,
                        right: 12,
                        fontFamily: '"Playfair Display", serif',
                        fontSize: '3rem',
                        fontWeight: 700,
                        color: 'rgba(255,255,255,0.08)',
                        lineHeight: 1,
                        zIndex: 1,
                    }}
                >
                    {project.year}
                </Box>

                {/* Hover overlay */}
                <Box
                    className="card-image-overlay"
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        background: 'linear-gradient(180deg, transparent 40%, rgba(30, 58, 138, 0.5) 100%)',
                        opacity: 0.6,
                        transition: 'opacity 0.3s ease',
                        zIndex: 1,
                    }}
                />
            </Box>

            {/* Content */}
            <Box sx={{ p: 3, display: 'flex', flexDirection: 'column', flexGrow: 1, background: 'white' }}>
                <Box sx={{ mb: 1 }}>
                    <Typography
                        variant="overline"
                        sx={{ color: '#4B5563', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.12em' }}
                    >
                        {project.location}
                    </Typography>
                </Box>

                <Typography
                    variant="h6"
                    sx={{
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 700,
                        color: '#0A1628',
                        fontSize: '1.15rem',
                        mb: 1,
                        lineHeight: 1.3,
                    }}
                >
                    {project.title}
                </Typography>

                <Typography
                    sx={{
                        color: '#4B5563',
                        fontSize: '0.9rem',
                        lineHeight: 1.6,
                        mb: 2,
                        flexGrow: 1,
                    }}
                >
                    {project.description}
                </Typography>

                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: 'auto', pt: 2, borderTop: '1px solid #F3F4F6' }}>
                    <Typography sx={{ color: '#1E3A8A', fontSize: '0.85rem', fontWeight: 700 }}>
                        {project.area}
                    </Typography>

                    <Button
                        component={Link}
                        href={`/projects/${project.slug}`}
                        endIcon={
                            <ArrowForwardIcon
                                className="card-arrow"
                                sx={{ fontSize: '0.9rem !important', transition: 'transform 0.2s ease' }}
                            />
                        }
                        sx={{
                            color: '#1E3A8A',
                            fontWeight: 600,
                            fontSize: '0.82rem',
                            p: 0,
                            minWidth: 'auto',
                            '&:hover': { background: 'transparent', color: '#2563EB' },
                        }}
                    >
                        View Project
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}
