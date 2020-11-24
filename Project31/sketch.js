const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var particles = []
var plinkos = []
var divisions = []
var divisionHeight = 300
var ground1


function setup() {
  createCanvas(480, 800);
  engine = Engine.create();
  world = engine.world;
  
  ground1= new Ground(width/2, 790, width, 20)

  for (var i = 0; i<=width; i = i+80)
  {
    divisions.push(new division(i, height-divisionHeight/2, 10, divisionHeight))
  }

  for (var i = 40; i<=width; i=i+50){

    plinkos.push(new plinko(i, 75, 10))
  }

  for (var i = 15; i<=width-10; i+=50){
    plinkos.push(new plinko(i, 175, 10))

  }

  for (var i = 40; i<=width; i=i+50){

    plinkos.push(new plinko(i, 275, 10))
  }

  for (var i = 15; i<=width-10; i+=50){
    plinkos.push(new plinko(i, 375, 10))

  }
  



  Engine.run(engine);

  
}

function draw() {
  background(0);
  Engine.update(engine);  

  if (frameCount%60===0){

    particles.push(new particle(random(width/2-10, width/2+10), 10, 10))
  }


  ground1.display();

  for (var i = 0; i<divisions.length; i+=1){
    divisions[i].display();

  }

  for (var i = 0; i<plinkos.length; i+=1){
    plinkos[i].display();

  }

  for (var i = 0; i < particles.length; i+=1){

    particles[i].display();
  }




  drawSprites();
}