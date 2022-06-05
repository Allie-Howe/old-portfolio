// Displacement
function calculateDisplacement(i, j) {
  // TODO: normalise displacement to amount of cubes
  const SPEED_NORMALISER = 1000

  const speed = guiVars.speed/SPEED_NORMALISER;

  return sin((millis()*speed) * (i+j)) * guiVars.amplitude
}

function applyDisplacement(i, j) {
if (guiVars.hoverMode) {
  if (-i === mousePos[1] && -j === mousePos[0]) translate(0, DISP_HEIGHT);
} else translate(0, calculateDisplacement(i, j));
}
