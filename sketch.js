const TEST_MODE = true;
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

function mouseWheel(event) {
  if (TEST_MODE) return;
  app.updateBrushSize(event.delta);
  return false;
}
