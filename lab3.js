var colourPicker; 
let strokeWeightSlider;
var bgColourPicker;

function setup(){
    createCanvas(windowWidth,windowHeight);

    let guiContainer = createDiv().addClass('gui-container');

    let strokeLabel = createP('Stroke Colour').addClass('label');
    colourPicker = createColorPicker('pink');
    colourPicker.addClass('color-picker');
    guiContainer.child(strokeLabel);
    guiContainer.child(colourPicker);

    let weightLabel = createP('Stroke Weight').addClass('label');
    strokeWeightSlider = createSlider(1, 10, 5, 1);
    strokeWeightSlider.addClass('slider');
    guiContainer.child(weightLabel);
    guiContainer.child(strokeWeightSlider);
    
    let bgLabel = createP('Background Colour').addClass('label');
    bgColourPicker = createColorPicker('bisque');
    bgColourPicker.addClass('bg-color-picker');
    guiContainer.child(bgLabel);
    guiContainer.child(bgColourPicker);

    let buttonLabel = createP('').addClass('label');
    var bgColorButton = createButton('Refresh');
    bgColorButton.addClass('refresh-btn');
    bgColorButton.mousePressed(repaint);
    guiContainer.child(buttonLabel);
    guiContainer.child(bgColorButton);

    background(bgColourPicker.value());
}

function draw(){
    strokeWeight( strokeWeightSlider.value() );
    stroke( colourPicker.value() );   

    // remixed from p5js.org/reference/mouseispressed/
    if(mouseIsPressed){
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    /// end remix
}

function repaint(){
    background( bgColourPicker.value() );
    console.log( bgColourPicker.value().setGreen(255) );
}