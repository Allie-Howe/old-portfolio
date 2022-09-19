// Events
const DISP_HEIGHT = {hover: -20, click: -10}
let cubeDisplacement = DISP_HEIGHT.hover;
let mousePos = [];
function mouseMoved({ pageX, pageY }) {
  updateMousePos(pageX, pageY);
}
function updateMousePos(rawX, rawY) {
  const XPos = (width/2 - rawX) / SCALE;
  const YPos = (height/2 - rawY) / SCALE;
  mousePos = getIsoFromGeo([XPos, YPos]).map(floor);
}

const checkIfMatching = (mousePos, targetTile) => (mousePos.length && mousePos.every((v, index) => v !== targetTile[index] ? false : true))
const rnd = (min, max) => Math.random() * Math.abs(max-min) + min
const isSameArray = (a, b) => a.every((val, idx) => val === b[idx])

function getRndPos() {
  return [
    rnd(GRID_START.i, -GRID_START.i),
    rnd(GRID_START.j, -GRID_START.j)
].map(Math.round)}

function updateTargetPos() {
  let newPos;
  do {
    newPos = getRndPos()
  } while (isSameArray(newPos, targetTile))
  targetTile = newPos
}

function mousePressed(e) {
  cubeDisplacement = DISP_HEIGHT.click
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

  if (checkIfMatching(mousePos, targetTile)) {
    clickedCounts.correct++
    updateTargetPos()
    totalScore += 1
  } else {
    totalScore -= 2
  }
}

function mouseReleased() {
  cubeDisplacement = DISP_HEIGHT.hover
}
