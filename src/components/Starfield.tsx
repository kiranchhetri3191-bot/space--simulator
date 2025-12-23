import { useMemo } from "react";

export default function Starfield() {
  const stars = useMemo(() => {
    const arr = [];
    for (let i = 0; i < 6000; i++) {
      arr.push(
        (Math.random() - 0.5) * 500,
        (Math.random() - 0.5) * 500,
        (Math.random() - 0.5) * 500
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
      <pointsMaterial size={0.6} color="white" />
    </points>
  );
}

