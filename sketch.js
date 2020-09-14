const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions = [];
var particle;

var divisionHeight=300;
var Score = 0;
var Turn = 0;

function setup() {
  canvas =  createCanvas(1200, 1200);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }

    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}

function draw() {
  background("black");

  noStroke();
  fill("white");
  textSize(20)
  text("Score : "+Score,20,30);

  noStroke();
  fill("white");
  textSize(20)
  text("Turn : "+Turn,200,30);

  Engine.update(engine);

  noStroke();
  fill("white");
  textSize(20)
  text("500 ",20,500);

  noStroke();
  fill("white");
  textSize(20)
  text("500 ",100,500);

  noStroke();
  fill("white");
  textSize(20)
  text("500 ",180,500);

  noStroke();
  fill("white");
  textSize(20)
  text("500 ",260,500);

  noStroke();
  fill("white");
  textSize(20)
  text("100 ",340,500);

  noStroke();
  fill("white");
  textSize(20)
  text("100 ",420,500);

  noStroke();
  fill("white");
  textSize(20)
  text("100 ",500,500);

  noStroke();
  fill("white");
  textSize(20)
  text("200 ",580,500);

  noStroke();
  fill("white");
  textSize(20)
  text("200 ",660,500);

  noStroke();
  fill("white");
  textSize(20)
  text("200 ",740,500);
  
   for (var i = 0; i < plinkos.length; i++) {  
     plinkos[i].display();
   }
   
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-50, width/2+30), 10,10));
     Turn++;
   }

   if(frameCount%60===0){
    particles.push(new Particle(random(width/2-100, width/2+30), 10,10));
    Turn++;
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-150, width/2+30), 10,10));
    Turn++;
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-200, width/2+200), 10,10));
    Turn++;
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2+200, width/2+200), 10,10));
    Turn++;
  }

  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }
   
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }

   if(particles.x<200){
     Score = Score+1
   }
}