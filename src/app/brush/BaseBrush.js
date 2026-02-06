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
