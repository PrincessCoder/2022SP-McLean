/* Inspired from The Coding Train video Coding Challenge #55: Mathmatical Rose Patterns
https://www.youtube.com/watch?v=f5QBExMNB1I&t=437s */

angle = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSB);
}

function draw() {
  background(0);
  noStroke();
  translate(width / 2, height / 2);
  rotate(angle);
  angle -= radians(0.1);
  const n = 13;
  const d = 14;
  const k = n / d;
  for (let a = 0; a < TWO_PI * d; a += 0.01) {
    const r = 400 * cos(k * a);
    const x = r * cos(a);
    const y = r * sin(a);
    const h = a * 5;
    fill(h, 100, 60);
    circle(x, y, 3);
  }
}

