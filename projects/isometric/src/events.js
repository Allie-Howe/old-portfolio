// Events
let oldY;
function mouseDragged() {
  const diff = oldY - window.mouseY;
  oldY = window.mouseY;
  if (SCALE <= STARTING_SCALE && diff < 0) return
  SCALE+=(diff/100)
}

let mousePos = [];
function mouseMoved() {
  const XPos = width/2 - mouseX;
  const YPos = height/2 - mouseY;
  mousePos = getIsoFromGeo([XPos, YPos]).map(floor);
}

function mousePressed() {
  console.log("AA")
}
