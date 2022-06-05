/// <reference path="./p5.d/p5.global-mode.d.ts" />

const h = 5
const w = h;
const squareSize = Math.min(window.innerHeight, window.innerWidth)/10
const IS_MOBILE = window.innerWidth < 600 ? true : false;
const STARTING_SCALE = IS_MOBILE ? .25 : 1;
let SCALE = STARTING_SCALE;
let clrs;
let cubeImg;
let gui, guiVars = {
  cubeSpacing: 0,
  amplitude: 50,
  speed: 2,
  hoverMode: true
}

function preload() {
  cubeImg = loadImage("./cube.png")
  gui = new dat.GUI()
  gui.add(guiVars, "cubeSpacing", 0, 100)
  gui.add(guiVars, "amplitude", 0, 100)
  gui.add(guiVars, "speed", 0, 5)
  gui.add(guiVars, "hoverMode")
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  imageMode(CENTER)

  clrs = {
    bg: color(0),
    fg: color(255,255,255)
  }
  adjustedH = cubeImg.height + guiVars.cubeSpacing
  adjustedW = cubeImg.width + guiVars.cubeSpacing

  background(clrs.bg);
  fill(clrs.fg);
}

function draw() {
  background(clrs.bg);
  translate(width/2, height/2);
  scale(SCALE);
  oldY = window.mouseY;

  drawGrid();
}

// Grid
function drawGrid() {
  for (let i = -Math.floor(h/2); i <= Math.floor(h/2); i++) {
    for (let j = -Math.floor(w/2); j <= Math.floor(w/2); j++) {
      doGridItem(i, j);
    }
  }
}

function doGridItem(i, j) {
  push();
  const [geoX, geoY] = getGeoFromIso([j, i]);
  translate(geoX, geoY);
  applyDisplacement(i, j);
  image(cubeImg, 0, 0);
  pop();
}

// Displacement
function calculateDisplacement(i, j) {
    // TODO: normalise displacement to amount of cubes
    const SPEED_NORMALISER = 1000

    const speed = guiVars.speed/SPEED_NORMALISER;

    return sin((millis()*speed) * (i+j)) * guiVars.amplitude
}

function applyDisplacement(i, j) {
  if (guiVars.hoverMode) {
    if (-i === mousePos[1] && -j === mousePos[0]) translate(0, -10);
  } else translate(0, calculateDisplacement(i, j));
}

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
