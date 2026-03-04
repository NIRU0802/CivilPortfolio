'use client';

import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Box } from '@mui/material';
import CanvasWrapper from '../CanvasWrapper';
import FloatingBackground from '../FloatingBackground';
import { useVisualStore } from '@/lib/store/useVisualStore';

export default function SceneWrapper() {
    const pathname = usePathname();
    const { setIntensity, setOpacity } = useVisualStore();

    useEffect(() => {
        // Dynamic visual adjustments based on route
        if (pathname === '/') {
            setIntensity(1.8);
            setOpacity(0.25);
        } else if (pathname.startsWith('/about')) {
            setIntensity(0.6);
            setOpacity(0.06);
        } else if (pathname.startsWith('/services')) {
            setIntensity(0.4);
            setOpacity(0.05);
        } else if (pathname.startsWith('/projects')) {
            setIntensity(0.3);
            setOpacity(0.04);
        } else {
            setIntensity(0.5);
            setOpacity(0.08);
        }
    }, [pathname, setIntensity, setOpacity]);

    return (
        <Box
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                pointerEvents: 'none',
                background: '#050D1C',
            }}
        >
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: '#050D1C',
                    zIndex: -1,
                }}
            />
            <CanvasWrapper>
                <FloatingBackground />
            </CanvasWrapper>

            {/* Strong cinematic overlay for text readability */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    background: 'radial-gradient(circle at 50% 30%, transparent 0%, rgba(5, 13, 28, 0.15) 40%, rgba(5, 13, 28, 0.5) 100%)',
                    zIndex: 1,
                    pointerEvents: 'none',
                }}
            />
        </Box>
    );
}
