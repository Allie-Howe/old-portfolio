const hueAmplitude = 10;
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
  gui = new dat.GUI();
  gui.add(guiVars, 'amplitude', 10, 30);
  gui.add(guiVars, 'rangeX', 0, 30);
  gui.add(guiVars, 'rangeY', 0, 12);
  gui.add(guiVars, 'speed', 0, 0.005);
  gui.add(guiVars, 'trail');

  const isMobile = window.innerWidth < 576;
  if (isMobile) {
    const minSize = min(window.innerHeight, window.innerWidth)
    guiVars.amplitude = minSize / 20;
    guiVars.rangeX = 2;
    guiVars.rangeY = 4;
    spacing = 1.8;

    const toggleMsg = document.querySelector('#toggleMsg');
    const closeMsg = document.querySelector('#closeMsg');
    toggleMsg.innerHTML = 'tap'
    closeMsg.innerHTML = 'tap'
  }
}

function draw() {
  const circleSize = guiVars.amplitude/8
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

window.onload = (() => {
  window.addEventListener('keypress', ({code}) => {
    if (code === 'Space') {
      removeOverlay();
      toggleDatGui();
    }
  });
  window.addEventListener('click', (e) => {
    removeOverlay();
    if (e.pointerType && e.pointerType === 'touch' && !e.target.closest('.dg')) {
      toggleDatGui();
    }
  });
});

function toggleDatGui() {
  if (guiClosed) {
    gui.show();
    guiClosed = false;
  } else {
    gui.hide();
    guiClosed = true;
  }
}

function removeOverlay() {
  document.querySelector('#info')?.remove();
}
