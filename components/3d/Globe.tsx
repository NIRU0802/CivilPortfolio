'use client';

import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { Sphere } from '@react-three/drei';

interface GlobeProps {
    radius?: number;
    opacity?: number;
    color?: string;
}

export default function Globe({
    radius = 5,
    opacity = 0.1,
    color = "#3B82F6"
}: GlobeProps) {
    const meshRef = useRef<THREE.Mesh>(null);
    const wireframeRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.y += 0.001;
        }
        if (wireframeRef.current) {
            wireframeRef.current.rotation.y += 0.002;
            wireframeRef.current.rotation.z += 0.001;
        }
    });

    return (
        <group>
            {/* Main Wireframe Sphere */}
            <Sphere ref={meshRef} args={[radius, 32, 32]}>
                <meshBasicMaterial
                    color={color}
                    wireframe
                    transparent
                    opacity={opacity}
                    depthWrite={false}
                />
            </Sphere>

            {/* Inner Glowing Core or Secondary Wireframe */}
            <Sphere ref={wireframeRef} args={[radius * 1.02, 16, 16]}>
                <meshBasicMaterial
                    color={color}
                    wireframe
                    transparent
                    opacity={opacity * 0.5}
                    depthWrite={false}
                />
            </Sphere>

            {/* Very faint point cloud or similar for detail */}
            <points>
                <sphereGeometry args={[radius, 64, 64]} />
                <pointsMaterial
                    color={color}
                    size={0.02}
                    sizeAttenuation={true}
                    transparent
                    opacity={opacity * 2}
                />
            </points>
        </group>
    );
}
