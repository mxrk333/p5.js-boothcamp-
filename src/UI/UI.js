
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

    fill(255);
    rect(190, 20, 30, 20);
    fill(0);
    text("E", 200, 35);

    fill(255);
    rect(260, 20, 40, 20);
    fill(0);
    text("Clear", 265, 35);

    fill(0);
    text(`Size: ${Math.round(this.app.brushSize)}`, 320, 35);
  }

  drawColorButton(x, y, color) {
    fill(color);
    rect(x, y, 20, 20);
  }

  handleClick() {
    if (!mouseIsPressed) return;
    const a = this.app;

    if (this.hit(60, 20, 20, 20)) a.fillColor = "red";
    if (this.hit(90, 20, 20, 20)) a.fillColor = "blue";
    if (this.hit(120, 20, 20, 20)) a.fillColor = "green";
    if (this.hit(150, 20, 20, 20)) a.fillColor = "black";

    if (this.hit(190, 20, 30, 20)) a.fillColor = a.bgColor;
    if (this.hit(260, 20, 40, 20)) background(a.bgColor);
  }

  drawBrushPreview() {
    if (
      mouseX < this.app.sideUI ||
      mouseX > width - this.app.sideUI ||
      mouseY < this.app.topUI ||
      mouseY > height - this.app.bottomUI
    ) return;

    noFill();
    stroke(0);
    circle(mouseX, mouseY, this.app.brushSize);
  }

  hit(x, y, w, h) {
    return mouseX > x && mouseX < x + w && mouseY > y && mouseY < y + h;
  }
}
