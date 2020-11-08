import React, { useRef } from "react";
import { Text, useMatcapTexture } from "@react-three/drei";
import { useFrame, useThree } from "react-three-fiber";

const HeaderText = () => {
  const [matcapTexture] = useMatcapTexture("FBB43F_FBE993_FB552E_FCDD65");
  const textRef = useRef();

  const { viewport } = useThree();

  useFrame(({ mouse }) => {
    const x = (mouse.x * viewport.width) / 2;
    const y = (mouse.y * viewport.height) / 2;

    textRef.current.rotation.x = y / 400;
    textRef.current.rotation.y = x / 400;
  });

  return (
    <Text
      ref={textRef}
      name="text-olga"
      depthTest={false}
      position={[0, 0, -8]}
      fontSize={8}
      selectable
      font={"https://fonts.gstatic.com/stats/Roboto+Mono/normal/400"}
    >
      METAALGEIT
      <meshMatcapMaterial
        attach="material"
        matcap={matcapTexture}
        transparent
        opacity={1}
        // color="#14CEFF"
      />
    </Text>
  );
};

export default HeaderText;
