import React, { useRef, useState } from "react";
import { Box, Sphere } from "@react-three/drei";
import "./materials/noiseMaterial";
import { useFrame, useThree } from "react-three-fiber";
import { animated, useSpring } from "@react-spring/three";

const Boxy = () => {
  const noise = useRef();
  const boxRef = useRef();
  const { viewport } = useThree();

  useFrame(({ clock, mouse }) => {
    noise.current.uniforms.time.value = clock.getElapsedTime();
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    noise.current.uniforms.mouseY.value = (y - 0.01) / (1 / 0.01);
    noise.current.uniforms.mouseX.value = (x - 0.01) / (1 / 0.01);
    // boxRef.current.rotation.x = y / 400;
    // boxRef.current.rotation.y = x / 400;

    boxRef.current.rotation.x += 0.01;
    boxRef.current.rotation.y += 0.01;
  });

  const AnimatedBox = animated(Sphere);

  const [active, setActive] = useState(false);

  const { scale } = useSpring({
    scale: active ? [2, 2, 2] : [1, 1, 1],
  });

  return (
    <AnimatedBox
      ref={boxRef}
      args={[5, 100, 100]}
      scale={scale}
      onClick={() => {
        setActive(!active);
      }}
    >
      <noiseMaterial opacity={1} transparent ref={noise} />
    </AnimatedBox>
  );
};

export default Boxy;
