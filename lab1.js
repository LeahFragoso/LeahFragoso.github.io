

function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('#ffe5d0');
    stroke('saddlebrown');
    for (let x = 0; x < width; x += 40) {
        for (let y = 0; y < height; y += 40) {

        if ((x+y) % 80 === 0){
            fill('thistle');
        }else{
            fill('chocolate');
        }
          ellipse(x, y, 20, 20);
        }
    }
    
    drawHeart(mouseX, mouseY);
}

function drawHeart(x, y, size) {
  push();
  translate(x, y);
  scale(size / 100);
  fill('thistle');
  strokeWeight(3);
  stroke('saddlebrown');

  beginShape();
  vertex(0, -50);
  bezierVertex(50, -80, 80, -20, 0, 30);
  bezierVertex(-80, -20, -50, -80, 0, -50);
  endShape(CLOSE);
  pop();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  redraw();
}

