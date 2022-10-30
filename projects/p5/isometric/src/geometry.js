// Geometry helper functions
let adjustedW, adjustedH;

// Vector functions
const i = () => [1, 0.5];
const j = () => [-1, 0.5];
const iInv = () => [1/adjustedW, -1/adjustedW]
const jInv = () => [2/adjustedH, 2/adjustedH]

const adjustGeoToCubeWidth = ([ix, iy], [jx, jy]) => [
  adjustedW/2 * (ix + jx),
  adjustedH/2 * (iy + jy)
];

function getGeoFromIso([isoX, isoY]) {
  const ix = i().map(v => v * isoX);
  const jy = j().map(v => v * isoY);
  return adjustGeoToCubeWidth(ix, jy);
}

function getIsoFromGeo([geoX, geoY]) {
  const [x1, y1] = iInv().map(v => v * geoX);
  const [x2, y2] = jInv().map(v => v * geoY);
  return [x1 + x2, y1 + y2];
}
