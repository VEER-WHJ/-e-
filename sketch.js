const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, player;

function preload()
{
	playerImg = loadImage("pixil-frame-0 (8).png");
}

function setup(){
    var canvas = createCanvas(600, 600);
    engine = Engine.create();
    world = engine.world;
    
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(300,590,600,20,ground_options);
    World.add(world,ground);

 
   player = createSprite(150,100);
	player.addImage(playerImg);
	player.scale = 0.2;
    player.velocityY=player.velocityY+2
    player.scale=2
    Engine.run(engine);
}

function draw(){
    background(0);
   
    rectMode(CENTER);
        
    if(keyDown("W")){
        player.velocityY=10
        player.velocityY=player.velocityY-0.6
    }else if(keyDown("S")){
        player.velocityY=-10
        player.velocityY=player.velocityY+0.6
    }else if(keyDown("D")){
        player.velocityX=-10
        player.velocityx=player.velocityY+0.6
    }else if(keyDown("A")){
        player.velocityx=10
        player.velocityx=player.velocityY-0.6
    }
    rect(ground.position.x,ground.position.y,600,20);
    ellipseMode(RADIUS);

    drawSprites();
    }

function keyPressed() {

	if(keyCode === RIGHT_ARROW){
           player.velocityX=3
	}
    if(keyCode === LEFT_ARROW){
           player.velocityX=-3
	}
}