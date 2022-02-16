setup 

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
    background("black");
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