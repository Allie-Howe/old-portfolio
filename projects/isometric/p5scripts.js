/// <reference path="./p5.d/p5.global-mode.d.ts" />

const h = 5
const w = h;
const squareSize = Math.min(window.innerHeight, window.innerWidth)/10
let clrs;
let cubeImg;
let gui, guiVars = {
  cubeSpacing: 0
}

function preload() {
  cubeImg = loadImage("./cube.png")
  gui = new dat.GUI()
  gui.add(guiVars, "cubeSpacing", 0, 100)
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  imageMode(CENTER)

  clrs = {
    bg: color(0),
    fg: color(255,255,255)
  }

  background(clrs.bg);
  fill(clrs.fg);
}

function draw() {
  background(clrs.bg);
  translate(width/2, height/2);

  drawGrid()
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
  const displacement = sin(((millis()/500) * (i+j))) * 50
  push();
  const [geoX, geoY] = getGeoFromIso([j, i])
  translate(geoX, geoY);
  translate(0, displacement);
  image(cubeImg, 0, 0)
  pop();
}

const i = () => [1, 0.5];
const j = () => [-1, 0.5];
const adjustGeoToCubeWidth = ([ix, iy], [jx, jy]) =>
  [(cubeImg.width + guiVars.cubeSpacing)/2 * (ix + jx), (cubeImg.height + guiVars.cubeSpacing)/2 * (iy + jy)];

function getGeoFromIso([isoX, isoY]) {
  const ix = i().map(v => v * isoX);
  const jy = j().map(v => v * isoY);
  return adjustGeoToCubeWidth(ix, jy);
}
