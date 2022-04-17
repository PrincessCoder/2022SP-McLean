var soundOne;
var soundTwo;
var soundThree;
var firstSound;
var secondSound;
var thirdSound;
var buttonOne;
var buttonTwo;
var buttonThree;
var sound;

 //Colorful Coding Project #9 https://www.youtube.com/watch?v=1-QXuR-XX_s
//Flow Fields https://observablehq.com/@esperanc/flow-fields

//empty array for the starting points
var points = []

//variable to control how fast angles change experiment with this value
var mult

//add randomness to colors two variables for each color
var r1
var r2
var g1
var g2
var b1
var b2

function loaded() {

    // firstSound = loadSound('./assets/soundOne.mp3');
    // secondSound = loadSound('./assets/soundTwo.mp3');
    // thirdSound = loadSound('./assets/soundThree.wav');
    // buttonOne = loadSound('./assets/soundOne.mp3');
    // buttonTwo = loadSound('./assets/soundTwo.mp3');
    // buttonThree = loadSound('./assets/soundThree.wav');
  }

function setup() {
    var cnv = createCanvas(windowWidth, windowHeight);
    background(255)
    angleMode(DEGREES)
    // cnv.mousePressed(stopSound);
    noiseDetail(1)
    // song = loadSound("assets/455428__ddmyzik__next-chapter-piano-ident.mp3");
    soundOne = loadSound('./assets/soundOne.mp3', loaded);
    soundTwo = loadSound('./assets/soundTwo.mp3', loaded);
    soundThree = loadSound('./assets/soundThree.wav', loaded);
    buttonOne = createButton(" Sound 1 ");
    buttonOne.mousePressed(togglePlaying);
    buttonTwo = createButton(" Sound 2 ");
    buttonTwo.mousePressed(togglePlaying);
    buttonThree = createButton(" Sound 3 ");
    buttonThree.mousePressed(togglePlaying);

    //density number of points in each row experiment with this value
    var density = 20
    //space is the disatnce betweeen each point
    var space = width / density

    //for loop will create all starting points
    for (var x = 0; x < width; x += space) {
        //the space variable is used in the for loops
        for (var y = 0; y < height; y += space) {
            //create a vector for each x and y coordinate
            //add randomness to starting points grid structure disappears
            var p = createVector(x + random(-45, 10), y + random(-30, 10))
            //add this vector to the points array
            points.push(p)
        }
    }
      
      function togglePlaying() {
          if (!soundOne.isPlaying()) {
            soundOne.loop();
            // soundTwo.stop();
            // soundThree.stop();
            buttonOne.html('1');
          } else {
            soundOne.pause();
            buttonOne.html(' Play 1 ');
          }
          if (!soundTwo.isPlaying()) {
            soundTwo.loop();
            // soundOne.stop();
            // soundThree.stop();
            buttonTwo.html('2');
          } else {
            soundTwo.pause();
            buttonTwo.html(' Play 2 ');
          }
          if (!soundThree.isPlaying()) {
            soundThree.loop();
            // soundOne.stop();
            // soundTwo.stop();
            buttonThree.html('3');
          } else {
            soundThree.pause();
            buttonThree.html(' Play 3 ');
          }
    }

    //to randomize lines shuffle the array
    shuffle(points, true)
    //for two lines at a time multply framecount


    //set values to a random value between 0 and 255
    r1 = random(255)
    r2 = random(255)
    g1 = random(255)
    g2 = random(255)
    b1 = random(255)
    b2 = random(255)

    //add randomness to the mult variable
    mult = random(0.001, 0.003)
}

function draw() {

//play sounds

function soundOne() {
    soundOne.play();
    soundOne.setVolume(.025);
    soundOne.loop();
}

function soundTwo() {
    soundTwo.play();
    soundTwo.setVolume(.1);
    soundTwo.loop();
}

function soundThree() {
    soundThree.play();
    soundThree.setVolume(.1);
    soundThree.loop();
    }

//stop sounds

function stopSound() {
    soundOne.stop();
    soundTwo.stop();
    soundThree.stop();
}

    noStroke()

    //make the lines appear one at a time 1 per frame
    if (frameCount * 2 <= points.length) {
        var max = frameCount
    } else {
        var max = points.length
    }

    //create another loop to iterate through the points
    for (var i = 0; i < max; i++) {

        // add some colors
        //variable to control the alpha value
        var r = map(points[i].x, 0, width, r1, r2)
        var g = map(points[i].y, 0, height, g1, g2)
        var b = map(points[i].x, 0, width, b1, b2)
        var alpha = map(dist(width / 2, height / 2, points[i].x, points[i].y), 0, 600, 255, 0)

        fill(r, g, b, alpha)
        //an angle at which each point will move
        //the noise function creates the flow field like structure
        var angle = map(noise(points[i].x * mult, points[i].y * mult), 0, 1, 0, 720)

        //add a vector to each point based on the angle
        points[i].add(createVector(cos(angle), sin(angle)))

        //limit flow field to a circle - use the distance between middle of the canvas and the point's coordinates
        if (dist(width / 2, height / 2, points[i].x, points[i].y) < 1000) {

            // create a circle at the x and y coord of each point
            ellipse(points[i].x, points[i].y, 2)
        }
    }
}

//save the canvas as an image
// function mouseClicked() {
//     saveCanvas('one', 'png')
// }
