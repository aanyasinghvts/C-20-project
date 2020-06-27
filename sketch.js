var car,wall,speed,weight;

function setup() {
  createCanvas(1600,400);
  
  speed=random(55,90);
  weight=random(400,1500);

  car=createSprite(50,200,20,20);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
  
}

function draw() {
  background(255,255,255);  

  if (car.x - wall.x < car.width/2 + wall.width/2
    && car.x - wall.x < car.width/2 + wall.width/2
    && car.y - wall.y < car.height/2 + wall.height/2
    && car.y - wall.y < car.height/2 + wall.height/2) {
  wall.shapeColor = "red";
  car.shapeColor = "red";
}
else {
  wall.shapeColor = "green";
  car.shapeColor = "green";
}

  drawSprites();
}