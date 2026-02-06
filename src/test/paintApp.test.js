function runTests() {
  test("Brush size increases dynamically", () => {
    const app = new PaintApp();
    app.updateBrushSize(-100);
    expect(app.brushSize > 20).toBe(true);
  });

  test("Brush size is clamped", () => {
    const app = new PaintApp();
    app.updateBrushSize(99999);
    expect(app.brushSize <= 80).toBe(true);
  });

  summary();
}
