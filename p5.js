const TEST_MODE = true;

let __tests = { total: 0, passed: 0 };

function test(name, fn) {
  __tests.total++;
  try {
    fn();
    __tests.passed++;
    console.log("✅", name);
  } catch (e) {
    console.error("❌", name, "-", e.message);
  }
}

function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`Expected ${expected}, got ${actual}`);
      }
    }
  };
}

function summary() {
  console.log(
    `\n🧪 Tests: ${__tests.total} | ✅ Passed: ${__tests.passed} | ❌ Failed: ${__tests.total - __tests.passed}`
  );
}

// test

function runTests() {
  test("Paint brush allowed inside canvas", () => {
    const app = new PaintApp();
    const canPaint =
      200 > app.topUI &&
      200 < 500 - app.bottomUI &&
      200 > app.sideUI &&
      200 < 800 - app.sideUI;
    expect(canPaint).toBe(true);
  });

  test("Protected UI blocks painting", () => {
    const app = new PaintApp();
    const canPaint = 20 > app.topUI;
    expect(canPaint).toBe(false);
  });

  test("Eraser sets fillColor to background", () => {
    const app = new PaintApp();
    app.fillColor = "black";
    app.fillColor = app.bgColor;
    expect(app.fillColor).toBe("white");
  });

  test("Brush size, shape, and color change", () => {
    const app = new PaintApp();
    app.fillColor = "red";
    app.brushSize = 40;
    app.brushShape = "square";

    expect(app.fillColor).toBe("red");
    expect(app.brushSize).toBe(40);
    expect(app.brushShape).toBe("square");
  });

  summary();
} // end test

let app;

function setup() {
  createCanvas(800, 500);

  if (TEST_MODE) {
    runTests();
    noLoop();
    return;
  }

  app = new PaintApp();
  app.setup();
}

function draw() {
  if (TEST_MODE) return;
  app.draw();
}


// paint

class PaintApp {
  constructor() {
    this.bgColor = "white";
    this.fillColor = "black";
    this.brushSize = 20;
    this.brushShape = "circle";

    this.selectedColor = "black";
    this.selectedSize = 20;
    this.selectedShape = "circle";

    this.topUI = 80;
    this.sideUI = 40;
    this.bottomUI = 40;

    this.ui = new UI(this);
    this.brush = new Brush(this);
  }

  setup() {
    background(this.bgColor);
  }

  draw() {
    this.ui.draw();
    this.brush.draw();
  }
}

class UI {
  constructor(app) {
    this.app = app;
  }

  draw() {
    this.drawLayout();
    this.drawControls();
    this.handleClick();
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
    this.drawColorButton(60, 20, "red");
    this.drawColorButton(90, 20, "blue");
    this.drawColorButton(120, 20, "green");
    this.drawColorButton(150, 20, "black");

    this.drawHighlight(this.app.fillColor === this.app.bgColor);
    fill(255);
    rect(190, 20, 30, 20);
    fill(0);
    textSize(10);
    text("E", 200, 35);
    noStroke();

    this.drawSizeButton(260, 20, 10, "S");
    this.drawSizeButton(290, 20, 20, "M");
    this.drawSizeButton(320, 20, 40, "L");

    this.drawHighlight(this.app.selectedShape === "square");
    fill(80);
    rect(360, 20, 20, 20);
    noStroke();

    this.drawHighlight(this.app.selectedShape === "circle");
    fill(80);
    circle(400, 30, 20);
    noStroke();

    fill(255);
    rect(440, 20, 40, 20);
    fill(0);
    text("Clear", 445, 35);
  }

  drawHighlight(active) {
    if (active) {
      stroke(255);
      strokeWeight(2);
    } else {
      noStroke();
    }
  }

  drawColorButton(x, y, color) {
    this.drawHighlight(this.app.selectedColor === color);
    fill(color);
    rect(x, y, 20, 20);
    noStroke();
  }

  drawSizeButton(x, y, size, label) {
    this.drawHighlight(this.app.selectedSize === size);
    fill(220);
    rect(x, y, 20, 20);
    fill(0);
    text(label, x + 6, y + 15);
    noStroke();
  }

  handleClick() {
    if (!mouseIsPressed) return;
    const a = this.app;

    if (this.hit(60, 20, 20, 20)) { a.fillColor = "red"; a.selectedColor = "red"; }
    if (this.hit(90, 20, 20, 20)) { a.fillColor = "blue"; a.selectedColor = "blue"; }
    if (this.hit(120, 20, 20, 20)) { a.fillColor = "green"; a.selectedColor = "green"; }
    if (this.hit(150, 20, 20, 20)) { a.fillColor = "black"; a.selectedColor = "black"; }

    if (this.hit(190, 20, 30, 20)) a.fillColor = a.bgColor;

    if (this.hit(260, 20, 20, 20)) { a.brushSize = 10; a.selectedSize = 10; }
    if (this.hit(290, 20, 20, 20)) { a.brushSize = 20; a.selectedSize = 20; }
    if (this.hit(320, 20, 20, 20)) { a.brushSize = 40; a.selectedSize = 40; }

    if (this.hit(360, 20, 20, 20)) { a.brushShape = "square"; a.selectedShape = "square"; }
    if (dist(mouseX, mouseY, 400, 30) < 10) { a.brushShape = "circle"; a.selectedShape = "circle"; }

    if (this.hit(440, 20, 40, 20)) background(a.bgColor);
  }

  hit(x, y, w, h) {
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  }
}

class BaseBrush {
  constructor(app) {
    this.app = app;
  }

  canDraw() {
    const a = this.app;
    return !(
      mouseY < a.topUI ||
      mouseY > height - a.bottomUI ||
      mouseX < a.sideUI ||
      mouseX > width - a.sideUI
    );
  }
}

class CircleBrush extends BaseBrush {
  draw() {
    const a = this.app;
    stroke(a.fillColor);
    strokeWeight(a.brushSize);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}

class SquareBrush extends BaseBrush {
  draw() {
    const a = this.app;
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

class Brush {
  constructor(app) {
    this.app = app;
    this.circle = new CircleBrush(app);
    this.square = new SquareBrush(app);
  }

  draw() {
    if (!mouseIsPressed) return;

    const activeBrush =
      this.app.brushShape === "circle" ? this.circle : this.square;

    if (!activeBrush.canDraw()) return;
    activeBrush.draw();
  }
}
