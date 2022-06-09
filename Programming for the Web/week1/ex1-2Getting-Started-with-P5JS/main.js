const width = window.prompt("Please enter a number for the width of the ellipse.");
const height = window.prompt("Please enter a number for the height of the ellipse. Draw by pressing on your mouse.");
function setup(){
    createCanvas(1920, 1080)
    background(0,0,255);
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