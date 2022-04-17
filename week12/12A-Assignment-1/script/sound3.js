let song;

var audio = "retired.mp3";
var audio2 = "club.mp3";
var audio3 = "elevator.mp3";
var audio4 = "business.mp3";

// document.onclick = function() {
//   audio.play();
// }

function retired(){
  console.log("retired clicked");
  const retiredSound=document.getElementById('audio');
  if (retiredSound.isPlaying()){
    retiredSound.stop();
  } else {
    retiredSound.play();
  }
}

function preload() {
  audio = loadSound('retired.mp3');
  audio = loadSound('club.mp3');
  audio = loadSound('elevator.mp3');
  audio = loadSound('business.mp3');
}

function setup() {
  audio = loadSound('sound/jazz.mp3');
  createCanvas(width, height);
  // song.loop();
  background(255, 0, 0);
}

function mousePressed() {
  if (audio.isPlaying()) {
    // .isPlaying() returns a boolean
    audio.stop();
    background(255, 0, 0);
  } else {
    audio.play();
    background(0, 255, 0);
  }
}
