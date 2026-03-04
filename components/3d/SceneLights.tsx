'use client';

import { Environment, Float, ContactShadows } from '@react-three/drei';

export default function SceneLights() {
    return (
        <>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#60A5FA" />
            <spotLight
                position={[-10, 10, 10]}
                angle={0.15}
                penumbra={1}
                intensity={2}
                color="#2563EB"
            />

            {/* Soft floor shadow for depth illusion */}
            <ContactShadows
                position={[0, -5, 0]}
                opacity={0.3}
                scale={20}
                blur={2.5}
                far={6}
            />
        </>
    );
}
