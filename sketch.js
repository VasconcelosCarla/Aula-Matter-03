const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var leftWall;
var rightWall;
var topWall;
var wall;
var angle = 60;

function setup(){
    createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    var ball_options = {
        restitution: 0.95,
        frictionAir:0.01
    }
    
    ball = Bodies.circle(100, 10, 20, ball_options);
    World.add(world, ball);

    ground = new Ground(200, 390, 400, 20);
    rightWall = new Ground(390, 200, 20, 400);
    leftWall = new Ground(10, 200, 20, 400);
    topWall = new Ground(200, 10, 400, 20)
  

    rectMode(CENTER);
    ellipseMode(RADIUS);

}

function draw(){
    background(60);

    Engine.update(engine);

    fill(0,250,250);
    ellipse(ball.position.x, ball.position.y, 20);
    ground.show();
    rightWall.show();
    leftWall.show();
    topWall.show();
    
}