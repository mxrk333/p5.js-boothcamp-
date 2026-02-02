var fillColor = '#000000';
var bgColor = '#39FF14';
var brushSize = 20;
var brushShape = 'circle';
var uiHeight = 80;

function setup() {
  createCanvas(800, 500);
  background(bgColor);
}

function draw() {
  drawUI();
  handleUI();
  drawBrush();
}

function drawUI() {
  // ui background
  fill(200);
  rect(0, 0, width, uiHeight);

  // colors
  fill('#000000');
  rect(20, 20, 20, 20);

  fill('#404040');
  rect(50, 20, 20, 20);

  fill('#7f7f7f');
  rect(80, 20, 20, 20);

  fill('#ffffff');
  rect(110, 20, 20, 20);

  // eraser
  fill(bgColor);
  rect(150, 20, 30, 20);

  // brush size 
  fill(0);
  textSize(12);
  text("S", 220, 35);
  text("M", 250, 35);
  text("L", 280, 35);

  // brush shape buttons
  rect(330, 20, 20, 20); 
  circle(370, 30, 20);  
}

function handleUI() {
  if (!mouseIsPressed) return;

  if (mouseX > 20 && 
      mouseX < 40 && 
      mouseY > 20 && 
      mouseY < 40) {
    fillColor = '#000000';
  }

  if (mouseX > 50 && 
      mouseX < 70 && 
      mouseY > 20 && 
      mouseY < 40) {
    fillColor = '#404040';
  }

  if (mouseX > 80 && 
      mouseX < 100 && 
      mouseY > 20 && 
      mouseY < 40) {
    fillColor = '#7f7f7f';
  }

  if (mouseX > 110 && 
      mouseX < 130 && 
      mouseY > 20 && 
      mouseY < 40) {
    fillColor = '#ffffff';
  }

  // eraser
  if (mouseX > 150 && 
      mouseX < 180 && 
      mouseY > 20 && 
      mouseY < 40) {
    fillColor = bgColor;
  }

  // brush sizes
  if (mouseX > 215 && 
      mouseX < 235 && 
      mouseY > 20 && 
      mouseY < 40) {
    brushSize = 10;
  }

  if (mouseX > 245 && 
      mouseX < 265 && 
      mouseY > 20 && 
      mouseY < 40) {
    brushSize = 20;
  }

  if (mouseX > 275 && 
      mouseX < 295 && 
      mouseY > 20 && 
      mouseY < 40) {
    brushSize = 40;
  }

  // brush shapes 
  if (mouseX > 330 && 
      mouseX < 350 && 
      mouseY > 20 && 
      mouseY < 40) {
    brushShape = 'square';
  }

  if (dist(mouseX, mouseY, 370, 30) < 10) {
    brushShape = 'circle';
  }
}

function drawBrush() {
  if (!mouseIsPressed) return;
  if (mouseY < uiHeight) return;

  fill(fillColor);
  noStroke();

  if (brushShape === 'circle') {
    circle(mouseX, mouseY, brushSize);
  }

  if (brushShape === 'square') {
    rect(mouseX - brushSize / 2, mouseY - brushSize / 2, brushSize, brushSize);
  }
}
