var fixedRect, movingRect;

var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "blue";
  movingRect = createSprite(800,200,80,30);
  movingRect.shapeColor = "orange";
 
  gameObject1 = createSprite(100,100,50,50);
  gameObject1.shapeColor = "red";

  gameObject2 = createSprite(200,100,50,50);
  gameObject2.shapeColor = "red";

  gameObject3 = createSprite(300,100,50,50);
  gameObject3.shapeColor =  "red";

  gameObject4 = createSprite(400,100,50,50);
  gameObject4.shapeColor = "red";

}

function draw() {
  background(0,0,0);  
  fixedRect.x = World.mouseX;
  fixedRect.y = World.mouseY;

 if (isTouching(fixedRect,gameObject4)){
  fixedRect.shapeColor = "blue";
  gameObject4.shapeColor = "blue";
 }
 else {
  fixedRect.shapeColor = "orange";
  gameObject4.shapeColor = "red";
}
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
}
else {
return false;
}
}