// Events
let mousePos = [];
function mouseMoved() {
  const XPos = width/2 - mouseX;
  const YPos = height/2 - mouseY;
  mousePos = getIsoFromGeo([XPos, YPos]).map(floor);
}

function mousePressed() {
  console.log("AA")
}
