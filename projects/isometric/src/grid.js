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
  const cubePos = [-j, -i]

  if (checkIfMatching(cubePos, mousePos)) {
    drawnCube = mouseIsPressed ? cubeClicked : cubeSelected
  }
  if (checkIfMatching(cubePos, rndTile)) drawnCube = cubeTarget

  image(drawnCube, 0, 0);
}
