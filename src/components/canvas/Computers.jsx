/* eslint-disable react/no-unknown-property */
import { Suspense, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import Loader from '../Loader';

const Computers = () => {
  const computer = useGLTF('./desktop_pc/scene.gltf');
  const computerRef = useRef();
  const { viewport } = useThree(); // Get viewport dimensions

  // Adjust scale based on screen width (viewport.width)
  const scale = viewport.width < 10 ? 0.5 : 0.75; // Adjust values as needed

  return (
    <mesh castShadow receiveShadow>
      <pointLight intensity={30} position={[0, 0, -4]} />
      <pointLight intensity={30} position={[-1, 0, 5]} />
      <pointLight intensity={30} position={[10, 0,5]} />

      <hemisphereLight
        intensity={3}
        position={[0, -30, 0]}
        groundColor={'blue'}
      />

      <primitive
        ref={computerRef}
        object={computer.scene}
        scale={scale} // Apply dynamic scale here
        position={[0, -3.25, -1]}
        rotation={[-0.01, -0.2, -0.1]}
        receiveShadow
      />
    </mesh>
  );
};

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 3, 5], fov: 35 }}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<Loader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enablePan={false}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default ComputersCanvas;
