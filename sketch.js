function setup() {
  createCanvas(800,400);
  sr = createSprite(200,200,50,80);
    sr.shapeColor = "blue";
    sr.debug = true;
  mr = createSprite(400,200,80,30);
    mr.shapeColor = "blue";
    mr.debug = true;
}

function draw() {
  background(0);
  mr.x = World.mouseX;
  mr.y = World.mouseY;

  if(mr.x-sr.x < sr.width/2 + mr.width/2 && sr.x-mr.x < sr.width/2 + mr.width/2 
    && mr.y- sr.y < sr.height/2 + mr.height/2 && sr.y- mr.y < sr.height/2 + mr.height/2) 
  {
    mr.shapeColor = "red";
    sr.shapeColor = "purple";
  }

  else {
    mr.shapeColor = "blue";
    sr.shapeColor = "blue";
  }


  //if(mr.x >= 300) {
    //mr.velocityY = -8;
  //}

  //if(mr.x-sr.x < sr.width/2 + mr.width/2) {
    //mr.velocityY = 8;
  //}

  drawSprites();
}