// gaving name spaceing. Engine it's like universe. World is like earth. Bodies are like living and non-living bodies on the earth.
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
// name of our engine
var engine1;
// name of our world
var world1;
// name for ball and ground
var ball,ground;
var ball2;

function setup() {
  createCanvas(800,400);
engine1 = Engine.create(); // creating engine1 (universe)
world1 = engine1.world; // creating world1 inside engine1 (Earth)
var ground_options = { // ground option is used to give properties to the ground
  isStatic: true
}
ground = Bodies.rectangle(400,390,400,20,ground_options); // creating ground using bodies
World.add(world1,ground); // adding this ground to our world1

var ball_options = {
  restitution: 1
}
ball = Bodies.circle(300,100,20,ball_options);
World.add(world1,ball);

var ball2_options = {
  restitution: 1.5
}
ball2 = Bodies.circle(500,100,40,ball2_options);
World.add(world1,ball2);

}

function draw() {
  background(255,255,255);  
  Engine.update(engine1); // starting engine 
  rectMode(CENTER); // changing x and y of rectangle to center point
  rect(ground.position.x, ground.position.y,400,20); // drawing rectangle for the ground
  circle(ball.position.x,ball.position.y,20);
  circle(ball2.position.x,ball2.position.y,40);
  drawSprites();
}