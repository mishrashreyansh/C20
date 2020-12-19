var rect1,rect2;
function setup() {
  createCanvas(800,400);

 rect1 =  createSprite(300, 200, 50, 80);
 rect1.shapeColor = "blue";
rect1.debug = true;

rect2 =  createSprite(700, 200, 80, 30);
rect2.shapeColor = "blue";
rect2.debug = true;
rect2.velocityX = -1;
}

function draw() {
  background("black");
  /*rect2.x = World.mouseX;
  rect2.y = World.mouseY;
*/
/*if(rect2.x-rect1.x<rect2.width/2+rect1.width/2 && rect1.x-rect2.x<rect2.width/2+rect1.width/2
 && rect2.y-rect1.y<rect2.height/2+rect1.height/2 && rect1.y-rect2.y<rect2.height/2+rect1.height/2)
{
rect1.shapeColor = "red";
rect2.shapeColor = "red";
}
else
{rect1.shapeColor = "blue";
rect2.shapeColor = "blue";}
*/
if(rect2.x-rect1.x<rect2.width/2+rect1.width/2 && rect1.x-rect2.x<rect2.width/2+rect1.width/2)
{
rect1.velocityX = rect1.velocityX*(-1);
rect2.velocityX = rect2.velocityX*(-1);
}

if(rect2.y-rect1.y<rect2.height/2+rect1.height/2 && rect1.y-rect2.y<rect2.height/2+rect1.height/2)
{
rect1.velocityY = rect1.velocityY*(-1);
rect2.velocityY = rect2.velocityY*(-1);
}
  drawSprites();
}