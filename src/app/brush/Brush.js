class Brush {
  constructor(app) {
    this.app = app;
    this.circle = new CircleBrush(app);
    this.square = new SquareBrush(app);
  }

  draw() {
    if (!mouseIsPressed) return;

    const active =
      this.app.brushShape === "circle" ? this.circle : this.square;

    if (!active.canDraw()) return;
    active.draw();
  }
}
