import React, { Suspense } from "react";
import { Canvas } from "react-three-fiber";
import { OrbitControls, Text } from "drei";
import Effects from "./Effects";
import Scene from "./Scene";
import Logo from "./Logo.js";
import Boxy from "./Box.js";
import HeaderText from "./HeaderText";

function App() {
  return (
    <Canvas
      // shadowMap
      // colorManagement
      camera={{ position: [0, 0, 20], zoom: 1 }}
      // concurrent
    >
      {/* <color args={["#010101"]} attach="background" /> */}
      <Suspense fallback="Loading">
        <Scene />
        <Logo />
        <HeaderText />
        {/* <Effects />
        <Boxy /> */}
      </Suspense>
    </Canvas>
  );
}

export default App;
