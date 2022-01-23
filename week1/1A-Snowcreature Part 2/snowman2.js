let grid = undefined;
let stroke1 = prompt("enter a basic color in lowercase", "light blue");
let stroke2 = prompt("enter another basic color in lowercase", "blue");
let stroke3 = prompt("enter another basic color in lowercase", "orange");
function setup() {
    createCanvas(1000, 800);
    background("#ccebff");
    noStroke();
    grid = loadImage("/images/100px_grid.png");
}
function draw() {
    background("#ccebff");
    //bkg pattern row 1
    ellipse(100, 100, 200);
    ellipse(300, 100, 200);
    ellipse(500, 100, 200);
    ellipse(700, 100, 200);
    ellipse(900, 100, 200);
    //bkg pattern row 2
    ellipse(100, 300, 200);
    ellipse(300, 300, 200);
    ellipse(500, 300, 200);
    ellipse(700, 300, 200);
    ellipse(900, 300, 200);
    //bkg pattern row 3
    ellipse(100, 500, 200);
    ellipse(300, 500, 200);
    ellipse(500, 500, 200);
    ellipse(700, 500, 200);
    ellipse(900, 500, 200);
    //bkg pattern row 3
    ellipse(100, 700, 200);
    ellipse(300, 700, 200);
    ellipse(500, 700, 200);
    ellipse(700, 700, 200);
    ellipse(900, 700, 200);
    //snowman legs
    fill("#f1f1f1");
    stroke(stroke1);
    //left leg
    rect(400, 600, 100);
    //right leg
    rect(500, 600, 100);
    //left arm
    rect(300, 100, 100, 250);
    //right arm
    rect(600, 300, 100, 250);
    //left hand
    ellipse(350, 100, 100);
    //right hand
    ellipse(650, 550, 100);
    //body
    ellipse(500, 450, 350, 400);
    //head
    ellipse(500, 200, 200);
    //hat brim
    stroke(stroke2);
    strokeWeight(10);
    line(400, 120, 600, 120);
    //hat body
    quad(450, 50, 550, 50, 550, 120, 450, 120);
    stroke(stroke3);
    strokeWeight(10);
    point(425, 180);
    point(575, 180);
    //mouth
    noFill();
    strokeWeight(10);
    arc(500, 210, 60, 60, 0, PI);

}