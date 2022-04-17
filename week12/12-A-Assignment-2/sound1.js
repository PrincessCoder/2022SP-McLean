var song;
var button;

function setup() {
    createCanvas(200, 200);
    song = loadSound("./assets/455428__ddmyzik__next-chapter-piano-ident.mp3", loaded);
    button = createButton("play");
    button.mousePressed(togglePlaying);
    background(51);
}

function loaded() {
  console.log("loaded");
}

function togglePlaying() {
    if (!song.isPlaying()) {
      song.play();
      song.setVolume(0.3);
      button.html("stop");
    } else {
      song.stop();
      button.html("play");
    }
}