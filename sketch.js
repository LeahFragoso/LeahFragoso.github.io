var x; 
var y = 380;  
var speed = 50; 
console.log();

function setup() {
  createCanvas(windowWidth, windowHeight);  
  textSize(62);  
  textAlign(CENTER, CENTER);  
  x = width + textWidth("𓆝 𓆟 𓆞 𓆝 𓆟");  
  frameRate(2);
}

function draw() {
  background('#ffe5d0');
  fill(194, 97, 28);
  text("𓆝 𓆟 𓆞 𓆝 𓆟 𓆝 𓆟 𓆞 𓆝 𓆟 𓆝 𓆟 𓆞 𓆝 𓆟 𓆝 𓆟 𓆞 𓆝 𓆟 𓆝 𓆟 𓆞 𓆝 𓆟 𓆝 𓆟 𓆞 𓆝 𓆟 𓆝 𓆟 𓆞 𓆝 𓆟 𓆝 𓆟 𓆞 𓆝 𓆟", x, 410);
  x = x - speed;  
  if (x < -textWidth("𓆝 𓆟 𓆞 𓆝 𓆟")) {
    x = width;
    console.log();
  }
}