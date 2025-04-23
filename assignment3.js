let poems = [];
let input, button, slider, themeSelect;
let backgroundColor = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);

  input = select('#wordInput');
  generateButton = select('#generateButton');
  clearButton = select('#clearButton');
  slider = select('#speedSlider');
  themeSelect = select('#themeSelect');

  generateButton.mousePressed(createPoem);
  clearButton.mousePressed(clearPoem);
}

function draw() {
  background(backgroundColor, 50);
  
  poems.forEach((poem, index) => {
    fill(poem.color);
    textSize(24);
    text(poem.text, poem.x, poem.y);
    poem.y -= slider.value();
    
    if (poem.y < -50) {
      poems.splice(index, 1);
    }
  });
}

function createPoem() {
  let word = input.value().trim();
  if (word === '') return;

  let theme = themeSelect.value();
  let lines = generateLines(word, theme);
  let baseColor = theme === 'intense' ? color(150, 100, 255) :
                  theme === 'dreamy' ? color(255, 180, 255) :
                  color(200, 255, 200);

  lines.forEach((line, i) => {
    poems.push({
      text: line,
      x: random(100, width - 100),
      y: height + i * 30,
      color: baseColor
    });
  });
}

// chatgpt used to generate poem filler ideas //
function generateLines(word, theme) {
    let lines = [];
  
    const calm = [
      `${word} floats on still water`,
      `beneath the breeze, ${word} whispers`,
      `a gentle tide of ${word}`,
      `peace blooms where ${word} rests`,
      `in stillness, ${word} lingers`
    ];
  
    const dreamy = [
      `a dream wrapped in ${word}`,
      `${word} floats beyond the stars`,
      `wishes ride on ${word}`,
      `${word} melts into stardust`,
      `the sky breathes out ${word}`
    ];
  
    const intense = [
      `${word} cracks the sky`,
      `${word} breaks the silence`,
      `chaos reigns where ${word} falls`,
      `rage roars with ${word}`,
      `flames rise with ${word}`
    ];
  
    const bank = theme === 'intense' ? intense
                : theme === 'dreamy' ? dreamy
                : calm;
  
    for (let i = 0; i < 4; i++) {
      lines.push(random(bank));
    }
  
    return lines;
}

  function clearPoem() {
    poems = []; // This clears all poems
  }