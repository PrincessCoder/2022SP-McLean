const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = []
const gameState = {
    totalPairs: 5,
    flippedCards: [],
    numMatched: 0,
    attempts: 0,
    waiting: false
};
let cardFaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('images/cardback.jpg')
    cardFaceArray = [
        { image: loadImage('images/100-pexels-jess-loiterton-9269537.jpg'), sound: loadSound('assets/sound1.mp3')},
        { image: loadImage('images/100-pexels-jess-loiterton-9269539.jpg'),sound: loadSound('assets/sound2.mp3')},
        { image: loadImage('images/100-pexels-lukas-rodriguez-5618463.jpg'), sound: loadSound('assets/sound3.mp3')},
        { image: loadImage('images/100-pexels-travis-rupert-1032650.jpg'), sound: loadSound('assets/sound4.mp3')},
        { image: loadImage('images/hawaii.jpg'), sound: loadSound('assets/sound5.mp3')}
    ]
}
function setup() {
    createCanvas(800, 600);
    let selectedFaces = [];
    for (let z = 0; z < 5; z++) {
        const randomIdx = floor(random(cardFaceArray.length));
        const face = cardFaceArray[randomIdx];
        selectedFaces.push(face);
        selectedFaces.push(face);
        // remove the used cardface so it doesn't get used again.
        cardFaceArray.splice(randomIdx, 1);
    }
    selectedFaces = shuffleArray(selectedFaces);
    for (let j = 0; j < 2; j++) {
    for (let i = 0; i < 5; i++) {
        const faceImage = selectedFaces.pop();
        cards.push(new Card(startingX, startingY, faceImage.image, faceImage.sound));
        startingX += 120;
    }
    startingY += 150;
    startingX = 100;
    }
}

function draw () {
    background (0);
    if (gameState.numMatched === gameState.totalPairs) {
        fill('yellow');
        textSize(66);
        text('You Win!', 400, 475);
        noLoop();
    }
    for (let k = 0; k < cards.length; k++) {
        if (!cards[k].isMatch) {
            cards[k].face = DOWN;
        }
        cards[k].show();  
     }
     noLoop();
     gameState.flippedCards.length = 0;
     gameState.waiting = false;
     fill(255);
     textSize(36);
     text('Attempts ' + gameState.attempts, 100, 500);
     text('Matches '+ gameState.numMatched, 100, 450);
}

function mousePressed () {
    if (gameState.waiting) {
        return;
    }
    for (let k = 0; k < cards.length; k++) {
        // first check flipped cards length, and then we can trigger the flip
        if(gameState.flippedCards.length < 2 && cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
            gameState.flippedCards.push(cards[k]);
        }
    }
    if (gameState.flippedCards.length === 2) {
        gameState.attempts++;
        if (gameState.flippedCards[0].cardFaceImg === gameState.flippedCards[1].cardFaceImg) {
            //  cards match! Time to score!
            // mark cards as matched so they don't flip back
            gameState.flippedCards[0].isMatch = true;
            gameState.flippedCards[1].isMatch = true;
            // empty the flipped cards array
            gameState.flippedCards.length = 0;
            // increment the score
            gameState.numMatched++;
            loop();
        } else {
            gameState.waiting = true;
            const loopTimeout = window.setTimeout(() => {
                loop();
                window.clearTimeout(loopTimeout);
            }, 1000)
        }
    }
}

class Card {
    constructor(x, y, cardFaceImg, cardSound) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.face = DOWN;
        this.sound = cardSound;
        this.cardFaceImg = cardFaceImg;
        this.isMatch = false;
        this.show();
    }
    show () {
        if (this.face === UP || this.isMatch) {
            fill('white');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);
            this.sound.play();
        } else {
            fill('blue');
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardback, this.x, this.y);
        }
    }

    didHit (mouseX, mouseY) {
        if (mouseX >= this.x && mouseX <= this.x + this.width && mouseY >= this.y && mouseY <= this.y + this.height) {
            this.flip();
            return true;
        } else {
            return false;
        }
    }
    flip () {
        if (this.face === DOWN) {
            this.face = UP;
        } else {
            this.face = DOWN;
        }
        this.show();
    }
}
function shuffleArray (array) {
    let counter = array.length;
    while (counter > 0){
        const idx = Math.floor(Math.random() * counter);
        counter--;
        const temp = array[counter];
        array[counter] = array[idx];
        array[idx] = temp;
    }
    return array;
}

// from Ken
// class Card {
//     constructor(x, y, cardFaceImg, cardSound) {
//       this.x = x;
//       this.y = y;
//       this.width = 80;
//       this.height = 100;
//       this.face = DOWN;
//       this.sound = cardSound;
//       this.cardFaceImg = cardFaceImg;
//       this.isMatch = false;
//       this.show();
//     }
//     show() {
//       if (this.face === UP || this.isMatch) {
//         fill('#aaa');
//         rect(this.x, this.y, this.width, this.height, 10);
//         image(this.cardFaceImg, this.x + 4, this.y + 15);
//         this.sound.play();
//       } else {
//         fill('rgb(57.7%, 9.9%, 9.9%)');
//         rect(this.x, this.y, this.width, this.height, 10);
//         image(cardback, this.x + 10, this.y + 20);
//       }
//     }
//     didHit(mouseX, mouseY) {
//       if (mouseX >= this.x && mouseX <= this.x + this.width &&
//         mouseY >= this.y && mouseY <= this.y + this.height) {
//         this.flip();
//         return true;
//       } else {
//         return false;
//       }
//     }
//     flip() {
//       if (this.face === DOWN) {
//         this.face = UP;
//       } else {
//         this.face = DOWN;
//       }
//       this.show();
//     }
//   }
//   Collapse

  
  
  
  
  
  
  