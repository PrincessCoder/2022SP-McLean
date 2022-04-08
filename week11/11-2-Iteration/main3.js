let rotateBy = 100;
function setup() {
    createCanvas(1920, 1080);
    background(22, 49, 158);
    angleMode(DEGREES);
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 780);
    console.log(alt);
    noFill();
    stroke(10, 150, 70);
    strokeWeight(1);
    //ellipse(150, 150 + alt, 150 / alt);
    quad(alt * 250, 31, 86, 20, 69, 63, 30, 76 * 2);
    stroke(235, 150, 47, 50);
    strokeWeight(4);
    circle(alt * 50, 30, 20 * 2);
    stroke(100, 184, 204, 50);
    strokeWeight(4);
    triangle(alt * 180, 15, 58, 20, 86, 75);
}
function draw() {
    translate(950, 540);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 10;
}
function mousePressed() {
    noLoop();
}
