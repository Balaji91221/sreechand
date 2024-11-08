'use client'

import React, { Suspense, useState, useEffect } from "react";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import * as THREE from "three";
import image from "./day.webp"
import image1 from "./night.webp"

const EarthMesh = ({ isDarkTheme }) => {
  const { scene } = useThree();
  const [dayMap, nightMap] = useLoader(THREE.TextureLoader, [
    image,
    image1

  ]);

  useEffect(() => {
    if (dayMap && nightMap) {
      dayMap.encoding = THREE.sRGBEncoding;
      nightMap.encoding = THREE.sRGBEncoding;
    }
    scene.traverse((child) => {
      if (child instanceof THREE.Mesh) {
        child.material.needsUpdate = true;
      }
    });
  }, [dayMap, nightMap, scene]);

  const texture = isDarkTheme ? nightMap : dayMap;
  const intensity = isDarkTheme ? 0.1 : 1;

  if (!texture) return null;

  return (
    <>
      <ambientLight intensity={intensity} />
      <pointLight position={[5, 3, 5]} intensity={isDarkTheme ? 0.1 : 1.5} />
      <mesh>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial 
          map={texture}
          emissiveMap={isDarkTheme ? texture : null}
          emissiveIntensity={isDarkTheme ? 0.5 : 0}
          emissive={new THREE.Color(0xffffff)}
        />
      </mesh>
    </>
  );
};

const LoadingFallback = () => (
  <mesh>
    <sphereGeometry args={[1, 16, 16]} />
    <meshBasicMaterial color="#444444" wireframe />
  </mesh>
);

const Earth = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  return (
    <div className={`w-full h-screen ${isDarkTheme ? 'bg-black' : 'bg-[#000B1E]'}`}>
      <Canvas camera={{ position: [0, 0, 2], fov: 45 }}>
        <Suspense fallback={<LoadingFallback />}>
          <EarthMesh isDarkTheme={isDarkTheme} />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            enableRotate={true}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Suspense>
      </Canvas>
      <div className="absolute top-4 left-4 flex items-center space-x-2">
        <label className="text-white">{isDarkTheme ? 'Night' : 'Day'}</label>
        <input
          type="checkbox"
          checked={isDarkTheme}
          onChange={() => setIsDarkTheme(!isDarkTheme)}
          className="toggle-checkbox"
        />
      </div>
    </div>
  );
};

export default Earth;
