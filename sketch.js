
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(800, 800);
	engine = Engine.create();
	world = engine.world;
	
	bob= new Bob(250,700,30,30);
  
}


function draw() {
  background(0);
	Engine.run(engine);

  bob.display();
  
 
}



