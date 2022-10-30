const h = 5
const w = h;
const GRID_START = {i: -Math.floor(h/2), j: -Math.floor(w/2)}
const IS_MOBILE = window.innerWidth < 600 ? true : false;
const SCALE = IS_MOBILE ? 1.25/h : 4/h;
let targetTile = getRndPos();

let clickedCounts = {correct: null, total: null};
let timeGameStarted = 0;
let timeRemaining;
let totalScore = 0;
const TIME_LIMIT = 4;
let cubeImg, cubeCorrect, cubeIncorrect, cubeTarget, cubeSelected, cubeClicked;

const displacements = new Array(h).fill(0).map(() => new Array(h).fill(0));
let gui, guiVars = {
  cubeSpacing: 0,
  amplitude: 50,
  speed: 2,
  hoverMode: false
}

function preload() {
  cubeImg = loadImage("./assets/cube.png")
  cubeTarget = loadImage("./assets/cube_target.png")
  cubeSelected = loadImage("./assets/cube_selected.png")
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  imageMode(CENTER)

  adjustedH = cubeImg.height + guiVars.cubeSpacing
  adjustedW = cubeImg.width + guiVars.cubeSpacing
}

function draw() {
  background(0);
  translate(width/2, height/2);
  scale(SCALE);

  doTimeCalcs();
  drawGrid();
}

function doTimeCalcs() {
  if (!timeGameStarted) return;

  timeRemaining = round(((TIME_LIMIT*1000) - (millis() - timeGameStarted) + (totalScore*1000)) / 100)/10;
  document.querySelector("#timer").innerHTML = timeRemaining

  // TODO: Maybe move this somewhere else?
  if (timeRemaining <= 0) loseState();

  const mappedTime = map(timeRemaining, TIME_LIMIT, 0, 0, 1)

  const startCol = color(0, 128, 0);
  const endCol = color(128, 0, 0);
  const newBG = lerpColor(startCol, endCol, mappedTime)

  background(newBG);
  document.querySelector("body").style.backgroundColor = newBG.toString();
}

function loseState() {
  noLoop();
}
