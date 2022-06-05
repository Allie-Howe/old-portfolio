// Events
let DISP_HEIGHT = -10
let mousePos = [];
function mouseMoved() {
  const XPos = width/2 - mouseX;
  const YPos = height/2 - mouseY;
  mousePos = getIsoFromGeo([XPos, YPos]).map(floor);
}

function mousePressed() {
  DISP_HEIGHT = -5
}

function mouseReleased() {
  DISP_HEIGHT = -10
}
