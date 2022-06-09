const { Linter } = require("eslint");

function setup() {
    createCanvas(200, 200);
}
function createTile() {
    translate(0, 0);
    fill('green');
    rect(0, 0, 200, 200);
    stroke('white');
    strokeWeight(5);
    arc(100, 100, 125, 125, HALF_PI, PI);
    stroke('white');
    strokeWeight(5);
    fill('white');
    circle(60, 75, 25);
    circle(140, 75, 25);
}
function draw() {
    createTile();
}