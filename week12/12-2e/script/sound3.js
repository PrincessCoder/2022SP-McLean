let song;

document.onclick = function() {
  audio.play();
}

function preload() {
  audio = loadSound('jazz.mp3');
}

function setup() {
  song = loadSound('sound/jazz.mp3');
  createCanvas(width, height);
  // song.loop();
  background(255, 0, 0);
}

function mousePressed() {
  if (song.isPlaying()) {
    // .isPlaying() returns a boolean
    song.stop();
    background(255, 0, 0);
  } else {
    song.play();
    background(0, 255, 0);
  }
}
