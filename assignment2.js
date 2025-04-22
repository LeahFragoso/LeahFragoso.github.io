// tutorial one - p5js.org - interactive sun: https://p5js.org/tutorials/conditionals-and-interactivity/
// tutorial two - p5js.org - sunrise animation: https://editor.p5js.org/gbenedis@gmail.com/sketches/9lz2aqfTO/ 



//-------tutorial one-------
let sunHeight;
let horizon = 400;

//-------my code-------
let cloud1 = 1;
let cloud2 = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
}
function draw() {
  noStroke();

  sunHeight = mouseY;

  // adding clouds
  cloud1 += 2; 
  cloud2 += 2;
  if (cloud1 > width + 100) cloud1 = -200;
  if (cloud2 > width + 100) cloud2 = -200;
 

  //-------tutorial one-------
  if(sunHeight < horizon){ 

  //-------my code-------
  // changing colours
    background('lightsteelblue');
  } else {
    background('dimgrey');
  }

  //-------tutorial one-------
  console.log(sunHeight < horizon)

  //-------my code-------
  // changing sun colour and adding stars to night sky
  fill('khaki');
  circle(width/2, sunHeight, 200);

  if (sunHeight >= horizon) {
    for (let i = 0; i < .1; i++) {
      fill(255);
      circle(random(width), random(horizon), random(1,3));
    }
  }



     // adding clouds to day sky
  if (sunHeight < horizon) {
  fill(255); 
  ellipse(cloud1, 100, 100, 60);
  ellipse(cloud1 + 40, 90, 80, 50);
  ellipse(cloud1 - 60, 110, 90, 55); 

  fill(255); 
  ellipse(cloud2, 50, 50, 30);
  ellipse(cloud2 + 20, 45, 40, 25);
  ellipse(cloud2 - 30, 55, 45, 27.5); 
  }

 if (sunHeight < horizon) {


  //-------tutorial two-------
  // taking the mountains from tutorial two
  fill(110, 50, 18);
  triangle(200, 400, 520, 253, 800, 400);
  fill(110, 95, 20);
  triangle(200,400,520,253,350,400);  

  fill(150, 75, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(100, 50, 12);
  triangle(-100, 400, 150, 200, 0, 400); 

  fill(150, 100, 0);
  triangle(200, 400, 450, 250, 800, 400);
  fill(120, 80, 50);
  triangle(200, 400, 450, 250, 300, 400);

    //-------my code-------
    // dimming the mountains when the sun goes down  
  } else {
  fill(60, 30, 10); 
  triangle(200, 400, 520, 253, 800, 400);
  fill(60, 50, 15);
  triangle(200,400,520,253,350,400);  

  fill(80, 40, 0);
  triangle(-100, 400, 150, 200, 400, 400);
  fill(50, 30, 10);
  triangle(-100, 400, 150, 200, 0, 400); 

  fill(70, 50, 20);
  triangle(200, 400, 450, 250, 800, 400);
  fill(50, 40, 25);
  triangle(200, 400, 450, 250, 300, 400);
}


  //-------tutorial one-------
  if (sunHeight < horizon) {

  //-------my code-------
    fill('darkseagreen');
  } else {
    fill(72, 94, 61);
  }
  rect(0,horizon,windowWidth,windowHeight);
}

