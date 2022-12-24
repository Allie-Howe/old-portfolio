const hueAmplitude = 10;
let speed = 1e-3;
let amplitude = 50;
let circleSize = 5;
let rangeX = 5
let rangeY = 2
let spacing = 1.4

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  colorMode(HSB);
  noStroke();

  const isMobile = window.innerWidth < 576;
  if (isMobile) {
    const minSize = min(window.innerHeight, window.innerWidth)
    amplitude = minSize / 20;
    circleSize = minSize / 150;
    rangeX = 2;
    rangeY = 4;
    spacing = 1.8
  }
}

function draw() {
  background(0, 0, 0, 0.0075);
  translate(width/2, height/2);

  for (let i = -rangeX; i <= rangeX; i++) {
    for (let j = -rangeY; j <= rangeY; j++) {
      fill(calculateHue(i * j * 4), 255, 255);
      push();
      translate((i * amplitude * 2 * spacing), (j * amplitude * 2 * spacing));
      circle(getCircularPos(sin, j + rangeY), getCircularPos(cos, i + rangeX), circleSize)
      pop()
    }
  }
}

const getCircularPos = (fn, extra) => fn(millis() * speed * extra) * amplitude;

const calculateHue = (offset) => {
  const time = millis() * speed * hueAmplitude + (offset ?? 0);
  return time % 360;
}
