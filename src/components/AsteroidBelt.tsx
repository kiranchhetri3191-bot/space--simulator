import { useMemo } from "react";

export default function AsteroidBelt() {
  const rocks = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 1200; i++) {
      const angle = Math.random() * Math.PI * 2;
      const r = 16 + Math.random() * 2;
      arr.push(Math.cos(angle) * r, 0, Math.sin(angle) * r);
    }
    return new Float32Array(arr);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={rocks}
          count={rocks.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.4} color="gray" />
    </points>
  );
}

