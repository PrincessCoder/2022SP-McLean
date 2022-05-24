// By Roni Kaufman
// https://ronikaufman.github.io/
// https://twitter.com/KaufmanRoni

let palette = ["#4464a1", "#56a1c4", "#ee726b", "#ffc5c7", "#fef9c6", "#df5f50", "#5a3034", "#f5b800", "#ffcc4d", "#4b8a5f", "#e590b8"];

function setup() {
	createCanvas(windowWidth, windowHeight);
	noLoop();
	noStroke();
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
  }

function draw() {
	let s = width/5;
	
	for (let x = 0; x < width; x += s) {
    for (let y = 0; y < height; y += s) {
			if (random() < 1/2) {
				makeTile(x, y, s/2);
				makeTile(x+s/2, y, s/2);
				makeTile(x, y+s/2, s/2);
				makeTile(x+s/2, y+s/2, s/2);
			} else {
      	makeTile(x, y, s);
			}
		}
  }
}

function makeTile(x, y, s) {
	shuffle(palette, true);
	fill(palette[0]);
	square(x, y, s);
	push();
	translate(x+s/2, y+s/2);
	rotate(random([0, PI/2, PI, 3*PI/2]));
	fill(palette[1]);
	let r = floor(random(4));
	if (r == 0) {
		arc(-s/2, 0, s, s, -PI/2, PI/2);
	} else if (r == 1) {
		rect(-s/2, -s/2, s/2, s);
	} else if (r == 2) {
		triangle(-s/2, -s/2, s/2, -s/2, -s/2, s/2);
	}
	pop();
}

function keyPressed() {
  if (key == " ") {
    redraw();
  }
}