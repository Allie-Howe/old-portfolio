const hueAmplitude = 10;
let circleSize = 5;
let spacing = 1.4

let guiClosed = false;
let gui, guiVars = {
  amplitude: 20,
  rangeX: 4,
  rangeY: 4,
  speed: 1e-3,
  trail: false
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB);
  noStroke();
  gui = new dat.GUI()
  gui.add(guiVars, 'amplitude', 0, 100)
  gui.add(guiVars, 'rangeX', 0, 100)
  gui.add(guiVars, 'rangeY', 0, 100)
  gui.add(guiVars, 'speed', 0, 100)
  gui.add(guiVars, 'trail', 0, 100)


  const isMobile = window.innerWidth < 576;
  if (isMobile) {
    const minSize = min(window.innerHeight, window.innerWidth)
    guiVars.amplitude = minSize / 20;
    circleSize = minSize / 150;
    guiVars.rangeX = 2;
    guiVars.rangeY = 4;
    spacing = 1.8
  }
}

function draw() {
  background(0, 0, 0, guiVars.trail ? 0.0075 : 1);
  translate(width/2, height/2);

  for (let i = -guiVars.rangeX; i <= guiVars.rangeX; i++) {
    for (let j = -guiVars.rangeY; j <= guiVars.rangeY; j++) {
      fill(calculateHue(i * j * 4), 255, 255);
      push();
      translate((i * guiVars.amplitude * 2 * spacing), (j * guiVars.amplitude * 2 * spacing));
      circle(getCircularPos(sin, j), getCircularPos(cos, i), circleSize)
      pop()
    }
  }
}

const getCircularPos = (fn, extra) => fn(millis() * guiVars.speed * extra) * guiVars.amplitude;

const calculateHue = (offset) => {
  const time = millis() * guiVars.speed * hueAmplitude + (offset ?? 0);
  return time % 360;
}

window.onload = (() => window.addEventListener('keypress', ({code}) => {
  if (code === 'Space') {
    if (guiClosed) {
      gui.show();
      guiClosed = false;
    } else {
      gui.hide();
      guiClosed = true;
    }
  }
}))
