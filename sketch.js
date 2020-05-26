const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

//var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var ground,paper,bin1,bin2,bin3;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	ground = new Ground(400,550,800,10);
	 
	 paper = new Paper(100,500,30,30);

	 bin1 = new Bin(600,540,120,10);

	 bin2 = new Bin(535,505,10,80);

	 bin3 = new Bin(665,505,10,80);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  KeyPressed();
  KeyPressed1();

  ground.display();
  
  paper.display();

  bin1.display();
  bin2.display();
  bin3.display();
  
  drawSprites();
 
}

function KeyPressed(){

	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:15,y:-25});

	}
}

function KeyPressed1(){

	if(keyCode === DOWN_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:-15,y:25});

	}
}


