/// <reference path="./p5.d/p5.global-mode.d.ts" />

const h = 5
const w = h;
const squareSize = Math.min(window.innerHeight, window.innerWidth)/10
const IS_MOBILE = window.innerWidth < 600 ? true : false;
let STARTING_SCALE = IS_MOBILE ? .25 : 1;
let SCALE = STARTING_SCALE;
let clrs;
let cubeImg;
let gui, guiVars = {
  cubeSpacing: 0,
  amplitude: 50
}

function preload() {
  cubeImg = loadImage("./cube.png")
  gui = new dat.GUI()
  gui.add(guiVars, "cubeSpacing", 0, 100)
  gui.add(guiVars, "amplitude", 0, 100)
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  imageMode(CENTER)

  clrs = {
    bg: color(0),
    fg: color(255,255,255)
  }
  a = 0.5 * cubeImg.width;
  b = -a;
  c = 0.25 * cubeImg.height;
  d = c;

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

function drawGrid() {
  // let offset = 0;
  for (let i = -Math.floor(h/2); i <= Math.floor(h/2); i++) {
    for (let j = -Math.floor(w/2); j <= Math.floor(w/2); j++) {
      // offset+=.05;
      doGridItem(i, j);
    }
  }
}

function doGridItem(i, j, offset) {
  // normalise displacement to amount of cubes
  const displacement = sin(((millis()/500) * (i+j))) * guiVars.amplitude;
  push();
  const [geoX, geoY] = getGeoFromIso([j, i]);
  translate(geoX, geoY);
  if (-i === mousePos[1] && -j === mousePos[0])
  translate(0, -10);
  image(cubeImg, 0, 0);
  pop();
}

const i = () => [1, 0.5];
const j = () => [-1, 0.5];
const adjustGeoToCubeWidth = ([ix, iy], [jx, jy]) => [
  (cubeImg.width + guiVars.cubeSpacing)/2 * (ix + jx),
  (cubeImg.height + guiVars.cubeSpacing)/2 * (iy + jy)
];

const normaliseGeo = (n) => (2*n)/((cubeImg.width + guiVars.cubeSpacing)/2)

function getGeoFromIso([isoX, isoY]) {
  const ix = i().map(v => v * isoX);
  const jy = j().map(v => v * isoY);
  return adjustGeoToCubeWidth(ix, jy);
}


// EVENTS
let oldY;
function mouseDragged() {
  const diff = oldY - window.mouseY;
  oldY = window.mouseY;
  if (SCALE <= STARTING_SCALE && diff < 0) return
  SCALE+=(diff/100)
}

let mousePos = []
function mouseMoved() {
  const XPos = width/2 - mouseX;
  const YPos = height/2 - mouseY ;
  mousePos = getIsoFromGeo([XPos, YPos]).map(floor);
}

const inverseThing = (n) => n/((a*d)-(b*c))

let a, b, c, d;
function getIsoFromGeo([geoX, geoY]) {
const newI = [inverseThing(d), inverseThing(-c)];
const newJ = [inverseThing(-b), inverseThing(a)];

const [x1, y1] = newI.map(v => v * geoX)
const [x2, y2] = newJ.map(v => v * geoY)

return [x1 + x2, y1 + y2]
}
