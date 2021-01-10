var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);

  fixedRect = createSprite(200,200,40,80);
  fixedRect.shapeColor = "red";
  fixedRect.velocityX = 2;
  movingRect = createSprite(600,200,80,40);
  movingRect.shapeColor = "red";

  movingRect.debug = true;
  fixedRect.debug = true;
}

function draw() {
  background(0,0,0);  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2
    && movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  } else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }

  if(movingRect.x - fixedRect.x < movingRect.width/2 + fixedRect.width/2 && fixedRect.x - movingRect.x < movingRect.width/2 + fixedRect.width/2){
    fixedRect.velocityX = (-1)*fixedRect.velocityX
  }
  if(movingRect.y - fixedRect.y < movingRect.height/2 + fixedRect.height/2 && fixedRect.y - movingRect.y < movingRect.height/2 + fixedRect.height/2){
    fixedRect.velocityY = (-1)*fixedRect.velocityY
  }

  drawSprites();
}