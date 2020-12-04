const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var Bob1,Bob2,Bob3,Bob4,Bob5;
var Roof1,Chain1;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  Roof1 = new Roof(400,225,400,30)

	Bob1 = new Bob(400,450,30);
	Bob2 = new Bob(320,450,30);
	Bob3 = new Bob(480,450,30);
	Bob4 = new Bob(240,450,30);
	Bob5 = new Bob(560,450,30);

	rope1 = new Chain(Bob1.body,Roof1.body,0,0)
	rope2 = new Chain(Bob2.body,Roof1.body,-60,0)
	rope3 = new Chain(Bob3.body,Roof1.body,60,0)
	rope4 = new Chain(Bob4.body,Roof1.body,-120,0)
	rope5 = new Chain(Bob5.body,Roof1.body,120,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");
  
  Roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  Bob1.display();
  Bob2.display();
  Bob3.display();
  Bob4.display();
  Bob5.display();

  if(keyDown("UP_ARROW")){
    Drop();
  }

  drawSprites();
 
}

function Drop(){
  Matter.Body.applyForce(Bob4.body, Bob4.body.position, {x:-100,y:0})
}

