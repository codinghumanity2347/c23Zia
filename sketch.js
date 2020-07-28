const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box1;
var box2;

function setup() {
    var canvas = createCanvas(400, 400);
    engine = Engine.create();
    world = engine.world;
    //new which signifies that there is an object to be created.
    //()  indicated that we need initalize our constructor;
    box1 = new Box(200, 20, 50, 100);
    box2 = new Box(190, 203, 20, 20);


    console.log(ground);
}

function draw() {
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
}