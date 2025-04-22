var pinkBubble = {
    x: 0,
    y: 0,
    w: 100,
    h: 100,
    xSpeed: 1,
    ySpeed: 1,
    colour: 'lightpink',
    draw: function(){
        noStroke();
        fill( this.colour );
        ellipse(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width - this.w){
            this.xSpeed *= -1;
        }
        if(this.y > height - this.h || this.y < 0){
            this.ySpeed *= -1;
        }
    }
};

var blueBubble = {
    x: 40,
    y: 50,
    w: 75,
    h: 75,
    xSpeed: 2,
    ySpeed: 1,
    colour: 'cornflowerblue',
    draw: function(){
        fill( this.colour );
        ellipse(this.x, this.y, this.w, this.h);
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < 0 || this.x > width){
            this.xSpeed *= -1;
        }
        if(this.y > height || this.y < 0){
            this.ySpeed *= -1;
        }
    }

    
};

var heart = {
    x: 200,
    y: 200,
    size: 60,
    xSpeed: 1.5,
    ySpeed: 2,
    colour: 'red',
    draw: function() {
        push();
        translate(this.x, this.y);
        fill(this.colour);
        noStroke();
        beginShape();
        vertex(0, -this.size / 3);
        bezierVertex(this.size / 2, -this.size, this.size, -this.size / 5, 0, this.size);
        bezierVertex(-this.size, -this.size / 5, -this.size / 2, -this.size, 0, -this.size / 3);
        endShape(CLOSE);
        pop();
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < this.size || this.x > width - this.size){
            this.xSpeed *= -1;
        }
        if(this.y < this.size || this.y > height - this.size){
            this.ySpeed *= -1;
        }
    }
}

var yellowStar = {
    x: 300,
    y: 300,
    size: 50,
    xSpeed: 2,
    ySpeed: 1.5,
    colour: 'goldenrod',
    draw: function() {
        push();
        translate(this.x, this.y);
        fill(this.colour);
        noStroke();
        beginShape();
        let points = 5;
        let angle = TWO_PI / points;
        let halfAngle = angle / 2.0;
        for (let a = 0; a < TWO_PI; a += angle) {
            let sx = cos(a) * this.size;
            let sy = sin(a) * this.size;
            vertex(sx, sy);
            sx = cos(a + halfAngle) * this.size / 2;
            sy = sin(a + halfAngle) * this.size / 2;
            vertex(sx, sy);
        }
        endShape(CLOSE);
        pop();
    },
    move: function(){
        this.x += this.xSpeed;
        this.y += this.ySpeed;

        if(this.x < this.size || this.x > width - this.size){
            this.xSpeed *= -1;
        }
        if(this.y < this.size || this.y > height - this.size){
            this.ySpeed *= -1;
        }
    }
};


function setup(){
    createCanvas(windowWidth,windowHeight);
}

function draw(){
    background('bisque'); 
    pinkBubble.draw();
    pinkBubble.move();
    blueBubble.draw();
    blueBubble.move();
    heart.draw();
    heart.move();
    yellowStar.draw();
    yellowStar.move();
}