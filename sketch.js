var snowybgImg;
var snow,snowImg;
var snow2,snow2Img;

function setup() {
  createCanvas(1200,600);
  //createSprite(400, 200, 50, 50);
}

function preload(){

  snowybgImg=loadImage("snow3.jpg");
  snowImg=loadAnimation("snow4.webp");
  snow2Img=loadAnimation("snow5.webp");


}
function draw() {
  
  background(snowybgImg); 

 
  snow= createSprite(200,-90,20,20);
  snow.addAnimation("snow",snowImg);
  snow.scale=0.2;

  snow2= createSprite(600,-90,20,20);
  snow2.addAnimation("snow",snow2Img);
  snow2.scale=0.2;

  
    if (keyDown("space")){
    snow.velocityY=3; 
    snow2.velocityY=3; 
    }
 


  drawSprites();
}