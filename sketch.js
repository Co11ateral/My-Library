//variables

var obj1, obj2, obj3, obj4;

function setup() {
  createCanvas(800,400);
  obj1 = createSprite(100,100,20,20);
  obj2 = createSprite(700,100,20,20);
  obj3 = createSprite(200,300,20,20);
  obj4 = createSprite(600,300,20,20);

  obj4.velocityX = -5;

}

function draw() {
  background(255,255,255);

  obj1.shapeColor = "green";
  obj2.shapeColor = "green";

  obj1.x = mouseX;
  obj1.y = mouseY;

  if(touch(obj1,obj2)) {
    obj1.shapeColor = "red";
    obj2.shapeColor = "red";
  }
  displace(obj4,obj3);
  drawSprites();
}
