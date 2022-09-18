const h = 5
const w = h;
const GRID_START = {i: -Math.floor(h/2), j: -Math.floor(w/2)}
const IS_MOBILE = window.innerWidth < 600 ? true : false;
const SCALE = IS_MOBILE ? 1.25/h : 4/h;
let rndTile = getRndPos();

let clickedCounts = {correct: null, total: null};
const squareSize = Math.min(window.innerHeight, window.innerWidth)/10
let timeGameStarted = 0;
let timeRemaining;
let totalScore = 0;
const TIME_LIMIT = 4;
let clrs;
let cubeImg, cubeCorrect, cubeIncorrect, cubeTarget, cubeSelected, cubeClicked;

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
  cubeClicked = cubeIncorrect;
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

  doTimeCalcs();

  drawGrid();
}

function doTimeCalcs() {
  const startCol = color(0, 128, 0);
  const endCol = color(128, 0, 0);
  if (!timeGameStarted) return
  timeRemaining = round(((TIME_LIMIT*1000) - (millis() - timeGameStarted) + (totalScore*1000)) / 100)/10;
  document.querySelector("#timer").innerHTML = timeRemaining

  if (timeRemaining <= 0) loseState();

  const mappedTime = map(timeRemaining, TIME_LIMIT, 0, 0, 1)

  const newBG = lerpColor(startCol, endCol, mappedTime)
  background(newBG);
  document.querySelector("body").style.backgroundColor = newBG.toString();
}

function loseState() {
  noLoop();
}
