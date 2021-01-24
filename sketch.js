
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,paperBall;	
var world;

function preload() {
	dustbinImage=loadImage("sprites/dustbingreen.png")
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	paperBall=new Ball(300,600,70);
	paperBall.scale=0.5;

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 

  groundObject.display();
  dustbinObj.display();
  
  
  imageMode(CENTER);
  image(dustbinImage,1200,520,250,300);
  paperBall.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(paperBall.body,paperBall.body.position,{x:1050,y:-1050});
	}
}

