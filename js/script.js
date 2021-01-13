"use strict";

// exrecise by just junior

let spin = 0;

let titleString = `is the pandemic finished yes or no`;
let titleStringx = undefined;
let titleStringy = undefined;

let string = "No, sorry";
let stringx = undefined;
let stringy = undefined;

let string2 = "Try again later";

let string3 = "*";

let asteriksx;
let asteriksy;

let state = `title`;

let letsfindout1;
let letsfindout1x;
let letsfindout1y;

let letsfindout2;

let letsfindout2x;
let letsfindout2y;
let letsfindout2Appear = false;

let arrows;

let sablier;

let cursor;

let click;
let muzak;

let noSorrygif;

function preload(){
  letsfindout1 = loadImage(`assets/images/letsfindout1.png`);
  letsfindout2 = loadImage(`assets/images/letsfindout2.png`);

  arrows = loadImage(`assets/images/1arrow.gif`);

  sablier = loadImage(`assets/images/sablier.gif`);

  cursor = loadImage(`assets/images/cursor.png`);

  click = loadSound(`assets/sounds/click.mp3`);

  muzak = loadSound(`assets/sounds/muzak.mp3`);

  noSorrygif = loadImage(`assets/images/nosorry.gif`)
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  noCursor();
}


function draw(){
  background(0);
  backgroundColor();
  // moveBackground();
  // circlesBackground();
  // noSorry();
  // tryAgain();
  // asteriks();
  stateSwitch();
  handCursor();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function stateSwitch(){
  if (state === `title` ) {
    title();
  }
  else if (state === `loading`){
    loading();
  }
  else if (state === `noSorry`){
    noSorry();
  }
}

// create 1 line of circles
function circles(x, y) {
  for (let i = 0; i < 20; i++) {
    ellipseMode(CENTER);
    noStroke();

    fillHsluv(100, 20, 60);
    ellipse(x, y, 100);
    x = x + 150;
  }
}

function backgroundColor(){
  // background rect
  push();
  noStroke();
  fillHsluv(0,20, 90);
  rect(0,0, windowWidth, windowHeight);
  pop();
}

// // create a pattern with lines of circles
function circlesBackground() {
    let x = - 1500;
    let y = - 1000;
    for (let i = 0; i < 20; i++) {
      circles(x, y);
      y = y + 150;
    }
}

// function moveBackground() {
//     spin = spin + .07;
//     translate(width/2, height/2);
//     rotate(radians(spin))
// }

// functions to translate RGB to HSLuv for fill and stroke
function fillHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  fill(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function strokeHsluv(h, s, l) {
  const rgb = hsluv.hsluvToRgb([h, s, l]);
  stroke(rgb[0] * 255, rgb[1] * 255, rgb[2] * 255);
}

function noSorry(){
  push()
  imageMode(CENTER);
  image(noSorrygif, width/2, height/2);
  pop();
}

function tryAgain(){
  push()
  textAlign(CENTER, CENTER);
  textSize(20);
  // textStyle(BOLD);
  fillHsluv(10,90,50);

  text(string2, width/2, stringy + 100);
  pop();
}

function asteriks(){
  push();
  textAlign(CENTER, CENTER);
  textSize(90);
  fillHsluv(10,90,50);
  asteriksx = stringx - 115;
  asteriksy = stringy - 30;
  text(string3, asteriksx, asteriksy);
  pop();
}

function title(){

  // text
  push();
  textAlign(CENTER, CENTER);
  textSize(30);
  // textStyle(BOLD);
  fillHsluv(0,0,0);

  titleStringx = width/2;
  titleStringy = height * .3;

  text(titleString, titleStringx, titleStringy);
  displayButtons();

  pop();

function displayButtons(){
    push();
    imageMode(CENTER);

    letsfindout1x = width/2;
    letsfindout1y = titleStringy + 300;

    image(letsfindout1, letsfindout1x, letsfindout1y);
    image(arrows, width/2, titleStringy + 120);
    pop();
  }
}

function mousePressed(){
  if (mouseX > letsfindout1x - letsfindout1.width / 2 &&
  mouseX < letsfindout1x + letsfindout1.width / 2 &&
  mouseY > letsfindout1y - letsfindout1.height / 2 &&
  mouseY < letsfindout1y + letsfindout1.height / 2) {
    state = `loading`;
    click.play();
    muzak.loop();
}
}

function loading(){
  push();
  imageMode(CENTER);
  image(sablier, width/2, height/2);
  pop();

  setTimeout(function(){ state = 'noSorry'; }, 17900);
}

function handCursor(){
  push();
  imageMode(CENTER);
  image(cursor, mouseX, mouseY);
  pop();
}
