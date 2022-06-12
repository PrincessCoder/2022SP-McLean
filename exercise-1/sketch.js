Skip to content
Search or jump to…
Pull requests
Issues
Marketplace
Explore
 
@PrincessCoder 
PrincessCoder
/
S2022
Public
Code
Pull requests
Actions
Security
Insights
Settings
S2022/exercise-1/sketch.js /
@PrincessCoder
PrincessCoder Exercise 1
Latest commit f4543e9 3 days ago
 History
 1 contributor
25 lines (17 sloc)  353 Bytes


let pink;
let img;

function preload() {
  img = loadImage('Geo1.png');
}

function setup() {
  pixelDensity(1);
  createCanvas(img.width, img.height);

  pink = new Riso('fluorescentpink');
}

function draw() {
  background(255);

  clearRiso();

  let halftoned = halftoneImage(img, 'line', 3, 45, 90);

  pink.image(halftoned, 0, 0);

  drawRiso();
}
© 2022 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About
Loading complete