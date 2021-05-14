// Name Spacing
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// Defining helicopter and package variables
var helicopterIMG, helicopterSprite, packageSprite, packageIMG, packageBody;

// Defining variables to make the box
var box1S, box2S, box3S, box1, box2, box3;

// Defining ground variable
var ground;

// Preload function
function preload() {

// Loading helicopter and package images
	helicopterIMG=loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

// Setup function
function setup() {

// Creating canvas
	createCanvas(800, 700);

// Creating package sprite in order to display package image
	rectMode(CENTER);
	packageSprite = createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

// Creating helicopter sprite in order to display helicopter image
	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

// 	Creating ground sprite in order to give color to the ground
	groundSprite = createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor = color(255)

// Creating the box sprites in order to give it red color
	box1S = createSprite(400, 649, 158, 20);
	box1S.shapeColor = "red";
	box2S = createSprite(310, 609, 20, 100);
	box2S.shapeColor = "red";
	box3S = createSprite(490, 609, 20, 100);
	box3S.shapeColor = "red";

// Creating engine and adding it to the world
	engine = Engine.create();
	world = engine.world;

// Making the package body and adding it to the world
	packageBody = Bodies.circle(width/2, 200, 5, {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

// Making the boxes and adding it to the world
	box1 = Bodies.rectangle(400, 635, 158, 20, {isStatic: true});
	World.add(world, box1);


// Creating a ground body and adding it to the world
	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true});
 	World.add(world, ground);

// Running the engine
	Engine.run(engine);
}

// Draw function
function draw() {

// Making black background
	background(0);
	
// Timepass
	rectMode(CENTER);
	text(mouseX + "," + mouseY, 30, 40);

// Making package body and sprite the same
	packageSprite.x= packageBody.position.x 
	packageSprite.y= packageBody.position.y 





// Drawing sprites
	drawSprites();
}

// Function to move the package downwards on presing down arrow key
function keyPressed() {
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(packageBody, false);
	}
}



