import { extend } from "react-three-fiber";
import { shaderMaterial } from "drei";

import vertex from "./vertex.glsl";
import fragment from "./fragment.glsl";

const NoiseMaterial = shaderMaterial(
  { time: 0, opacity: 1, mouseX: 0, mouseY: 0 },
  vertex,
  fragment
);

extend({ NoiseMaterial });

//    // gl_FragColor = vec4(vec3(rand(vUv * time)), opacity);
