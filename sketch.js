var fixedR,movingR;
var rect1,rect2;

function setup() {
  createCanvas(800,400);
  fixedR = createSprite(400,200,40,70);
  fixedR.shapeColor = "green";
  movingR = createSprite(200,100,30,60);
  movingR.shapeColor = "red";
  rect1 = createSprite(100,370,30,40);
  rect1.velocityY = -5;
  rect2 = createSprite(100,30,30,40);
  rect2.velocityY = 5;


}

function draw() {
  background("yellow");  

movingR.x = mouseX;
movingR.y = mouseY;

if(collide(movingR,fixedR)){
  movingR.visible = false;
  fixedR.visible = false;
}else{
  movingR.visible = true;
  fixedR.visible = true;
}

bounceOff(rect1,rect2);


  drawSprites();
}