import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';

const CirculatorySystem: React.FC = () => {
  const heartRef = useRef<Mesh>(null);
  const arteriesRef = useRef<Mesh>(null);
  const veinsRef = useRef<Mesh>(null);

  useFrame(() => {
    if (heartRef.current) {
      heartRef.current.rotation.y += 0.01;
    }
  });

  return (
    <group>
      {/* Heart */}
      <mesh ref={heartRef} position={[0, 0, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Arteries */}
      <mesh ref={arteriesRef}>
        <tubeGeometry args={[
          [
            [0, 0, 0],
            [1, 1, 1],
            [2, 0, 0],
            [3, -1, 1]
          ],
          64,
          0.05,
          8,
          false
        ]} />
        <meshStandardMaterial color="red" />
      </mesh>

      {/* Veins */}
      <mesh ref={veinsRef}>
        <tubeGeometry args={[
          [
            [0, 0, 0],
            [-1, -1, -1],
            [-2, 0, 0],
            [-3, 1, -1]
          ],
          64,
          0.05,
          8,
          false
        ]} />
        <meshStandardMaterial color="blue" />
      </mesh>
    </group>
  );
};

export default CirculatorySystem;