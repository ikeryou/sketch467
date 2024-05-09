uniform vec3 color;
uniform vec3 mulCol;
uniform float alpha;

varying vec2 vUv;

void main(void) {
  vec4 dest = vec4(color, 1.0);

  dest.br += (0.75 * vUv.x) * 10.0;
  dest.bg -= (0.65 * vUv.y) * 10.0;

  dest.rgb = mix(dest.rgb, 1.0 - dest.rgb, 0.0);
  dest.r *= (0.5 * vUv.y) * 20.0;

  dest.rgb *= alpha * 0.6;

  // dest.rgb *= mulCol;

  gl_FragColor = dest;
}
