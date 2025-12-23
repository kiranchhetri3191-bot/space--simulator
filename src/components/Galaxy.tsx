import { useMemo } from "react";

export default function Galaxy() {
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 3000; i++) {
      const angle = i * 0.3;
      const radius = Math.random() * 80;
      arr.push(
        Math.cos(angle) * radius,
        (Math.random() - 0.5) * 10,
        Math.sin(angle) * radius
      );
    }
    return new Float32Array(arr);
  }, []);

  return (
    <points>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={stars}
          count={stars.length / 3}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial size={0.8} color="#bbbbff" />
    </points>
  );
}

