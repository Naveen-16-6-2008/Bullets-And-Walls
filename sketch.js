var wall,thickness;
var bullet,speed, weight;


function setup() {
  createCanvas(1600,400);

  speed = random(55,90);
  weight = random(400,1500);
  thickness = random(22,83);

  car = createSprite(50, 200, 50, 50);
  car.velocityX = speed;
car.shapeColor = color(255);

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);  

  bullet = createSprite(50,200,50,5);
  bullet.velocityX = speed;
  bullet.shapeColor = color(255);


}

function draw() {
  background(0);  

if(wall.x-car.x<(car.width+wall.width)/2){
  car.velocityX = 0;
  var deformation = 0.5 * speed * speed/22509;
  if(deformation>180){
    car.shapeColor = color(255,0,0);
  }
  if(deformation<180 && deformation>100){
    car.shapeColor = color(230,230,0);
  }
  if(deformation<100){
    car.shapeColor = color(0,255,0);
  }
}

if (hasCollided(bullet, wall))
{
bullet. velocityx = 0;
var damage =  0.5 * weight *  speed * speed/(thickness * thickness * thickness);  

if (damage>10)
{
wall. shapeColor = color (255,0,0);
}
If (damage <10)
{

wall. shapeColor = color(0, 255, 0);
}


  drawSprites();
}