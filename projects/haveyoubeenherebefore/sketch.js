/// <reference path="p5.d/p5.global-mode.d.ts" />

let range = document.querySelector("#varRange"),
  toggle = document.querySelector("#toggle");

var capturer = new CCapture({
  format: "png",
  framerate: 30,
  frameLimit: 20 * 30,
});

const X_AXIS = 1,
  Y_AXIS = 2,
  variance = 70;

let c1,
  c2,
  r = 0;

function setup() {
  createCanvas(300, 300);

  img = loadImage("./image.jpg");
  imageMode(CENTER);

  strokeWeight(4);

  c1 = color(Math.random() * 100, Math.random() * 100, Math.random() * 100);
  c2 = color(Math.random() * 100, Math.random() * 100, Math.random() * 100);
}

function draw() {
  background(255);
  translate(width / 2, height / 2);
  scale(1.4);

  push();
  rotate(r);
  setGradient(-width / 2, -height / 2, width, height, c1, c2, X_AXIS);
  pop();

  image(img, 0, 0, width / 1.5, height / 1.5);

  noisify();

  r += 0.01;
}

function noisify() {
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    pixels[i] -= Math.random() * variance - variance / 2;
    pixels[i + 1] -= Math.random() * variance - variance / 2;
    pixels[i + 2] -= Math.random() * variance - variance / 2;
  }
  updatePixels();
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === X_AXIS) {
    // Left to right gradient
    for (let i = x; i <= x + w; i++) {
      let inter = map(i, x, x + w, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(i, y, i, y + h);
    }
  }
}
