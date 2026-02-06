class PaintApp {
  constructor() {
    this.bgColor = "white";
    this.fillColor = "black";

    this.brushSize = 20;
    this.brushShape = "circle";

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
    this.ui.drawBrushPreview();
  }

  updateBrushSize(delta) {
    this.brushSize -= delta * 0.02;
    this.brushSize = constrain(this.brushSize, 2, 80);
  }
}
