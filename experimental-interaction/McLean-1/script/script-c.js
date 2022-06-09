let img;
function preload() {
  img = loadImage('assets/laDefense.jpg');
}
function setup() {
  image(img, 0, 0);
}

function setup() {
    // here we use a callback to display the image after loading
    loadImage('assets/laDefense.jpg', img => {
      image(img, 0, 0);
    });
  }

  var cols = 100;
var rows = 100;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(215, 72, 77);
  angleMode(DEGREES);
  smooth();


}

function draw() {
  
  //draw dots
  for (var c = 0; c < cols; c++){
      for (var r = 0; r < rows; r++){
        
        push();
        var x = (c * 30);
        var y = (r * 30);
        noStroke();
        fill(248, 146, 146);
        ellipse(x, y, 10, 10);
        pop();

      }// end bracket for rows
    
  }//end bracket for cols
  
  
  
  //draw flowers
  for (var c2 = 0; c2 < cols; c2++){
      for (var r2 = 0; r2 < rows; r2++){
      var x2 = (c2 * 30*2);
      var y2 = (r2 * 30*2);
  
  //Flower petals
  push();
  noStroke();
  translate(15,15);
  fill(247, 233, 231);
  ellipse(x2, y2,30,30);
  pop();
  
  push();
  noStroke();
  translate(-15,15);
  fill(247, 233, 231);
  ellipse(x2, y2,30,30);
  pop();
  
  push();
  noStroke();
  translate(-15,-15);
  fill(247, 233, 231);
  ellipse(x2, y2,30,30);
  pop();
  
  push();
  noStroke();
  translate(15,-15);
  fill(247, 233, 231);
  ellipse(x2, y2,30,30);
  pop();
  
  //center of flower
  
  push();
  noStroke();
  fill(250, 164, 70);
  ellipse(x2, y2,30,30);
  pop();
  
  noLoop();
        
      }//end bracket for flower rows
  } //end bracket for flower cols
  
  
}// end bracket for draw

//noprotect

//tint code

let img;
function preload() {
  img = loadImage('assets/laDefense.jpg');
}
function setup() {
  image(img, 0, 0);
  tint(255, 126); // Apply transparency without changing color
  image(img, 50, 0);
}