// Grid
function drawGrid() {
  for (let i = -Math.floor(h/2); i <= Math.floor(h/2); i++) {
    for (let j = -Math.floor(w/2); j <= Math.floor(w/2); j++) {
      doGridItem(i, j);
    }
  }
}

function doGridItem(i, j) {
  push();
  const [geoX, geoY] = getGeoFromIso([j, i]);
  translate(geoX, geoY);
  applyDisplacement(i, j);
  image(cubeImg, 0, 0);
  pop();
}
