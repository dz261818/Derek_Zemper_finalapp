var scribble;
var gui;

function setup() {
  createCanvas(windowWidth, windowHeight);
  d = select('.div-block-2');
  d.position(0,0);
  scribble = new Scribble();
  gui = new Gui();
  let gui_setup = new dat.GUI();
    
  gui_setup.add(gui,'rectangles', 1, 10).step(1).onChange(update);
  gui_setup.add(gui,'distance',10,75).step(1).onChange(update);
  gui_setup.add(gui,'strokeWeight',1,10).step(1).onChange(update);
  gui_setup.addColor(gui,'background').onChange(update);
  gui_setup.addColor(gui,'shapeColor').onChange(update);
  
  noFill();
}

function draw() {
  background(gui.background);
  
    swing = 10;
    cNum = 5;
  
  for(let i = windowWidth * .25; i <= windowWidth * .75; i+=windowWidth * .25){
    for(let y = windowHeight * .25; y <= windowHeight * .75; y+=windowHeight * .25){
  target(i,y,gui.distance,gui.rectangles);
  }
  }
    print(windowWidth/2 - 100,"mod");
    print(windowWidth/2,"width/2");
    noLoop();
}

function target(xPos,yPos,steps,num){
  for(var i = 0; i <= num; i++){
  stroke(gui.shapeColor);
  strokeWeight(gui.strokeWeight);
  scribble.scribbleRect(xPos,yPos,steps*i,steps*i);
  }
}
  
function Gui() {
  this.rectangles = 4;
  this.distance = 33;
  this.strokeWeight = 3;
  this.background = '#d9ffdb';
  this.shapeColor = '#009e84';
}

function update() {
  redraw();
}

function windowResized(){
    resizeCanvas(windowWidth, windowHeight);
}