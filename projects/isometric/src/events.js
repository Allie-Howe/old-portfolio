// Events
let DISP_HEIGHT = -10
let mousePos = [];
let rndTile = [1,1]
function mouseMoved() {
  const XPos = width/2 - mouseX;
  const YPos = height/2 - mouseY;
  mousePos = getIsoFromGeo([XPos, YPos]).map(floor);
}

const checkIfMatching = (mousePos, rndTile) => (mousePos.every((v, index) => v !== rndTile[index] ? false : true))

function rnd(min, max) {
  return Math.random() * abs(max-min) + min
}

const getRndPos = () => [
  rnd(GRID_START.i, -GRID_START.i),
  rnd(GRID_START.j, -GRID_START.j)
].map(Math.round)

function mousePressed() {
  DISP_HEIGHT = -5

  if (checkIfMatching(mousePos, rndTile)) rndTile = getRndPos()
}


function mouseReleased() {
  DISP_HEIGHT = -10
}
