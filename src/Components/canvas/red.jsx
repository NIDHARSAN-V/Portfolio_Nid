import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF, AmbientLight, DirectionalLight } from '@react-three/drei';

function Earth() {
    const earth = useGLTF('./red/scene.gltf');
    return <primitive object={earth.scene} scale={1.8} position-y={0} />;
}

const EarthCanvas = function() {
    return (
        <Canvas
            shadows
            frameloop="demand"
            dpr={[1, 2]}
            gl={{ preserveDrawingBuffer: true }}
            camera={{
                fov: 45,
                near: 0.1,
                far: 200,
                position: [-9, 3, 6]
            }}
        >
            <Suspense fallback={null}>
                <OrbitControls
                    autoRotate
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <ambientLight intensity={1} /> 
                <directionalLight position={[10, 10, 5]} intensity={5} />
                <Earth />
                <Preload all/>
            </Suspense>
        </Canvas>
    );
};

export default EarthCanvas;
