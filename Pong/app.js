const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

canvas.width = 1500;
canvas.height = 720;
// --------------------------------------------------------------------

let RIScore = new Audio();
let AIScore = new Audio();
let hit = new Audio();
let wall = new Audio();
RIScore.src = './sounds/RIScore.mp3';
AIScore.src = './sounds/AIScore.mp3';
hit.src = './sounds/hit.mp3';
wall.src = './sounds/wall.mp3';

// The RI Player Paddle

const playerPaddleRI = {
  xP: 0,
  yP: canvas.height / 2 - 100 / 2,
  height: 100,
  width: 10,
  color: 'orange',
  score: 0,
};
const playerPaddleAI = {
  xP: canvas.width - 10,
  yP: canvas.height / 2 - 100 / 2,
  height: 100,
  width: 10,
  color: 'orange',
  score: 0,
};

//Creating ball
const ball = {
  xP: canvas.width / 2,
  yP: canvas.height / 2,
  radius: 10,
  speed: 7,
  xV: 5,
  yV: 5,
  color: 'white',
};

//Create the net

const net = {
  xP: canvas.width / 2,
  yP: 0,
  width: 2,
  height: 10,
  color: 'white',
};

//Drawing the canvas

function drawingRect(xP, yP, width, height, color) {
  ctx.fillStyle = color;
  ctx.fillRect(xP, yP, width, height);
}

//Drawing a circle
function drawCircle(xP, yP, radius, color) {
  ctx.fillStyle = color;
  ctx.beginPath();
  ctx.arc(xP, yP, radius, 0, Math.PI * 2);
  ctx.fill();
}

//Create Text
function drawText(content, xP, yP, color) {
  ctx.fillStyle = color;
  ctx.font = '35px sans-serif';
  ctx.fillText(content, xP, yP);
}

//Dranwing the net line
function drawNetLine() {
  for (let i = 0; i < canvas.height; i += 15) {
    console.log(net);
    drawingRect(net.xP, net.yP + i, net.width, net.height, net.color);
  }
}

//runGame

function runGame() {
  //clearing canvas
  drawingRect(0, 0, canvas.width, canvas.height, '#4683a0');
  // draw net
  drawNetLine();
  //draw score
  drawText(
    playerPaddleRI.score,
    (1 * canvas.width) / 4,
    canvas.height / 10,
    'white'
  );
  drawText(
    playerPaddleAI.score,
    (3 * canvas.width) / 4,
    canvas.height / 10,
    'white'
  );
  //drawing paddles
  drawingRect(
    playerPaddleRI.xP,
    playerPaddleRI.yP,
    playerPaddleRI.width,
    playerPaddleRI.height,
    playerPaddleRI.color
  );
  drawingRect(
    playerPaddleAI.xP,
    playerPaddleAI.yP,
    playerPaddleAI.width,
    playerPaddleAI.height,
    playerPaddleAI.color
  );

  //draw Circle
  drawCircle(ball.xP, ball.yP, ball.radius, ball.color);
}

//The playerRI event

canvas.addEventListener('mousemove',movePaddle)
function movePaddle(e){
  let canvasRect = canvas.getBoundingClientRect()
 
  playerPaddleRI.yP = e.clientY - canvasRect.top - playerPaddleRI.height / 2
}

//Collision paddle
function paddle(ball,paddle){

  //detect ball 
  ball.top = ball.yP - ball.radius
  ball.bottom = ball.yP + ball.radius
  ball.left = ball.xP - ball.radius
  ball.right = ball.xP + ball.radius

  paddle.top = paddle.yP
  paddle.bottom = paddle.yP + paddle.height
  paddle.left = paddle.xP
  paddle.right = paddle.xP + paddle.width

  return ball.right > paddle.left && ball.bottom > paddle.top && ball.left < paddle.right && ball.top < paddle.bottom
}


//Manage game

function manageGame(){
  //moving ball
  ball.xP += ball.xV
  ball.yP += ball.yV
  //bounce of top and bottom
  if(ball.yP + ball.radius > canvas.height || ball.yP - ball.radius < 0){
    ball.yV = -ball.yV
    // wall.play()
  }

  let player = ball.xP < canvas.width / 2 ? playerPaddleRI : playerPaddleAI
}

//Initialization game
function gameInit() {
  runGame();
  manageGame()
}

// Looping the game to keep it running

const FPS = 60;
setInterval(gameInit, 1000 / 60);
