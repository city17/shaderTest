import React, { Suspense } from "react";
import { EffectComposer, Noise, Pixelation } from "react-postprocessing";

function Effects() {
  return (
    <Suspense fallback={null}>
      <EffectComposer>
        {/* <Noise opacity={1} /> */}
        <Pixelation granularity={10} />
      </EffectComposer>
    </Suspense>
  );
}

export default Effects;
