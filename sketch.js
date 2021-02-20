const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var player;
var gameState = 0;
var input;
var submit;
var contin;
var playerName;
var wall1;
function preload() {}

function setup() {
  createCanvas(1200,800);
  edges = createEdgeSprites();
  engine = Engine.create();
  world = engine.world;
  input = createInput('Type name here');
  submit = createButton('Enter');
  contin = createButton('Continue');
  player = new Player(200, 200);
  wall1 = new Wall(200, 200, 20, 20);
}

function draw() {
  background('blue');  
  
  if(gameState == 0) {
    contin.hide();
    textSize(20);
    fill('white');
    text('Please Enter Your Name', 460, 200)
    input.position(500, 400);
        submit.position(550, 500);
        submit.mousePressed(()=>{
            input.hide();
            submit.hide();
            playerName = input.value();
            gameState = 1;
        });
  }
  if(gameState ==  1){
    contin.show();
    background('green');
    textSize(20);
    fill('white');
    text('Welcome ' + playerName, 500,200);
    textSize(15);
    text('How to play this game', 500, 300);
    textSize(10);
    text('1) Use the Arrow keys to move', 500, 400);
    text('2) Navigate through the levels without losing all your lives', 500, 430);
    text('3) Have fun! :)', 500, 460);
    contin.position(550, 500);
        contin.mousePressed(()=>{
            contin.hide();
            gameState = 2;
        });
}
  if(gameState == 2) {
    background('red');
   
    wall1.display();
    player.display();
  }
  //drawSprites();
}