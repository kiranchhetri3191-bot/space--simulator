export default function BlackHole() {
  return (
    <group position={[25, 0, 0]}>
      {/* Core */}
      <mesh>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial color="black" />
      </mesh>

      {/* Accretion Disk */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[3, 0.3, 16, 100]} />
        <meshStandardMaterial emissive="purple" emissiveIntensity={1.5} />
      </mesh>
    </group>
  );
}

