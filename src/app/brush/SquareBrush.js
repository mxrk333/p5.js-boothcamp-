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
