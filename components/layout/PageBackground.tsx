'use client';

import { Box } from '@mui/material';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function PageBackground() {
    const pathname = usePathname();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return <Box sx={{ position: 'fixed', inset: 0, background: '#050D1C', zIndex: 0 }} />;

    const isHome = pathname === '/';

    if (isHome) return null;

    return (
        <Box
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                background: '#050D1C',
                pointerEvents: 'none',
            }}
        />
    );
}
