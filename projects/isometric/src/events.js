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
  clickedCounts.total++

  if (checkIfMatching(mousePos, rndTile)) {
    clickedCounts.correct++
    rndTile = getRndPos()
    cubeClicked = cubeCorrect
  } else cubeClicked = cubeIncorrect
  updateScore()
}

function updateScore() {
  document.querySelector("#score").innerHTML = Math.round((clickedCounts.correct/clickedCounts.total)*10000)/100
}

function mouseReleased() {
  DISP_HEIGHT = -10
}
