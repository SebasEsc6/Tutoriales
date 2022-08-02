/* eslint-disable no-undef, no-unused-vars */

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(2);
  // Put setup code here
}
let indice = 0;
const foo = "Hola";
function draw() {
  background(0, 0, 0);
  // Put drawings here
  fill(234, 31, 81);
  noStroke();
  rect(80, 80, 300, 250);
  fill(255);
  textStyle(BOLD);
  textSize(100);
  ellipse(350, 70, 200, 200);
  indice++;
  text(foo + indice, 90, 250);
}

// This Redraws the Canvas when resized
windowResized = function () {
  resizeCanvas(windowWidth, windowHeight);
};
