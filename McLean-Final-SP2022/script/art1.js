let x;
let y;

function centerCanvas() {
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
}

function setup() {
    cnv = createCanvas(500, 500);
    centerCanvas();
    background('#b067ef');
    noStroke();
    angleMode(DEGREES);
    noLoop();
}

function createArch(x, y, width, height) {
    fill(0, 0, 0, 50)
    noStroke();
    arc(x, y, width, width, 180, 0);
    rect(x - width/2, y, width, height)
}

function draw() {
    x = 250; 
    y = 400;
    width = 100; 
    height = 100;
    for (var i = 0; i < 7; i++) {
        createArch(250, y, width, height);
        y -= 40;
        width += 20;
        height += 30;
    }
}
