// Events
let DISP_HEIGHT = -10
let mousePos = [];
function mouseMoved() {
  const XPos = (width/2 - mouseX) / SCALE;
  const YPos = (height/2 - mouseY) / SCALE;
  mousePos = getIsoFromGeo([XPos, YPos]).map(floor);
}

const checkIfMatching = (mousePos, rndTile) => (mousePos.length && mousePos.every((v, index) => v !== rndTile[index] ? false : true))

function rnd(min, max) {
  return Math.random() * Math.abs(max-min) + min
}

function getRndPos() {
  return [
    rnd(GRID_START.i, -GRID_START.i),
    rnd(GRID_START.j, -GRID_START.j)
].map(Math.round)}

function mousePressed() {
  DISP_HEIGHT = -5

  if (checkIfMatching(mousePos, rndTile)) {
    rndTile = getRndPos()
    cubeClicked = cubeCorrect
  } else cubeClicked = cubeIncorrect
}


function mouseReleased() {
  DISP_HEIGHT = -10
}
