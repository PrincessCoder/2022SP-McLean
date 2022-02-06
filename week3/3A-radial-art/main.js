let rotateBy = 5;
function setup() {
    createCanvas(600, 600);
    background(162);
    angleMode(DEGREES);
}
function makeArm(rotateBy) {
    let alt = Math.round(rotateBy / 730);
    console.log(alt);
    noFill();
    stroke(72);
    strokeWeight(1);
    //ellipse(150, 150 + alt, 150 / alt);
    bezier(alt * 50, alt * 50, 50, 50, 720, 90, 60, 15);
}
function draw() {
    translate(300, 300);
    rotate(rotateBy);
    makeArm(rotateBy);
    rotateBy += 5;
}
function mousePressed() {
    noLoop();
}