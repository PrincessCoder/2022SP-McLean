let system;

function setup() {
  createCanvas(720, 400);
  system = new ParticleSystem(createVector(width / 50));
}

function draw() {
  background(255);
  system.addParticle();
  system.run();
}

// A simple Particle class
let Particle = function(position) {
  this.acceleration = createVector(0, 0.01);
  this.velocity = createVector(random(-1, 1), random(-1, 1));
  this.position = position.copy();
  this.lifespan = 1000;
};

Particle.prototype.run = function() {
  this.update();
  this.display();
};

// Method to update position
Particle.prototype.update = function(){
  this.velocity.add(this.acceleration);
  this.position.add(this.velocity);
  this.lifespan -= 1;
};

// Method to display
Particle.prototype.display = function() {
  noStroke ();
  fill(255, 0, 0, 50);
  ellipse(this.position.x, this.position.y, 100, 100);
};

// Is the particle still useful?
Particle.prototype.isDead = function(){
  return this.lifespan < 0;
};

let ParticleSystem = function(position) {
  this.origin = position.copy();
  this.particles = [];
};

ParticleSystem.prototype.addParticle = function() {
  this.particles.push(new Particle(this.origin));
};

ParticleSystem.prototype.run = function() {
  for (let i = this.particles.length-1; i >= 0; i--) {
    let p = this.particles[i];
    p.run();
    if (p.isDead()) {
      this.particles.splice(i, 20);
    }
  }
};
