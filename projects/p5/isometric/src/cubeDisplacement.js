// Displacement
const testArr = [
  [-1, 0, 1, -1, 0],
  [0, 1, -1, 0, 1],
  [1, -1, 0, 1, -1],
  [-1, 0, 1, -1, 0],
  [0, 1, -1, 0, 1],
].map(arr=>arr.map(v=>v/Math.PI))

let amp = 0;

function calculateDisplacement(i, j) {
  const nI = i + 2, nJ = j + 2

  if (totalScore >= 10 && amp < 75) amp+=0.02

  const noiseTime = sin((millis()/1000)+testArr[nI][nJ])
  const noiseBal = (noiseTime)*amp

  displacements[nI][nJ] = noiseBal;
  return displacements[nI][nJ]
}

function applyDisplacement(i, j) {
  if (guiVars.hoverMode) {
    if (-i === mousePos[1] && -j === mousePos[0]) translate(0, cubeDisplacement);
  } else {
    translate(0, calculateDisplacement(i, j))
  }
}
