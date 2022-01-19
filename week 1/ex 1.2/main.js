const width = window.prompt("Please enter a number for the width of the ellipse.");
const height = window.prompt("Please enter a number for the height of the ellipse. Draw by pressing on your mouse in the gray rectangle.");
function setup(){
    createCanvas(480, 120)
    background(204);
}
function draw(){
    if (mouseIsPressed){
        fill(255);
        stroke(0);
    } else {
        noStroke();
        noFill();
    }
    ellipse(mouseX, mouseY, width, height);
}