'use client';

import * as THREE from 'three';
import React, { useMemo } from 'react';
import { useLoader } from '@react-three/fiber';
import { SVGLoader } from 'three/examples/jsm/loaders/SVGLoader.js';

interface Svg3DModelProps {
    url: string;
    depth?: number;
    scale?: number;
    opacity?: number;
}

export default function Svg3DModel({
    url,
    depth = 0.5,
    scale = 0.01,
    opacity = 0.8
}: Svg3DModelProps) {
    const svgData = useLoader(SVGLoader, url);

    const { shapes, offset } = useMemo(() => {
        const result: any[] = [];
        const box = new THREE.Box3();

        svgData.paths.forEach((path, index) => {
            const pathShapes = path.toShapes(true);
            pathShapes.forEach((shape) => {
                const z = (index / svgData.paths.length) * depth;
                result.push({ shape, color: path.color, index, z });

                // Compute bounding box for centering
                const geometry = new THREE.ShapeGeometry(shape);
                geometry.computeBoundingBox();
                if (geometry.boundingBox) {
                    box.expandByPoint(new THREE.Vector3(geometry.boundingBox.min.x, geometry.boundingBox.min.y, z));
                    box.expandByPoint(new THREE.Vector3(geometry.boundingBox.max.x, geometry.boundingBox.max.y, z));
                }
            });
        });

        const center = new THREE.Vector3();
        box.getCenter(center);

        return { shapes: result, offset: center.multiplyScalar(-1) };
    }, [svgData, depth]);

    return (
        <group scale={scale} rotation={[0, 0, Math.PI]}>
            <group position={[offset.x, offset.y, 0]}>
                {shapes.map((item, i) => (
                    <mesh key={i} position={[0, 0, item.z]}>
                        <shapeGeometry args={[item.shape]} />
                        <meshStandardMaterial
                            color="#2563EB"
                            side={THREE.DoubleSide}
                            transparent
                            opacity={opacity}
                            depthWrite={false}
                        />
                    </mesh>
                ))}

                {/* Decorative wireframe duplicate for "technical blueprint" look */}
                <group position={[0, 0, depth * 1.2]}>
                    {shapes.map((item, i) => (
                        <mesh key={`wf-${i}`} position={[0, 0, item.z]}>
                            <shapeGeometry args={[item.shape]} />
                            <meshBasicMaterial
                                color="#2563EB"
                                wireframe
                                transparent
                                opacity={0.1}
                            />
                        </mesh>
                    ))}
                </group>
            </group>
        </group>
    );
}
