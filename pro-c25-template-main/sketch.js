
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;
var paperOBG;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperOBG=new paper(200,450,70)
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);

  function keyPreassed();

  groundObject.display();
  dustbinObj.display();
  paper.display();

}

function keyPreassed() {
 if (keyCode === UP_arrow){

	Matter.body.appleForce(paperObject.body.paperObject.body.position,{x:130,y:-145});

 }
}