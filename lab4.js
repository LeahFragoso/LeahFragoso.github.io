let calciferImg;
let chewSound;
let speechBubble;
let baconCursor;


function preload() {
  calciferImg = createImg("assets/calcifer.gif", "Calcifer");
  calciferImg.size(350, 350);
  calciferImg.style("position", "absolute");
  calciferImg.style("top", "50%");
  calciferImg.style("left", "50%");
  calciferImg.style("transform", "translate(-50%, -50%)");
  calciferImg.style("z-index", "5");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  chewSound = createAudio("assets/crunch.mp3");
  chewSound.volume(0.8);

  speechBubble = select("#speechBubble");


  userStartAudio();
}

function draw (){
  clear();
}

function mousePressed() {
  if (chewSound) {
    chewSound.play();
  }

  speechBubble.style("display", "block");
  setTimeout(() => {
    speechBubble.style("display", "none");
  }, 1500);
}