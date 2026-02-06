class CircleBrush extends BaseBrush {
  draw() {
    const a = this.app;
    stroke(a.fillColor);
    strokeWeight(a.brushSize);
    line(pmouseX, pmouseY, mouseX, mouseY);
  }
}
