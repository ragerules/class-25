const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box1,box2,box3,box4,box5;
var pig1,pig2;
var plank1,plank2,plank3,plank4;
var ground1;
var red;
function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
   box1 = new Box (700,320,50,50);
   box2 = new Box (920,320,50,50);
   ground1 = new Ground(600,390,1200,20);
   pig1 = new Grepigs(810,320);
   plank1 = new PLank(810,180,280,PI/2);
   box3 = new Box (700,150,50,50);
   box4 = new Box (920,150,50,50);
   pig2 = new Grepigs(810,150);
   plank2 = new PLank(810,120,280,PI/2);
   box5 = new Box(810,100,50,50);
   plank3 = new PLank(860,60,150,-PI/7);
   plank4 = new PLank(760,60,150,PI/7);
   red = new Angrybird(300,100);
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground1.display();
    box2.display();
    pig1.display();
    plank1.display();
    box3.display();
    box4.display();
    pig2.display();
    plank2.display();
    box5.display();
    plank3.display();
    plank4.display();
    red.display();
}