'use client';

import dynamic from 'next/dynamic';
import { Box } from '@mui/material';

const SceneWrapper = dynamic(() => import('@/components/3d/core/SceneWrapper'), { 
    ssr: false,
    loading: () => (
        <Box
            sx={{
                position: 'fixed',
                inset: 0,
                zIndex: 0,
                background: '#050D1C',
            }}
        />
    )
});

export default SceneWrapper;
