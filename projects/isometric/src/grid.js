// Grid
function drawGrid() {
  for (let i = GRID_START.i; i <= -GRID_START.i; i++) {
    for (let j = GRID_START.j; j <= -GRID_START.j; j++) {
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
  // TODO: Make function for nicely dealing with co-ord comparison
  if (-i === mousePos[1] && -j === mousePos[0]) {
    drawnCube = cubeSelected
    if (mouseIsPressed) drawnCube = cubeCorrect
  }
  if (-i === rndTile[1] && -j === rndTile[0]) drawnCube = cubeTarget
  image(drawnCube, 0, 0);
}
