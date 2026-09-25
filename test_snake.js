// Test runner for Nostalgia Snake core mechanics
const fs = require("fs");
const vm = require("vm");

const html = fs.readFileSync("./index.html", "utf-8");
const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  console.error("FAIL: No <script> tag found in index.html");
  process.exit(1);
}

// Minimal DOM Mock for Node.js
const mockStorage = {};
const mockElement = () => ({
  textContent: "",
  className: "",
  width: 460,
  height: 460,
  style: {
    setProperty: () => {},
  },
  classList: {
    add: () => {},
    remove: () => {},
    toggle: () => {},
    contains: () => false,
  },
  setAttribute: () => {},
  getAttribute: () => null,
  addEventListener: () => {},
  getContext: () => ({
    clearRect: () => {},
    fillRect: () => {},
    beginPath: () => {},
    moveTo: () => {},
    lineTo: () => {},
    stroke: () => {},
    fill: () => {},
    arc: () => {},
    save: () => {},
    restore: () => {},
    scale: () => {},
    setTransform: () => {},
    translate: () => {},
    closePath: () => {},
    fillText: () => {},
  }),
  offsetWidth: 100,
  value: "",
});

const sandbox = {
  document: {
    getElementById: (id) => mockElement(),
    body: mockElement(),
    documentElement: mockElement(),
  },
  window: {
    devicePixelRatio: 2,
    addEventListener: () => {},
  },
  navigator: {
    vibrate: () => {},
  },
  localStorage: {
    getItem: (k) => mockStorage[k] || null,
    setItem: (k, v) => { mockStorage[k] = String(v); },
  },
  getComputedStyle: () => ({
    getPropertyValue: () => "#000000",
  }),
  requestAnimationFrame: () => 1,
  performance: {
    now: () => Date.now(),
  },
  module: { exports: {} },
  setTimeout: () => {},
  console,
};

vm.createContext(sandbox);
vm.runInContext(scriptMatch[1], sandbox);

const { _test } = sandbox.module.exports;
if (!_test) {
  console.error("FAIL: _test export missing");
  process.exit(1);
}

let passed = 0;
let failed = 0;
function assert(condition, message) {
  if (condition) {
    console.log(`  ✓ ${message}`);
    passed++;
  } else {
    console.error(`  ✗ FAIL: ${message}`);
    failed++;
  }
}

console.log("Running Nostalgia Snake logic tests...");

// Test 1: Initial state after reset
_test.reset();
let s = _test.state();
assert(s.alive === true, "Snake is alive on reset");
assert(s.score === 0, "Score is 0 on reset");
assert(s.snake.length === 3, "Snake initial length is 3");
assert(s.dir.x === 1 && s.dir.y === 0, "Initial direction is right");

// Test 2: Step moves snake forward
const headBefore = { ...s.snake[0] };
_test.step();
s = _test.state();
assert(s.snake[0].x === headBefore.x + 1 && s.snake[0].y === headBefore.y, "Snake stepped right");
assert(s.snake.length === 3, "Length remained constant while moving");

// Test 3: Input queue and 180-degree protection
_test.requestDirection({ x: -1, y: 0 }); // attempt immediate 180 reverse
assert(s.inputQueue.length === 0, "180-degree reversal is blocked");

_test.requestDirection({ x: 0, y: 1 }); // turn down
_test.step();
s = _test.state();
assert(s.dir.x === 0 && s.dir.y === 1, "Snake turned down");

// Test 4: Eating food
_test.setSnake([{ x: 10, y: 10 }, { x: 10, y: 9 }, { x: 10, y: 8 }]);
_test.requestDirection({ x: 0, y: 1 }); // moving down to (10, 11)
_test.setFood({ x: 10, y: 11 });
_test.step();
s = _test.state();
assert(s.snake.length === 4, "Snake grew after eating food");
assert(s.score > 0, "Score increased after eating food");

// Test 5: Classic Wall collision
_test.setMode("classic");
_test.setSnake([{ x: 22, y: 10 }, { x: 21, y: 10 }, { x: 20, y: 10 }]);
_test.requestDirection({ x: 1, y: 0 }); // hitting right boundary at x=23
_test.step();
s = _test.state();
assert(s.alive === false, "Snake died hitting wall in Classic mode");

// Test 6: Wrap-around / Portal mode
_test.reset();
_test.setMode("wrap");
_test.setSnake([{ x: 22, y: 10 }, { x: 21, y: 10 }, { x: 20, y: 10 }]);
_test.requestDirection({ x: 1, y: 0 }); // step past right edge
_test.step();
s = _test.state();
assert(s.alive === true, "Snake alive after crossing boundary in Wrap mode");
assert(s.snake[0].x === 0, "Snake wrapped around to x=0");

// Test 7: Self-collision
_test.reset();
_test.setMode("classic");
_test.setSnake([
  { x: 5, y: 5 },
  { x: 4, y: 5 },
  { x: 4, y: 6 },
  { x: 5, y: 6 },
  { x: 6, y: 6 }
]);
_test.requestDirection({ x: 0, y: 1 }); // moves to (5, 6) which is self
_test.step();
s = _test.state();
assert(s.alive === false, "Snake died on self-collision");

console.log(`\nTest results: ${passed} passed, ${failed} failed`);
if (failed > 0) process.exit(1);
