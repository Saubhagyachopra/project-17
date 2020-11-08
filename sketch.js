
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var ground
var score


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(600, 400);
  
monkey = createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1
  

ground = createSprite(400,350,90000,10);
ground.velocityX=-4;
ground.x=ground.width/2;
console.log(ground.x)

}


function draw() {
 background(255);
  
  
 if(keyDown("space") && monkey.y >= 159) {
      monkey.velocityY = -15;
    }
  
   spawnbanana();
   spawnObstacles();
  
  
var survivalTime=0 

  
stroke("white");
textSize(20);
fill("white");
text("Score:" + score, 300,50);

stroke("black");
textSize(20);
fill("black");
survivalTime=Math.ceil(frameCount/frameRate())
text("Survival Time: " +survivalTime, 100,50);

  
  
  drawSprites();
}



function spawnbanana() {
  //write code here to spawn the clouds
   if (frameCount % 80 === 0) {
    banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
   
    
    
    }
}

function spawnObstacles(){
 if (frameCount % 300 === 0){
   var obstacle = createSprite(600,320,10,40);
   obstacle.velocityX = -6;
   obstacle.addImage(obstacleImage);
   
   
   obstacle.scale = 0.3/2;
   obstacle.lifetime = 200;
   
  
 }
}





