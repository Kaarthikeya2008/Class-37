var canvas, backgroundImage;
var allPlayer
var gameState = 0;
var playerCount;
var distance=0;

var database;

var form, player, game;


function setup(){
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
if (playerCount===4){
  game.update();
}
else if (playerCount===1){
clear();
game.play();
}
}
