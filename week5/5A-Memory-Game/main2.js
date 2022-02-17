setup 

//const mySquare = {
//   x: 300,
//    y: 0,
//    width: 150,
//    height: 175
//  }
//  const speed = 1;
//  function setup() {
//    createCanvas(800, 800);
//  } 
class Rectangle {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.width = 100;
    this.height = 100;
  }
  show() {
    rect(this.x, this.y, this.width, this.height);
  }
  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
}
let xOffset = 50;
let yOffset = 100;
const myRectangleArray = [new Rectangle(100, 100), new Rectangle(500, 100)];
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0);
  for (let rectArrayIndex = 0; rectArrayIndex < myRectangleArray.length; rectArrayIndex++) {
    myRectangleArray[rectArrayIndex].show();
  }
}

  let cards = [];
  function draw() {
    background(0);
    noLoop();
    fill("white");
    translate(50, 275);
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < 5; i++) {
        const newCard = { x: i * 150, y: j * 150, width: 100, height: 100 }
        rect(newCard.x, newCard.y, newCard.width, newCard.height);
        cards.push(newCard);
      }
    }
    console.log('cards', cards);
  }

// if (
//     mouseX >= mySquare.x &&
//     mouseX <= (mySquare.x + mySquare.width) &&
//     mouseY >= mySquare.y &&
//      mouseY <= (mySquare.height + mySquare.y)) {
//          console.log("hit");
//          noLoop();
//      }