import React from 'react';
import { Box, Typography } from '@mui/material';

interface SectionHeadingProps {
    overline?: string;
    title: string;
    subtitle?: string;
    align?: 'left' | 'center' | 'right';
    light?: boolean;
}

export default function SectionHeading({
    overline,
    title,
    subtitle,
    align = 'left',
    light = false,
}: SectionHeadingProps) {
    return (
        <Box
            sx={{
                textAlign: align,
                mb: { xs: 5, md: 7 },
                ...(align === 'center' && { mx: 'auto' }),
            }}
        >
            {overline && (
                <Typography
                    variant="overline"
                    sx={{
                        color: light ? '#3B82F6' : '#2563EB',
                        letterSpacing: '0.2em',
                        fontWeight: 700,
                        fontSize: '0.8rem',
                        mb: 2,
                        display: 'block',
                    }}
                >
                    {overline}
                </Typography>
            )}

            <Box
                sx={{
                    display: 'inline-block',
                    position: 'relative',
                }}
            >
                <Typography
                    variant="h2"
                    component="h2"
                    sx={{
                        color: light ? '#FFFFFF' : '#0F172A',
                        fontFamily: '"Playfair Display", serif',
                        fontWeight: 700,
                        fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
                        lineHeight: 1.15,
                        letterSpacing: '-0.02em',
                    }}
                >
                    {title}
                </Typography>

                <Box
                    sx={{
                        display: 'block',
                        width: align === 'center' ? '100%' : 80,
                        height: 4,
                        background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
                        borderRadius: 2,
                        mt: 2,
                        mx: align === 'center' ? 'auto' : 0,
                    }}
                />
            </Box>

            {subtitle && (
                <Typography
                    sx={{
                        color: light ? 'rgba(255,255,255,0.75)' : '#64748B',
                        fontSize: { xs: '1rem', md: '1.125rem' },
                        lineHeight: 1.7,
                        maxWidth: 640,
                        mt: 3,
                        mx: align === 'center' ? 'auto' : 0,
                    }}
                >
                    {subtitle}
                </Typography>
            )}
        </Box>
    );
}
