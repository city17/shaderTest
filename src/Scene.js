import React, {
  Suspense,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Plane, useTexture } from "@react-three/drei";
import { useFrame, useResource, useThree } from "react-three-fiber";

// import "./materials/deformMaterial";
import "./materials/noiseMaterial";

import { useAspect } from "@react-three/drei";

function Slider() {
  const noise = useRef();
  const background = useRef();

  const scale = useAspect("cover", window.innerWidth, window.innerHeight);

  const { viewport } = useThree();

  useFrame(({ clock, mouse }) => {
    noise.current.uniforms.time.value = clock.getElapsedTime();
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    noise.current.uniforms.mouseY.value = (y - 0.01) / (1 / 0.01);
    noise.current.uniforms.mouseX.value = (x - 0.01) / (1 / 0.01);
    background.current.rotation.x = y / 400;
    background.current.rotation.y = x / 400;
  });

  const [thing, setThing] = useState(1);

  return (
    <>
      <Plane
        ref={background}
        args={[2, 2]}
        scale={scale}
        position={[0, 0, -10]}
        onClick={() => {
          setThing(thing - 0.1);
        }}
      >
        <noiseMaterial opacity={thing} transparent ref={noise} />
      </Plane>
    </>
  );
}

export default Slider;
