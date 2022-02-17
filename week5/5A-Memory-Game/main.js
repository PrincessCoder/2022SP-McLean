const DOWN = 'down';
const UP = 'up';
let startingX = 100;
let startingY = 100;
let cards = []
const gameState = {

};
let cardFaceArray = [];
let cardback;
function preload() {
    cardback = loadImage('images/cardback.jpg')
    cardFaceArray = [
        loadImage('images/100-pexels-jess-loiterton-9269537.jpg'),
        loadImage('images/100-pexels-jess-loiterton-9269539.jpg'),
        loadImage('images/100-pexels-lukas-rodriguez-5618463.jpg'),
        loadImage('images/100-pexels-travis-rupert-1032650.jpg'),
        loadImage('images/hawaii.jpg')
    ]
}
function setup() {
    createCanvas(800, 600);
    background(0);
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
        cards.push(new Card(startingX, startingY, faceImage));
        startingX += 120;
    }
    startingY += 150;
    startingX = 100;
    }
}

function mousePressed() {
    for (let k = 0; k < cards.length; k++) {
        if(cards[k].didHit(mouseX, mouseY)) {
            console.log('flipped', cards[k]);
        }
    }
}

class Card {
    constructor (x, y, cardFaceImg) {
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 100;
        this.face = DOWN;
        this.cardFaceImg = cardFaceImg;
        this.show();
    }
    show () {
        if (this.face === DOWN) {
            fill('blue');
            rect(this.x, this.y, this.width, this.height, 10);
            image(cardback, this.x, this.y);
        } else {
            fill('white');
            rect(this.x, this.y, this.width, this.height, 10);
            image(this.cardFaceImg, this.x, this.y);
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
