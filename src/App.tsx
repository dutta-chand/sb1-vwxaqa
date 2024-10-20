import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import CirculatorySystem from './components/CirculatorySystem';

function App() {
  return (
    <div className="w-full h-screen bg-gray-100">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <Suspense fallback={null}>
          <CirculatorySystem />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <div className="absolute top-0 left-0 p-4 text-white bg-black bg-opacity-50">
        <h1 className="text-2xl font-bold">Human Circulatory System</h1>
        <p>Use mouse to rotate and zoom the 3D model</p>
      </div>
    </div>
  );
}

export default App;