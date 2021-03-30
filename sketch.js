var cat , catimg;
var gard;
var mouse , mouseimg , mouseimg2 ; 

function preload() {
    //load the images here
    
     gard = loadImage("images/garden.png")
     catimg = loadImage("images/cat1.png")
     catimg2 = loadAnimation("images/cat2.png","images/cat3.png")
     lastcatimg = loadAnimation("images/cat4.png")
     mouseimg = loadImage("images/mouse1.png")
     mouseimg2 = loadAnimation("images/mouse2.png","images/mouse3.png")
     mouse4 = loadAnimation("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

    cat = createSprite(800,700,50,50)
    cat.addImage(catimg)
    cat.scale = 0.11

    mouse = createSprite(200,700,50,50)
    mouse.addImage(mouseimg)
    mouse.scale = 0.11
    
}

function draw() {

    background(gard);
    //Write condition here to evalute if tom and jerry collide

if(cat.x - mouse.x < (cat.width - mouse.width)/2)
{
    cat.velocityX = 0
    cat.x = 300
    cat.addAnimation("catlast", lastcatimg)
    cat.changeAnimation("catlast")

    mouse.velocityX = 0
    mouse.addAnimation("mousechange", mouse4)
    mouse.changeAnimation("mousechange")
    
    
   
    text(mouseX + ',' + mouseY, 10,45) ;

}

 

    drawSprites();
}
 

function keyPressed(){

  //For moving and changing animation write code here
 if(keyCode === LEFT_ARROW){
  cat.velocityX = -5
  cat.addAnimation("catrunning",catimg2)
  cat.changeAnimation("catrunning")

  mouse.addAnimation("mousemove", mouseimg2)
  mouse.changeAnimation("mousemove")
 }


}
