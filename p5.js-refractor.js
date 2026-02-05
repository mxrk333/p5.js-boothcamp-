let app;

function setup() {
  app = new PaintApp();
  app.setup();
}

function draw() {
  app.draw();
}


class PaintApp {
  constructor() {
    this.bgColor = 'white';
    this.fillColor = 'black';
    this.brushSize = 20;
    this.brushShape = 'circle';

    this.topUI = 80;
    this.sideUI = 40;
    this.bottomUI = 40;

    this.ui = new UI(this);
    this.brush = new Brush(this);
  }

  setup() {
    createCanvas(800, 500);
    background(this.bgColor);
  }

  draw() {
    this.ui.draw();
    this.handleInput();
    this.brush.draw();
  }

  handleInput() {
    if (!mouseIsPressed) return;
    this.ui.handleClick();
  }
}


class UI {
  constructor(app) {
    this.app = app;
  }

  draw() {
    this.drawLayout();
    this.drawControls();
  }

  drawLayout() {
    noStroke();
    fill(200);
    rect(0, 0, width, this.app.topUI);
    rect(0, 0, this.app.sideUI, height);
    rect(width - this.app.sideUI, 0, this.app.sideUI, height);
    rect(0, height - this.app.bottomUI, width, this.app.bottomUI);
  }

  drawControls() {
    this.drawColorButton(60, 20, 'red');
    this.drawColorButton(90, 20, 'blue');
    this.drawColorButton(120, 20, 'green');
    this.drawColorButton(150, 20, 'black');

    // Eraser
    this.highlight(this.app.fillColor === this.app.bgColor);
    fill(this.app.bgColor);
    rect(190, 20, 30, 20);
    noStroke();
    fill(0);
    textSize(11);
    text("Eraser", 187, 55);

    this.drawSizeButton(260, 20, 10, "S");
    this.drawSizeButton(290, 20, 20, "M");
    this.drawSizeButton(320, 20, 40, "L");

    // Shapes
    this.highlight(this.app.brushShape === 'square');
    fill(80);
    rect(360, 20, 20, 20);

    this.highlight(this.app.brushShape === 'circle');
    fill(80);
    circle(400, 30, 20);

    // Clear
    noStroke();
    fill(255);
    rect(440, 20, 40, 20);
    fill(0);
    text("Clear", 445, 35);
  }

  highlight(active) {
    if (active) {
      stroke(255, 200, 0);
      strokeWeight(3);
    } else {
      noStroke();
    }
  }

  drawColorButton(x, y, color) {
    this.highlight(this.app.fillColor === color);
    fill(color);
    rect(x, y, 20, 20);
  }

  drawSizeButton(x, y, size, label) {
    this.highlight(this.app.brushSize === size);
    fill(200);
    rect(x, y, 20, 20);
    noStroke();
    fill(0);
    text(label, x + 6, y + 15);
  }

  handleClick() {
    const a = this.app;

    if (this.hit(60, 20, 20, 20)) a.fillColor = 'red';
    if (this.hit(90, 20, 20, 20)) a.fillColor = 'blue';
    if (this.hit(120, 20, 20, 20)) a.fillColor = 'green';
    if (this.hit(150, 20, 20, 20)) a.fillColor = 'black';

    if (this.hit(190, 20, 30, 20)) a.fillColor = a.bgColor;

    if (this.hit(260, 20, 20, 20)) a.brushSize = 10;
    if (this.hit(290, 20, 20, 20)) a.brushSize = 20;
    if (this.hit(320, 20, 20, 20)) a.brushSize = 40;

    if (this.hit(360, 20, 20, 20)) a.brushShape = 'square';
    if (dist(mouseX, mouseY, 400, 30) < 10) a.brushShape = 'circle';

    if (this.hit(440, 20, 40, 20)) background(a.bgColor);
  }

  hit(x, y, w, h) {
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  }
}

class Brush {
  constructor(app) {
    this.app = app;
  }

  draw() {
    if (!mouseIsPressed) return;

    const a = this.app;

    if (
      mouseY < a.topUI ||
      mouseY > height - a.bottomUI ||
      mouseX < a.sideUI ||
      mouseX > width - a.sideUI
    ) return;

    if (a.brushShape === 'circle') {
      stroke(a.fillColor);
      strokeWeight(a.brushSize);
      line(pmouseX, pmouseY, mouseX, mouseY);
    }

    if (a.brushShape === 'square') {
      noStroke();
      fill(a.fillColor);
      rect(
        mouseX - a.brushSize / 2,
        mouseY - a.brushSize / 2,
        a.brushSize,
        a.brushSize
      );
    }
  }
}
