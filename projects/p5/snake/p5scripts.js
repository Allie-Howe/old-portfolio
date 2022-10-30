/// <reference path="./p5.d/p5.global-mode.d.ts" />

let GRID_SIZE = 10;

/* SNAKE */
class Snake {
  constructor() {
    this.Length = 2;
    this.X = new Array(this.Length);
    this.Y = new Array(this.Length);

    for (let i = 0; i < this.Length; i++) {
      this.X[i] = 200;
      this.Y[i] = 200 + i * 50;
    }
  }

  Step() {
    for (let i = this.Length - 1; i > 0; i--) {
      this.X[i] = this.X[i - 1];
      this.Y[i] = this.Y[i - 1];
    }

    switch (NextIns) {
      case 'u':
        this.Y[0] -= 50;
        break;
      case 'd':
        this.Y[0] += 50;
        break;
      case 'l':
        this.X[0] -= 50;
        break;
      case 'r':
        this.X[0] += 50;
        break;
      default:
        break;
    }

    if (
      this.X[0] == cherry.getX() && this.Y[0] == cherry.getY() ? true : false
    ) {
      this.Grow();
      cherry.Move();
    }
  }

  Draw() {
    let colour = 0;
    for (let i = 0; i < this.Length; i++) {
      fill(colour);
      colour += 255 / this.Length;
      rect(this.X[i], this.Y[i], 50, 50);
    }
  }

  Grow() {
    this.X.push(this.X[this.Length - 1]);
    this.Y.push(this.Y[this.Length - 1]);
    this.Length++;
  }

  DetectColl() {
    if (!NextIns) return;

    // Borders
    // console.log(`X:${this.X}, Y:${this.Y}`);
    if (
      this.X[0] < 0 ||
      this.X[0] == GRID_SIZE * 50 ||
      this.Y[0] < 0 ||
      this.Y[0] == GRID_SIZE * 50
    ) {
      return true;
    }

    for (let i = 1; i < this.Length; i++) {
      console.log(`X:${this.X[i]}, Y:${this.Y[i]}`);
      if (this.X[i] === this.X[0] && this.Y[i] === this.Y[0]) {
        return true;
      }
    }
    return false;
  }

  getLength() {
    return this.Length;
  }
  getX(val) {
    return this.X[val];
  }
  getY(val) {
    return this.Y[val];
  }
}

/* CHERRY */
class Cherry {
  constructor() {
    this.XPos;
    this.YPos;
    this.Move();
  }

  getX() {
    return this.XPos;
  }
  getY() {
    return this.YPos;
  }

  Draw() {
    fill(150, 0, 0);
    rect(this.XPos, this.YPos, 50, 50);
  }

  Move() {
    this.XPos = 50 * int(random(0, 10));
    this.YPos = 50 * int(random(0, 10));

    for (let i = 0; i < snake.getLength(); i++) {
      if (this.XPos == snake.getX(i) && this.YPos == snake.getY(i)) this.Move();
    }
  }
}

/* SNAKEGAME */
let snake, cherry;
let incX, incY, sec;
let NextIns, GameOver;

function setup() {
  createCanvas(500, 500);
  background(200);
  noStroke();

  textAlign(CENTER, CENTER);
  textSize(60);

  snake = new Snake();
  cherry = new Cherry();
}

function draw() {
  if (second() !== sec && !GameOver) {
    background(200);

    snake.Step();
    snake.Draw();
    cherry.Draw();
    GameOver = snake.DetectColl();

    sec = second();
  } else if (GameOver) {
    isGameOver();
  }
}

function isGameOver() {
  // background(200);
  fill(0, 0, 0, 10);
  rect(0, 0, width, height);
  translate(width / 2, height / 2);
  fill(255, 0, 0);
  text('GAME OVER', 0, 0);
}

function keyPressed() {
  switch (keyCode) {
    case UP_ARROW:
      NextIns = 'u';
      break;
    case DOWN_ARROW:
      NextIns = 'd';
      break;
    case LEFT_ARROW:
      NextIns = 'l';
      break;
    case RIGHT_ARROW:
      NextIns = 'r';
      break;
    default:
      break;
  }
}
