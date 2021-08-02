var garden,rabbit;
var gardenImg,rabbitImg;
var appleImg
var leafImg
var redLeafImg
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
leafImg = loadImage("leaf.png")
redLeafImg = loadImage("redImage.png")

 
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);

  rand = Math.round(random(1,2))

  rabbit.x = World.mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

 if (frameCount%80===0) {
   if (rand===1) {
    createApples();
  }
}
if (frameCount%140===0) {
    if (rand===1) {
      createLeaf();
    }
  }
  if (frameCount%50===0) {
    
  
      if (rand===1) {
        createRedLeaf();
      }
    }
    
   
 



  drawSprites();
}
 function createApples() {
   if (frameCount%80===0) {
   var apple = createSprite(random(50,350),40,10,10);
  apple.addImage(appleImg);
  apple.scale = 0.05
  apple.velocityY = 2
 
}
}

function createLeaf(){
  if(frameCount%140===0){
    var leaf = createSprite(Math.round(random(10, 395)), 50, 15, 15);
    leaf.velocityY = 0.5;
    leaf.scale=0.05;
    leaf.addImage(leafImg);
    
  }
}
function createRedLeaf() {
  if (frameCount%50===0) {
    var redLeaf = createSprite(Math.round(random(30,370)),50,15,15)
    redLeaf.velocityY = 4
    redLeaf.scale = 0.05
redLeaf.addImage(redLeafImg)


  }
}