// setup

// const Card = {
//     x: 300,
//     y: 0,
//     width: 100,
//     height: 100
// }

class Card {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
    }
    move() {
        this.x = this.x + random(-3, 3);
        this.y = this.y + random(-3, 3);
    }
    show() {
        fill(255);
        rect(this.x, this.y, this.width, this.height);
    }
}
const myCardArray = [new Card(100, 100), new Card(500, 100)];
const speed = 1;
function setup() {
    createCanvas(800, 800);
}
    let cards = [];
    function draw() {
      background(0);
      noLoop();
      fill("white");
      translate(50, 275);
      for (let rectArrayIndex = 0; rectArrayIndex < myRectangleArray.length; rectArrayIndex++) {
        myRectangleArray[rectArrayIndex].move();
        myRectangleArray[rectArrayIndex].show();
      }
}

