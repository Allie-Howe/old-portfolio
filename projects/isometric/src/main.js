const h = 5
const w = h;
const squareSize = Math.min(window.innerHeight, window.innerWidth)/10
const IS_MOBILE = window.innerWidth < 600 ? true : false;
const STARTING_SCALE = IS_MOBILE ? .25 : 1;
let SCALE = STARTING_SCALE;
let clrs;
let cubeImg, cubeCorrect, cubeIncorrect, cubeTarget, cubeSelected;
let gui, guiVars = {
  cubeSpacing: 0,
  amplitude: 50,
  speed: 2,
  hoverMode: true
}

function preload() {
  cubeImg = loadImage("./assets/cube.png")
  cubeTarget = loadImage("./assets/cube_target.png")
  cubeCorrect = loadImage("./assets/cube_correct.png")
  cubeIncorrect = loadImage("./assets/cube_incorrect.png")
  cubeSelected = loadImage("./assets/cube_selected.png")
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
