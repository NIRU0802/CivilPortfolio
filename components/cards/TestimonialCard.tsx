import React from 'react';
import { Box, Typography } from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import StarIcon from '@mui/icons-material/Star';
import { Testimonial } from '@/types';

interface TestimonialCardProps {
    testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
    return (
        <Box
            sx={{
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '12px',
                p: { xs: 3, md: 4 },
                position: 'relative',
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease',
                '&:hover': {
                    boxShadow: '0 12px 40px rgba(59, 130, 246, 0.15)',
                    borderColor: 'rgba(59, 130, 246, 0.3)',
                    transform: 'translateY(-4px)',
                },
            }}
        >
            {/* Quote Icon */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 20,
                    right: 20,
                    color: 'rgba(59, 130, 246, 0.2)',
                }}
            >
                <FormatQuoteIcon sx={{ fontSize: '3rem' }} />
            </Box>

            {/* Stars */}
            <Box sx={{ display: 'flex', gap: 0.3, mb: 2.5 }}>
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <StarIcon key={i} sx={{ fontSize: '1rem', color: '#F59E0B' }} />
                ))}
            </Box>

            {/* Quote Text */}
            <Typography
                sx={{
                    color: '#374151',
                    fontSize: '0.92rem',
                    lineHeight: 1.8,
                    flexGrow: 1,
                    fontStyle: 'italic',
                    mb: 3,
                }}
            >
                &quot;{testimonial.text}&quot;
            </Typography>

            {/* Divider */}
            <Box
                sx={{
                    width: 40,
                    height: 2,
                    background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
                    borderRadius: 1,
                    mb: 2.5,
                }}
            />

                {/* Author */}
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                    sx={{
                        width: 42,
                        height: 42,
                        borderRadius: '50%',
                        background: 'linear-gradient(135deg, #3B82F6, #60A5FA)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontWeight: 700,
                        fontSize: '1rem',
                        flexShrink: 0,
                    }}
                >
                    {testimonial.author.charAt(0)}
                </Box>
                <Box>
                    <Typography sx={{ fontWeight: 700, color: '#0A1628', fontSize: '0.9rem' }}>
                        {testimonial.author}
                    </Typography>
                    <Typography sx={{ color: '#6B7280', fontSize: '0.78rem' }}>
                        {testimonial.role} · {testimonial.company}
                    </Typography>
                    {testimonial.project && (
                        <Typography sx={{ color: '#2563EB', fontSize: '0.72rem', fontWeight: 600, mt: 0.3 }}>
                            Project: {testimonial.project}
                        </Typography>
                    )}
                </Box>
            </Box>
        </Box>
    );
}
