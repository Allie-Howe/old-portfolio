// Events
let DISP_HEIGHT = -10
let mousePos = [];
function mouseMoved({ pageX, pageY }) {
  updateMousePos(pageX, pageY);
}
function updateMousePos(rawX, rawY) {
  const XPos = (width/2 - rawX) / SCALE;
  const YPos = (height/2 - rawY) / SCALE;
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

function mousePressed(e) {
  DISP_HEIGHT = -5
  // Won't run unless on mobile/e is TouchEvent
  if (!e.touches) return;
  updateMousePos(e.touches[0].pageX, e.touches[0].pageY)
}

function mouseClicked(e) {
  updateMousePos(e.pageX, e.pageY)
  if (!timeGameStarted) {
    timeGameStarted = millis()
    document.querySelector("#scoreArea").classList.add("visible");
    document.querySelector("#info").classList.add("hidden");
  };

  clickedCounts.total++

  if (checkIfMatching(mousePos, rndTile)) {
    clickedCounts.correct++
    rndTile = getRndPos()
    totalScore += 1
    cubeClicked = cubeCorrect
  } else {
    cubeClicked = cubeIncorrect
    totalScore -= 2
  }
}

function mouseReleased() {
  DISP_HEIGHT = -10
}
