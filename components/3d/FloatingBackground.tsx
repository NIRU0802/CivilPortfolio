'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import Svg3DModel from './Svg3DModel';
import Globe from './Globe';
import SceneLights from './SceneLights';
import { useVisualStore } from '@/lib/store/useVisualStore';

/**
 * FloatingBackground - Pure R3F Component
 * This component MUST be wrapped in a <Canvas> (e.g., via CanvasWrapper).
 * It handles the 3D elements of the global background.
 */
export default function FloatingBackground() {
    const { intensity, opacity } = useVisualStore();
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current) return;
        const t = state.clock.getElapsedTime();

        // Middle Model movement (Floating & Rotating)
        groupRef.current.position.y = Math.sin(t * 0.5) * 0.2 * intensity;
        groupRef.current.rotation.y = Math.sin(t * 0.2) * 0.1 * intensity;

        // Gentle tilt
        groupRef.current.rotation.x = Math.cos(t * 0.3) * 0.05 * intensity;
    });

    return (
        <group>
            <SceneLights />
            {/* Globe for hero section */}
            <Globe radius={8} opacity={0.15} color="#2563EB" />
            <group ref={groupRef} position={[0, 0, -5]} scale={0.8}>
                {/* THE ARCHITECTURE MODEL - Same as footer */}
                <Svg3DModel
                    url="/svg/architecture.svg"
                    scale={0.015}
                    depth={1.5}
                    opacity={0.1}
                />
            </group>
        </group>
    );
}
