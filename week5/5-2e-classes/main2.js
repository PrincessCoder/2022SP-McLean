// class Rectangle {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//       this.width = 100;
//       this.height = 100;
//     }
//     show() {
//         rect(this.x, this.y, this.width, this.height, 10);
//         Image(this.cardFaceImg, this.x + 4, this.y +15);
//       } 
//     }

//     function setup() {
//       createCanvas(400, 400);
//     }
    
//     function draw() {
//       background(0);
//       Rectangle(255);
//       for (let rectArrayIndex = 0; rectArrayIndex < myRectangleArray.length; rectArrayIndex++) {
//         myRectangleArray[rectArrayIndex].move();
//         myRectangleArray[rectArrayIndex].show();
//       }
//     }

// Week 4 Progress
const mySquare = {
    x: 300,
    y: 0,
    width: 150,
    height: 175
  }
  const speed = 1;
  function setup() {
    createCanvas(800, 800);
  
  }
  let cards = [];
  function draw() {
    background(0);
    noLoop();
    fill(255);
    translate(50, 275);
    for (let j = 0; j < 2; j++) {
      for (let i = 0; i < 5; i++) {
        const newCard = { x: i * 150, y: j * 150, width: 100, height: 100 }
        rect(newCard.x, newCard.y, newCard.width, newCard.height);
        cards.push(newCard);
      }
    }
  }


    