'use client';

import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { Preload, AdaptiveDpr, AdaptiveEvents } from '@react-three/drei';

interface CanvasWrapperProps {
    children: React.ReactNode;
}

export default function CanvasWrapper({ children }: CanvasWrapperProps) {
    return (
        <Canvas
            shadows={true}
            camera={{ position: [0, 0, 15], fov: 45 }}
            gl={{
                antialias: true,
                alpha: false,
                powerPreference: "high-performance",
                clearColor: '#050D1C',
            }}
            dpr={[1, 2]}
            style={{
                background: '#050D1C',
                pointerEvents: 'none',
            }}
        >
            <color attach="background" args={['#050D1C']} />
            <Suspense fallback={null}>
                {children}
                <Preload all />
            </Suspense>
            <AdaptiveDpr pixelated />
            <AdaptiveEvents />
        </Canvas>
    );
}
