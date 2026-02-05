const TEST_MODE = false;

// testable logic class
class Logic {
  static clamp(n, min, max) {
    if (n < min) return min;
    if (n > max) return max;
    return n;
  }

  static isInsideRect(px, py, x, y, w, h) {
    return px >= x && px <= x + w && py >= y && py <= y + h;
  }

  static isPaintAllowed(x, y, w, h, layout) {
    if (y < layout.top) return false;
    if (y > h - layout.bottom) return false;
    if (x < layout.side) return false;
    if (x > w - layout.side) return false;
    return true;
  }
}


// UI configuration

class UIConfig {
  static layout = { top: 80, side: 40, bottom: 40 };

  static colors = [
    { c: 'red', x: 60, y: 20 },
    { c: 'blue', x: 90, y: 20 },
    { c: 'green', x: 120, y: 20 },
    { c: 'black', x: 150, y: 20 },
    { c: 'white', x: 190, y: 20, eraser: true }
  ];

  static sizes = [
    { s: 10, x: 260, y: 20 },
    { s: 20, x: 290, y: 20 },
    { s: 40, x: 320, y: 20 }
  ];

  static shapes = {
    rect: { x: 360, y: 20 },
    circle: { x: 400, y: 30, r: 10 }
  };

  static clear = { x: 440, y: 20, w: 40, h: 20 };
}

// ==========================================================
// Brush
// ==========================================================
class Brush {
  constructor() {
    this.color = 'black';
    this.size = 20;
    this.shape = 'circle';
  }

  draw(x, y, px, py) {
    if (this.shape === 'circle') {
      stroke(this.color);
      strokeWeight(this.size);
      line(px, py, x, y);
    } else {
      noStroke();
      fill(this.color);
      rect(x - this.size / 2, y - this.size / 2, this.size, this.size);
    }
  }
}

// ==========================================================
// PAINT APP
// ==========================================================
class PaintApp {
  constructor() {
    this.brush = new Brush();
    this.bgColor = 'white';
  }

  init() {
    background(this.bgColor);
  }

  update() {
    if (!mouseIsPressed) return;
    this.handleInput();
    this.paint();
  }

  handleInput() {
    // Colors
    for (let btn of UIConfig.colors) {
      if (Logic.isInsideRect(mouseX, mouseY, btn.x, btn.y, 20, 20)) {
        this.brush.color = btn.eraser ? this.bgColor : btn.c;
        return;
      }
    }

    // Sizes
    for (let btn of UIConfig.sizes) {
      if (Logic.isInsideRect(mouseX, mouseY, btn.x, btn.y, 20, 20)) {
        this.brush.size = btn.s;
        return;
      }
    }

    // Shapes
    if (Logic.isInsideRect(mouseX, mouseY, UIConfig.shapes.rect.x, UIConfig.shapes.rect.y, 20, 20)) {
      this.brush.shape = 'square';
    }

    if (dist(mouseX, mouseY, UIConfig.shapes.circle.x, UIConfig.shapes.circle.y) < UIConfig.shapes.circle.r) {
      this.brush.shape = 'circle';
    }

    // Clear
    let c = UIConfig.clear;
    if (Logic.isInsideRect(mouseX, mouseY, c.x, c.y, c.w, c.h)) {
      background(this.bgColor);
    }
  }

  paint() {
    if (!Logic.isPaintAllowed(mouseX, mouseY, width, height, UIConfig.layout)) return;
    this.brush.draw(mouseX, mouseY, pmouseX, pmouseY);
  }

  renderUI() {
    let l = UIConfig.layout;

    noStroke();
    fill(200);
    rect(0, 0, width, l.top);
    rect(0, 0, l.side, height);
    rect(width - l.side, 0, l.side, height);
    rect(0, height - l.bottom, width, l.bottom);

    // Colors
    for (let btn of UIConfig.colors) {
      this.highlight(this.brush.color === btn.c);
      fill(btn.eraser ? this.bgColor : btn.c);
      rect(btn.x, btn.y, 20, 20);
      if (btn.eraser) {
        fill(0);
        textSize(11);
        text("Eraser", btn.x - 3, btn.y + 35);
      }
    }

    // Sizes
    for (let btn of UIConfig.sizes) {
      this.highlight(this.brush.size === btn.s);
      fill(200);
      rect(btn.x, btn.y, 20, 20);
      fill(0);
      text(btn.s === 10 ? "S" : btn.s === 20 ? "M" : "L", btn.x + 6, btn.y + 15);
    }

    // Shapes
    this.highlight(this.brush.shape === 'square');
    fill(80);
    rect(UIConfig.shapes.rect.x, UIConfig.shapes.rect.y, 20, 20);

    this.highlight(this.brush.shape === 'circle');
    circle(UIConfig.shapes.circle.x, UIConfig.shapes.circle.y, 20);

    // Clear
    noStroke();
    fill(255);
    rect(UIConfig.clear.x, UIConfig.clear.y, 40, 20);
    fill(0);
    text("Clear", UIConfig.clear.x + 5, UIConfig.clear.y + 15);
  }

  highlight(active) {
    if (active) {
      stroke(255, 200, 0);
      strokeWeight(3);
    } else {
      noStroke();
    }
  }
}

// ==========================================================
// TEST HARNESS (UNCHANGED BEHAVIOR)
// ==========================================================
let __t = { total: 0, passed: 0, failed: 0 };

function testIt(name, fn) {
  __t.total++;
  try { fn(); __t.passed++; console.log("✅", name); }
  catch (e) { __t.failed++; console.error("❌", name, e.message); }
}

function expect(v) {
  return { toBe: e => { if (v !== e) throw new Error(`${v} !== ${e}`); } };
}

function runTests() {
  testIt("clamp works", () => expect(Logic.clamp(100, 10, 40)).toBe(40));
  testIt("paint blocked in UI", () =>
    expect(Logic.isPaintAllowed(10, 10, 800, 500, UIConfig.layout)).toBe(false)
  );
  console.log(`Tests: ${__t.total} | ✅ ${__t.passed} | ❌ ${__t.failed}`);
}

// ==========================================================
// p5.js Sketch
// ==========================================================
let app;

function setup() {
  if (TEST_MODE) {
    noCanvas();
    runTests();
    noLoop();
    return;
  }
  createCanvas(800, 500);
  app = new PaintApp();
  app.init();
}

function draw() {
  if (TEST_MODE) return;
  app.update();
  app.renderUI();
}
