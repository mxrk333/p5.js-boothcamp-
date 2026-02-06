let __tests = { total: 0, passed: 0 };

function test(name, fn) {
  __tests.total++;
  try {
    fn();
    __tests.passed++;
    console.log("✅", name);
  } catch (e) {
    console.error("❌", name, e.message);
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
    `Tests: ${__tests.total}, Passed: ${__tests.passed}, Failed: ${__tests.total - __tests.passed}`
  );
}
