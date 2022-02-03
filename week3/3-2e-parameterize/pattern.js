const { Linter } = require("eslint");

function setup() {
    createCanvas(600, 600);
}
function createTile(originX, originY, primaryColor, secondaryColor, dotColor, circleOutlineColor) {
    translate(originX, originY);
    fill(primaryColor);
    rect(0, 0, 200, 200);
    stroke(secondaryColor);
    strokeWeight(5);
    arc(100, 100, 125, 125, HALF_PI, PI);
    stroke(dotColor);
    strokeWeight(10);
    fill(circleOutlineColor);
    circle(60, 75, 25);
    circle(140, 75, 25);
}
function draw() {
    createTile(0, 0, 'cyan', 'red', 'white', 'black');
    createTile(0, 200, 'green', 'red', 'white', 'black');
    createTile(0, 200, 'blue', 'red','white', 'black');
    createTile(200, -400, 'cyan', 'red', 'white', 'black');
    createTile(0, 200, 'green', 'red', 'white', 'black');
    createTile(0, 200, 'blue', 'red', 'white', 'black');
    createTile(200, -400, 'cyan', 'red', 'white', 'black');
    createTile(0, 200, 'green', 'red', 'white', 'black');
    createTile(0, 200, 'blue', 'red', 'white', 'black');
    createTile(200, -400, 'cyan', 'red', 'white', 'black');


}