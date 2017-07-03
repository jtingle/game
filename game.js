var canvas;
var canvasContext;
var ballX = 50;

window.onload = function() {
  canvas = document.getElementById('gameCanvas');
  canvasContext = canvas.getContext('2d');
  setInterval(drawEverything, 50);

}

function drawEverything() {
  ballX = ballX + 20;
  console.log("ballX"); //this allows us to see function has run
  canvasContext.fillStyle = 'black';
  canvasContext.fillRect(0,0,canvas.width,canvas.height);
  canvasContext.fillStyle = 'red';
  canvasContext.fillRect(ballX,100,10,10);

}
