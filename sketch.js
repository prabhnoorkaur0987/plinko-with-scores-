const  Engine = Matter.Engine;
 const  World = Matter.World;

  const Bodies = Matter.Bodies;
  const  Constraint = Matter.Constraint;
 var engine,world;
var particles=[]
var plinkos = [];
var particle
var divisions=[]


var divisionHeight=300;
var score = 0;
var count = 0

var  gameState="end"


function setup() {
  createCanvas(800, 800);
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
  textSize(20)
 text("score : " + score,20,30);
text("COUNT:"+count,150,30)


 textSize(20)
 text("500",20,520)
 text("500",100,520)
 text("500",180,520)
 text("500",250,520)
 text("100",330,520)
 text("100",410,520)
 text("100",490,520)
 text("200",570,520)
 text("200",650,520)
 text("200",730,520)
  Engine.update(engine);
 
  if(count===5&&gameState=="end"){
    textSize(80)
    fill ("yellow")
    text("GAMEOVER ",200,200)
  }
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
  
if(particle!=null)
{
particle.display()
if(particle.body.position.y>760)
{
  if(particle.body.position.x<300)
  {
score=score+500
  particle =null
 
}
  else if(particle.body.position.x<600 && particle.body.position.x > 301)
  {
   
  score  = score + 100
  particle=null;
  
if(count>=5) gameState="end"
  }
  else if(particle.body.position.x<900 && particle.body.position.x>601)
   {
    score = score + 200
    particle=null
    if(count>=5) gameState="end"
    
  }
}
  }



   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
   for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  
}


  function mousePressed()
{
  if(gameState=="end")
  {
    count++;
     particle=(new Particle(mouseX,10,10,10));
  }
 
}


   
  

   
  
