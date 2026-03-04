'use client';

import dynamic from 'next/dynamic';
import React from 'react';

const SmoothScroll = dynamic(() => import('@/components/utils/SmoothScroll'), { 
    ssr: false,
    loading: () => <div style={{ minHeight: '100vh' }} />
});

export default function ClientSideWrapper({ children }: { children: React.ReactNode }) {
    return (
        <SmoothScroll>
            {children}
        </SmoothScroll>
    );
}
