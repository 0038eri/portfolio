var particles = [];

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5Canvas");
    noStroke();
}

function draw() {
    background(229, 229, 228);

    if (mouseIsPressed) {
        for (var i = 0; i < 20; i++) {
            particles.push(new Particle(mouseX, mouseY));
        }
    }

    for (var i = 0; i < particles.length; i++) {
        particles[i].move();
        particles[i].draw();
        if (particles[i].lifetime < 0) {
            particles.splice(i, 1);
        }
    }
}

class Particle {
    constructor(x, y) {
        this.position = createVector(x, y);
        this.speed = random(5, 10);
        this.velocity = createVector(0, 0);
        this.rotation = random(3.5, 6);
        this.rotateSpeed = 0;
        this.rotateSpeedAdd = random(-0.001, 0.001);
        this.size = random(1, 20);
        this.opacity = 255;
        this.lifetime = random(30, 60);
    }

    move() {
        this.speed *= 0.94;
        this.rotateSpeed += this.rotateSpeedAdd;
        this.rotation += this.rotateSpeed;
        this.velocity.x = this.speed * cos(this.rotation);
        this.velocity.y = this.speed * sin(this.rotation);
        this.position.add(this.velocity);
        this.position.y += 1.5;
        this.size *= 0.995;
        this.opacity -= 4;
        this.lifetime--;
    }

    draw() {
        fill(169, 56, 55, this.opacity);
        ellipse(this.position.x, this.position.y, this.size, this.size);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}