var sizeMode = 0;
var colorMode = 0;

var ptouchX;
var ptouchY;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("p5Canvas");
    noStroke();
}

function mousePressed() {

    if (sizeMode === 3) {
        sizeMode = 0;
    } else {
        sizeMode++;
    }
}


function draw() {
    background(229, 229, 228, 50);

    if (sizeMode === 0) {
        for (var i = 0; i < 6; i++) {
            fill(169, 56, 55);
            ellipse(mouseX + (random(-10, 10)), mouseY + (random(-10, 10)), random(1, 10));
        }
    } else if (sizeMode === 1) {
        for (var i = 0; i < 6; i++) {
            fill(169, 56, 55);
            ellipse(mouseX + (random(-20, 20)), mouseY + (random(-20, 20)), random(10, 20));
        }
    } else if (sizeMode === 2) {
        for (var i = 0; i < 6; i++) {
            fill(169, 56, 55);
            ellipse(mouseX + (random(-30, 30)), mouseY + (random(-30, 30)), random(21, 30));
        }
    } else {
        console.log('なにもしない');
    }

}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}