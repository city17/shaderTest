uniform float time;
uniform float opacity;
uniform float mouseX;
uniform float mouseY;
varying vec2 vUv;


void main()	{

    float red = sin(mouseX * 50.0 + 60.0 * vUv.x) * sin(20.0 * vUv.y);
    float green = sin(mouseY * 50.0  + 20.0 * vUv.y) * cos(60.0 * vUv.x);
    float blue = vUv.x + vUv.y - mouseX;

    gl_FragColor = vec4(red, green, blue, 1);
}
