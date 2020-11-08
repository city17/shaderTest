uniform float time;

varying vec2 vUv;

void main()	{
    vUv = uv;
    
    float updateTime = time / 1000.0;
    
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.);

    gl_Position = projectionMatrix * mvPosition;
}
