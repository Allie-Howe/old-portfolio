const variance = 128;
function noisify() {
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i] -= Math.random() * variance - variance / 2;
    pixels[i + 1] -= Math.random() * variance - variance / 2;
    pixels[i + 2] -= Math.random() * variance - variance / 2;
  }
  updatePixels();
}
