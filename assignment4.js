// Reference 1: p5.js reference for DOM and createAudio()
// https://p5js.org/reference/#/p5/createAudio

// Reference 2: Particle system concepts from Daniel Shiffman’s The Nature of Code
// https://natureofcode.com/book/chapter-4-particle-systems/



var position = 0;
var colours = [];
var shapes = [];
var positions = [];
var rotations = [];
var speeds = [];

var numberOfConfetto = 300;
var partyOn = false; 



var mysound;

function setup(){
    createCanvas(windowWidth, windowHeight);
    noStroke();
    mysound = createAudio("assets/mysound.mp3");
    let button = select('#partyButton');
    button.position(windowWidth/2,200);
    button.mousePressed(function(){
        partyOn = !partyOn;
        if(partyOn){
            button.html("Leave Party");
            mysound.play();
        }else{
            button.html("Party");
        }
    });

    for(var i = 0; i < numberOfConfetto; i++){
        colours[i] = color( random (255), random(255), random(255) );
        positions[i] = random(height);
        shapes[i] = shapeDecider();
        speeds[i] = random(6) + 1;
        rotations[i] = random(TWO_PI);
    }
}

function draw(){
    background('bisque');
    if(partyOn){
        party();
    }
}

function party (){
    for (var i = 0; i < colours.length; i++){
        fill( colours[i] );
        push();
        translate((i*20)%width, positions[i]);
        rotate(rotations[i]);
        if(shapes[i] === 'confetto'){
         rect( 0,0, 15,5);
        }
        if(shapes[i] === 'circle'){
            ellipse( 0,0, 10,10);
        }
        if(shapes[i] === 'face'){
            text('˚ʚ♡ɞ˚', 0,0);
        }
        if(shapes[i] === 'face2'){
            text('❀', 0,0);
        }
        pop();
        positions[i] += speeds[i];
        positions[i] = positions[i] % height;
    }
}

function shapeDecider(){
    var shape = 'confetto';
    if(random () > 0.6) {
        shape = 'circle';
    }

    if(random() > 0.9){
        shape = 'face';
    }
    if(random() > 0.95){
        shape = 'face2';
    }
    return shape;
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}