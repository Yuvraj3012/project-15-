
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper1, dustbin1;
 

function preload()
{
	
}

function setup() {
	createCanvas(900, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20)

	paper1 = new Paper(100,665,30,30);
	dustbin1 = new Dustbin(660,620,50,50);

	Engine.run(engine);


}


function draw() {
  rectMode(CENTER);
  background(255);
  
  paper1.display();
  dustbin1.display();
  ground.display();
  drawSprites();
 
}


function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
		Matter.Body.applyForce(paper1.body,paper1.body.position,{x:35,y:-35})
	   
   }
   }

