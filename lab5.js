let balloons = [];
let score = 0;
let playerInput;
let playerName = "Player";
let highScore = 0;
let highScoreName = "None";
let balloonSettings;


// with help from the site: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
function preload() {
  balloonSettings = loadJSON("assets/balloonData.json");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(18);

  playerInput = select("#playerName");
  playerInput.input(() => {
    playerName = playerInput.value();
  });

  const savedScore = localStorage.getItem("highScore");
  const savedName = localStorage.getItem("highScoreName");

  if (savedScore && savedName) {
    highScore = parseInt(savedScore);
    highScoreName = savedName;
  }

  setInterval(spawnBalloon, 800);
}

function draw() {
  background('bisque');

  fill(0);
  text(`Score: ${score}`, 20, 30);
  text(`${highScoreName} : ${highScore}`, 20, 50);

  for (let i = balloons.length - 1; i >= 0; i--) {
    balloons[i].move();
    balloons[i].display();

    if (balloons[i].offScreen()) {
      balloons.splice(i, 1);
    }
  }
}

function mousePressed() {
  for (let i = balloons.length - 1; i >= 0; i--) {
    if (balloons[i].isClicked(mouseX, mouseY)) {
      balloons.splice(i, 1);
      score++;

      if (score > highScore) {
        highScore = score;
        highScoreName = playerName || "Anonymous";
        localStorage.setItem("highScore", highScore);
        localStorage.setItem("highScoreName", highScoreName);
      }

      break;
    }
  }
}

function spawnBalloon() {
  const size = random(balloonSettings.sizeRange[0], balloonSettings.sizeRange[1]);
  const speed = random(balloonSettings.speedRange[0], balloonSettings.speedRange[1]);
  const color = random(balloonSettings.colors);
  balloons.push(new Balloon(random(width), height + size, size, speed, color));
}

class Balloon {
  constructor(x, y, size, speed, col) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.speed = speed;
    this.col = col;
  }

  move() {
    this.y -= this.speed;
  }

  display() {
    fill(this.col);
    noStroke();
    ellipse(this.x, this.y, this.size, this.size * 1.3);
    stroke(100);
    line(this.x, this.y + this.size * 0.65, this.x, this.y + this.size);
  }

  isClicked(px, py) {
    return dist(px, py, this.x, this.y) < this.size / 2;
  }

  offScreen() {
    return this.y + this.size < 0;
  }
}