import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function App() {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 50 }}>
      <OrbitControls enableZoom={false} />

      <ambientLight intensity={0.5} />

      <directionalLight position={[2, 2, 5]} intensity={1} />

      <mesh>
        <planeGeometry args={[5, 3]} />
        <meshStandardMaterial color="burlywood" />
      </mesh>
    </Canvas>
  );
}

export {App};
