const num = 64,
  colors = ["#ffbe0b", "#fb5607", "#ff006e", "#8338ec", "#3a86ff"];
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
}

function draw() {
  blendMode(ADD);
  background(255);

  rotateX(radians(frameCount));

  for (let i = 0; i < num; i++) {
    noFill();
    // fill(colors[colors.length - 1 - i%colors.length]);
    strokeWeight((i / num) * 3.2);
    stroke(colors[i % colors.length]);
    rotate(radians(frameCount / 32));
    rotateX(radians(frameCount) / 32);
    rotateY(radians(frameCount) / 160);
    rotateZ(radians(frameCount) / 16);
    beginShape();
    for (let j = 0; j < TAU; j += PI / (num - i + 1)) {
      //(num-i+1)
      const r = i * 3.2;
      const x = r * cos(j);
      const y = r * sin(j);
      const z = sin(radians(frameCount * 3.2 + i * 2)) * 120;
      vertex(x, y, z);
    }
    endShape(CLOSE);
  }
}
