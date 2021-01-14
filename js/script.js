"use strict";

// A page to check if the global pandemic is still going on
// muzak by : bensound.com
// design and code by Junior


// variables for the program

let titlePNG;
let titleStringx = undefined;
let titleStringy = undefined;


let stringx = undefined;
let stringy = undefined;

let state = `title`;

let letsfindout1;
let letsfindout1x;
let letsfindout1y;

let letsfindout2;

let arrows;

let sablier;

let cursor;

let click;
let muzak;
let printerSFX;

let noSorrygif;
let noSorrygifx = 3000;
let noSorrygify = 3000;

let didUKnow;

// preloading the media
function preload() {
  titlePNG = loadImage(`assets/images/title.png`);

  letsfindout1 = loadImage(`assets/images/letsfindout1.png`);
  letsfindout2 = loadImage(`assets/images/letsfindout2.png`);

  arrows = loadImage(`assets/images/1arrow.gif`);

  sablier = loadImage(`assets/images/sablier.gif`);

  cursor = loadImage(`assets/images/cursor.png`);

  click = loadSound(`assets/sounds/click.mp3`);

  muzak = loadSound(`assets/sounds/muzak.mp3`);

  noSorrygif = loadImage(`assets/images/sorry.gif`);

  printerSFX = loadSound(`assets/sounds/printer.mp3`)

  didUKnow = loadImage(`assets/images/diduknow.png`);

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}


function draw() {
  background(0);
  // rectangle greyish background for all the states
  backgroundColor();
  // switching between states
  stateSwitch();
  // pixelated white hand cursor
  handCursor();
}

// resizes the canvas so that things appear when making bigger
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// function that calls the 3 different states
function stateSwitch() {
  if (state === `title`) {
    title();
  } else if (state === `loading`) {
    loading();
  } else if (state === `noSorry`) {
    noSorry();
  }
}

// grey background
function backgroundColor() {
  // background rect
  push();
  noStroke();
  fillHsluv(0, 20, 90);
  rect(0, 0, windowWidth, windowHeight);
  pop();
}

// ending state with answer
function noSorry() {
  push()
  imageMode(CENTER);
  // gif with the answer that prints out
  image(noSorrygif, noSorrygifx, noSorrygify);
  pop();
  // for some reason my gif was showing the last frame for a second before starting
  // so I had to make it dissapear far away for that second and then back where
  // I wanted it to be shown
  setTimeout(noSorryFix, 500);

}

// title state with question and button to ask
function title() {

  titleStringx = width / 2;
  titleStringy = height * .3 - 100;

// display the different buttons and arrow
  displayButtons();
  push();
  imageMode(CENTER);
  image(titlePNG, titleStringx, titleStringy);
  pop();
}

// display the different buttons and arrow
function displayButtons() {

  letsfindout1x = width / 2;
  letsfindout1y = titleStringy + 450;


  push();
  imageMode(CENTER);
  image(arrows, width / 2, titleStringy + 250);
  pop();

  // make the button switch when hovering over it
  if (mouseX > letsfindout1x - letsfindout1.width / 2 &&
    mouseX < letsfindout1x + letsfindout1.width / 2 &&
    mouseY > letsfindout1y - letsfindout1.height / 2 &&
    mouseY < letsfindout1y + letsfindout1.height / 2) {
    push();
    imageMode(CENTER);
    image(letsfindout2, letsfindout1x, letsfindout1y)
    pop();
  }

  else {
    push();
    imageMode(CENTER);
    image(letsfindout1, letsfindout1x, letsfindout1y)
    pop();
  }

}

// pressing the button brings us to the second state of the program
function mousePressed() {
  if (mouseX > letsfindout1x - letsfindout1.width / 2 &&
    mouseX < letsfindout1x + letsfindout1.width / 2 &&
    mouseY > letsfindout1y - letsfindout1.height / 2 &&
    mouseY < letsfindout1y + letsfindout1.height / 2) {
    state = `loading`;
    click.play();
    muzak.loop();
    setTimeout(playPrinter, 20400);
  }
}

// loading state, where you wait for the answer if the pandemic is indeed finished
function loading() {
  push();
  imageMode(CENTER);
  image(didUKnow, width / 2, height / 2);
  pop();
  push();
  imageMode(CENTER);
  image(sablier, width / 2, height / 2);
  pop();
  setTimeout(function() {
    state = 'noSorry';
  }, 20400);

  letsfindout1x = 3000;
  letsfindout1y = 3000;

}

// white hand cursor
function handCursor() {
  push();
  imageMode(CENTER);
  image(cursor, mouseX, mouseY);
  pop();
}

// gif fix that shows the last frame. After appearing at (3000,3000) it appears back in the middle
function noSorryFix() {
  noSorrygifx = width / 2;
  noSorrygify = height / 2;
}

// bleak sound of printer while answer shows up
function playPrinter() {
  printerSFX.play();
  muzak.stop();
}

// functions to translate RGB to HSLuv for fill and stroke
function fillHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}
