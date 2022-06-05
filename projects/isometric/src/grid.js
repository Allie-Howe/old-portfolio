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
  drawCube(i, j)
  pop();
}

function drawCube(i, j) {
  let drawnCube = cubeImg;
  if (-i === mousePos[1] && -j === mousePos[0]) drawnCube = cubeSelected
  image(drawnCube, 0, 0);
}
