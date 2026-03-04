'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import Svg3DModel from './Svg3DModel';

import { useInView } from 'react-intersection-observer';

interface FooterBlueprintProps {
    inView?: boolean;
}

export default function FooterBlueprint({ inView = true }: FooterBlueprintProps) {
    const groupRef = useRef<THREE.Group>(null);

    useFrame((state) => {
        if (!groupRef.current || !inView) return;
        const time = state.clock.getElapsedTime();
        // Ultra slow, calm rotation for the footer
        groupRef.current.rotation.y = Math.sin(time * 0.05) * 0.1;
        groupRef.current.rotation.z = Math.cos(time * 0.04) * 0.05;
    });

    return (
        <Float speed={0.8} rotationIntensity={0.2} floatIntensity={0.2}>
            <group ref={groupRef} position={[0, 0, -5]} scale={0.8}>
                <Svg3DModel
                    url="/svg/architecture.svg"
                    scale={0.015}
                    depth={1.5}
                    opacity={0.08}
                />
            </group>
        </Float>
    );
}
